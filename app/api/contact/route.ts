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

type ContactPayload = {
  need: NeedKey;
  name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  consent: true;
  contactUrl?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNeedKey(value: string): value is NeedKey {
  return value in NEEDS;
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

  return { need, name, company, email, phone, description, consent: true, contactUrl };
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
