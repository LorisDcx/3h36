import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/", init = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      ...init,
      headers: { accept: "text/html", ...init.headers },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the agency homepage and prioritizes the requested projects", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /visibilité augmentée/i);
  assert.match(html, /01 — Qui sommes-nous \?/i);
  assert.match(html, /Web .* image .* acquisition/i);
  assert.match(html, /class="brand-hour">3h</i);
  assert.match(html, /class="brand-minute">36</i);
  assert.doesNotMatch(html, /brand-spark|Le cadre de travail|Ce qui doit rester clair/i);

  const orderedCaseLinks = [
    "/realisations/plum",
    "/realisations/urgeza",
    "/realisations/aviszen",
    "/realisations/delco-ink",
  ];

  let previousIndex = -1;
  for (const href of orderedCaseLinks) {
    const index = html.indexOf(`href="${href}"`);
    assert.ok(index > previousIndex, `${href} doit apparaître dans l’ordre prioritaire`);
    previousIndex = index;
  }
});

test("renders crawlable desktop and mobile navigation for priority SEO pages", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  const headerHtml = html.match(/<header class="site-header">[\s\S]*?<\/header>/i)?.[0] ?? "";
  assert.ok(headerHtml, "Le header doit etre rendu dans le HTML initial");
  assert.match(headerHtml, /aria-controls="desktop-solutions-navigation"/i);
  assert.match(headerHtml, /aria-controls="desktop-secteurs-navigation"/i);
  assert.match(headerHtml, /aria-controls="desktop-projects-navigation"/i);
  assert.match(headerHtml, /aria-controls="desktop-resources-navigation"/i);
  assert.match(headerHtml, /aria-controls="desktop-agency-navigation"/i);
  assert.match(headerHtml, /id="mobile-navigation-panel"/i);

  for (const href of [
    "/referencement-seo",
    "/geo",
    "/gestion-google-ads",
    "/secteurs/batiment",
    "/secteurs/pme",
    "/agence-web-chambery",
    "/realisations/plum",
    "/ressources/seo-vs-geo-pme",
    "/a-propos",
  ]) {
    assert.ok(headerHtml.includes(`href="${href}"`), `${href} doit rester accessible depuis le header`);
  }

  assert.doesNotMatch(headerHtml, /href="\/observatoire-geo-savoie"/i);
});

const cases = [
  ["plum", "Plum", "https://plum-dun-six.vercel.app/"],
  ["urgeza", "URGEZA", "https://urgeza.com/"],
  ["aviszen", "AvisZen", "https://www.monaviszen.fr/"],
  ["delco-ink", "Delco Ink", "https://www.delco-ink.fr/"],
  ["flowsaver", "FlowSaver", "https://flowsaver.vercel.app/"],
  ["wildeye", "WildEye", "https://wild-eye-theta.vercel.app/"],
  ["cramdesk", "Cramdesk", "https://www.cramdesk.com/"],
  ["loris-lazulis", "Loris Lazulis", "https://loris-lazulis.com/"],
];

for (const [slug, name, website] of cases) {
  test(`renders the ${name} case study with a separate live-site link`, async () => {
    const response = await render(`/realisations/${slug}`);
    assert.equal(response.status, 200);

    const html = await response.text();
    assert.match(html, new RegExp(`<h1>${name}<\\/h1>`, "i"));
    assert.match(html, /Lire l’étude de cas/i);
    assert.match(html, /Voir le site web/i);
    assert.ok(html.includes(`href="${website}"`));
  });
}

test("renders a direct contact journey without self-categorising the project", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = (await response.text()).replace(/<header class="site-header">[\s\S]*?<\/header>/i, "");
  assert.doesNotMatch(html, /contact-promise|Un premier échange.*simple et utile/i);
  assert.match(html, /Parlons de l’essentiel/i);
  assert.match(html, /Pas besoin d’un brief complet/i);
  assert.match(html, /Votre sujet principal/i);
  assert.match(html, /Site web &amp; outils/i);
  assert.match(html, /Votre entreprise ou activité/i);
  assert.match(html, /Envoyer ma demande/i);
  assert.doesNotMatch(html, /Sélectionnez un sujet pour continuer|2 étapes/i);
  assert.doesNotMatch(html, /Site web, acquisition &amp; outils|Photo &amp; vidéo|Identité &amp; contenu/i);
  assert.doesNotMatch(html, /Google Ads<\/span>|Budget indicatif|Accompagnement mensuel/i);
});

test("places the standard contact form near the top of the homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /href="#contact"/i);
  assert.match(html, /id="contact"/i);
  assert.match(html, /Le formulaire est ici, sans détour/i);
  assert.match(html, /06 11 15 75 01/i);
  assert.match(html, /contact@3h36agency\.fr/i);
  assert.match(html, /Envoyer ma demande/i);
});

test("renders the two named team profiles with replaceable photo placeholders", async () => {
  const response = await render("/a-propos");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Deux indépendants réunis en Savoie/i);
  assert.match(html, /Loris/i);
  assert.match(html, /Lilian/i);
  assert.match(html, /Photo à remplacer/i);
  assert.doesNotMatch(html, /Trois indépendants réunis en Savoie/i);
});

test("renders the focused BTP acquisition landing with its diagnostic form", async () => {
  const response = await render("/site-internet-batiment-savoie");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.doesNotMatch(html, /class="site-header"/i);
  assert.match(html, /Un site conçu pour transformer vos recherches locales/i);
  assert.match(html, /À partir de 2 500 € HT/i);
  assert.match(html, /Recevoir mon diagnostic gratuit/i);
  assert.match(html, /id="diagnostic-website"/i);
  assert.match(html, /name="need"/i);
  assert.match(html, /projet client réellement livré/i);
});

test("keeps the launch offer focused and shows the published value of its follow-up", async () => {
  const response = await render("/offre-lancement");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.doesNotMatch(html, /class="site-header"/i);
  assert.match(html, /valeur 297 € HT/i);
  assert.match(html, /Offre de lancement · 3 projets/i);
});

test("does not load Google Analytics before consent", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);

  const html = await response.text();
  const analyticsEnabled = /class="analytics-consent"/i.test(html);

  assert.doesNotMatch(html, /googletagmanager\.com\/gtag/i);
  if (analyticsEnabled) {
    assert.match(html, /Continuer sans mesure/i);
    assert.match(html, /Accepter la mesure/i);
    assert.match(html, /Gérer mes cookies/i);
  } else {
    assert.doesNotMatch(html, /Gérer mes cookies/i);
  }
});

test("rejects an invalid contact payload on the server", async () => {
  const response = await render("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ need: "unknown" }),
  });

  assert.equal(response.status, 400);
  assert.match(await response.text(), /champs obligatoires/i);
});

test("rejects an invalid BTP diagnostic payload on the server", async () => {
  const response = await render("/api/batiment-diagnostic", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ need: "unknown" }),
  });

  assert.equal(response.status, 400);
  assert.match(await response.text(), /champs obligatoires/i);
});

test("accepts a whitelisted BTP diagnostic payload caught by the honeypot", async () => {
  const response = await render("/api/batiment-diagnostic", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "Test Contact",
      company: "Entreprise Test",
      website: "https://example.com",
      email: "contact@example.com",
      phone: "0600000000",
      need: "more-qualified-quotes",
      consent: true,
      contactUrl: "anti-spam",
    }),
  });

  assert.equal(response.status, 200);
});

for (const need of ["project-contact", "web-growth-tools", "photo-video", "identity-content"]) {
  test(`accepts the whitelisted contact category ${need}`, async () => {
    const response = await render("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        need,
        name: "Test Contact",
        company: "Entreprise Test",
        email: "contact@example.com",
        phone: "",
        description: "Une demande suffisamment détaillée pour le test.",
        consent: true,
        contactUrl: "anti-spam",
      }),
    });

    assert.equal(response.status, 200);
  });
}

test("rejects an unknown contact focus on the server", async () => {
  const response = await render("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      need: "project-contact",
      focus: "unknown",
      name: "Test Contact",
      company: "Entreprise Test",
      email: "contact@example.com",
      description: "Une demande suffisamment détaillée pour le test.",
      consent: true,
    }),
  });

  assert.equal(response.status, 400);
});
