import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { projects } from "@/lib/site-data";

type PageProps = { params: Promise<{ slug: string }> };

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const study = caseStudies[project.slug];
  return {
    title: `${project.name} · Étude de cas`,
    description: study.introduction,
    alternates: { canonical: `/realisations/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${study.headline}`,
      description: study.introduction,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const study = caseStudies[project.slug];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
      { "@type": "ListItem", position: 2, name: "Réalisations", item: "/realisations" },
      { "@type": "ListItem", position: 3, name: project.name, item: `/realisations/${project.slug}` },
    ],
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: study.headline,
    description: study.introduction,
    url: `/realisations/${project.slug}`,
    image: project.image,
    sameAs: project.href,
    creator: { "@type": "Organization", name: "3h36 Agency" },
  };

  return (
    <main id="contenu">
      <article>
        <header className={`case-hero project-tone-${project.tone}`}>
          <div className="shell">
            <div className="case-breadcrumb">
              <Link href="/realisations"><span aria-hidden="true">←</span> Toutes les réalisations</Link>
              <span>Étude de cas · {String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="case-hero-grid">
              <div className="case-hero-copy">
                <p className="eyebrow">{project.type} · {project.sector}</p>
                <h1>{project.name}</h1>
                <p className="case-headline">{study.headline}</p>
                <p className="case-introduction">{study.introduction}</p>
                <div className="case-actions">
                  <a className="button" href={project.href} target="_blank" rel="noreferrer">
                    Voir le site web <span aria-hidden="true">↗</span>
                  </a>
                  <a className="button button-secondary" href="#etude">
                    Lire l’étude de cas <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>

              <figure className="case-visual">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  preload
                  unoptimized
                />
                <figcaption>
                  <span>{project.status}</span>
                  <strong>{project.name}</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        <section className="case-facts" aria-label={`Informations clés sur ${project.name}`}>
          <div className="shell case-facts-grid">
            <div><span>Projet</span><strong>{project.type}</strong></div>
            <div><span>Secteur</span><strong>{project.sector}</strong></div>
            <div><span>Pour qui</span><strong>{study.audience}</strong></div>
            <div><span>Statut</span><strong>{project.status}</strong></div>
          </div>
        </section>

        <div id="etude" className="case-study-body">
          <section className="case-narrative" aria-labelledby="case-start-title">
            <div className="shell case-section-grid">
              <div className="case-section-label">
                <p className="section-index">01 — Le point de départ</p>
                <p className="kicker">Comprendre avant de concevoir</p>
              </div>
              <div className="case-section-heading">
                <h2 id="case-start-title">Un besoin concret, un objectif lisible.</h2>
              </div>
              <div className="case-text-block">
                <span>Le contexte</span>
                <p>{study.challenge}</p>
              </div>
              <div className="case-text-block">
                <span>L’objectif</span>
                <p>{project.objective}</p>
              </div>
            </div>
          </section>

          <section className="case-response" aria-labelledby="case-response-title">
            <div className="shell">
              <div className="case-response-heading">
                <div>
                  <p className="section-index section-index-light">02 — La réponse</p>
                  <p className="kicker">Relier le fond et la forme</p>
                </div>
                <div>
                  <h2 id="case-response-title">Une direction, puis les bons outils.</h2>
                  <p>{study.approach}</p>
                </div>
              </div>

              <div className="case-contribution-grid">
                {study.contributions.map((contribution, contributionIndex) => (
                  <article key={contribution.title}>
                    <span>{String(contributionIndex + 1).padStart(2, "0")}</span>
                    <h3>{contribution.title}</h3>
                    <p>{contribution.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-delivery" aria-labelledby="case-delivery-title">
            <div className="shell case-delivery-grid">
              <div>
                <p className="section-index">03 — Le dispositif</p>
                <p className="kicker">Ce qui a été construit</p>
                <h2 id="case-delivery-title">Un ensemble cohérent, prêt à vivre.</h2>
              </div>
              <div className="case-delivery-copy">
                <p>{study.outcome}</p>
                <ul aria-label={`Périmètre du projet ${project.name}`}>
                  {project.levers.map((lever) => <li key={lever}>{lever}</li>)}
                </ul>
                {study.stack ? (
                  <div className="case-stack">
                    <span>Technologies et outils</span>
                    <p>{study.stack.join(" · ")}</p>
                  </div>
                ) : null}
                {study.note ? <p className="case-note"><strong>Cadre actuel.</strong> {study.note}</p> : null}
              </div>
            </div>
          </section>

          <aside className="case-live-band" aria-label={`Accéder au projet ${project.name}`}>
            <div className="shell case-live-band-inner">
              <div>
                <p className="eyebrow">Le projet est en ligne</p>
                <h2>Découvrir {project.name} dans son environnement réel.</h2>
              </div>
              <a className="button button-light" href={project.href} target="_blank" rel="noreferrer">
                Voir le site web <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>

          <nav className="case-next" aria-label="Étude de cas suivante">
            <div className="shell case-next-inner">
              <span>Étude de cas suivante</span>
              <Link href={`/realisations/${nextProject.slug}`}>
                <strong>{nextProject.name}</strong>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }} />
    </main>
  );
}
