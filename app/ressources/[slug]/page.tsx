import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seoArticles, type SeoArticle } from "@/lib/seo-articles";

type PageProps = { params: Promise<{ slug: string }> };

const SITE_URL = "https://www.3h36agency.fr";
const SOCIAL_IMAGE = `${SITE_URL}/og-seo-geo-v1.jpg`;

function getArticle(slug: string): SeoArticle | undefined {
  return seoArticles.find((article) => article.slug === slug);
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

const headingId = (heading: string, index: number) => {
  const normalized = heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `section-${index + 1}-${normalized}`;
};

const relatedArticleSlugs: Record<SeoArticle["slug"], readonly SeoArticle["slug"][]> = {
  "seo-ou-google-ads-pme-locale": ["google-business-profile-entreprise-batiment", "prix-site-internet-professionnel-savoie"],
  "site-internet-batiment-generer-devis": ["google-business-profile-entreprise-batiment", "seo-ou-google-ads-pme-locale"],
  "refonte-site-sans-perdre-referencement": ["prix-site-internet-professionnel-savoie", "agence-web-ou-freelance"],
  "prix-site-internet-professionnel-savoie": ["agence-web-ou-freelance", "refonte-site-sans-perdre-referencement"],
  "seo-vs-geo-pme": ["apparaitre-chatgpt-google-ai", "mesurer-visibilite-ia-entreprise"],
  "apparaitre-chatgpt-google-ai": ["seo-vs-geo-pme", "mesurer-visibilite-ia-entreprise"],
  "mesurer-visibilite-ia-entreprise": ["apparaitre-chatgpt-google-ai", "seo-vs-geo-pme"],
  "agence-web-ou-freelance": ["prix-site-internet-professionnel-savoie", "refonte-site-sans-perdre-referencement"],
  "google-business-profile-entreprise-batiment": ["site-internet-batiment-generer-devis", "seo-ou-google-ads-pme-locale"],
  "lancer-marque-site-startup": ["agence-web-ou-freelance", "prix-site-internet-professionnel-savoie"],
};

export const dynamicParams = false;

export function generateStaticParams() {
  return seoArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${SITE_URL}/ressources/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    authors: [{ name: "3h36 Agency", url: SITE_URL }],
    alternates: { canonical: `/ressources/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url,
      siteName: "3h36 Agency",
      title: article.seoTitle,
      description: article.seoDescription,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [SITE_URL],
      section: article.category,
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [SOCIAL_IMAGE],
    },
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleUrl = `${SITE_URL}/ressources/${article.slug}`;
  const relatedArticles = relatedArticleSlugs[article.slug]
    .map((relatedSlug) => getArticle(relatedSlug))
    .filter((candidate): candidate is SeoArticle => Boolean(candidate));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "fr-FR",
    articleSection: article.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: SOCIAL_IMAGE,
    isPartOf: { "@type": "Blog", name: "Ressources 3h36 Agency", url: `${SITE_URL}/ressources` },
    isRelatedTo: relatedArticles.map((relatedArticle) => ({
      "@type": "Article",
      name: relatedArticle.title,
      url: `${SITE_URL}/ressources/${relatedArticle.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Ressources", item: `${SITE_URL}/ressources` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  return (
    <main id="contenu" className="resource-article-page">
      <article>
        <header className="resource-article-hero">
          <div className="shell">
            <nav className="seo-breadcrumb" aria-label="Fil d’Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true">/</span>
              <Link href="/ressources">Ressources</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{article.title}</span>
            </nav>

            <div className="resource-article-hero-grid">
              <div>
                <p className="eyebrow">{article.category} · Guide pratique</p>
                <h1>{article.title}</h1>
                <p className="resource-article-description">{article.description}</p>
              </div>
              <aside className="resource-article-meta" aria-label="Informations sur ce guide">
                <div>
                  <span>Publié le</span>
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                </div>
                <div>
                  <span>Mis à jour le</span>
                  <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
                </div>
                <div>
                  <span>Temps de lecture</span>
                  <strong>{article.readingTime}</strong>
                </div>
                <div>
                  <span>Édité par</span>
                  <strong>3h36 Agency</strong>
                </div>
              </aside>
            </div>
          </div>
        </header>

        <section className="resource-article-opening" aria-labelledby="article-summary-title">
          <div className="shell resource-article-opening-grid">
            <div className="resource-article-intro">
              <p>{article.intro}</p>
            </div>
            <aside className="resource-key-points">
              <p className="section-index" id="article-summary-title">À retenir</p>
              <ul>
                {article.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <div className="resource-article-layout shell">
          <aside className="resource-article-toc" aria-label="Sommaire">
            <p>Dans ce guide</p>
            <ol>
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#${headingId(section.heading, index)}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="resource-article-content">
            {article.sections.map((section, index) => (
              <section
                className="resource-prose-section"
                id={headingId(section.heading, index)}
                key={section.heading}
                aria-labelledby={`${headingId(section.heading, index)}-title`}
              >
                <span className="resource-section-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 id={`${headingId(section.heading, index)}-title`}>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <section className="resource-read-next" aria-labelledby="resource-read-next-title">
          <div className="shell">
            <div className="resource-section-heading">
              <div>
                <p className="section-index">À lire ensuite</p>
                <p className="kicker">Deux sujets pour poursuivre</p>
              </div>
              <h2 id="resource-read-next-title">Relier les décisions plutôt qu’accumuler les conseils.</h2>
            </div>
            <div className="resource-read-next-grid">
              {relatedArticles.map((relatedArticle) => (
                <Link href={`/ressources/${relatedArticle.slug}`} key={relatedArticle.slug}>
                  <span>{relatedArticle.category} · {relatedArticle.readingTime}</span>
                  <strong>{relatedArticle.title}</strong>
                  <p>{relatedArticle.seoDescription}</p>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="resource-references" aria-labelledby="references-title">
          <div className="shell resource-reference-grid">
            <div>
              <p className="section-index">Sources</p>
              <h2 id="references-title">Pour vérifier et approfondir.</h2>
            </div>
            <div className="resource-reference-list">
              {article.references.map((reference, index) => (
                <a href={reference.url} target="_blank" rel="noreferrer" key={reference.url}>
                  <span>{String(index + 1).padStart(2, "0")} · {reference.publisher}</span>
                  <strong>{reference.title}</strong>
                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="resource-faq-section" aria-labelledby="resource-faq-title">
          <div className="shell resource-faq-grid">
            <div>
              <p className="section-index">Questions fréquentes</p>
              <h2 id="resource-faq-title">Les réponses courtes aux questions qui reviennent.</h2>
            </div>
            <div className="seo-faq">
              {article.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span><i aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <aside className="resource-related" aria-labelledby="resource-related-title">
          <div className="shell">
            <div className="resource-section-heading">
              <div>
                <p className="section-index">Passer à l’action</p>
                <p className="kicker">Les expertises liées à ce guide</p>
              </div>
              <h2 id="resource-related-title">Approfondir le sujet sur votre entreprise.</h2>
            </div>
            <div className="resource-related-grid">
              {article.relatedCommercialRoutes.map((route, index) => (
                <Link href={route.href} key={route.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{route.label}</strong>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
            <div className="resource-related-cta">
              <p>Vous voulez relier ces principes à votre marché, votre zone et votre budget ?</p>
              <Link className="button" href="/contact">
                Parler de votre projet <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </aside>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
