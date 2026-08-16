import type { MetadataRoute } from "next";
import { pageContentByRoute } from "@/lib/page-content";
import { seoArticles } from "@/lib/seo-articles";
import { seoCommercialPagesBySlug } from "@/lib/seo-pages";
import { seoSectorPagesByPath } from "@/lib/seo-sector-pages";
import { projects } from "@/lib/site-data";

const SITE_URL = "https://www.3h36agency.fr";
const LAST_MODIFIED = "2026-07-22";
const NON_INDEXABLE_ROUTES = new Set([
  "/mentions-legales",
  "/politique-confidentialite",
  "/cookies",
]);

function changeFrequencyFor(pathname: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (pathname === "/") return "weekly";
  if (pathname.startsWith("/ressources/")) return "monthly";
  if (pathname.startsWith("/realisations/")) return "monthly";
  return "monthly";
}

function priorityFor(pathname: string): number {
  if (pathname === "/") return 1;
  if (["/contact", "/services", "/secteurs", "/realisations", "/ressources"].includes(pathname)) return 0.8;
  if (["/agence-web-chambery", "/referencement-seo", "/geo", "/gestion-google-ads"].includes(pathname)) return 0.85;
  if (pathname.startsWith("/secteurs/")) return 0.75;
  if (pathname.startsWith("/ressources/")) return 0.7;
  if (pathname.startsWith("/realisations/")) return 0.7;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const legacyRoutes = Object.keys(pageContentByRoute).filter((pathname) => !NON_INDEXABLE_ROUTES.has(pathname));
  const paths = new Set<string>([
    "/",
    "/contact",
    "/realisations",
    "/ressources",
    ...legacyRoutes,
    ...Object.values(seoCommercialPagesBySlug).map((page) => `/${page.slug}`),
    ...Object.values(seoSectorPagesByPath).map((page) => `/${page.path}`),
    ...seoArticles.map((article) => `/ressources/${article.slug}`),
    ...projects.map((project) => `/realisations/${project.slug}`),
  ]);

  return [...paths].map((pathname) => ({
    url: `${SITE_URL}${pathname}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: changeFrequencyFor(pathname),
    priority: priorityFor(pathname),
  }));
}
