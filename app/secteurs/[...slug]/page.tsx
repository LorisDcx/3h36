import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorSeoPage, createSectorMetadata } from "@/components/SectorSeoPage";
import {
  seoSectorPagesByPath,
  type SeoSectorPagePath,
} from "@/lib/seo-sector-pages";

type PageProps = { params: Promise<{ slug: string[] }> };

const sectorPaths = Object.keys(seoSectorPagesByPath) as SeoSectorPagePath[];

function getPage(slug: string[]) {
  const path = `secteurs/${slug.join("/")}` as SeoSectorPagePath;
  return path in seoSectorPagesByPath ? seoSectorPagesByPath[path] : null;
}

export function generateStaticParams() {
  return sectorPaths
    .filter((path) => path !== "secteurs")
    .map((path) => ({ slug: path.split("/").slice(1) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  return page ? createSectorMetadata(page) : {};
}

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  return <SectorSeoPage page={page} />;
}
