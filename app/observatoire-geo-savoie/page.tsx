import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.3h36agency.fr";
const PAGE_URL = `${SITE_URL}/observatoire-geo-savoie`;

export const metadata: Metadata = {
  title: "Observatoire GEO Savoie : protocole 2026",
  description:
    "Le protocole ouvert de 3h36 pour mesurer comment les moteurs IA citent et recommandent les entreprises de Savoie, sans classement artificiel.",
  alternates: { canonical: "/observatoire-geo-savoie" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "article",
    url: "/observatoire-geo-savoie",
    title: "Observatoire GEO Savoie — protocole ouvert 2026",
    description:
      "Une méthode documentée pour suivre mentions, citations et exactitude des réponses IA concernant les entreprises savoyardes.",
  },
};

const dimensions = [
  {
    title: "Présence",
    description: "La marque est-elle mentionnée lorsqu’une question correspond réellement à son activité, sa zone et son niveau d’expertise ?",
  },
  {
    title: "Citation",
    description: "Une source liée à l’entreprise est-elle fournie pour permettre à l’utilisateur de vérifier l’information ?",
  },
  {
    title: "Exactitude",
    description: "Les services, la localisation, les preuves et les limites sont-ils décrits sans confusion avec une autre structure ?",
  },
  {
    title: "Stabilité",
    description: "Le signal se répète-t-il sur plusieurs dates et formulations, ou dépend-il d’une réponse isolée impossible à reproduire ?",
  },
] as const;

const protocol = [
  {
    title: "Définir un corpus vérifiable",
    description:
      "L’échantillon est composé d’entreprises disposant d’une présence publique identifiable. Les secteurs, zones et critères d’inclusion sont publiés avant l’analyse ; aucune entreprise ne peut acheter sa place.",
  },
  {
    title: "Écrire des questions proches d’une vraie décision",
    description:
      "Les requêtes combinent un besoin, un contexte et une zone : par exemple trouver un prestataire BTP, comparer une agence web ou identifier une expertise locale. Les formulations purement promotionnelles sont exclues.",
  },
  {
    title: "Répéter les observations",
    description:
      "Une réponse générative peut varier. Chaque famille de questions est donc testée à plusieurs moments, sans historique conversationnel, avec la date, le moteur et les réglages disponibles consignés.",
  },
  {
    title: "Vérifier chaque affirmation",
    description:
      "Une mention n’est pas considérée comme positive si elle repose sur une information fausse ou impossible à attribuer. Les citations sont ouvertes, les pages sources contrôlées et les ambiguïtés signalées.",
  },
  {
    title: "Publier les limites avec les résultats",
    description:
      "L’Observatoire décrit ce qu’il mesure, ce qu’il ne mesure pas et les changements de protocole. Il ne transforme pas une photographie expérimentale en promesse de classement durable.",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Observatoire GEO Savoie : protocole ouvert 2026",
  description:
    "Méthode de mesure des mentions, citations, sources et erreurs concernant les entreprises de Savoie dans les réponses des moteurs IA.",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  inLanguage: "fr-FR",
  mainEntityOfPage: PAGE_URL,
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: ["Generative Engine Optimization", "Savoie", "Visibilité dans les moteurs IA"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ressources", item: `${SITE_URL}/ressources` },
    { "@type": "ListItem", position: 3, name: "Observatoire GEO Savoie", item: PAGE_URL },
  ],
};

export default function ObservatoireGeoSavoiePage() {
  return (
    <main id="contenu" className="observatory-page">
      <nav className="seo-breadcrumb shell" aria-label="Fil d’Ariane">
        <Link href="/">Accueil</Link><span aria-hidden="true">/</span>
        <Link href="/ressources">Ressources</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Observatoire GEO Savoie</span>
      </nav>

      <header className="observatory-hero">
        <div className="shell observatory-hero-grid">
          <div>
            <p className="eyebrow">Observatoire GEO Savoie · protocole ouvert 2026</p>
            <h1>Mesurer ce que les moteurs IA comprennent, citent et recommandent réellement.</h1>
          </div>
          <aside>
            <strong>Édition initiale en préparation</strong>
            <p>
              Cette page publie la méthode avant les résultats. Le futur baromètre ne vendra ni inscription au classement ni position garantie : il documentera des observations datées et reproductibles.
            </p>
            <Link className="button" href="/contact">Proposer une entreprise à observer <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </header>

      <section className="observatory-intro" aria-labelledby="observatory-purpose">
        <div className="shell observatory-intro-grid">
          <div>
            <p className="section-index">01 — Pourquoi cet observatoire</p>
            <h2 id="observatory-purpose">Sortir le GEO des captures d’écran opportunistes.</h2>
          </div>
          <div>
            <p className="observatory-lead">
              Demander une fois à un assistant « quelle est la meilleure entreprise ? » ne constitue pas une mesure. La réponse dépend du contexte, de la formulation, de la fraîcheur des sources et du moteur. Notre objectif est de suivre des signaux utiles sans leur donner une précision qu’ils n’ont pas.
            </p>
            <p>
              Google explique que ses expériences génératives reposent toujours sur ses systèmes de recherche et sur des contenus publics, utiles et accessibles. OpenAI distingue de son côté le robot utilisé pour la recherche de celui lié à l’entraînement. Le protocole part donc d’un socle simple : une entité claire, des pages indexables, des preuves attribuables et des mentions tierces authentiques.
            </p>
          </div>
        </div>
      </section>

      <section className="observatory-metrics" aria-labelledby="observatory-metrics-title">
        <div className="shell">
          <div className="seo-section-heading seo-section-heading-light">
            <div><p className="section-index section-index-light">02 — Les quatre dimensions</p><p className="kicker">Au-delà d’un simple nom cité</p></div>
            <h2 id="observatory-metrics-title">Une recommandation utile doit pouvoir être comprise et vérifiée.</h2>
          </div>
          <div className="observatory-metric-grid">
            {dimensions.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="observatory-protocol" aria-labelledby="observatory-protocol-title">
        <div className="shell seo-split">
          <div className="seo-sticky-heading">
            <p className="section-index">03 — Le protocole</p>
            <p className="kicker">Une méthode publiée avant les conclusions</p>
            <h2 id="observatory-protocol-title">Cinq règles pour produire un signal exploitable.</h2>
          </div>
          <ol className="observatory-protocol-list">
            {protocol.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="observatory-scope" aria-labelledby="observatory-scope-title">
        <div className="shell observatory-scope-grid">
          <div>
            <p className="section-index">04 — Première édition</p>
            <h2 id="observatory-scope-title">Un périmètre local, puis des comparaisons sectorielles.</h2>
          </div>
          <div className="observatory-scope-cards">
            <article><span>Territoire</span><h3>Savoie et bassin chambérien</h3><p>Extension à Aix-les-Bains et Albertville lorsque le corpus permet une lecture distincte et honnête.</p></article>
            <article><span>Secteurs initiaux</span><h3>BTP, PME, startups et experts</h3><p>Des familles où la recherche locale, la preuve métier et la qualité des sources influencent réellement la décision.</p></article>
            <article><span>Sorties publiées</span><h3>Méthode, tendances et cas vérifiés</h3><p>Les résultats agrégés seront séparés des audits individuels. Toute correction documentée pourra être intégrée à une mise à jour datée.</p></article>
          </div>
        </div>
      </section>

      <section className="observatory-sources" aria-labelledby="observatory-sources-title">
        <div className="shell">
          <div className="seo-section-heading">
            <div><p className="section-index">05 — Références</p><p className="kicker">Sources primaires</p></div>
            <h2 id="observatory-sources-title">Les règles des moteurs avant les recettes de consultants.</h2>
          </div>
          <div className="observatory-source-list">
            <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=fr" target="_blank" rel="noreferrer"><span>Google Search Central</span><strong>Optimiser pour les fonctionnalités d’IA générative</strong><i aria-hidden="true">↗</i></a>
            <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noreferrer"><span>OpenAI</span><strong>Découverte et citations dans ChatGPT Search</strong><i aria-hidden="true">↗</i></a>
            <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noreferrer"><span>Perplexity</span><strong>Robots de recherche et accès aux pages</strong><i aria-hidden="true">↗</i></a>
            <a href="https://support.google.com/business/answer/7091?hl=fr" target="_blank" rel="noreferrer"><span>Google Business Profile</span><strong>Pertinence, distance et notoriété locale</strong><i aria-hidden="true">↗</i></a>
          </div>
        </div>
      </section>

      <aside className="contact-band" aria-labelledby="observatory-cta">
        <div className="shell contact-band-inner">
          <div><p className="eyebrow">SEO, GEO et réputation d’entité</p><h2 id="observatory-cta">Vérifions ce que les moteurs peuvent réellement comprendre de votre entreprise.</h2></div>
          <div><p>Un audit utile commence par les sources disponibles, les requêtes de décision et les informations qu’un tiers peut vérifier.</p><Link className="button button-light" href="/geo">Découvrir l’accompagnement GEO <span aria-hidden="true">↗</span></Link></div>
        </div>
      </aside>

      {[articleSchema, breadcrumbSchema].map((schema, index) => (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} key={index} />
      ))}
    </main>
  );
}
