import Link from "next/link";
import { contact, footerLinks } from "@/lib/site-data";
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
            Sites, acquisition et solutions digitales utiles pour TPE et PME.
            Basée en Savoie, disponible partout en France et en Suisse romande.
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
            Obtenir une estimation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} 3h36 Agency</p>
        <p>Un digital qui reste utile, même quand vous dormez.</p>
      </div>
    </footer>
  );
}
