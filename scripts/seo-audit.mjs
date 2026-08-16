import { existsSync } from "node:fs";

const workerPath = new URL("../dist/server/index.js", import.meta.url);

if (!existsSync(workerPath)) {
  console.error("Audit SEO impossible : dist/server/index.js est absent. Lancez d'abord `npm run build`.");
  process.exit(1);
}

workerPath.searchParams.set("seo-audit", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerPath.href);

const responseCache = new Map();
const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

async function render(pathname, accept = "text/html") {
  const cacheKey = `${accept}:${pathname}`;
  if (!responseCache.has(cacheKey)) {
    responseCache.set(
      cacheKey,
      worker.fetch(
        new Request(`http://localhost${pathname}`, { headers: { accept } }),
        {
          ASSETS: {
            fetch: async () => new Response("Not found", { status: 404 }),
          },
        },
        {
          waitUntil() {},
          passThroughOnException() {},
        },
      ),
    );
  }

  const response = await responseCache.get(cacheKey);
  return response.clone();
}

function decodeEntities(value) {
  const named = new Map([
    ["amp", "&"],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["nbsp", " "],
    ["quot", '"'],
  ]);

  return value.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);/gi, (entity, body) => {
    if (body.startsWith("#")) {
      const hexadecimal = body[1]?.toLowerCase() === "x";
      const codePoint = Number.parseInt(body.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
      if (Number.isSafeInteger(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff) {
        return String.fromCodePoint(codePoint);
      }
      return entity;
    }

    return named.get(body.toLowerCase()) ?? entity;
  });
}

function findTagEnd(source, from) {
  let quote = null;
  for (let index = from; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (character === quote) quote = null;
    } else if (character === '"' || character === "'") {
      quote = character;
    } else if (character === ">") {
      return index;
    }
  }
  return -1;
}

function parseAttributes(source) {
  const attributes = new Map();
  let index = 0;

  while (index < source.length) {
    while (/\s|\//.test(source[index] ?? "")) index += 1;
    if (index >= source.length) break;

    const nameStart = index;
    while (index < source.length && !/[\s=/>]/.test(source[index])) index += 1;
    const name = source.slice(nameStart, index).toLowerCase();
    if (!name) {
      index += 1;
      continue;
    }

    while (/\s/.test(source[index] ?? "")) index += 1;
    let value = "";
    if (source[index] === "=") {
      index += 1;
      while (/\s/.test(source[index] ?? "")) index += 1;
      const quote = source[index];
      if (quote === '"' || quote === "'") {
        index += 1;
        const valueStart = index;
        while (index < source.length && source[index] !== quote) index += 1;
        value = source.slice(valueStart, index);
        if (source[index] === quote) index += 1;
      } else {
        const valueStart = index;
        while (index < source.length && !/[\s>]/.test(source[index])) index += 1;
        value = source.slice(valueStart, index);
      }
    }

    if (!attributes.has(name)) attributes.set(name, decodeEntities(value));
  }

  return attributes;
}

function scanMarkup(source) {
  const lowerSource = source.toLowerCase();
  const tokens = [];
  let cursor = 0;

  while (cursor < source.length) {
    const start = source.indexOf("<", cursor);
    if (start === -1) break;

    if (source.startsWith("<!--", start)) {
      const commentEnd = source.indexOf("-->", start + 4);
      cursor = commentEnd === -1 ? source.length : commentEnd + 3;
      continue;
    }

    const end = findTagEnd(source, start + 1);
    if (end === -1) break;

    const raw = source.slice(start + 1, end).trim();
    if (!raw || raw.startsWith("!") || raw.startsWith("?")) {
      cursor = end + 1;
      continue;
    }

    const closing = raw.startsWith("/");
    const nameStart = closing ? 1 : 0;
    let nameEnd = nameStart;
    while (nameEnd < raw.length && !/[\s/>]/.test(raw[nameEnd])) nameEnd += 1;
    const name = raw.slice(nameStart, nameEnd).toLowerCase();
    if (!name) {
      cursor = end + 1;
      continue;
    }

    const token = {
      attributes: closing ? new Map() : parseAttributes(raw.slice(nameEnd)),
      closing,
      end: end + 1,
      name,
      start,
    };
    tokens.push(token);

    if (!closing && (name === "script" || name === "style")) {
      const closeStart = lowerSource.indexOf(`</${name}`, end + 1);
      if (closeStart === -1) break;
      const closeEnd = findTagEnd(source, closeStart + name.length + 2);
      if (closeEnd === -1) break;
      tokens.push({ attributes: new Map(), closing: true, end: closeEnd + 1, name, start: closeStart });
      cursor = closeEnd + 1;
      continue;
    }

    cursor = end + 1;
  }

  return tokens;
}

function plainText(fragment) {
  const tokens = scanMarkup(fragment);
  let result = "";
  let cursor = 0;
  for (const token of tokens) {
    if (token.start > cursor) result += fragment.slice(cursor, token.start);
    cursor = token.end;
  }
  result += fragment.slice(cursor);
  return decodeEntities(result).replace(/\s+/g, " ").trim();
}

function elementTexts(source, tokens, elementName) {
  const starts = [];
  const values = [];
  for (const token of tokens) {
    if (token.name !== elementName) continue;
    if (!token.closing) {
      starts.push(token.end);
    } else if (starts.length > 0) {
      const contentStart = starts.pop();
      values.push(plainText(source.slice(contentStart, token.start)));
    }
  }
  return values;
}

function attributeValues(tokens, tagName, attributeName, predicate = () => true) {
  return tokens
    .filter((token) => !token.closing && token.name === tagName && predicate(token.attributes))
    .map((token) => token.attributes.get(attributeName))
    .filter((value) => typeof value === "string" && value.trim());
}

function normalizedText(value) {
  return value.replace(/\s+/g, " ").trim().toLocaleLowerCase("fr");
}

function normalizeUrl(value, base) {
  const url = new URL(value, base);
  url.hash = "";
  if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/+$/, "");
  return url.href;
}

function pathnameForWorker(url) {
  return `${url.pathname}${url.search}`;
}

function extractMetadata(html) {
  const tokens = scanMarkup(html);
  const headStart = tokens.find((token) => token.name === "head" && !token.closing);
  const headEnd = headStart
    ? tokens.find((token) => token.name === "head" && token.closing && token.start >= headStart.end)
    : null;
  const headHtml = headStart && headEnd ? html.slice(headStart.end, headEnd.start) : "";
  const headTokens = scanMarkup(headHtml);
  const titles = elementTexts(headHtml, headTokens, "title").filter(Boolean);
  const headings = elementTexts(html, tokens, "h1").filter(Boolean);
  const descriptions = attributeValues(
    headTokens,
    "meta",
    "content",
    (attributes) => attributes.get("name")?.toLowerCase() === "description",
  );
  const canonicals = attributeValues(headTokens, "link", "href", (attributes) =>
    (attributes.get("rel") ?? "")
      .toLowerCase()
      .split(/\s+/)
      .includes("canonical"),
  );
  const robots = attributeValues(headTokens, "meta", "content", (attributes) => {
    const name = attributes.get("name")?.toLowerCase();
    return name === "robots" || name === "googlebot";
  });
  const hrefs = [...new Set(attributeValues(tokens, "a", "href"))];

  return { canonicals, descriptions, headings, hrefs, robots, titles };
}

function addUniqueValue(index, value, pageUrl) {
  const key = normalizedText(value);
  if (!index.has(key)) index.set(key, []);
  index.get(key).push(pageUrl);
}

function reportDuplicates(label, index) {
  for (const pageUrls of index.values()) {
    if (pageUrls.length > 1) fail(`${label} dupliqué sur : ${pageUrls.join(", ")}`);
  }
}

function isPrimaryHtmlPath(url) {
  const lastSegment = url.pathname.split("/").filter(Boolean).at(-1) ?? "";
  return !lastSegment.includes(".") || lastSegment.toLowerCase().endsWith(".html");
}

function parseRobots(source) {
  const groups = [];
  const sitemaps = [];
  let group = null;

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.split("#", 1)[0].trim();
    if (!line) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();

    if (key === "sitemap") {
      sitemaps.push(value);
      continue;
    }

    if (key === "user-agent") {
      if (!group || group.directives.length > 0) {
        group = { agents: [], directives: [] };
        groups.push(group);
      }
      group.agents.push(value.toLowerCase());
      continue;
    }

    if (group && (key === "allow" || key === "disallow")) {
      group.directives.push({ key, value });
    }
  }

  return { groups, sitemaps };
}

async function main() {
  const sitemapResponse = await render("/sitemap.xml", "application/xml,text/xml;q=0.9,*/*;q=0.8");
  if (sitemapResponse.status !== 200) {
    fail(`/sitemap.xml répond avec le statut ${sitemapResponse.status}`);
  }
  const sitemapXml = await sitemapResponse.text();
  const sitemapTokens = scanMarkup(sitemapXml);
  const sitemapLocations = elementTexts(sitemapXml, sitemapTokens, "loc").filter(Boolean);
  if (sitemapLocations.length === 0) fail("Le sitemap ne contient aucune URL <loc>.");

  const parsedSitemapUrls = [];
  for (const location of sitemapLocations) {
    try {
      parsedSitemapUrls.push(new URL(location));
    } catch {
      fail(`URL invalide dans le sitemap : ${location}`);
    }
  }

  const duplicateSitemapUrls = parsedSitemapUrls
    .map((url) => normalizeUrl(url.href, url.href))
    .filter((url, index, urls) => urls.indexOf(url) !== index);
  if (duplicateSitemapUrls.length > 0) {
    fail(`URL(s) dupliquée(s) dans le sitemap : ${[...new Set(duplicateSitemapUrls)].join(", ")}`);
  }

  const siteOrigins = new Set(parsedSitemapUrls.map((url) => url.origin));
  if (siteOrigins.size > 1) {
    fail(`Le sitemap mélange plusieurs origines : ${[...siteOrigins].join(", ")}`);
  }
  const siteOrigin = parsedSitemapUrls[0]?.origin ?? "https://www.3h36agency.fr";

  const noIndexPaths = [
    "/mentions-legales",
    "/politique-confidentialite",
    "/cookies",
    "/observatoire-geo-savoie",
  ];

  for (const pathname of noIndexPaths) {
    if (parsedSitemapUrls.some((url) => url.pathname === pathname)) {
      fail(`${pathname} ne doit pas figurer dans le sitemap tant qu'elle est noindex.`);
    }

    const response = await render(pathname);
    if (response.status !== 200) {
      fail(`${pathname} doit rester accessible avec un statut 200 (statut ${response.status}).`);
      continue;
    }

    const metadata = extractMetadata(await response.text());
    if (!metadata.robots.some((directive) => /(^|[\s,])noindex([\s,]|$)/i.test(directive))) {
      fail(`${pathname} doit declarer noindex tant que son contenu n'est pas publiable dans l'index.`);
    }
  }

  const titleIndex = new Map();
  const descriptionIndex = new Map();
  const canonicalIndex = new Map();
  const internalLinks = new Map();
  let auditedPages = 0;

  for (const pageUrl of parsedSitemapUrls) {
    let response;
    try {
      response = await render(pathnameForWorker(pageUrl));
    } catch (error) {
      fail(`${pageUrl.href} ne peut pas être rendu : ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }

    if (response.status !== 200) {
      fail(`${pageUrl.href} répond avec le statut ${response.status}`);
      continue;
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().startsWith("text/html")) {
      fail(`${pageUrl.href} n'est pas une page HTML (Content-Type : ${contentType || "absent"})`);
      continue;
    }

    auditedPages += 1;
    const html = await response.text();
    const metadata = extractMetadata(html);

    if (metadata.titles.length !== 1) {
      fail(`${pageUrl.href} doit contenir exactement un <title> (trouvé : ${metadata.titles.length})`);
    } else {
      addUniqueValue(titleIndex, metadata.titles[0], pageUrl.href);
      if ([...metadata.titles[0]].length > 70) {
        warn(`Title long (${[...metadata.titles[0]].length} caractères) : ${pageUrl.href}`);
      }
    }

    if (metadata.descriptions.length !== 1) {
      fail(`${pageUrl.href} doit contenir exactement une meta description (trouvé : ${metadata.descriptions.length})`);
    } else {
      addUniqueValue(descriptionIndex, metadata.descriptions[0], pageUrl.href);
      if ([...metadata.descriptions[0]].length > 170) {
        warn(`Meta description longue (${[...metadata.descriptions[0]].length} caractères) : ${pageUrl.href}`);
      }
    }

    if (metadata.headings.length === 0) {
      fail(`${pageUrl.href} ne contient aucun H1 renseigné.`);
    }

    if (metadata.canonicals.length !== 1) {
      fail(`${pageUrl.href} doit contenir exactement un canonical (trouvé : ${metadata.canonicals.length})`);
    } else {
      try {
        const canonical = normalizeUrl(metadata.canonicals[0], pageUrl.href);
        addUniqueValue(canonicalIndex, canonical, pageUrl.href);
        if (canonical !== normalizeUrl(pageUrl.href, pageUrl.href)) {
          fail(`${pageUrl.href} déclare un canonical différent : ${canonical}`);
        }
      } catch {
        fail(`${pageUrl.href} déclare un canonical invalide : ${metadata.canonicals[0]}`);
      }
    }

    if (metadata.robots.some((directive) => /(^|[\s,])noindex([\s,]|$)/i.test(directive))) {
      fail(`${pageUrl.href} est noindex alors qu'elle figure dans le sitemap.`);
    }

    for (const href of metadata.hrefs) {
      let target;
      try {
        target = new URL(href, pageUrl.href);
      } catch {
        fail(`${pageUrl.href} contient un href invalide : ${href}`);
        continue;
      }

      if (!["http:", "https:"].includes(target.protocol) || target.origin !== siteOrigin) continue;
      target.hash = "";
      if (!isPrimaryHtmlPath(target)) continue;
      const key = `${target.pathname}${target.search}`;
      if (!internalLinks.has(key)) internalLinks.set(key, new Set());
      internalLinks.get(key).add(pageUrl.href);
    }
  }

  reportDuplicates("Title", titleIndex);
  reportDuplicates("Meta description", descriptionIndex);
  reportDuplicates("Canonical", canonicalIndex);

  for (const [pathname, sources] of internalLinks) {
    try {
      const response = await render(pathname);
      if (response.status < 200 || response.status >= 400) {
        fail(`Lien interne cassé vers ${pathname} (statut ${response.status}), trouvé sur : ${[...sources].join(", ")}`);
      }
    } catch (error) {
      fail(
        `Lien interne impossible à rendre vers ${pathname}, trouvé sur ${[...sources].join(", ")} : ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  const robotsResponse = await render("/robots.txt", "text/plain,*/*;q=0.8");
  if (robotsResponse.status !== 200) fail(`/robots.txt répond avec le statut ${robotsResponse.status}`);
  const robotsText = await robotsResponse.text();
  const robots = parseRobots(robotsText);
  const sitemapInRobots = robots.sitemaps.some((value) => {
    try {
      return new URL(value).pathname === "/sitemap.xml";
    } catch {
      return false;
    }
  });
  if (!sitemapInRobots) fail("robots.txt ne référence pas /sitemap.xml avec une URL absolue valide.");

  for (const requiredAgent of ["oai-searchbot", "perplexitybot"]) {
    const groups = robots.groups.filter((group) => group.agents.includes(requiredAgent));
    if (groups.length === 0) {
      fail(`robots.txt ne contient pas de règle dédiée à ${requiredAgent}.`);
      continue;
    }
    const blockedAtRoot = groups.some((group) =>
      group.directives.some((directive) => directive.key === "disallow" && directive.value === "/"),
    );
    if (blockedAtRoot) fail(`robots.txt bloque ${requiredAgent} à la racine.`);
  }

  const feedResponse = await render("/feed.xml", "application/rss+xml,application/xml;q=0.9,*/*;q=0.8");
  if (feedResponse.status !== 200) {
    fail(`/feed.xml repond avec le statut ${feedResponse.status}`);
  } else {
    const feedContentType = feedResponse.headers.get("content-type") ?? "";
    const feedXml = await feedResponse.text();
    if (!feedContentType.toLowerCase().includes("xml") || !/<rss\b/i.test(feedXml)) {
      fail("/feed.xml ne renvoie pas un flux RSS XML valide.");
    }
  }

  if (failures.length > 0) {
    console.error(`\nAudit SEO échoué — ${failures.length} problème(s) détecté(s) :`);
    failures.forEach((message, index) => console.error(`${index + 1}. ${message}`));
    process.exitCode = 1;
    return;
  }

  if (warnings.length > 0) {
    console.warn(`Audit SEO : ${warnings.length} recommandation(s) non bloquante(s) :`);
    warnings.forEach((message, index) => console.warn(`${index + 1}. ${message}`));
  }

  console.log(`Audit SEO réussi — ${auditedPages} pages indexables et ${internalLinks.size} routes internes vérifiées.`);
  console.log("Sitemap, métadonnées, canoniques, indexabilité, liens internes et robots GEO : OK.");
}

await main();
