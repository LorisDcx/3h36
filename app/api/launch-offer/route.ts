import { checkLeadRateLimit } from "@/lib/lead-rate-limit";

const PROJECTS = {
  "site-vitrine": "Site vitrine",
  "site-acquisition": "Site acquisition",
  refonte: "Refonte de site",
} as const;

const DEFAULT_CONTACT_EMAIL = "contact@3h36agency.fr";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ProjectKey = keyof typeof PROJECTS;
type LeadAttribution = {
  landingPage: string;
  referrer: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
};

type LaunchOfferPayload = {
  projectType: ProjectKey;
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  budget: string;
  timeline: string;
  description: string;
  consent: true;
  websiteUrl?: string;
  attribution: LeadAttribution | null;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanAttributionValue(value: unknown, maxLength: number) {
  return cleanText(value, maxLength).replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim();
}

function cleanLandingPage(value: unknown) {
  const pathname = cleanAttributionValue(value, 500).split(/[?#]/, 1)[0] ?? "";
  return /^\/(?!\/)/.test(pathname) ? pathname : "";
}

function cleanReferrer(value: unknown) {
  const referrer = cleanAttributionValue(value, 300);
  if (!referrer) return "";

  try {
    const url = new URL(referrer);
    return url.protocol === "http:" || url.protocol === "https:" ? url.origin.slice(0, 300) : "";
  } catch {
    return "";
  }
}

function isProjectKey(value: string): value is ProjectKey {
  return value in PROJECTS;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseAttribution(value: unknown): LeadAttribution | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const attribution = {
    landingPage: cleanLandingPage(input.landingPage),
    referrer: cleanReferrer(input.referrer),
    source: cleanAttributionValue(input.source, 300),
    medium: cleanAttributionValue(input.medium, 300),
    campaign: cleanAttributionValue(input.campaign, 300),
    content: cleanAttributionValue(input.content, 300),
    term: cleanAttributionValue(input.term, 300),
  };

  return Object.values(attribution).some(Boolean) ? attribution : null;
}

function parsePayload(value: unknown): LaunchOfferPayload | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;

  const projectType = cleanText(input.projectType, 40);
  const name = cleanText(input.name, 100);
  const company = cleanText(input.company, 120);
  const email = cleanText(input.email, 200).toLowerCase();
  const phone = cleanText(input.phone, 40);
  const website = cleanText(input.website, 300);
  const budget = cleanText(input.budget, 80);
  const timeline = cleanText(input.timeline, 80);
  const description = cleanText(input.description, 2000);
  const websiteUrl = cleanText(input.websiteUrl, 300);
  const attribution = parseAttribution(input.attribution);

  if (
    !isProjectKey(projectType) ||
    name.length < 2 ||
    company.length < 2 ||
    !EMAIL_PATTERN.test(email) ||
    phone.length < 6 ||
    !budget ||
    !timeline ||
    description.length < 20 ||
    input.consent !== true
  ) {
    return null;
  }

  return {
    projectType,
    name,
    company,
    email,
    phone,
    website,
    budget,
    timeline,
    description,
    consent: true,
    websiteUrl,
    attribution,
  };
}

export async function POST(request: Request) {
  const rateLimit = checkLeadRateLimit(request);
  if (!rateLimit.allowed) {
    return Response.json(
      { message: "Trop de demandes ont été envoyées. Réessayez dans quelques minutes." },
      { status: 429, headers: { "retry-after": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return Response.json({ message: "Format de demande invalide." }, { status: 415 });
  }

  const rawBody = await request.text();
  if (rawBody.length > 20_000) {
    return Response.json({ message: "La demande est trop volumineuse." }, { status: 413 });
  }

  let input: unknown;
  try {
    input = JSON.parse(rawBody);
  } catch {
    return Response.json({ message: "Les informations transmises sont invalides." }, { status: 400 });
  }

  const payload = parsePayload(input);
  if (!payload) {
    return Response.json({ message: "Vérifiez les champs obligatoires avant de réessayer." }, { status: 400 });
  }

  if (payload.websiteUrl) return Response.json({ ok: true });

  const recipient = process.env.CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!recipient || !apiKey || !from) {
    return Response.json(
      { message: "L’envoi est momentanément indisponible. Réessayez un peu plus tard." },
      { status: 503 },
    );
  }

  const project = PROJECTS[payload.projectType];
  const safe = {
    project: escapeHtml(project),
    name: escapeHtml(payload.name),
    company: escapeHtml(payload.company),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone),
    website: escapeHtml(payload.website || "Non renseigné"),
    budget: escapeHtml(payload.budget),
    timeline: escapeHtml(payload.timeline),
    description: escapeHtml(payload.description).replaceAll("\n", "<br>"),
  };
  const attributionText = payload.attribution
    ? [
        "",
        "Attribution de navigation jointe à la demande :",
        `Page d’entrée : ${payload.attribution.landingPage || "Non renseignée"}`,
        `Référent : ${payload.attribution.referrer || "Accès direct / non attribué"}`,
        `Source / support : ${payload.attribution.source || "Non renseignée"} / ${payload.attribution.medium || "Non renseigné"}`,
        `Campagne : ${payload.attribution.campaign || "Non renseignée"}`,
        `Contenu / terme : ${payload.attribution.content || "Non renseigné"} / ${payload.attribution.term || "Non renseigné"}`,
      ]
    : [];
  const attributionHtml = payload.attribution
    ? `
        <hr style="border:0;border-top:1px solid #e1d8d0;margin:24px 0">
        <p style="color:#526873;font-size:12px"><strong>Attribution de navigation</strong></p>
        <p style="color:#526873;font-size:12px">
          Page : ${escapeHtml(payload.attribution.landingPage || "Non renseignée")}<br>
          Référent : ${escapeHtml(payload.attribution.referrer || "Accès direct / non attribué")}<br>
          Source / support : ${escapeHtml(payload.attribution.source || "Non renseignée")} / ${escapeHtml(payload.attribution.medium || "Non renseigné")}<br>
          Campagne : ${escapeHtml(payload.attribution.campaign || "Non renseignée")}<br>
          Contenu / terme : ${escapeHtml(payload.attribution.content || "Non renseigné")} / ${escapeHtml(payload.attribution.term || "Non renseigné")}
        </p>
      `
    : "";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: payload.email,
      subject: `[3h36 · Offre lancement] ${project} · ${payload.company}`,
      text: [
        `Projet : ${project}`,
        `Nom : ${payload.name}`,
        `Entreprise : ${payload.company}`,
        `E-mail : ${payload.email}`,
        `Téléphone : ${payload.phone}`,
        `Site actuel : ${payload.website || "Non renseigné"}`,
        `Budget : ${payload.budget}`,
        `Échéance : ${payload.timeline}`,
        "",
        "Objectif :",
        payload.description,
        ...attributionText,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#102b3a;line-height:1.55">
          <p style="color:#c9461d;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Offre de lancement 3h36</p>
          <h1 style="font-family:Georgia,serif;font-size:26px;margin:0 0 22px">Nouvelle demande — ${safe.project}</h1>
          <table style="border-collapse:collapse;width:100%;max-width:680px">
            <tr><td style="padding:7px 0;color:#526873">Entreprise</td><td style="padding:7px 0"><strong>${safe.company}</strong></td></tr>
            <tr><td style="padding:7px 0;color:#526873">Contact</td><td style="padding:7px 0">${safe.name}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">E-mail</td><td style="padding:7px 0">${safe.email}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">Téléphone</td><td style="padding:7px 0">${safe.phone}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">Site actuel</td><td style="padding:7px 0">${safe.website}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">Budget</td><td style="padding:7px 0">${safe.budget}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">Échéance</td><td style="padding:7px 0">${safe.timeline}</td></tr>
          </table>
          <hr style="border:0;border-top:1px solid #e1d8d0;margin:24px 0">
          <p><strong>Objectif du projet</strong></p>
          <p>${safe.description}</p>
          ${attributionHtml}
        </div>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Launch offer e-mail provider rejected the request", response.status);
    return Response.json(
      { message: "L’envoi n’a pas pu aboutir. Réessayez dans un instant." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
