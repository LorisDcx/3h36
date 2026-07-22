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
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "3h36 Agency — Création de sites web et acquisition en Savoie",
      template: "%s — 3h36 Agency",
    },
    description:
      "Sites vitrines, sites d’acquisition, SEO local, Google Ads et outils sur mesure pour TPE et PME. Découvrez 3h36 Agency, agence web basée en Savoie.",
    keywords: [
      "agence web Savoie",
      "création site internet",
      "site internet artisan",
      "SEO local",
      "génération de leads",
      "automatisation PME",
    ],
    authors: [{ name: "3h36 Agency" }],
    creator: "3h36 Agency",
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "3h36 Agency",
      title: "Des sites qui travaillent, même à 3h36.",
      description:
        "Sites, acquisition et outils sur mesure pour gagner en visibilité, en efficacité et en demandes commerciales.",
      images: [{ url: socialImage, width: 1536, height: 1024, alt: "3h36 Agency — Des sites qui travaillent, même à 3h36." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Des sites qui travaillent, même à 3h36.",
      description:
        "Sites, acquisition et outils sur mesure pour les entreprises ambitieuses.",
      images: [socialImage],
    },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "3h36 Agency",
  description:
    "Agence web indépendante spécialisée en création de sites, acquisition digitale et automatisation.",
  areaServed: ["Savoie", "Haute-Savoie", "Isère", "Ain", "Rhône", "Suisse romande"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Savoie",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Création de sites internet",
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
