import type { Metadata } from "next";
import Link from "next/link";
import { seoArticles } from "@/lib/seo-articles";

const SITE_URL = "https://www.3h36agency.fr";
const SOCIAL_IMAGE = `${SITE_URL}/og-seo-geo-v1.jpg`;

export const metadata: Metadata = {
  title: "Ressources web, SEO, GEO et acquisition",
  description:
    "Guides pratiques pour les PME, entreprises du bâtiment, startups et indépendants : site internet, SEO local, GEO, Google Ads et identité de marque.",
  alternates: { canonical: "/ressources" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/ressources`,
    title: "Ressources web, SEO, GEO et acquisition — 3h36 Agency",
    description:
      "Des guides sourcés pour prendre de meilleures décisions sur votre site, votre visibilité et votre acquisition.",
    images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: "Ressources de 3h36 Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ressources web, SEO, GEO et acquisition — 3h36 Agency",
    description:
      "Des guides sourcés pour prendre de meilleures décisions sur votre site, votre visibilité et votre acquisition.",
    images: [SOCIAL_IMAGE],
  },
};

const categoryDescriptions = [
  {
    title: "Sites & conversion",
    copy: "Structurer une offre, une preuve et un parcours qui transforment les visites en demandes utiles.",
  },
  {
    title: "SEO & visibilité locale",
    copy: "Construire une présence durable sur les recherches qui comptent réellement dans votre zone.",
  },
  {
    title: "GEO & moteurs d’IA",
    copy: "Rendre une entreprise compréhensible, vérifiable et citable par les assistants et moteurs génératifs.",
  },
  {
    title: "Acquisition & pilotage",
    copy: "Arbitrer les canaux avec les bons indicateurs, de la première visite au client signé.",
  },
] as const;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ressources de 3h36 Agency",
  numberOfItems: seoArticles.length,
  itemListElement: seoArticles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: article.title,
    url: `${SITE_URL}/ressources/${article.slug}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ressources", item: `${SITE_URL}/ressources` },
  ],
};

export default function ResourcesPage() {
  const [featuredArticle, ...articles] = seoArticles;

  return (
    <main id="contenu" className="resource-hub">
      <section className="resource-hub-hero" aria-labelledby="resources-title">
        <div className="shell">
          <nav className="seo-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Ressources</span>
          </nav>

          <div className="resource-hub-hero-grid">
            <div>
              <p className="eyebrow">Guides · méthodes · décisions</p>
              <h1 id="resources-title">Comprendre avant d’investir.</h1>
            </div>
            <div className="resource-hub-intro">
              <p>
                Des ressources conçues pour les PME, entreprises du bâtiment, startups et
                indépendants qui veulent un site plus utile, une visibilité mesurable et une
                image crédible.
              </p>
              <p>
                Chaque guide distingue les faits, les arbitrages et les limites. Pas de recette
                miracle : des repères concrets, des sources et un prochain pas clair.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-featured" aria-labelledby="featured-resource-title">
        <div className="shell resource-featured-grid">
          <div className="resource-featured-index" aria-hidden="true">01</div>
          <article>
            <div className="resource-card-meta">
              <span>{featuredArticle.category}</span>
              <span>{featuredArticle.readingTime} de lecture</span>
              <time dateTime={featuredArticle.updatedAt}>{formatDate(featuredArticle.updatedAt)}</time>
            </div>
            <p className="kicker">À lire en premier</p>
            <h2 id="featured-resource-title">
              <Link href={`/ressources/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
            </h2>
            <p>{featuredArticle.description}</p>
            <Link className="text-link" href={`/ressources/${featuredArticle.slug}`}>
              Lire le guide <span aria-hidden="true">→</span>
            </Link>
          </article>
          <div className="resource-featured-note">
            <strong>Pourquoi ce guide ?</strong>
            <p>
              Parce que le premier choix n’est pas un canal. C’est un objectif commercial,
              un délai et une manière fiable de mesurer la qualité des demandes.
            </p>
          </div>
        </div>
      </section>

      <section className="resource-topics" aria-labelledby="resource-topics-title">
        <div className="shell">
          <div className="resource-section-heading">
            <div>
              <p className="section-index">02 — Les sujets</p>
              <p className="kicker">Un système, pas des actions isolées</p>
            </div>
            <h2 id="resource-topics-title">Du positionnement à la demande qualifiée.</h2>
          </div>
          <div className="resource-topic-grid">
            {categoryDescriptions.map((category, index) => (
              <article key={category.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{category.title}</h3>
                <p>{category.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resource-library" aria-labelledby="resource-library-title">
        <div className="shell">
          <div className="resource-section-heading">
            <div>
              <p className="section-index">03 — La bibliothèque</p>
              <p className="kicker">Des guides à garder sous la main</p>
            </div>
            <h2 id="resource-library-title">Choisissez votre prochain problème à résoudre.</h2>
          </div>

          <div className="resource-library-grid">
            {articles.map((article, index) => (
              <article className="resource-card" key={article.slug}>
                <div className="resource-card-number" aria-hidden="true">
                  {String(index + 2).padStart(2, "0")}
                </div>
                <div className="resource-card-meta">
                  <span>{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h3>
                  <Link href={`/ressources/${article.slug}`}>{article.title}</Link>
                </h3>
                <p>{article.description}</p>
                <div className="resource-card-footer">
                  <time dateTime={article.updatedAt}>Mis à jour le {formatDate(article.updatedAt)}</time>
                  <Link href={`/ressources/${article.slug}`} aria-label={`Lire : ${article.title}`}>
                    <span>Lire le guide</span><i aria-hidden="true">→</i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band" aria-labelledby="resources-contact-title">
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">Votre situation reste unique</p>
            <h2 id="resources-contact-title">Passons du guide au bon plan d’action.</h2>
          </div>
          <div>
            <p>
              Expliquez-nous votre activité, votre zone et ce qui doit changer. Le premier
              échange sert à identifier le levier le plus utile, pas à empiler les prestations.
            </p>
            <Link className="button button-light" href="/contact">
              Parler de votre projet <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
