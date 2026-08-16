"use client";

import { usePathname } from "next/navigation";
import { Analytics } from "./Analytics";
import { Footer } from "./Footer";
import { Header } from "./Header";

const FOCUSED_LANDING_ROUTES = new Set(["/offre-lancement", "/site-internet-batiment-savoie"]);

export function SiteChrome({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isFocusedLanding = FOCUSED_LANDING_ROUTES.has(pathname);

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      {!isFocusedLanding ? <Header /> : null}
      {children}
      {!isFocusedLanding ? <Footer /> : null}
      <Analytics />
    </>
  );
}
