import { SectorSeoPage, createSectorMetadata } from "@/components/SectorSeoPage";
import { seoSectorPagesByPath } from "@/lib/seo-sector-pages";

const page = seoSectorPagesByPath.secteurs;

export const metadata = createSectorMetadata(page);

export default function SectorsPage() {
  return <SectorSeoPage page={page} />;
}
