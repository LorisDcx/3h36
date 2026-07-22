"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderLink = {
  label: string;
  href: string;
  description?: string;
};

type HeaderMenu = {
  id: string;
  label: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  columns: readonly {
    title: string;
    links: readonly HeaderLink[];
  }[];
};

const headerMenus = [
  {
    id: "solutions",
    label: "Solutions",
    href: "/services",
    eyebrow: "Créer, rendre visible, convertir",
    title: "Le bon dispositif pour votre prochain cap.",
    description: "Sites, image de marque et acquisition réunis dans une même direction.",
    columns: [
      {
        title: "Créer",
        links: [
          { label: "Site vitrine", href: "/site-vitrine", description: "Une présence claire et crédible." },
          { label: "Site & acquisition", href: "/site-acquisition", description: "Un site pensé pour générer des demandes." },
          { label: "Outils métiers", href: "/solutions-metiers", description: "Des interfaces utiles à votre activité." },
          { label: "Identité & contenus", href: "/identite-visuelle-chambery", description: "Une image cohérente et reconnaissable." },
          { label: "Photo & vidéo", href: "/photo-video-entreprise-savoie", description: "Des contenus qui prouvent votre savoir-faire." },
        ],
      },
      {
        title: "Développer",
        links: [
          { label: "Référencement SEO", href: "/referencement-seo", description: "Être trouvé sur les recherches utiles." },
          { label: "Visibilité GEO", href: "/geo", description: "Devenir une source lisible par les IA." },
          { label: "Gestion Google Ads", href: "/gestion-google-ads", description: "Acheter une visibilité mesurable." },
          { label: "Accompagnement mensuel", href: "/accompagnement", description: "Faire progresser le dispositif dans la durée." },
        ],
      },
    ],
  },
  {
    id: "secteurs",
    label: "Secteurs",
    href: "/secteurs",
    eyebrow: "Des réponses contextualisées",
    title: "Votre marché avant nos outils.",
    description: "Des parcours et des leviers adaptés aux décisions réelles de vos prospects.",
    columns: [
      {
        title: "Par activité",
        links: [
          { label: "Entreprises du bâtiment", href: "/secteurs/batiment", description: "Chantiers, preuves et demandes de devis." },
          { label: "PME", href: "/secteurs/pme", description: "Structurer l’offre et soutenir la croissance." },
          { label: "Startups", href: "/secteurs/startups", description: "Convaincre au bon stade de maturité." },
          { label: "Indépendants", href: "/secteurs/independants", description: "Une présence professionnelle sans complexité." },
        ],
      },
      {
        title: "En Savoie",
        links: [
          { label: "Agence web à Chambéry", href: "/agence-web-chambery", description: "Le point d’entrée pour le bassin chambérien." },
          { label: "Agence web pour Aix-les-Bains", href: "/agence-web-aix-les-bains", description: "Tourisme, services et entreprises locales." },
          { label: "Agence web pour Albertville", href: "/agence-web-albertville", description: "Industrie, montagne et économie du territoire." },
        ],
      },
    ],
  },
  {
    id: "projects",
    label: "Réalisations",
    href: "/realisations",
    eyebrow: "Études de cas",
    title: "Des projets conçus pour être utilisés.",
    description: "Le contexte, les choix et le dispositif livré derrière chaque réalisation.",
    columns: [
      {
        title: "Projets à découvrir",
        links: [
          { label: "Plum", href: "/realisations/plum", description: "Plateforme, identité et expérience de marque." },
          { label: "Urgeza", href: "/realisations/urgeza", description: "E-commerce et univers de lancement." },
          { label: "AvisZen", href: "/realisations/aviszen", description: "Produit numérique et parcours de confiance." },
          { label: "Delco Ink", href: "/realisations/delco-ink", description: "Identité et présence digitale." },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Ressources",
    href: "/ressources",
    eyebrow: "Guides pratiques",
    title: "Décider avec plus de repères.",
    description: "Des analyses concrètes pour investir au bon endroit et mesurer ce qui compte.",
    columns: [
      {
        title: "Choisir ses leviers",
        links: [
          { label: "SEO ou Google Ads ?", href: "/ressources/seo-ou-google-ads-pme-locale", description: "Comparer vitesse, coût et durée." },
          { label: "Agence web ou freelance ?", href: "/ressources/agence-web-ou-freelance", description: "Choisir l’organisation adaptée." },
          { label: "Prix d’un site professionnel", href: "/ressources/prix-site-internet-professionnel-savoie", description: "Comprendre les vrais postes de valeur." },
        ],
      },
      {
        title: "SEO & intelligence artificielle",
        links: [
          { label: "SEO et GEO pour une PME", href: "/ressources/seo-vs-geo-pme", description: "Deux visibilités complémentaires." },
          { label: "Apparaître dans les réponses IA", href: "/ressources/apparaitre-chatgpt-google-ai", description: "Créer des contenus citables et fiables." },
          { label: "Refondre sans perdre son SEO", href: "/ressources/refonte-site-sans-perdre-referencement", description: "Sécuriser URLs, contenus et signaux." },
        ],
      },
    ],
  },
  {
    id: "agency",
    label: "Agence",
    href: "/a-propos",
    eyebrow: "Le collectif 3h36",
    title: "Une équipe dimensionnée pour le projet.",
    description: "Stratégie, création et diffusion coordonnées par un interlocuteur clair.",
    columns: [
      {
        title: "Nous connaître",
        links: [
          { label: "À propos", href: "/a-propos", description: "Notre collectif et notre manière de travailler." },
          { label: "Notre méthode", href: "/methode", description: "Les étapes qui cadrent chaque projet." },
        ],
      },
      {
        title: "Travailler ensemble",
        links: [
          { label: "Accompagnement", href: "/accompagnement", description: "Un suivi régulier, sans équipe surdimensionnée." },
          { label: "Nous contacter", href: "/contact", description: "Parlons de votre entreprise et de votre besoin." },
        ],
      },
    ],
  },
] as const satisfies readonly HeaderMenu[];

function isRouteActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

function isMenuActive(pathname: string, menu: HeaderMenu) {
  return (
    isRouteActive(pathname, menu.href) ||
    menu.columns.some((column) => column.links.some((link) => isRouteActive(pathname, link.href)))
  );
}

export function Logo() {
  return (
    <span className="brand" aria-hidden="true">
      <span className="brand-wordmark">
        <span className="brand-hour">3h</span>
        <span className="brand-minute">36</span>
      </span>
      <span className="brand-copy">
        <strong className="brand-agency">Agency</strong>
        <span className="brand-signature">Web · image · acquisition</span>
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function closeFromOutside(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  function closeNavigation() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  return (
    <header ref={headerRef} className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="logo-link" aria-label="3h36 Agency — Accueil" onClick={closeNavigation}>
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {headerMenus.map((menu) => (
            <DesktopDropdown
              key={menu.id}
              menu={menu}
              active={isMenuActive(pathname, menu)}
              open={openMenu === menu.id}
              onOpen={() => setOpenMenu(menu.id)}
              onToggle={() => setOpenMenu((current) => (current === menu.id ? null : menu.id))}
              onClose={() => setOpenMenu(null)}
            />
          ))}

        </nav>

        <Link className="button button-small header-cta" href="/contact" onClick={closeNavigation}>
          <span>Parler de votre projet</span>
          <span className="header-cta-arrow" aria-hidden="true">↗</span>
        </Link>

        <div className="mobile-navigation">
          <button
            className="mobile-nav-toggle"
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-controls="mobile-navigation-panel"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span />
            <span />
          </button>

          <div
            id="mobile-navigation-panel"
            className="mobile-nav-panel"
            data-open={mobileOpen ? "true" : "false"}
            aria-hidden={!mobileOpen}
          >
            <nav aria-label="Navigation mobile">
              <div className="mobile-nav-heading">
                <span>Explorer 3h36</span>
                <span>Web · image · acquisition</span>
              </div>

              {headerMenus.map((menu) => (
                <MobileDropdown key={menu.id} menu={menu} pathname={pathname} onNavigate={closeNavigation} />
              ))}

              <Link className="button mobile-nav-cta" href="/contact" onClick={closeNavigation} tabIndex={mobileOpen ? 0 : -1}>
                Parler de votre projet
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopDropdown({
  menu,
  active,
  open,
  onOpen,
  onToggle,
  onClose,
}: {
  menu: HeaderMenu;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
}) {
  const dropdownId = `desktop-${menu.id}-navigation`;

  return (
    <div
      className={`desktop-nav-menu${open ? " is-open" : ""}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        className={`nav-menu-trigger${active ? " is-active" : ""}`}
        type="button"
        aria-controls={dropdownId}
        aria-expanded={open}
        onClick={onToggle}
        onFocus={onOpen}
      >
        <span>{menu.label}</span>
        <span className="nav-menu-chevron" aria-hidden="true">⌄</span>
      </button>

      <div id={dropdownId} className="nav-dropdown" aria-hidden={!open}>
        <div className="nav-dropdown-inner shell">
          <Link className="nav-dropdown-overview" href={menu.href} onClick={onClose}>
            <span className="nav-dropdown-eyebrow">{menu.eyebrow}</span>
            <strong>{menu.title}</strong>
            <span className="nav-dropdown-description">{menu.description}</span>
            <span className="nav-dropdown-overview-link">
              Tout découvrir <span aria-hidden="true">↗</span>
            </span>
          </Link>

          <div className="nav-dropdown-columns">
            {menu.columns.map((column) => (
              <div key={column.title} className="nav-dropdown-column">
                <span className="nav-dropdown-column-title">{column.title}</span>
                <div>
                  {column.links.map((link) => (
                    <Link key={link.href} className="nav-dropdown-link" href={link.href} onClick={onClose}>
                      <strong>{link.label}</strong>
                      {link.description ? <span>{link.description}</span> : null}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({
  menu,
  pathname,
  onNavigate,
}: {
  menu: HeaderMenu;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = isMenuActive(pathname, menu);

  return (
    <details className={`mobile-nav-group${active ? " is-active" : ""}`}>
      <summary>
        <span>{menu.label}</span>
        <span className="mobile-nav-group-icon" aria-hidden="true">+</span>
      </summary>
      <div className="mobile-nav-group-links">
        <Link className="mobile-nav-overview" href={menu.href} onClick={onNavigate}>
          Toutes les pages {menu.label.toLocaleLowerCase("fr")}
        </Link>
        {menu.columns.flatMap((column) =>
          column.links.map((link) => (
            <Link key={link.href} href={link.href} onClick={onNavigate}>
              {link.label}
            </Link>
          )),
        )}
      </div>
    </details>
  );
}
