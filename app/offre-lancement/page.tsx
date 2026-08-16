import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Header";
import LaunchOfferForm from "./LaunchOfferForm";
import styles from "./launch-offer.module.css";

export const metadata: Metadata = {
  title: "Offre de lancement — Site web à -20 %",
  description:
    "Trois projets web en Savoie bénéficient de 20 % de remise et de trois mois de suivi technique inclus avec 3h36 Agency.",
  robots: {
    index: false,
    follow: false,
  },
};

const includedItems = [
  "Cadrage du besoin et arborescence",
  "Direction visuelle et design responsive",
  "Développement, recette et mise en ligne",
  "Socle SEO et mesure d’audience",
  "Transmission des accès et prise en main",
  "Trois mois de suivi technique après lancement",
];

const faqItems = [
  {
    question: "Pourquoi cette remise ?",
    answer:
      "3h36 ouvre quelques créneaux de lancement pour constituer de nouvelles références locales. Le périmètre et le niveau d’exigence restent identiques à ceux des offres habituelles.",
  },
  {
    question: "Quels projets sont éligibles ?",
    answer:
      "Les créations et refontes de sites vitrines ou d’acquisition. Les outils métiers, licences, dépenses publicitaires et prestations partenaires sont chiffrés séparément.",
  },
  {
    question: "Un abonnement est-il obligatoire ensuite ?",
    answer:
      "Non. Les trois mois de suivi sont inclus, puis vous choisissez librement de poursuivre ou non un accompagnement mensuel.",
  },
];

export default function LaunchOfferPage() {
  return (
    <main id="contenu" className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.logo} aria-label="3h36 Agency — Retour au site">
          <Logo />
        </Link>
        <span className={styles.topbarNote}>Offre de lancement · 3 projets</span>
      </header>

      <section className={styles.hero} aria-labelledby="launch-title">
        <div className={styles.orbitOne} aria-hidden="true" />
        <div className={styles.orbitTwo} aria-hidden="true" />

        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Offre réservée aux trois premiers projets éligibles</p>
          <h1 id="launch-title">
            Votre nouveau site, <em>20 % moins cher</em> — sans réduire l’ambition.
          </h1>
          <p className={styles.lead}>
            Pour le lancement de 3h36 Agency, profitez d’un tarif préférentiel sur la conception de votre site et de
            trois mois de suivi technique inclus après sa mise en ligne.
          </p>

          <div className={styles.offerGrid} aria-label="Tarifs de lancement">
            <article className={styles.offerCard}>
              <p>Site vitrine</p>
              <strong>960 € HT</strong>
              <span>au lieu de 1 200 € HT</span>
            </article>
            <article className={`${styles.offerCard} ${styles.offerCardFeatured}`}>
              <p>Site acquisition</p>
              <strong>2 000 € HT</strong>
              <span>au lieu de 2 500 € HT</span>
            </article>
          </div>

          <ul className={styles.benefits} aria-label="Avantages de l’offre">
            <li><strong>-20 %</strong> sur la conception et le développement</li>
            <li><strong>3 mois</strong> de suivi technique inclus — valeur 297 € HT</li>
            <li><strong>Sans abonnement</strong> obligatoire après la période incluse</li>
          </ul>

          <p className={styles.conditions}>
            Remise appliquée aux honoraires de conception et de développement, hors licences, outils tiers,
            production photo/vidéo, budget média et prestations partenaires. Offre limitée à trois projets validés.
          </p>

          <Link href="/realisations" className={styles.proofLink}>
            Voir les projets déjà réalisés <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <aside className={styles.formColumn} aria-label="Demande d’estimation">
          <LaunchOfferForm />
        </aside>
      </section>

      <section className={styles.included} aria-labelledby="included-title">
        <div className={styles.sectionHeading}>
          <p>Un vrai projet, pas une formule au rabais</p>
          <h2 id="included-title">Le même cadre de travail, avec un effort de lancement.</h2>
        </div>
        <div className={styles.includedGrid}>
          {includedItems.map((item, index) => (
            <article className={styles.includedItem} key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="launch-faq-title">
        <div className={styles.sectionHeading}>
          <p>Avant de réserver un créneau</p>
          <h2 id="launch-faq-title">Des conditions simples et transparentes.</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqItems.map((item) => (
            <article className={styles.faqItem} key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.landingFooter}>
        <Logo />
        <p>Agence web, image et acquisition basée en Savoie.</p>
        <Link href="/politique-confidentialite">Confidentialité</Link>
      </footer>
    </main>
  );
}
