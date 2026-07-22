import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Parler de votre projet",
  description: "Décrivez votre besoin web, acquisition ou automatisation à 3h36 Agency. Formulaire de qualification en trois étapes.",
};

export default function ContactPage() {
  return (
    <main id="contenu">
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Un premier échange, sans jargon</p>
          <h1>Parlons de ce que votre digital doit réellement accomplir.</h1>
          <p className="page-hero-lead">Quelques informations suffisent pour comprendre votre contexte, vérifier le bon niveau d’accompagnement et préparer un échange utile.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="shell contact-page-grid">
          <aside className="contact-aside" id="rendez-vous">
            <p className="kicker">Avant de commencer</p>
            <h2>Un projet clair en moins de cinq minutes.</h2>
            <p>Cette première version vous permet de tester le parcours de qualification. L’envoi d’e-mail et la prise de rendez-vous seront activés après configuration des coordonnées et outils définitifs.</p>
            <ul>
              <li>Budget minimum conseillé&nbsp;: 1 200 € HT</li>
              <li>Projets en Savoie ou à distance</li>
              <li>Réponse prévue sous deux jours ouvrés après activation</li>
              <li>Vos informations ne sont pas transmises dans ce démonstrateur</li>
            </ul>
          </aside>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
