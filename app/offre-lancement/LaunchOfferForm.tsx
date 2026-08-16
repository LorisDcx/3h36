"use client";

import Link from "next/link";
import { type ChangeEvent, type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { getLeadAttribution, trackAnalyticsEvent } from "@/lib/analytics-client";
import styles from "./launch-offer.module.css";

const PROJECT_OPTIONS = [
  { value: "site-vitrine", label: "Site vitrine", note: "Présenter clairement votre entreprise" },
  { value: "site-acquisition", label: "Site acquisition", note: "Générer des demandes et mesurer les conversions" },
  { value: "refonte", label: "Refonte de site", note: "Moderniser un site existant" },
] as const;

const BUDGET_OPTIONS = [
  "Moins de 1 200 €",
  "1 200 à 2 500 €",
  "2 500 à 5 000 €",
  "Plus de 5 000 €",
  "À définir",
] as const;

type ProjectType = (typeof PROJECT_OPTIONS)[number]["value"];

type FormValues = {
  projectType: ProjectType | "";
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  budget: string;
  timeline: string;
  description: string;
  consent: boolean;
  websiteUrl: string;
};

const INITIAL_VALUES: FormValues = {
  projectType: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  budget: "",
  timeline: "",
  description: "",
  consent: false,
  websiteUrl: "",
};

export default function LaunchOfferForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const confirmationRef = useRef<HTMLElement>(null);
  const formStartedRef = useRef(false);

  useEffect(() => {
    if (status === "success") confirmationRef.current?.focus();
  }, [status]);

  const selectedProject = useMemo(
    () => PROJECT_OPTIONS.find((option) => option.value === values.projectType),
    [values.projectType],
  );

  const markFormStarted = () => {
    if (formStartedRef.current) return;

    trackAnalyticsEvent("launch_offer_form_start", {
      form_name: "launch_offer",
    });
    formStartedRef.current = true;
  };

  const updateField =
    (field: Exclude<keyof FormValues, "consent">) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch("/api/launch-offer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, attribution: getLeadAttribution() }),
      });
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "L’envoi n’a pas pu aboutir. Réessayez dans un instant.");
      }

      trackAnalyticsEvent("generate_lead", {
        form_name: "launch_offer",
      });
      setStatus("success");
    } catch (error) {
      trackAnalyticsEvent("launch_offer_form_error", {
        form_name: "launch_offer",
      });
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "L’envoi n’a pas pu aboutir. Réessayez dans un instant.",
      );
    }
  };

  if (status === "success") {
    return (
      <section className={styles.confirmation} ref={confirmationRef} tabIndex={-1}>
        <p className={styles.confirmationKicker}>Demande envoyée</p>
        <h2>Merci {values.name}.</h2>
        <p>
          Votre demande pour un {selectedProject?.label.toLowerCase() ?? "projet web"} a bien été transmise.
          Vous recevrez un retour sous un jour ouvré.
        </p>
        <Link className={styles.secondaryButton} href="/realisations">
          Voir les réalisations
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.formCard}>
      <div className={styles.formHeader}>
        <p>Estimation gratuite</p>
        <h2>Votre projet en quelques lignes.</h2>
        <span>Réponse sous un jour ouvré · Aucun engagement</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} onFocusCapture={markFormStarted}>
        <fieldset className={styles.fieldset}>
          <legend>Quel est votre besoin principal ?</legend>
          <div className={styles.projectChoices}>
            {PROJECT_OPTIONS.map((option) => {
              const id = `launch-${option.value}`;
              return (
                <label className={styles.projectChoice} htmlFor={id} key={option.value}>
                  <input
                    id={id}
                    name="projectType"
                    type="radio"
                    value={option.value}
                    checked={values.projectType === option.value}
                    onChange={updateField("projectType")}
                    required
                  />
                  <span>
                    <strong>{option.label}</strong>
                    <small>{option.note}</small>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className={styles.fieldsGrid}>
          <div className={styles.field}>
            <label htmlFor="launch-name">Votre nom</label>
            <input
              id="launch-name"
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
            <label htmlFor="launch-company">Votre entreprise</label>
            <input
              id="launch-company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={120}
              value={values.company}
              onChange={updateField("company")}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="launch-email">Votre e-mail</label>
            <input
              id="launch-email"
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
            <label htmlFor="launch-phone">Téléphone</label>
            <input
              id="launch-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              value={values.phone}
              onChange={updateField("phone")}
              required
            />
          </div>

          <div className={styles.fieldWide}>
            <label htmlFor="launch-website">Site actuel <span>facultatif</span></label>
            <input
              id="launch-website"
              name="website"
              type="url"
              inputMode="url"
              placeholder="https://"
              maxLength={300}
              value={values.website}
              onChange={updateField("website")}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="launch-budget">Budget envisagé</label>
            <select
              id="launch-budget"
              name="budget"
              value={values.budget}
              onChange={updateField("budget")}
              required
            >
              <option value="">Choisir une fourchette</option>
              {BUDGET_OPTIONS.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="launch-timeline">Échéance souhaitée</label>
            <select
              id="launch-timeline"
              name="timeline"
              value={values.timeline}
              onChange={updateField("timeline")}
              required
            >
              <option value="">Choisir un délai</option>
              <option>Dès que possible</option>
              <option>Sous 1 mois</option>
              <option>Sous 2 à 3 mois</option>
              <option>Plus tard / à définir</option>
            </select>
          </div>

          <div className={styles.fieldWide}>
            <label htmlFor="launch-description">Votre objectif principal</label>
            <textarea
              id="launch-description"
              name="description"
              rows={4}
              minLength={20}
              maxLength={2000}
              placeholder="Ex. refaire un site vieillissant, obtenir plus de demandes, lancer une nouvelle activité…"
              value={values.description}
              onChange={updateField("description")}
              required
            />
          </div>

          <label className={styles.consent} htmlFor="launch-consent">
            <input
              id="launch-consent"
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={(event) => setValues((current) => ({ ...current, consent: event.target.checked }))}
              required
            />
            <span>
              J’accepte que mes informations soient utilisées pour répondre à ma demande.{" "}
              <Link href="/politique-confidentialite">En savoir plus</Link>.
            </span>
          </label>

          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="launch-website-url">Ne pas remplir</label>
            <input
              id="launch-website-url"
              name="websiteUrl"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.websiteUrl}
              onChange={updateField("websiteUrl")}
            />
          </div>
        </div>

        {status === "error" ? <p className={styles.error} role="alert">{errorMessage}</p> : null}

        <button className={styles.submitButton} type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours…" : "Recevoir mon estimation"}
          <span aria-hidden="true">↗</span>
        </button>

        <p className={styles.formFinePrint}>
          Vos coordonnées ne sont ni revendues ni utilisées pour une newsletter.
        </p>
      </form>
    </section>
  );
}
