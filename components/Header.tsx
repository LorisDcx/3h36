import Link from "next/link";
import { navigation } from "@/lib/site-data";

export function Logo() {
  return (
    <span className="brand" aria-hidden="true">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-time">3h36</span>
        <span className="brand-spark">+</span>
      </span>
      <span className="brand-copy" aria-hidden="true">
        <strong className="brand-agency">Agency</strong>
        <span className="brand-signature">03 expertises · 01 direction</span>
      </span>
    </span>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="logo-link" aria-label="3h36 Agency — Accueil">
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-small header-cta" href="/contact">
          Parler de votre projet
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Navigation mobile">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="button" href="/contact">
              Parler de votre projet
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
