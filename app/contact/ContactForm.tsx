"use client";

import Link from "next/link";
import { getLeadAttribution, trackAnalyticsEvent } from "@/lib/analytics-client";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const CONTACT_NEED = "project-contact";

type ContactFormValues = {
  need: typeof CONTACT_NEED;
  focus: "" | "site" | "visibility" | "image";
  name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  consent: boolean;
  contactUrl: string;
};

const INITIAL_VALUES: ContactFormValues = {
  need: CONTACT_NEED,
  focus: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  description: "",
  consent: false,
  contactUrl: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const confirmationRef = useRef<HTMLElement>(null);
  const formStartedRef = useRef(false);

  useEffect(() => {
    if (status === "success") confirmationRef.current?.focus();
  }, [status]);

  const markFormStarted = () => {
    if (formStartedRef.current) return;

    trackAnalyticsEvent("contact_form_start", {
      form_name: "project_contact",
      need_category: values.need,
    });
    formStartedRef.current = true;
  };

  const updateField =
    (field: Exclude<keyof ContactFormValues, "consent">) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value;
      setValues((current) => ({ ...current, [field]: value }));
      if (status === "error") setStatus("idle");
      setErrorMessage("");
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markFormStarted();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, attribution: getLeadAttribution() }),
      });
      const payload = await response.json().catch(() => null) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "L’envoi n’a pas pu aboutir. Réessayez dans un instant.");
      }

      trackAnalyticsEvent("generate_lead", {
        form_name: "project_contact",
        need_category: values.need,
      });
      setStatus("success");
    } catch (error) {
      trackAnalyticsEvent("contact_form_error", {
        form_name: "project_contact",
        need_category: values.need,
      });
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "L’envoi n’a pas pu aboutir. Réessayez dans un instant.",
      );
    }
  };

  const startAgain = () => {
    setValues(INITIAL_VALUES);
    setStatus("idle");
    setErrorMessage("");
    formStartedRef.current = false;
  };

  if (status === "success") {
    return (
      <section
        className="contact-panel contact-panel-direct contact-confirmation contact-confirmation-compact"
        ref={confirmationRef}
        tabIndex={-1}
        aria-labelledby="contact-confirmation-title"
      >
        <p className="contact-confirmation-kicker">Demande envoyée</p>
        <h2 className="contact-confirmation-title" id="contact-confirmation-title">
          Merci {values.name}.
        </h2>
        <p className="contact-confirmation-copy">
          Votre demande est bien arrivée. Nous la lisons avec attention avant de revenir vers vous avec le bon prochain pas.
        </p>
        <div className="contact-confirmation-actions">
          <Link className="contact-button contact-button-primary" href="/realisations">
            Voir les réalisations
          </Link>
          <button className="contact-button contact-button-quiet" type="button" onClick={startAgain}>
            Envoyer une autre demande
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-panel contact-panel-direct" aria-labelledby="contact-form-title">
      <form className="contact-form contact-form-compact" onSubmit={handleSubmit} onFocusCapture={markFormStarted}>
        <fieldset className="contact-fieldset" aria-labelledby="contact-form-title">
          <legend className="sr-only">Votre projet</legend>
          <p className="contact-form-kicker">Un projet, quelques repères</p>
          <h2 className="contact-legend" id="contact-form-title">Parlons de l’essentiel.</h2>
          <p className="contact-step-intro">
            Présentez simplement votre activité, ce que vous voulez faire évoluer et votre priorité du moment.
          </p>

          <div className="contact-fields-grid contact-fields-compact">
            <div className="contact-field contact-field-wide">
              <label className="contact-label" htmlFor="contact-focus">
                Votre sujet principal <span className="contact-optional">facultatif</span>
              </label>
              <select
                className="contact-select contact-select-compact"
                id="contact-focus"
                name="focus"
                value={values.focus}
                onChange={updateField("focus")}
              >
                <option value="">Choisir si vous avez déjà une idée</option>
                <option value="site">Site web &amp; outils</option>
                <option value="visibility">Visibilité &amp; acquisition</option>
                <option value="image">Image &amp; contenus</option>
              </select>
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-name">Prénom et nom</label>
              <input
                className="contact-input"
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                placeholder="Prénom et nom"
                value={values.name}
                onChange={updateField("name")}
                required
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-company">Votre entreprise ou activité</label>
              <input
                className="contact-input"
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={120}
                placeholder="Nom de l’entreprise"
                value={values.company}
                onChange={updateField("company")}
                required
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-email">Votre e-mail</label>
              <input
                className="contact-input"
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={200}
                placeholder="vous@entreprise.fr"
                value={values.email}
                onChange={updateField("email")}
                required
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-phone">
                Téléphone <span className="contact-optional">facultatif</span>
              </label>
              <input
                className="contact-input"
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                placeholder="06 00 00 00 00"
                value={values.phone}
                onChange={updateField("phone")}
              />
            </div>

            <div className="contact-field contact-field-wide">
              <label className="contact-label" htmlFor="contact-description">
                Votre projet et le résultat attendu
              </label>
              <textarea
                className="contact-textarea contact-textarea-compact"
                id="contact-description"
                name="description"
                rows={4}
                minLength={20}
                maxLength={3000}
                placeholder="Ex. Nous souhaitons refaire notre site pour mieux présenter nos réalisations et obtenir davantage de demandes qualifiées."
                value={values.description}
                onChange={updateField("description")}
                required
              />
            </div>

            <p className="contact-form-reassurance contact-field-wide">
              <strong>Pas besoin d’un brief complet.</strong> Quelques lignes suffisent pour un premier échange utile.
            </p>

            <label className="contact-consent contact-field-wide" htmlFor="contact-consent">
              <input
                id="contact-consent"
                name="consent"
                type="checkbox"
                checked={values.consent}
                onChange={(event) => {
                  setValues((current) => ({ ...current, consent: event.target.checked }));
                  if (status === "error") setStatus("idle");
                  setErrorMessage("");
                }}
                required
              />
              <span>
                J’accepte que mes informations soient utilisées pour répondre à ma demande.{" "}
                <Link href="/politique-confidentialite">En savoir plus</Link>.
              </span>
            </label>

            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-url">Ne pas remplir ce champ</label>
              <input
                id="contact-url"
                name="contactUrl"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.contactUrl}
                onChange={updateField("contactUrl")}
              />
            </div>
          </div>
        </fieldset>

        {status === "error" ? <p className="contact-error" role="alert">{errorMessage}</p> : null}

        <div className="contact-form-actions contact-form-actions-compact">
          <button
            className={`contact-button contact-button-primary${status === "sending" ? " is-sending" : ""}`}
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
        </div>
      </form>
    </section>
  );
}
