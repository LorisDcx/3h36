import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CommercialSeoPage } from "@/components/CommercialSeoPage";
import { TeamProfiles } from "@/components/TeamProfiles";
import { pageContentByRoute, type PageRoute } from "@/lib/page-content";
import { seoCommercialPagesBySlug, type SeoCommercialPageSlug } from "@/lib/seo-pages";
import { monthlyPlans, offers, processSteps, projects } from "@/lib/site-data";

type PageProps = { params: Promise<{ slug: string }> };

const entries = Object.entries(pageContentByRoute) as [PageRoute, (typeof pageContentByRoute)[PageRoute]][];
const commercialEntries = Object.values(seoCommercialPagesBySlug);
const SITE_URL = "https://www.3h36agency.fr";

function getPage(slug: string) {
  const route = `/${slug}` as PageRoute;
  return route in pageContentByRoute ? pageContentByRoute[route] : null;
}

function getCommercialPage(slug: string) {
  return slug in seoCommercialPagesBySlug
    ? seoCommercialPagesBySlug[slug as SeoCommercialPageSlug]
    : null;
}

export function generateStaticParams() {
  return [
    ...entries.map(([, page]) => ({ slug: page.slug })),
    ...commercialEntries.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const commercialPage = getCommercialPage(slug);
  if (commercialPage) {
    return {
      title: commercialPage.seo.title.replace(/\s*\|.*$/, ""),
      description: commercialPage.seo.description,
      alternates: { canonical: `/${commercialPage.slug}` },
      openGraph: {
        type: "website",
        url: `/${commercialPage.slug}`,
        title: commercialPage.seo.title,
        description: commercialPage.seo.description,
      },
    };
  }
  const page = getPage(slug);
  if (!page) return {};
  const isIncompleteLegalPage = ["mentions-legales", "politique-confidentialite", "cookies"].includes(slug);
  return {
    title: page.seo.title.replace(" | 3h36 Agency", ""),
    description: page.seo.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.seo.title, description: page.seo.description },
    robots: isIncompleteLegalPage ? { index: false, follow: true } : undefined,
  };
}

const displayedPrices: Partial<Record<string, string>> = {
  "site-vitrine": "À partir de 1 200 € HT",
  "site-acquisition": "À partir de 2 500 € HT",
  "solutions-metiers": "Sur devis",
};

const visibilityServices = [
  {
    href: "/referencement-seo",
    label: "Référencement SEO",
    description: "Construire une visibilité durable en Savoie autour de recherches réellement liées à vos offres.",
  },
  {
    href: "/geo",
    label: "Visibilité GEO",
    description: "Rendre votre entreprise compréhensible, vérifiable et citable dans les moteurs de réponse IA.",
  },
  {
    href: "/gestion-google-ads",
    label: "Gestion Google Ads",
    description: "Capter une demande active avec des campagnes pilotées par les contacts utiles, pas seulement les clics.",
  },
  {
    href: "/identite-visuelle-chambery",
    label: "Identité visuelle",
    description: "Donner à une entreprise une image professionnelle, distinctive et cohérente sur tous ses supports.",
  },
  {
    href: "/photo-video-entreprise-savoie",
    label: "Photo & vidéo",
    description: "Produire les images qui rendent un métier, une équipe, un chantier ou un produit immédiatement crédibles.",
  },
  {
    href: "/secteurs",
    label: "Solutions par secteur",
    description: "Découvrir les parcours conçus pour le bâtiment, les PME, les startups et les indépendants experts.",
  },
] as const;

function ServicesOverview() {
  return (
    <>
      <div className="problem-grid" aria-label="Vue d’ensemble des offres web">
        {offers.map((offer, index) => (
          <article className="problem-card" key={offer.id}>
            <span className="card-number">0{index + 1} · {offer.price}</span>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <Link className="text-link" href={`/${offer.id}`}>Voir le détail <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
        <article className="problem-card">
          <span className="card-number">Suivi</span>
          <h3>Accompagnement mensuel</h3>
          <p>Maintenance, contenus et pilotage de la présence numérique après la mise en ligne.</p>
          <Link className="text-link" href="/accompagnement">Voir les formules <span aria-hidden="true">↗</span></Link>
        </article>
      </div>
      <section className="services-discovery" aria-labelledby="services-discovery-title">
        <div className="seo-section-heading">
          <div>
            <p className="section-index">Visibilité & création</p>
            <p className="kicker">Les expertises complémentaires</p>
          </div>
          <h2 id="services-discovery-title">Activer le bon levier au bon moment.</h2>
        </div>
        <div className="seo-related-grid">
          {visibilityServices.map((service) => (
            <Link href={service.href} key={service.href}>
              <span>{service.label}</span>
              <p>{service.description}</p>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function ComparisonTable() {
  const rows = [
    ["Design responsive", "Oui", "Oui", "Selon projet"],
    ["SEO technique", "Base", "Avancé", "Selon projet"],
    ["Tracking", "Base", "Complet", "Sur mesure"],
    ["Landing pages", "Option", "Inclus", "Selon projet"],
    ["Automatisation", "Non", "Option", "Oui"],
    ["Formation", "Oui", "Oui", "Oui"],
    ["Accompagnement", "Option", "30 jours", "Contrat dédié"],
    ["Prix", "Dès 1 200 €", "Dès 2 500 €", "Sur devis"],
  ];
  return (
    <div className="comparison-wrap">
      <table className="comparison-table">
        <caption className="sr-only">Comparaison des trois offres 3h36 Agency</caption>
        <thead><tr><th>Fonctionnalité</th><th>Site vitrine</th><th>Site acquisition</th><th>Solutions métiers</th></tr></thead>
        <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function RouteSpecificContent({ slug }: { slug: string }) {
  if (slug === "services") return <ComparisonTable />;
  if (slug === "methode") {
    return (
      <ol className="process-grid" aria-label="Les quatre étapes du projet">
        {processSteps.map((step) => <li className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3></li>)}
      </ol>
    );
  }
  if (slug === "accompagnement") {
    return (
      <div className="plan-lines" aria-label="Tarifs des accompagnements publiés">
        {monthlyPlans.filter((plan) => plan.published).map((plan) => <div className="plan-line" key={plan.id}><strong>{plan.name}</strong><span>{plan.price}</span></div>)}
      </div>
    );
  }
  if (slug === "realisations") {
    return (
      <div className="project-meta" aria-label="Statut des projets">
        {projects.map((project) => <span key={project.name}>{project.name} · {project.status}</span>)}
      </div>
    );
  }
  if (slug === "a-propos") return <TeamProfiles />;
  return null;
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const commercialPage = getCommercialPage(slug);
  if (commercialPage) return <CommercialSeoPage page={commercialPage} />;

  const page = getPage(slug);
  if (!page) notFound();

  const isLegal = ["mentions-legales", "politique-confidentialite", "cookies"].includes(slug);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_URL}/${slug}` },
    ],
  };

  return (
    <main id="contenu">
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="page-hero-lead">{page.description}</p>
          {displayedPrices[slug] ? <strong className="page-price">{displayedPrices[slug]}</strong> : null}
          {page.cta ? <div><Link className="button" href={page.cta.href}>{page.cta.label} <span aria-hidden="true">↗</span></Link></div> : null}
        </div>
      </section>

      <section className="page-content">
        <div className="shell">
          {slug === "services" ? <ServicesOverview /> : null}
          <div className="page-layout" style={slug === "services" ? { marginTop: "90px" } : undefined}>
            <aside className="page-aside">
              <p className="kicker">En pratique</p>
              <p>Un projet clair commence par un échange sur votre activité, vos priorités, votre budget et votre échéance.</p>
              <Link className="button" href="/contact">Obtenir une estimation</Link>
            </aside>
            <div className="page-sections">
              {isLegal ? <p className="legal-note">Ces contenus constituent une base de travail. Les informations entre crochets doivent être complétées et les textes juridiques validés par un professionnel compétent avant publication commerciale.</p> : null}
              {page.sections.map((section, index) => (
                <section className="content-section" key={section.heading} aria-labelledby={`${slug}-section-${index}`}>
                  <p className="card-kicker">{String(index + 1).padStart(2, "0")}</p>
                  <h2 id={`${slug}-section-${index}`}>{section.heading}</h2>
                  <p>{section.body}</p>
                  {section.bullets ? <ul className="feature-list">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                  {index === 1 ? <RouteSpecificContent slug={slug} /> : null}
                </section>
              ))}
            </div>
          </div>

          {!isLegal && page.cta ? (
            <aside className="internal-cta">
              <div><h2>Votre besoin mérite un cadre clair.</h2><p>Un premier échange permet de vérifier la bonne offre, le périmètre et les prochaines étapes.</p></div>
              <Link className="button button-light" href={page.cta.href}>{page.cta.label} <span aria-hidden="true">↗</span></Link>
            </aside>
          ) : null}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
