import type { Metadata } from "next";
import Link from "next/link";
import type { SeoSectorPage, SeoSectorPagePath } from "@/lib/seo-sector-pages";

const SITE_URL = "https://www.3h36agency.fr";
const SOCIAL_IMAGE = `${SITE_URL}/og-seo-geo-v1.jpg`;

const breadcrumbLabels: Record<SeoSectorPagePath, string> = {
  secteurs: "Secteurs",
  "secteurs/batiment": "Bâtiment",
  "secteurs/batiment/seo-local": "SEO local",
  "secteurs/batiment/google-ads": "Google Ads",
  "secteurs/batiment/photo-video": "Photo et vidéo",
  "secteurs/pme": "PME",
  "secteurs/startups": "Startups",
  "secteurs/independants": "Indépendants",
};

type BreadcrumbItem = Readonly<{
  href: string;
  label: string;
}>;

function getBreadcrumbs(path: SeoSectorPagePath): BreadcrumbItem[] {
  const segments = path.split("/");

  return segments.map((_, index) => {
    const pathAtLevel = segments.slice(0, index + 1).join("/") as SeoSectorPagePath;
    return {
      href: `/${pathAtLevel}`,
      label: breadcrumbLabels[pathAtLevel],
    };
  });
}

export function createSectorMetadata(page: SeoSectorPage): Metadata {
  const canonicalPath = `/${page.path}`;
  const title = page.seo.title.replace(/\s*\|.*$/, "");

  return {
    title,
    description: page.seo.description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: canonicalPath,
      title: page.seo.title,
      description: page.seo.description,
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} — 3h36 Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: [SOCIAL_IMAGE],
    },
  };
}

export function SectorSeoPage({ page }: { page: SeoSectorPage }) {
  const sectionId = page.path.replaceAll("/", "-");
  const canonicalPath = `/${page.path}`;
  const breadcrumbs = getBreadcrumbs(page.path);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      ...breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };
  const primarySchema = page.path === "secteurs"
    ? {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}${canonicalPath}#collection`,
        name: page.seo.title.replace(/\s*\|.*$/, ""),
        description: page.seo.description,
        url: `${SITE_URL}${canonicalPath}`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: page.relatedRoutes.map((route, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: route.label,
            url: `${SITE_URL}${route.href}`,
          })),
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}${canonicalPath}#service`,
        name: page.seo.title.replace(/\s*\|.*$/, ""),
        description: page.seo.description,
        url: `${SITE_URL}${canonicalPath}`,
        serviceType: page.eyebrow,
        areaServed: { "@type": "AdministrativeArea", name: "Savoie" },
        provider: { "@id": `${SITE_URL}/#organization` },
        audience: page.audience.map((item) => ({
          "@type": "Audience",
          audienceType: item.title,
          description: item.description,
        })),
      };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="contenu" className="seo-page sector-page">
      <nav className="seo-breadcrumb shell" aria-label="Fil d’Ariane">
        <Link href="/">Accueil</Link>
        {breadcrumbs.map((item, index) => {
          const isCurrent = index === breadcrumbs.length - 1;
          return (
            <span className="sector-breadcrumb-item" key={item.href}>
              <span aria-hidden="true">/</span>
              {isCurrent ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </span>
          );
        })}
      </nav>

      <header className="seo-hero">
        <div className="shell seo-hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
          </div>
          <div className="seo-hero-aside">
            <p>{page.lead}</p>
            <div className="cta-row">
              <Link className="button" href={page.cta.href}>
                {page.cta.label} <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/realisations">
                Voir les réalisations
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="seo-section" aria-labelledby={`${sectionId}-audience`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">01 — Pour qui</p>
              <p className="kicker">Un contexte bien délimité</p>
            </div>
            <h2 id={`${sectionId}-audience`}>Un dispositif pensé pour des situations concrètes.</h2>
          </div>
          <div className="seo-card-grid">
            {page.audience.map((item, index) => (
              <article className="seo-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section seo-section-tinted" aria-labelledby={`${sectionId}-realities`}>
        <div className="shell seo-split">
          <div className="seo-sticky-heading">
            <p className="section-index">02 — Les réalités du marché</p>
            <p className="kicker">Comprendre avant d’activer</p>
            <h2 id={`${sectionId}-realities`}>Ce qui influence vraiment la décision.</h2>
          </div>
          <div className="seo-lines">
            {page.realities.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section" aria-labelledby={`${sectionId}-problems`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">03 — Le point de départ</p>
              <p className="kicker">Les frictions à traiter</p>
            </div>
            <h2 id={`${sectionId}-problems`}>Ce qu’il faut résoudre avant d’accélérer.</h2>
          </div>
          <div className="seo-card-grid">
            {page.problems.map((item, index) => (
              <article className="seo-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section seo-dark" aria-labelledby={`${sectionId}-approach`}>
        <div className="shell">
          <div className="seo-section-heading seo-section-heading-light">
            <div>
              <p className="section-index section-index-light">04 — La méthode</p>
              <p className="kicker">Un ordre de travail lisible</p>
            </div>
            <h2 id={`${sectionId}-approach`}>Construire les fondations, puis activer les bons leviers.</h2>
          </div>
          <ol className="seo-steps">
            {page.approach.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="seo-section" aria-labelledby={`${sectionId}-deliverables`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">05 — Le périmètre</p>
              <p className="kicker">Des actifs qui travaillent ensemble</p>
            </div>
            <h2 id={`${sectionId}-deliverables`}>Des livrables reliés à une décision commerciale.</h2>
          </div>
          <div className="seo-card-grid">
            {page.deliverables.map((item) => (
              <article className="seo-card seo-deliverable" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section seo-section-tinted" aria-labelledby={`${sectionId}-qualification`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">06 — Avant de démarrer</p>
              <p className="kicker">Les conditions utiles</p>
            </div>
            <h2 id={`${sectionId}-qualification`}>Les repères qui rendent l’investissement pertinent.</h2>
          </div>
          <div className="sector-qualification-grid">
            {page.qualificationCriteria.map((item, index) => (
              <article className="sector-qualification-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section" aria-labelledby={`${sectionId}-faq`}>
        <div className="shell seo-split">
          <div className="seo-sticky-heading">
            <p className="section-index">07 — Questions fréquentes</p>
            <p className="kicker">Décider avec de bons repères</p>
            <h2 id={`${sectionId}-faq`}>Des réponses précises, sans promesse artificielle.</h2>
          </div>
          <div className="seo-faq">
            {page.faq.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                  <i aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-related" aria-labelledby={`${sectionId}-related`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">08 — À explorer</p>
              <p className="kicker">Les expertises reliées</p>
            </div>
            <h2 id={`${sectionId}-related`}>Poursuivre avec le bon sujet.</h2>
          </div>
          <div className="seo-related-grid">
            {page.relatedRoutes.map((route) => (
              <Link href={route.href} key={route.href}>
                <span>{route.label}</span>
                <p>{route.description}</p>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <aside className="contact-band" aria-labelledby={`${sectionId}-cta`}>
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">Un échange utile, sans détour</p>
            <h2 id={`${sectionId}-cta`}>{page.cta.title}</h2>
          </div>
          <div>
            <p>{page.cta.description}</p>
            <Link className="button button-light" href={page.cta.href}>
              {page.cta.label} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </aside>

      {[breadcrumbSchema, primarySchema, faqSchema].map((schema, index) => (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
        />
      ))}
    </main>
  );
}
