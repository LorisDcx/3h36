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

const NEED_OPTIONS = [
  {
    value: "web-growth-tools",
    title: "Site web, acquisition & outils",
    description: "Sites · SEO · Google Ads · automatisation",
  },
  {
    value: "photo-video",
    title: "Photo & vidéo",
    description: "Prise de vue · montage · formats",
  },
  {
    value: "identity-content",
    title: "Identité & contenu",
    description: "Identité visuelle · design · contenus",
  },
] as const;

const STEP_LABELS = ["Votre besoin", "Votre entreprise & votre projet"] as const;

type NeedValue = (typeof NEED_OPTIONS)[number]["value"];

type ContactFormValues = {
  need: NeedValue | "";
  name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  consent: boolean;
  contactUrl: string;
};

const INITIAL_VALUES: ContactFormValues = {
  need: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  description: "",
  consent: false,
  contactUrl: "",
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const confirmationRef = useRef<HTMLElement>(null);
  const formStartedRef = useRef(false);

  useEffect(() => {
    if (status === "success") confirmationRef.current?.focus();
  }, [status]);

  const updateField =
    (field: Exclude<keyof ContactFormValues, "consent">) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValues((current) => ({ ...current, [field]: value }));
    };

  const goToNextStep = (event: FormEvent<HTMLButtonElement>) => {
    if (!event.currentTarget.form?.reportValidity()) return;
    if (!formStartedRef.current) {
      trackAnalyticsEvent("contact_form_start", {
        form_name: "project_contact",
        need_category: values.need,
      });
      formStartedRef.current = true;
    }
    setStep(2);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    setStep(1);
  };

  const selectedNeed = NEED_OPTIONS.find((option) => option.value === values.need);

  if (status === "success") {
    return (
      <section
        className="contact-panel contact-confirmation contact-confirmation-compact"
        ref={confirmationRef}
        tabIndex={-1}
        aria-labelledby="contact-confirmation-title"
      >
        <p className="contact-confirmation-kicker">Demande envoyée</p>
        <h2 className="contact-confirmation-title" id="contact-confirmation-title">
          Merci {values.name}.
        </h2>
        <p className="contact-confirmation-copy">
          Votre message a bien été transmis à l’équipe {selectedNeed?.title.toLowerCase()}.
          Nous revenons vers vous dès que possible.
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
    <section className="contact-panel" aria-labelledby="contact-form-title">
      <div className="contact-progress contact-progress-compact">
        <div
          className="contact-progress-bar"
          role="progressbar"
          aria-label="Progression du formulaire"
          aria-valuemin={1}
          aria-valuemax={2}
          aria-valuenow={step}
          aria-valuetext={`Étape ${step} sur 2 : ${STEP_LABELS[step - 1]}`}
        >
          <span className="contact-progress-value" style={{ width: `${(step / 2) * 100}%` }} />
        </div>
        <ol className="contact-progress-steps" aria-label="Étapes du formulaire">
          {STEP_LABELS.map((label, index) => {
            const stepNumber = index + 1;
            return (
              <li
                className="contact-progress-step"
                aria-current={stepNumber === step ? "step" : undefined}
                key={label}
              >
                <span className="contact-progress-number" aria-hidden="true">{stepNumber}</span>
                <span className="contact-progress-label">{label}</span>
              </li>
            );
          })}
        </ol>
      </div>

      <form className="contact-form contact-form-compact" onSubmit={handleSubmit}>
        <div className="contact-step-body">
          {step === 1 ? (
            <fieldset className="contact-fieldset">
              <legend className="contact-legend" id="contact-form-title">Votre besoin</legend>
              <p className="contact-step-intro" id="contact-need-help">
                Choisissez simplement le sujet principal.
              </p>
              <div className="contact-choice-grid contact-need-grid" aria-describedby="contact-need-help">
                {NEED_OPTIONS.map((option, index) => {
                  const id = `contact-need-${index}`;
                  return (
                    <label className="contact-choice contact-need-choice" htmlFor={id} key={option.value}>
                      <input
                        className="contact-choice-input"
                        id={id}
                        name="need"
                        type="radio"
                        value={option.value}
                        checked={values.need === option.value}
                        onChange={updateField("need")}
                        required
                      />
                      <span className="contact-choice-label">
                        <strong>{option.title}</strong>
                        <small>{option.description}</small>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ) : (
            <fieldset className="contact-fieldset">
              <legend className="contact-legend" id="contact-form-title">
                Parlons de votre entreprise et de votre projet
              </legend>
              <p className="contact-step-intro">Quelques lignes suffisent pour commencer.</p>

              <div className="contact-fields-grid contact-fields-compact">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-name">Votre nom</label>
                  <input
                    className="contact-input"
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    value={values.name}
                    onChange={updateField("name")}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="contact-company">Votre entreprise</label>
                  <input
                    className="contact-input"
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={120}
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
                    value={values.phone}
                    onChange={updateField("phone")}
                  />
                </div>

                <div className="contact-field contact-field-wide">
                  <label className="contact-label" htmlFor="contact-description">
                    Votre entreprise, votre projet, le résultat attendu
                  </label>
                  <textarea
                    className="contact-textarea contact-textarea-compact"
                    id="contact-description"
                    name="description"
                    rows={4}
                    minLength={20}
                    maxLength={3000}
                    placeholder="Dites-nous simplement ce que vous souhaitez créer ou améliorer."
                    value={values.description}
                    onChange={updateField("description")}
                    required
                  />
                </div>

                <label className="contact-consent contact-field-wide" htmlFor="contact-consent">
                  <input
                    id="contact-consent"
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
          )}
        </div>

        {status === "error" ? <p className="contact-error" role="alert">{errorMessage}</p> : null}

        <div className="contact-form-actions contact-form-actions-compact">
          {step === 2 ? (
            <button className="contact-button contact-button-secondary" type="button" onClick={() => setStep(1)}>
              Retour
            </button>
          ) : null}

          {step === 1 ? (
            <button className="contact-button contact-button-primary" type="button" onClick={goToNextStep}>
              Continuer <span aria-hidden="true">→</span>
            </button>
          ) : (
            <button className="contact-button contact-button-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
