"use client";

import Link from "next/link";
import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from "react";
import { getLeadAttribution, trackAnalyticsEvent } from "@/lib/analytics-client";
import styles from "./batiment-landing.module.css";

const NEEDS = [
  { value: "more-qualified-quotes", label: "Recevoir davantage de demandes de devis qualifiées" },
  { value: "website-redesign", label: "Refondre un site vieillissant" },
  { value: "show-services", label: "Mieux présenter mes prestations et réalisations" },
  { value: "measure-contacts", label: "Mesurer les appels et formulaires" },
] as const;

type Need = (typeof NEEDS)[number]["value"];

type FormValues = {
  name: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  need: Need | "";
  consent: boolean;
  contactUrl: string;
};

const INITIAL_VALUES: FormValues = {
  name: "",
  company: "",
  website: "",
  email: "",
  phone: "",
  need: "",
  consent: false,
  contactUrl: "",
};

export function BatimentDiagnosticForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formStartedRef = useRef(false);
  const confirmationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (status === "success") confirmationRef.current?.focus();
  }, [status]);

  const markFormStarted = () => {
    if (formStartedRef.current) return;

    trackAnalyticsEvent("batiment_diagnostic_form_start", {
      form_name: "batiment_diagnostic",
      lead_type: "free_diagnostic",
    });
    formStartedRef.current = true;
  };

  const updateField =
    (field: Exclude<keyof FormValues, "consent">) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      if (status === "error") setStatus("idle");
      setErrorMessage("");
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markFormStarted();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/batiment-diagnostic", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, attribution: getLeadAttribution() }),
      });
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "L’envoi n’a pas pu aboutir. Réessayez dans un instant.");
      }

      trackAnalyticsEvent("generate_lead", {
        form_name: "batiment_diagnostic",
        lead_type: "free_diagnostic",
      });
      setStatus("success");
    } catch (error) {
      trackAnalyticsEvent("batiment_diagnostic_form_error", {
        form_name: "batiment_diagnostic",
        lead_type: "free_diagnostic",
      });
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "L’envoi n’a pas pu aboutir. Réessayez dans un instant.",
      );
    }
  };

  if (status === "success") {
    return (
      <section
        className={styles.formConfirmation}
        ref={confirmationRef}
        tabIndex={-1}
        aria-labelledby="diagnostic-confirmation-title"
      >
        <p>Demande envoyée</p>
        <h2 id="diagnostic-confirmation-title">Merci {values.name}.</h2>
        <p>
          Votre demande de diagnostic est bien arrivée. Nous revenons vers vous sous un jour ouvré avec les premiers
          points à regarder.
        </p>
        <Link href="/realisations" className={styles.formSecondaryAction}>
          Voir les réalisations
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.formCard} aria-labelledby="diagnostic-form-title">
      <div className={styles.formHeading}>
        <p>Diagnostic offert</p>
        <h2 id="diagnostic-form-title">Faisons le point sur votre présence actuelle.</h2>
        <span>Réponse sous un jour ouvré · Sans engagement</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} onFocusCapture={markFormStarted}>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="diagnostic-name">Prénom et nom</label>
            <input
              id="diagnostic-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              value={values.name}
              onChange={updateField("name")}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="diagnostic-company">Entreprise</label>
            <input
              id="diagnostic-company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={120}
              value={values.company}
              onChange={updateField("company")}
              required
            />
          </div>

          <div className={styles.fieldWide}>
            <label htmlFor="diagnostic-website">
              Site actuel <span>facultatif</span>
            </label>
            <input
              id="diagnostic-website"
              name="website"
              type="url"
              inputMode="url"
              placeholder="https://votre-site.fr"
              maxLength={300}
              value={values.website}
              onChange={updateField("website")}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="diagnostic-email">E-mail</label>
            <input
              id="diagnostic-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={200}
              value={values.email}
              onChange={updateField("email")}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="diagnostic-phone">
              Téléphone <span>facultatif</span>
            </label>
            <input
              id="diagnostic-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              value={values.phone}
              onChange={updateField("phone")}
            />
          </div>

          <div className={styles.fieldWide}>
            <label htmlFor="diagnostic-need">Votre besoin principal</label>
            <select
              id="diagnostic-need"
              name="need"
              value={values.need}
              onChange={updateField("need")}
              required
            >
              <option value="">Choisir un objectif</option>
              {NEEDS.map((need) => (
                <option value={need.value} key={need.value}>
                  {need.label}
                </option>
              ))}
            </select>
          </div>

          <label className={styles.consent} htmlFor="diagnostic-consent">
            <input
              id="diagnostic-consent"
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
              J’accepte que mes informations soient utilisées pour répondre à ma demande. <Link href="/politique-confidentialite">En savoir plus</Link>.
            </span>
          </label>

          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="diagnostic-contact-url">Ne pas remplir</label>
            <input
              id="diagnostic-contact-url"
              name="contactUrl"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.contactUrl}
              onChange={updateField("contactUrl")}
            />
          </div>
        </div>

        {status === "error" ? <p className={styles.formError} role="alert">{errorMessage}</p> : null}

        <button className={styles.formSubmit} type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours…" : "Recevoir mon diagnostic gratuit"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className={styles.formFinePrint}>Vos coordonnées ne sont ni revendues ni utilisées pour une newsletter.</p>
      </form>
    </section>
  );
}
