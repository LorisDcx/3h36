import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez huit projets web conçus pour des activités locales, des marques et des produits numériques : contexte, objectif, solution et périmètre d’intervention.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations — 3h36 Agency",
    description:
      "Huit projets réels, du site local au produit SaaS, présentés sans résultat ni promesse inventés.",
  },
};

const projectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Réalisations de 3h36 Agency",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: project.href,
    name: project.name,
    description: project.solution,
  })),
};

export default function RealisationsPage() {
  return (
    <main id="contenu">
      <section className="page-hero" aria-labelledby="realisations-title">
        <div className="shell">
          <p className="eyebrow">Réalisations · sites et produits en ligne</p>
          <h1 id="realisations-title">Huit projets, huit problèmes concrets.</h1>
          <p className="page-hero-lead">
            Activité locale, marque ou produit numérique : chaque projet part d’un
            contexte précis. Nous présentons ici l’objectif, la réponse apportée et
            le périmètre visible, sans attribuer de résultat qui ne serait pas mesuré.
          </p>
          <div className="cta-row">
            <a className="button" href="#projets">
              Explorer les projets <span aria-hidden="true">↓</span>
            </a>
            <Link className="button button-secondary" href="/contact">
              Parler de votre projet <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="agency-section projects-section"
        id="projets"
        aria-labelledby="portfolio-title"
      >
        <div className="shell">
          <div className="split-heading">
            <div>
              <p className="section-index">01 — Portfolio</p>
              <p className="kicker">Des cas réels, des rôles explicités</p>
              <h2 id="portfolio-title">Du studio local à l’outil métier.</h2>
            </div>
            <p>
              Les aperçus ouvrent les sites actuellement en ligne. Le détail distingue
              volontairement le besoin initial, l’objectif et la solution proposée.
            </p>
          </div>

          <div className="real-project-grid">
            {projects.map((project, index) => {
              const isWide = index === 0 || index === 5;

              return (
                <article
                  className={`real-project project-tone-${project.tone}${
                    isWide ? " real-project-wide" : ""
                  }`}
                  key={project.name}
                >
                  <a
                    className="real-project-visual"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visiter le site ${project.name} (nouvel onglet)`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes={isWide ? "(max-width: 620px) 100vw, 88vw" : "(max-width: 620px) 100vw, 44vw"}
                      preload={index === 0}
                      unoptimized
                    />
                    <span aria-hidden="true">↗</span>
                  </a>

                  <div className="real-project-copy">
                    <div>
                      <span>{project.type}</span>
                      <span>{project.sector}</span>
                      <span>{project.status}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>
                      <strong>Contexte.</strong> {project.context}
                    </p>
                    <p>
                      <strong>Objectif.</strong> {project.objective}
                    </p>
                    <p>
                      <strong>Solution.</strong> {project.solution}
                    </p>
                    <ul aria-label={`Périmètre du projet ${project.name}`}>
                      {project.levers.map((lever) => (
                        <li key={lever}>{lever}</li>
                      ))}
                    </ul>
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir {project.name} en ligne <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-band" aria-labelledby="portfolio-contact-title">
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">Votre projet peut être le prochain</p>
            <h2 id="portfolio-contact-title">Partons du besoin, pas d’une recette.</h2>
          </div>
          <div>
            <p>
              Expliquez-nous votre activité, ce qui doit changer et l’échéance visée.
              Le premier échange sert à clarifier le bon périmètre.
            </p>
            <Link className="button button-light" href="/contact">
              Parler de votre projet <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
    </main>
  );
}
