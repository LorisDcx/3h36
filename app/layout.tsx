import type { Metadata } from "next";
import { headers } from "next/headers";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:4173";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og-v3.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "3h36 agency — Collectif web, design & acquisition en Savoie",
      template: "%s — 3h36 Agency",
    },
    description:
      "Trois indépendants réunis pour concevoir identités, sites, contenus et actions de visibilité pilotables. Collectif basé en Savoie, projets locaux et à distance.",
    keywords: [
      "agence web Savoie",
      "collectif créatif Savoie",
      "identité visuelle Savoie",
      "création site internet",
      "SEO local",
      "photo vidéo entreprise",
    ],
    authors: [{ name: "3h36 Agency" }],
    creator: "3h36 Agency",
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "3h36 Agency",
      title: "Une image claire, un site solide et une visibilité augmentée.",
      description:
        "Un collectif web, design et acquisition en Savoie. Trois expertises complémentaires, un interlocuteur principal.",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "3h36 agency — collectif web, design et acquisition en Savoie" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Une image claire, un site solide et une visibilité augmentée.",
      description:
        "Collectif web, design et acquisition en Savoie.",
      images: [socialImage],
    },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "3h36 Agency",
  description:
    "Collectif de trois indépendants spécialisé en stratégie, web, identité, contenus, photo, vidéo et acquisition.",
  areaServed: ["Savoie", "Haute-Savoie", "Isère", "Ain", "Rhône", "Suisse romande"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Savoie",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Création de sites internet",
    "Identité visuelle",
    "Photographie et vidéo",
    "Stratégie de contenus",
    "SEO local",
    "Google Ads",
    "Web analytics",
    "Automatisation",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
