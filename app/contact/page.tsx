import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Parler de votre projet",
  description: "Présentez votre activité et votre projet en quelques lignes pour échanger avec le bon interlocuteur de 3h36 agency.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/contact",
    siteName: "3h36 Agency",
    title: "Parler de votre projet — 3h36 Agency",
    description:
      "Présentez votre activité et votre projet en quelques lignes pour échanger avec le bon interlocuteur de 3h36 agency.",
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
          <h1 className="sr-only" id="contact-title">Parlons de votre projet.</h1>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
