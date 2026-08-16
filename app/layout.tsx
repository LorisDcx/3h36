import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const SITE_URL = "https://www.3h36agency.fr";
const SOCIAL_IMAGE = `${SITE_URL}/og-seo-geo-v1.jpg`;
const SITE_DESCRIPTION =
  "Agence web en Savoie pour PME, entreprises du bâtiment, startups et experts : sites, identité, SEO, GEO, Google Ads, photo et vidéo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "3h36 Agency",
  title: {
    default: "Agence web en Savoie : sites, SEO & acquisition | 3h36",
    template: "%s — 3h36 Agency",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "agence web Savoie",
    "collectif créatif Savoie",
    "identité visuelle Savoie",
    "création site internet",
    "SEO local",
    "GEO moteurs IA",
    "Google Ads Savoie",
    "agence web bâtiment",
    "photo vidéo entreprise",
  ],
  authors: [{ name: "3h36 Agency", url: SITE_URL }],
  creator: "3h36 Agency",
  publisher: "3h36 Agency",
  category: "Web, design et acquisition",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "3h36 Agency",
    title: "Une image claire, un site solide et une visibilité augmentée.",
    description:
      "Un collectif web, communication et image en Savoie. Un interlocuteur principal, des expertises coordonnées.",
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "3h36 Agency — agence web, SEO, GEO et acquisition en Savoie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Une image claire, un site solide et une visibilité augmentée.",
    description: "Collectif web, design et acquisition en Savoie.",
    images: [SOCIAL_IMAGE],
  },
};

const organizationId = `${SITE_URL}/#organization`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "3h36 Agency",
      url: SITE_URL,
      email: "contact@3h36agency.fr",
      telephone: "+33 6 11 15 75 01",
      description:
        "Collectif de deux indépendants spécialisé en stratégie web, acquisition, communication, image et direction graphique.",
      image: {
        "@type": "ImageObject",
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Savoie",
      },
      knowsAbout: [
        "Création de sites internet",
        "Identité visuelle",
        "Photographie et vidéo",
        "Stratégie de contenus",
        "SEO local",
        "Generative Engine Optimization",
        "Google Ads",
        "Web analytics",
        "Automatisation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@3h36agency.fr",
        telephone: "+33 6 11 15 75 01",
        availableLanguage: "fr",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services web, image et acquisition",
        itemListElement: [
          { "@type": "OfferCatalog", name: "Création et refonte de sites internet" },
          { "@type": "OfferCatalog", name: "Référencement SEO et visibilité GEO" },
          { "@type": "OfferCatalog", name: "Gestion Google Ads" },
          { "@type": "OfferCatalog", name: "Identité visuelle" },
          { "@type": "OfferCatalog", name: "Photo et vidéo d’entreprise" },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "3h36 Agency",
      inLanguage: "fr-FR",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <SiteChrome>{children}</SiteChrome>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
