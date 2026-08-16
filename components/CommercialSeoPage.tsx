import Link from "next/link";
import type { SeoCommercialPage } from "@/lib/seo-pages";
import { BatimentLandingPage } from "./BatimentLandingPage";

const SITE_URL = "https://www.3h36agency.fr";

function getAreaServed(slug: string) {
  if (slug.includes("chambery")) return { "@type": "City", name: "Chambéry" };
  if (slug.includes("aix-les-bains")) return { "@type": "City", name: "Aix-les-Bains" };
  if (slug.includes("albertville")) return { "@type": "City", name: "Albertville" };
  return { "@type": "AdministrativeArea", name: "Savoie" };
}

export function CommercialSeoPage({ page }: { page: SeoCommercialPage }) {
  if (page.slug === "site-internet-batiment-savoie") return <BatimentLandingPage />;

  const canonicalPath = `/${page.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: page.h1, item: `${SITE_URL}${canonicalPath}` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${canonicalPath}#service`,
    name: page.seo.title.replace(/\s*\|.*$/, ""),
    description: page.seo.description,
    url: `${SITE_URL}${canonicalPath}`,
    serviceType: page.eyebrow,
    areaServed: getAreaServed(page.slug),
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: page.audience.map((item) => ({ "@type": "Audience", audienceType: item.title })),
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
    <main id="contenu" className="seo-page">
      <nav className="seo-breadcrumb shell" aria-label="Fil d’Ariane">
        <Link href="/">Accueil</Link>
        <span aria-hidden="true">/</span>
        <Link href="/services">Services</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{page.eyebrow}</span>
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

      <section className="seo-section seo-audience" aria-labelledby={`${page.slug}-audience`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">01 — Pour qui</p>
              <p className="kicker">Un périmètre assumé</p>
            </div>
            <h2 id={`${page.slug}-audience`}>Une réponse dimensionnée pour votre réalité.</h2>
          </div>
          <div className="seo-card-grid seo-card-grid-audience">
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

      <section className="seo-section seo-section-tinted" aria-labelledby={`${page.slug}-problems`}>
        <div className="shell seo-split">
          <div className="seo-sticky-heading">
            <p className="section-index">02 — Le point de départ</p>
            <p className="kicker">Les signaux à ne pas ignorer</p>
            <h2 id={`${page.slug}-problems`}>Ce que le dispositif doit réellement résoudre.</h2>
          </div>
          <div className="seo-lines">
            {page.problems.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section seo-dark" aria-labelledby={`${page.slug}-approach`}>
        <div className="shell">
          <div className="seo-section-heading seo-section-heading-light">
            <div>
              <p className="section-index section-index-light">03 — Notre réponse</p>
              <p className="kicker">Une progression lisible</p>
            </div>
            <h2 id={`${page.slug}-approach`}>Relier stratégie, production et mesure.</h2>
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

      <section className="seo-section" aria-labelledby={`${page.slug}-deliverables`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">04 — Le périmètre</p>
              <p className="kicker">Ce qui peut être construit</p>
            </div>
            <h2 id={`${page.slug}-deliverables`}>Des livrables reliés à un objectif.</h2>
          </div>
          <div className="seo-card-grid">
            {page.deliverables.map((item) => (
              <article className="seo-card seo-deliverable" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <aside className="seo-proof-note">
            <strong>Notre règle de preuve</strong>
            <p>{page.proofNote}</p>
            <Link className="text-link" href="/realisations">Consulter les études de cas <span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </section>

      <section className="seo-section seo-section-tinted" aria-labelledby={`${page.slug}-faq`}>
        <div className="shell seo-split">
          <div className="seo-sticky-heading">
            <p className="section-index">05 — Questions fréquentes</p>
            <p className="kicker">Décider avec les bons repères</p>
            <h2 id={`${page.slug}-faq`}>Des réponses sans promesse artificielle.</h2>
          </div>
          <div className="seo-faq">
            {page.faq.map((item, index) => (
              <details key={item.question}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-related" aria-labelledby={`${page.slug}-related`}>
        <div className="shell">
          <div className="seo-section-heading">
            <div>
              <p className="section-index">06 — À explorer</p>
              <p className="kicker">Les sujets liés</p>
            </div>
            <h2 id={`${page.slug}-related`}>Poursuivre avec la bonne expertise.</h2>
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

      <aside className="contact-band" aria-labelledby={`${page.slug}-cta`}>
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">Un échange utile, sans détour</p>
            <h2 id={`${page.slug}-cta`}>{page.cta.title}</h2>
          </div>
          <div>
            <p>{page.cta.description}</p>
            <Link className="button button-light" href={page.cta.href}>
              {page.cta.label} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </aside>

      {[breadcrumbSchema, serviceSchema, faqSchema].map((schema, index) => (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
        />
      ))}
    </main>
  );
}
