import Link from "next/link";
import { contact, footerLinks } from "@/lib/site-data";
import { AnalyticsConsentButton } from "./Analytics";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link href="/" className="footer-logo" aria-label="3h36 Agency — Accueil">
            <Logo />
          </Link>
          <p>
            Agence web, image et acquisition basée en Savoie. Sites, SEO, GEO,
            identité et contenus réunis autour d’une direction commune.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div className="footer-column" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="footer-column footer-contact">
          <h2>Parlons de votre projet</h2>
          {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : null}
          <p>{contact.location}</p>
          <Link href="/contact" className="text-link text-link-light">
            Parler de votre projet <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} 3h36 Agency</p>
        <div>
          <p>Image claire · site solide · visibilité augmentée</p>
          <AnalyticsConsentButton />
        </div>
      </div>
    </footer>
  );
}
