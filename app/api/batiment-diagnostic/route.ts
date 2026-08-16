import { checkLeadRateLimit } from "@/lib/lead-rate-limit";

const NEEDS = {
  "more-qualified-quotes": "Recevoir davantage de demandes de devis qualifiées",
  "website-redesign": "Refondre un site vieillissant",
  "show-services": "Mieux présenter mes prestations et réalisations",
  "measure-contacts": "Mesurer les appels et formulaires",
} as const;

const DEFAULT_CONTACT_EMAIL = "contact@3h36agency.fr";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NeedKey = keyof typeof NEEDS;
type LeadAttribution = {
  landingPage: string;
  referrer: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
};

type DiagnosticPayload = {
  name: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  need: NeedKey;
  consent: true;
  contactUrl?: string;
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

function cleanWebsite(value: unknown) {
  const website = cleanText(value, 300);
  if (!website) return "";

  try {
    const url = new URL(website);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function isNeedKey(value: string): value is NeedKey {
  return value in NEEDS;
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

function parsePayload(value: unknown): DiagnosticPayload | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const name = cleanText(input.name, 100);
  const company = cleanText(input.company, 120);
  const websiteRaw = cleanText(input.website, 300);
  const website = cleanWebsite(websiteRaw);
  const email = cleanText(input.email, 200).toLowerCase();
  const phone = cleanText(input.phone, 40);
  const need = cleanText(input.need, 80);
  const contactUrl = cleanText(input.contactUrl, 300);
  const attribution = parseAttribution(input.attribution);

  if (
    name.length < 2 ||
    company.length < 2 ||
    (websiteRaw && !website) ||
    !EMAIL_PATTERN.test(email) ||
    (phone && phone.length < 6) ||
    !isNeedKey(need) ||
    input.consent !== true
  ) {
    return null;
  }

  return { name, company, website, email, phone, need, consent: true, contactUrl, attribution };
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

  if (payload.contactUrl) return Response.json({ ok: true });

  const recipient = process.env.CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!recipient || !apiKey || !from) {
    return Response.json(
      { message: "L’envoi est momentanément indisponible. Réessayez un peu plus tard." },
      { status: 503 },
    );
  }

  const need = NEEDS[payload.need];
  const safe = {
    name: escapeHtml(payload.name),
    company: escapeHtml(payload.company),
    website: escapeHtml(payload.website || "Non renseigné"),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone || "Non renseigné"),
    need: escapeHtml(need),
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
        <hr style="border:0;border-top:1px solid #d9d9d9;margin:24px 0">
        <h2 style="font-size:16px;margin:0 0 14px">Attribution de navigation</h2>
        <p><strong>Page d’entrée :</strong> ${escapeHtml(payload.attribution.landingPage || "Non renseignée")}</p>
        <p><strong>Référent :</strong> ${escapeHtml(payload.attribution.referrer || "Accès direct / non attribué")}</p>
        <p><strong>Source / support :</strong> ${escapeHtml(payload.attribution.source || "Non renseignée")} / ${escapeHtml(payload.attribution.medium || "Non renseigné")}</p>
        <p><strong>Campagne :</strong> ${escapeHtml(payload.attribution.campaign || "Non renseignée")}</p>
        <p><strong>Contenu / terme :</strong> ${escapeHtml(payload.attribution.content || "Non renseigné")} / ${escapeHtml(payload.attribution.term || "Non renseigné")}</p>
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
      subject: `[3h36 · Diagnostic BTP] ${payload.company}`,
      text: [
        "Nouvelle demande de diagnostic gratuit — Bâtiment Savoie",
        `Entreprise : ${payload.company}`,
        `Contact : ${payload.name}`,
        `E-mail : ${payload.email}`,
        `Téléphone : ${payload.phone || "Non renseigné"}`,
        `Site actuel : ${payload.website || "Non renseigné"}`,
        `Besoin principal : ${need}`,
        ...attributionText,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#102b3a;line-height:1.55">
          <p style="color:#c9461d;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Diagnostic BTP · 3h36</p>
          <h1 style="font-family:Georgia,serif;font-size:26px;margin:0 0 22px">Nouvelle demande de diagnostic</h1>
          <table style="border-collapse:collapse;width:100%;max-width:680px">
            <tr><td style="padding:7px 0;color:#526873">Entreprise</td><td style="padding:7px 0"><strong>${safe.company}</strong></td></tr>
            <tr><td style="padding:7px 0;color:#526873">Contact</td><td style="padding:7px 0">${safe.name}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">E-mail</td><td style="padding:7px 0">${safe.email}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">Téléphone</td><td style="padding:7px 0">${safe.phone}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">Site actuel</td><td style="padding:7px 0">${safe.website}</td></tr>
            <tr><td style="padding:7px 0;color:#526873">Besoin principal</td><td style="padding:7px 0">${safe.need}</td></tr>
          </table>
          ${attributionHtml}
        </div>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Diagnostic e-mail provider rejected the request", response.status);
    return Response.json(
      { message: "L’envoi n’a pas pu aboutir. Réessayez dans un instant." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
