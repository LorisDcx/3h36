"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const NEED_OPTIONS = [
  "Nouveau site vitrine",
  "Refonte d’un site existant",
  "Génération de demandes",
  "SEO",
  "Google Ads",
  "Outil ou automatisation",
  "Maintenance",
  "Autre besoin",
] as const;

const OBJECTIVE_OPTIONS = [
  "Présenter ou moderniser mon entreprise",
  "Obtenir davantage de demandes qualifiées",
  "Améliorer ma visibilité sur Google",
  "Automatiser un processus métier",
  "Lancer une nouvelle offre ou un nouveau service",
  "Autre objectif",
] as const;

const DEADLINE_OPTIONS = [
  "Dès que possible",
  "Dans les 1 à 2 mois",
  "Dans les 3 à 4 mois",
  "Dans les 5 à 6 mois",
  "Dans plus de 6 mois",
  "À définir ensemble",
] as const;

const BUDGET_OPTIONS = [
  "Moins de 1 200 €",
  "1 200 à 2 500 €",
  "2 500 à 5 000 €",
  "5 000 à 10 000 €",
  "Plus de 10 000 €",
  "À définir",
] as const;

const MONTHLY_SUPPORT_OPTIONS = [
  "Oui",
  "Non",
  "Je souhaite être conseillé",
] as const;

const STEP_LABELS = ["Votre besoin", "Vos informations", "Votre projet"] as const;

type ContactFormValues = {
  need: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  sector: string;
  location: string;
  objective: string;
  description: string;
  deadline: string;
  budget: string;
  monthlySupport: string;
};

const INITIAL_VALUES: ContactFormValues = {
  need: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  sector: "",
  location: "",
  objective: "",
  description: "",
  deadline: "",
  budget: "",
  monthlySupport: "",
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const confirmationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (submitted) {
      confirmationRef.current?.focus();
    }
  }, [submitted]);

  const updateField =
    (field: keyof ContactFormValues) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const value = event.target.value;
      setValues((current) => ({ ...current, [field]: value }));
    };

  const goToNextStep = (event: FormEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;

    if (!form?.reportValidity()) {
      return;
    }

    setStep((current) => Math.min(current + 1, 3));
  };

  const goToPreviousStep = () => {
    if (step === 3) {
      setFileName("");
    }

    setStep((current) => Math.max(current - 1, 1));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.files?.[0]?.name ?? "");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const startAgain = () => {
    setValues(INITIAL_VALUES);
    setFileName("");
    setSubmitted(false);
    setStep(1);
  };

  if (submitted) {
    const summaryRows = [
      ["Besoin", values.need],
      ["Nom", values.name],
      ["Entreprise", values.company],
      ["E-mail", values.email],
      ["Téléphone", values.phone || "Non renseigné"],
      ["Site actuel", values.website || "Non renseigné"],
      ["Secteur", values.sector],
      ["Localisation", values.location],
      ["Objectif", values.objective],
      ["Description", values.description],
      ["Échéance", values.deadline],
      ["Budget indicatif", values.budget],
      ["Accompagnement mensuel", values.monthlySupport],
      ["Fichier", fileName || "Aucun fichier joint"],
    ];

    return (
      <section
        className="contact-confirmation"
        ref={confirmationRef}
        tabIndex={-1}
        aria-labelledby="contact-confirmation-title"
      >
        <p className="contact-confirmation-kicker">Demande préparée</p>
        <h2
          className="contact-confirmation-title"
          id="contact-confirmation-title"
        >
          Merci {values.name}, votre projet est bien renseigné.
        </h2>
        <p className="contact-confirmation-copy">
          Cette version est un démonstrateur local : aucune information n’a été
          envoyée. Une fois le formulaire relié au service de contact, 3h36
          Agency répondra sous deux jours ouvrés.
        </p>

        <div
          className="contact-summary"
          aria-labelledby="contact-summary-title"
        >
          <h3 className="contact-summary-title" id="contact-summary-title">
            Récapitulatif de votre demande
          </h3>
          <dl className="contact-summary-list">
            {summaryRows.map(([label, value]) => (
              <div className="contact-summary-row" key={label}>
                <dt className="contact-summary-term">{label}</dt>
                <dd className="contact-summary-value">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="contact-confirmation-actions">
          <a className="contact-button contact-button-primary" href="#rendez-vous">
            Prendre rendez-vous
          </a>
          <a
            className="contact-button contact-button-secondary"
            href="/realisations"
          >
            Voir les réalisations
          </a>
          <button
            className="contact-button contact-button-quiet"
            type="button"
            onClick={startAgain}
          >
            Modifier ma demande
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="contact-form-shell">
      <div className="contact-progress">
        <div
          className="contact-progress-bar"
          role="progressbar"
          aria-label="Progression du formulaire"
          aria-valuemin={1}
          aria-valuemax={3}
          aria-valuenow={step}
          aria-valuetext={`Étape ${step} sur 3 : ${STEP_LABELS[step - 1]}`}
        >
          <span
            className="contact-progress-value"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
        <ol className="contact-progress-steps" aria-label="Étapes du formulaire">
          {STEP_LABELS.map((label, index) => {
            const stepNumber = index + 1;
            const isCurrent = stepNumber === step;

            return (
              <li
                className="contact-progress-step"
                aria-current={isCurrent ? "step" : undefined}
                key={label}
              >
                <span className="contact-progress-number" aria-hidden="true">
                  {stepNumber}
                </span>
                <span className="contact-progress-label">{label}</span>
              </li>
            );
          })}
        </ol>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <p className="contact-required-note">
          Les champs marqués d’un <span aria-hidden="true">*</span> sont
          obligatoires.
        </p>

        {step === 1 && (
          <fieldset className="contact-fieldset">
            <legend className="contact-legend">Quel est votre besoin ?</legend>
            <p className="contact-step-intro" id="contact-need-help">
              Choisissez la réponse qui se rapproche le plus de votre projet.
            </p>
            <div
              className="contact-choice-grid"
              aria-describedby="contact-need-help"
            >
              {NEED_OPTIONS.map((option, index) => {
                const id = `contact-need-${index}`;

                return (
                  <label className="contact-choice" htmlFor={id} key={option}>
                    <input
                      className="contact-choice-input"
                      id={id}
                      name="need"
                      type="radio"
                      value={option}
                      checked={values.need === option}
                      onChange={updateField("need")}
                      required
                    />
                    <span className="contact-choice-label">{option}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="contact-fieldset">
            <legend className="contact-legend">Parlons de votre entreprise</legend>
            <p className="contact-step-intro">
              Ces informations permettent de replacer votre demande dans son
              contexte.
            </p>

            <div className="contact-fields-grid">
              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-name">
                  Nom complet <span aria-hidden="true">*</span>
                </label>
                <input
                  className="contact-input"
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={updateField("name")}
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-company">
                  Entreprise <span aria-hidden="true">*</span>
                </label>
                <input
                  className="contact-input"
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={updateField("company")}
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-email">
                  E-mail professionnel <span aria-hidden="true">*</span>
                </label>
                <input
                  className="contact-input"
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={updateField("email")}
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-phone">
                  Téléphone <span className="contact-optional">(facultatif)</span>
                </label>
                <input
                  className="contact-input"
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={updateField("phone")}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-website">
                  Site actuel <span className="contact-optional">(facultatif)</span>
                </label>
                <input
                  className="contact-input"
                  id="contact-website"
                  name="website"
                  type="url"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="https://exemple.fr"
                  value={values.website}
                  onChange={updateField("website")}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-sector">
                  Secteur d’activité <span aria-hidden="true">*</span>
                </label>
                <input
                  className="contact-input"
                  id="contact-sector"
                  name="sector"
                  type="text"
                  autoComplete="organization-title"
                  value={values.sector}
                  onChange={updateField("sector")}
                  required
                />
              </div>

              <div className="contact-field contact-field-wide">
                <label className="contact-label" htmlFor="contact-location">
                  Localisation <span aria-hidden="true">*</span>
                </label>
                <input
                  className="contact-input"
                  id="contact-location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Ville ou région"
                  value={values.location}
                  onChange={updateField("location")}
                  required
                />
              </div>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="contact-fieldset">
            <legend className="contact-legend">Décrivez votre projet</legend>
            <p className="contact-step-intro">
              Quelques repères suffisent pour préparer un premier échange utile.
            </p>

            <div className="contact-fields-grid">
              <div className="contact-field contact-field-wide">
                <label className="contact-label" htmlFor="contact-objective">
                  Objectif principal <span aria-hidden="true">*</span>
                </label>
                <select
                  className="contact-select"
                  id="contact-objective"
                  name="objective"
                  value={values.objective}
                  onChange={updateField("objective")}
                  required
                >
                  <option value="" disabled>
                    Sélectionnez un objectif
                  </option>
                  {OBJECTIVE_OPTIONS.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field contact-field-wide">
                <label className="contact-label" htmlFor="contact-description">
                  Description du projet <span aria-hidden="true">*</span>
                </label>
                <textarea
                  className="contact-textarea"
                  id="contact-description"
                  name="description"
                  rows={6}
                  minLength={30}
                  placeholder="Votre contexte, le problème à résoudre et le résultat attendu…"
                  value={values.description}
                  onChange={updateField("description")}
                  aria-describedby="contact-description-help"
                  required
                />
                <p className="contact-help" id="contact-description-help">
                  30 caractères minimum.
                </p>
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-deadline">
                  Échéance souhaitée <span aria-hidden="true">*</span>
                </label>
                <select
                  className="contact-select"
                  id="contact-deadline"
                  name="deadline"
                  value={values.deadline}
                  onChange={updateField("deadline")}
                  required
                >
                  <option value="" disabled>
                    Sélectionnez une échéance
                  </option>
                  {DEADLINE_OPTIONS.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-budget">
                  Budget indicatif <span aria-hidden="true">*</span>
                </label>
                <select
                  className="contact-select"
                  id="contact-budget"
                  name="budget"
                  value={values.budget}
                  onChange={updateField("budget")}
                  required
                >
                  <option value="" disabled>
                    Sélectionnez une fourchette
                  </option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="contact-field contact-field-wide contact-subfieldset">
                <legend className="contact-label">
                  Besoin d’un accompagnement mensuel ?{" "}
                  <span aria-hidden="true">*</span>
                </legend>
                <div className="contact-inline-choices">
                  {MONTHLY_SUPPORT_OPTIONS.map((option, index) => {
                    const id = `contact-monthly-support-${index}`;

                    return (
                      <label className="contact-inline-choice" htmlFor={id} key={option}>
                        <input
                          className="contact-inline-choice-input"
                          id={id}
                          name="monthlySupport"
                          type="radio"
                          value={option}
                          checked={values.monthlySupport === option}
                          onChange={updateField("monthlySupport")}
                          required
                        />
                        <span className="contact-inline-choice-label">{option}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="contact-field contact-field-wide">
                <label className="contact-label" htmlFor="contact-file">
                  Cahier des charges ou document{" "}
                  <span className="contact-optional">(facultatif)</span>
                </label>
                <input
                  className="contact-file-input"
                  id="contact-file"
                  name="projectFile"
                  type="file"
                  accept=".pdf,.doc,.docx,.odt,.txt,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  aria-describedby="contact-file-help"
                />
                <p className="contact-help" id="contact-file-help">
                  Formats acceptés : PDF, document texte ou image.
                </p>
              </div>
            </div>
          </fieldset>
        )}

        <div className="contact-form-actions">
          {step > 1 && (
            <button
              className="contact-button contact-button-secondary"
              type="button"
              onClick={goToPreviousStep}
            >
              Retour
            </button>
          )}

          {step < 3 ? (
            <button
              className="contact-button contact-button-primary"
              type="button"
              onClick={goToNextStep}
            >
              Continuer
              <span className="contact-button-step">
                Étape {step + 1} sur 3
              </span>
            </button>
          ) : (
            <button
              className="contact-button contact-button-primary"
              type="submit"
            >
              Préparer ma demande
            </button>
          )}
        </div>

        <p className="contact-prototype-note">
          Démonstrateur local : ce formulaire ne transmet actuellement aucune
          donnée.
        </p>
      </form>
    </div>
  );
}
