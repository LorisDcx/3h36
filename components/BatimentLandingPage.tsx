import Link from "next/link";
import { contact } from "@/lib/site-data";
import { BatimentDiagnosticForm } from "./BatimentDiagnosticForm";
import { Logo } from "./Header";
import styles from "./batiment-landing.module.css";

const SITE_URL = "https://www.3h36agency.fr";

const problems = [
  {
    title: "Un site vieillissant ou peu convaincant",
    description: "Vos réalisations, métiers et différences sont difficiles à comprendre en quelques secondes.",
  },
  {
    title: "Des prestations mal présentées",
    description: "Le prospect ne sait pas si vous intervenez sur son type de chantier, dans sa zone ou à son budget.",
  },
  {
    title: "Aucune mesure des demandes",
    description: "Appels, formulaires et sources d’acquisition ne permettent pas de savoir ce qui génère de vrais projets.",
  },
] as const;

const deliverables = [
  "8 à 10 pages structurées autour de vos métiers, chantiers et zones",
  "Une architecture et des contenus pensés pour le SEO local",
  "Un formulaire court qui qualifie les demandes utiles",
  "Le suivi des formulaires, des appels et des principaux clics",
  "L’optimisation des informations clés de votre fiche Google Business",
  "30 jours de suivi après la mise en ligne",
] as const;

const faqs = [
  {
    question: "À qui s’adresse cette offre ?",
    answer:
      "Aux artisans et entreprises du bâtiment de 2 à 30 salariés basés en Savoie, qui souhaitent mieux présenter leur savoir-faire et générer des demandes de devis mieux qualifiées.",
  },
  {
    question: "Que regardez-vous dans le diagnostic ?",
    answer:
      "La clarté de votre offre, vos preuves, votre présence locale, le parcours de demande et ce qui empêche aujourd’hui un prospect de vous contacter avec assez d’informations.",
  },
  {
    question: "Le budget inclut-il les campagnes Google Ads ?",
    answer:
      "Non. Le budget de 2 500 € HT couvre la conception du site d’acquisition. Les dépenses publicitaires, licences, productions photo/vidéo et prestations partenaires sont cadrées séparément lorsque nécessaires.",
  },
] as const;

export function BatimentLandingPage() {
  const phoneHref = contact.phone ? `tel:${contact.phone.replace(/[^+\d]/g, "")}` : null;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/site-internet-batiment-savoie#service`,
    name: "Site d’acquisition pour entreprises du bâtiment en Savoie",
    description:
      "Site d’acquisition pour artisans et entreprises du bâtiment en Savoie, avec SEO local, qualification des demandes et mesure des conversions.",
    url: `${SITE_URL}/site-internet-batiment-savoie`,
    areaServed: { "@type": "AdministrativeArea", name: "Savoie" },
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "2500",
      description: "Site d’acquisition pour entreprise du bâtiment, à partir de 2 500 € HT.",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="contenu" className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.logo} aria-label="3h36 Agency — Accueil">
          <Logo />
        </Link>
        <div className={styles.topbarContact}>
          {phoneHref ? <a href={phoneHref}>{contact.phone}</a> : null}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="batiment-hero-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Entreprises du bâtiment · Savoie</p>
            <h1 id="batiment-hero-title">
              Un site conçu pour transformer vos recherches locales en <em>demandes de devis qualifiées.</em>
            </h1>
            <p className={styles.lead}>
              Pour les artisans et entreprises du bâtiment de 2 à 30 salariés qui veulent rendre leurs métiers,
              réalisations et zones d’intervention immédiatement compréhensibles.
            </p>
            <div className={styles.heroOffer}>
              <span>Site d’acquisition</span>
              <strong>À partir de 2 500 € HT</strong>
              <p>Un périmètre clair, sans abonnement obligatoire.</p>
            </div>
            <a className={styles.primaryAction} href="#diagnostic">
              Recevoir mon diagnostic gratuit <span aria-hidden="true">↗</span>
            </a>
            <p className={styles.heroReassurance}>Diagnostic concret · Réponse sous un jour ouvré · Sans engagement</p>
          </div>

          <div id="diagnostic" className={styles.formColumn}>
            <BatimentDiagnosticForm />
          </div>
        </div>
      </section>

      <section className={styles.problemSection} aria-labelledby="batiment-problems-title">
        <div className={styles.sectionHeader}>
          <p>Les trois freins les plus fréquents</p>
          <h2 id="batiment-problems-title">Un bon site ne doit pas seulement être joli. Il doit orienter la bonne demande.</h2>
        </div>
        <div className={styles.problemGrid}>
          {problems.map((problem, index) => (
            <article className={styles.problemCard} key={problem.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.offerSection} aria-labelledby="batiment-deliverables-title">
        <div className={styles.offerIntro}>
          <p>Le cadre de l’offre</p>
          <h2 id="batiment-deliverables-title">Un site d’acquisition construit autour de votre activité réelle.</h2>
          <p>
            Le projet commence par vos métiers prioritaires, les chantiers recherchés et les zones que vous pouvez
            réellement couvrir. L’objectif : obtenir des demandes plus faciles à qualifier, pas de gonfler le volume.
          </p>
          <Link href="/realisations/delco-ink" className={styles.proofLink}>
            Voir un projet client réellement livré <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ul className={styles.deliverables}>
          {deliverables.map((deliverable) => (
            <li key={deliverable}>{deliverable}</li>
          ))}
        </ul>
      </section>

      <section className={styles.methodSection} aria-labelledby="batiment-method-title">
        <div>
          <p>Une démarche mesurable</p>
          <h2 id="batiment-method-title">Vos futurs prospects doivent savoir s’ils sont au bon endroit avant de vous appeler.</h2>
        </div>
        <ol className={styles.methodSteps}>
          <li>
            <span>01</span>
            <div><h3>Clarifier l’offre</h3><p>Métiers, prestations prioritaires, zone réelle et critères d’un bon projet.</p></div>
          </li>
          <li>
            <span>02</span>
            <div><h3>Rassembler les preuves</h3><p>Réalisations, photos, avis et informations qui peuvent être vérifiées.</p></div>
          </li>
          <li>
            <span>03</span>
            <div><h3>Mesurer les contacts</h3><p>Formulaires, appels et sources sont préparés pour distinguer le trafic des vraies opportunités.</p></div>
          </li>
        </ol>
      </section>

      <section className={styles.faqSection} aria-labelledby="batiment-faq-title">
        <div className={styles.sectionHeader}>
          <p>Avant de demander un diagnostic</p>
          <h2 id="batiment-faq-title">Les réponses aux questions essentielles.</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <Logo />
        <p>Agence web, image et acquisition basée en Savoie.</p>
        <div>
          <Link href="/politique-confidentialite">Confidentialité</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
      </footer>

      {[serviceSchema, faqSchema].map((schema, index) => (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} key={index} />
      ))}
    </main>
  );
}
