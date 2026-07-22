import { seoArticles } from "@/lib/seo-articles";

const SITE_URL = "https://www.3h36agency.fr";

function xml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = seoArticles
    .map((article) => {
      const url = `${SITE_URL}/ressources/${article.slug}`;
      return `
        <item>
          <title>${xml(article.title)}</title>
          <link>${url}</link>
          <guid isPermaLink="true">${url}</guid>
          <description>${xml(article.description)}</description>
          <category>${xml(article.category)}</category>
          <pubDate>${new Date(`${article.publishedAt}T08:00:00+02:00`).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Ressources 3h36 Agency</title>
        <link>${SITE_URL}/ressources</link>
        <description>Guides sur les sites web, le SEO, le GEO, Google Ads et la visibilité des entreprises en Savoie.</description>
        <language>fr-FR</language>
        <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
        ${items}
      </channel>
    </rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
