const NEEDS = {
  "web-growth-tools": {
    label: "Site web, acquisition & outils",
  },
  "photo-video": {
    label: "Photo & vidéo",
  },
  "identity-content": {
    label: "Identité & contenu",
  },
} as const;

const DEFAULT_CONTACT_EMAIL = "Lorisdcx.pro@gmail.com";

type NeedKey = keyof typeof NEEDS;

type ContactAttribution = {
  landingPage: string;
  referrer: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
};

type ContactPayload = {
  need: NeedKey;
  name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  consent: true;
  contactUrl?: string;
  attribution: ContactAttribution | null;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNeedKey(value: string): value is NeedKey {
  return value in NEEDS;
}

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseAttribution(value: unknown): ContactAttribution | null {
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

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;

  const input = value as Record<string, unknown>;
  const need = cleanText(input.need, 40);
  const name = cleanText(input.name, 100);
  const company = cleanText(input.company, 120);
  const email = cleanText(input.email, 200).toLowerCase();
  const phone = cleanText(input.phone, 40);
  const description = cleanText(input.description, 3000);
  const contactUrl = cleanText(input.contactUrl, 300);
  const attribution = parseAttribution(input.attribution);

  if (
    !isNeedKey(need) ||
    name.length < 2 ||
    company.length < 2 ||
    !EMAIL_PATTERN.test(email) ||
    description.length < 20 ||
    input.consent !== true
  ) {
    return null;
  }

  return { need, name, company, email, phone, description, consent: true, contactUrl, attribution };
}

export async function POST(request: Request) {
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
    return Response.json(
      { message: "Vérifiez les champs obligatoires avant de réessayer." },
      { status: 400 },
    );
  }

  if (payload.contactUrl) {
    return Response.json({ ok: true });
  }

  const need = NEEDS[payload.need];
  const recipient = process.env.CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!recipient || !apiKey || !from) {
    return Response.json(
      { message: "L’envoi est momentanément indisponible. Réessayez un peu plus tard." },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(payload.name);
  const safeCompany = escapeHtml(payload.company);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone || "Non renseigné");
  const safeDescription = escapeHtml(payload.description).replaceAll("\n", "<br>");
  const safeNeed = escapeHtml(need.label);
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
        <h2 style="font-size:16px;margin:0 0 14px">Attribution de navigation jointe à la demande</h2>
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
      subject: `[3h36] ${need.label} · ${payload.company}`,
      text: [
        `Besoin : ${need.label}`,
        `Nom : ${payload.name}`,
        `Entreprise : ${payload.company}`,
        `E-mail : ${payload.email}`,
        `Téléphone : ${payload.phone || "Non renseigné"}`,
        "",
        payload.description,
        ...attributionText,
      ].join("\n"),
      html: `
        <h1 style="font-size:22px;margin:0 0 20px">Nouvelle demande 3h36</h1>
        <p><strong>Besoin :</strong> ${safeNeed}</p>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Entreprise :</strong> ${safeCompany}</p>
        <p><strong>E-mail :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safePhone}</p>
        <hr style="border:0;border-top:1px solid #d9d9d9;margin:24px 0">
        <p style="line-height:1.6">${safeDescription}</p>
        ${attributionHtml}
      `,
    }),
  });

  if (!response.ok) {
    console.error("Contact e-mail provider rejected the request", response.status);
    return Response.json(
      { message: "L’envoi n’a pas pu aboutir. Réessayez dans un instant." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
