import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Parler de votre projet",
  description: "Choisissez votre besoin et présentez simplement votre projet au bon interlocuteur de 3h36 agency.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/contact",
    siteName: "3h36 Agency",
    title: "Parler de votre projet — 3h36 Agency",
    description:
      "Choisissez votre besoin et présentez simplement votre projet au bon interlocuteur de 3h36 agency.",
    images: [
      {
        url: "/og-seo-geo-v1.jpg",
        width: 1200,
        height: 630,
        alt: "3h36 Agency — collectif web, design et acquisition en Savoie",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main id="contenu" className="contact-main">
      <section className="contact-compact" aria-labelledby="contact-title">
        <div className="shell contact-compact-grid">
          <header className="contact-compact-intro">
            <p className="eyebrow">Votre besoin, le bon interlocuteur</p>
            <h1 id="contact-title">Parlons de votre projet.</h1>
            <p>
              Choisissez un sujet, présentez votre entreprise en quelques lignes et nous orientons directement votre demande.
            </p>
            <span>3 sujets · 2 étapes · aucun détour</span>
          </header>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
