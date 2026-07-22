import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Parler de votre projet",
  description: "Choisissez votre besoin et présentez simplement votre projet au bon interlocuteur de 3h36 agency.",
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
