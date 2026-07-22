import Link from "next/link";
import {
  approachPillars,
  faqItems,
  monthlyPlans,
  offers,
  problems,
  processSteps,
  projects,
  sectors,
} from "@/lib/site-data";

const reassurance = [
  "Basée en Savoie",
  "Interlocuteur unique",
  "SEO et tracking selon la formule",
  "Suivi après la mise en ligne",
];

const articles = [
  {
    category: "Création web",
    title: "Combien coûte un site internet professionnel en 2026 ?",
    description: "Les postes qui composent un devis, les écarts de prix et le budget à prévoir selon l’objectif.",
  },
  {
    category: "Acquisition",
    title: "Site vitrine ou site d’acquisition : quelle différence ?",
    description: "Deux approches, deux niveaux d’ambition et des moyens de mesure très différents.",
  },
  {
    category: "SEO local",
    title: "Comment obtenir davantage de demandes de devis avec son site ?",
    description: "Les fondations d’un parcours qui rassure, qualifie et facilite réellement le passage à l’action.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function ProductWindow({ name }: { name: string }) {
  return (
    <div className="product-window" aria-label={`Aperçu d’interface pour ${name}`} role="img">
      <div className="window-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="window-content" aria-hidden="true">
        <div className="window-sidebar">
          <span className="window-logo" />
          <span className="window-line" />
          <span className="window-line" />
          <span className="window-line" />
          <span className="window-line" />
        </div>
        <div className="window-main">
          <span className="window-title" />
          <div className="window-metrics">
            <span />
            <span />
            <span />
          </div>
          <div className="window-chart" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const publishedPlans = monthlyPlans.filter((plan) => plan.published);

  return (
    <main id="contenu">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Agence web, acquisition et automatisation en Savoie</p>
            <h1>
              Des sites qui travaillent, <em>même à 3h36.</em>
            </h1>
            <p className="hero-lead">
              3h36 Agency conçoit des sites professionnels, des parcours d’acquisition et des outils sur mesure pour aider les entreprises à gagner en visibilité, obtenir davantage de demandes et automatiser leur activité.
            </p>
            <div className="cta-row">
              <Link className="button" href="/contact">
                Discuter de votre projet <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/realisations">
                Voir les réalisations
              </Link>
            </div>
            <div className="trust-row" aria-label="Points de réassurance">
              {reassurance.map((item) => (
                <div className="trust-item" key={item}>
                  <span className="trust-dot" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="night-panel" aria-label="Votre présence digitale reste active">
            <div className="panel-top">
              <span>Activité digitale</span>
              <span className="live-status">En ligne</span>
            </div>
            <div className="clock-block">
              <span className="clock-label">Pendant que l’entreprise dort</span>
              <span className="clock-time">
                03:36<sup>am</sup>
              </span>
            </div>
            <div className="signal-list">
              <div className="signal">
                <span className="signal-icon" aria-hidden="true">↗</span>
                <span><strong>Votre site rassure</strong><small>Image et contenus clairs</small></span>
                <span className="signal-state">Actif</span>
              </div>
              <div className="signal">
                <span className="signal-icon" aria-hidden="true">◎</span>
                <span><strong>Vos parcours qualifient</strong><small>Demandes mieux structurées</small></span>
                <span className="signal-state">Actif</span>
              </div>
              <div className="signal">
                <span className="signal-icon" aria-hidden="true">✓</span>
                <span><strong>Vos outils automatisent</strong><small>Moins de tâches manuelles</small></span>
                <span className="signal-state">Actif</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="problem-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Le constat</p>
              <h2 id="problem-title">Votre site est-il réellement utile à votre entreprise&nbsp;?</h2>
            </div>
            <p>Un site peut être en ligne sans convaincre, sans être visible et sans aider vos équipes. C’est souvent là que le vrai travail commence.</p>
          </div>
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <article className="problem-card" key={problem}>
                <span className="card-number">0{index + 1}</span>
                <h3>{problem}</h3>
                <p>{[
                  "Votre image en ligne ne reflète plus la qualité réelle de votre travail.",
                  "Le trafic existe, mais le parcours ne donne aucune raison claire de passer à l’action.",
                  "Vos services restent difficiles à trouver au moment où les clients les recherchent.",
                  "Les mêmes informations sont saisies, copiées ou relancées à la main chaque semaine.",
                ][index]}</p>
              </article>
            ))}
          </div>
          <p className="section-conclusion">Un site ne doit pas uniquement présenter votre activité. Il doit guider, rassurer, mesurer et faciliter le passage à l’action.</p>
        </div>
      </section>

      <section className="section section-dark" id="services" aria-labelledby="offers-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Trois offres lisibles</p>
              <h2 id="offers-title">Une solution dimensionnée pour votre objectif.</h2>
            </div>
            <p>Chaque offre a un rôle précis. Les prix d’entrée sont visibles, les limites sont annoncées et le périmètre est cadré avant de commencer.</p>
          </div>
          <div className="offer-grid">
            {offers.map((offer, index) => (
              <article className={`offer-card${offer.badge ? " featured" : ""}`} key={offer.id}>
                {offer.badge ? <span className="badge">{offer.badge}</span> : null}
                <p className="card-kicker">Offre 0{index + 1}</p>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <strong className="price">{offer.price}</strong>
                <ul className="offer-list">
                  {offer.features.slice(0, 5).map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <Link className={`text-link${offer.badge ? "" : " text-link-light"}`} href={offer.cta.href}>
                  {offer.cta.label} <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Au-delà du design</p>
              <h2 id="approach-title">Une approche plus complète que la simple création d’un site.</h2>
            </div>
            <p>Comprendre le métier, concevoir le bon parcours, mesurer les actions utiles puis améliorer ce qui compte.</p>
          </div>
          <div className="approach-grid">
            {approachPillars.map((pillar, index) => (
              <article className="approach-card" key={pillar.title}>
                <span className="approach-index">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="realisations" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Projets sélectionnés</p>
              <h2 id="projects-title">Concevoir utile, du site au produit digital.</h2>
            </div>
            <p>Trois projets qui illustrent des problématiques différentes. Les statuts sont indiqués avec transparence, sans résultat inventé.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.status}</span><span>{project.sector}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.solution}</p>
                  <Link className="text-link" href="/realisations">
                    Voir le projet <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                <div className="project-visual">
                  <ProductWindow name={project.name} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="sectors-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Secteurs accompagnés</p>
              <h2 id="sectors-title">Pour les entreprises qui vivent de leurs demandes clients.</h2>
            </div>
            <p>Une attention particulière aux activités locales, techniques et B2B où chaque contact qualifié a une vraie valeur.</p>
          </div>
          <ol className="sector-list">
            {sectors.map((sector, index) => <li key={sector}><span>0{index + 1}</span>{sector}</li>)}
          </ol>
        </div>
      </section>

      <section className="section" id="methode" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Une méthode visible</p>
              <h2 id="process-title">Savoir où l’on va, à chaque étape.</h2>
            </div>
            <p>Du premier échange au suivi, le projet avance par validations claires. Vous gardez une vision du périmètre, du planning et des prochaines décisions.</p>
          </div>
          <ol className="process-grid">
            {processSteps.map((step) => <li className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3></li>)}
          </ol>
          <Link className="text-link" href="/methode">Découvrir la méthode complète <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section section-soft" id="accompagnement" aria-labelledby="plans-title">
        <div className="shell plans-preview">
          <div>
            <p className="kicker">Après la mise en ligne</p>
            <h2 id="plans-title">Un accompagnement qui reste un choix.</h2>
            <p>Maintenance, visibilité locale ou acquisition&nbsp;: ces formules prolongent le travail, sans frais cachés ni promesse irréaliste.</p>
            <Link className="text-link" href="/accompagnement">Voir les accompagnements <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="plan-lines">
            {publishedPlans.map((plan) => <div className="plan-line" key={plan.id}><strong>{plan.name}</strong><span>{plan.price}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="a-propos" aria-labelledby="about-title">
        <div className="shell page-layout">
          <div>
            <p className="kicker">3h36 Agency</p>
            <p>Basée en Savoie.<br />Projets locaux et à distance.</p>
          </div>
          <div>
            <h2 id="about-title">Un interlocuteur unique, du besoin métier à la mise en ligne.</h2>
            <p className="hero-lead">3h36 Agency est née d’une conviction simple&nbsp;: un site web doit être plus qu’une vitrine. Il doit aider une entreprise à être comprise, trouvée et contactée.</p>
            <Link className="text-link" href="/a-propos">Découvrir l’agence <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="conseils" aria-labelledby="articles-title">
        <div className="shell">
          <div className="section-heading">
            <div><p className="kicker">Conseils</p><h2 id="articles-title">Des repères concrets pour mieux décider.</h2></div>
            <p>Des contenus pensés pour les dirigeants qui veulent comprendre les choix, les budgets et les leviers avant d’investir.</p>
          </div>
          <div className="problem-grid">
            {articles.map((article, index) => (
              <article className="problem-card" key={article.title}>
                <span className="card-number">0{index + 1} · {article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </article>
            ))}
            <article className="problem-card">
              <span className="card-number">À venir</span>
              <h3>Le blog se construit.</h3>
              <p>Les premiers guides détaillés seront publiés progressivement, avec un contenu utile plutôt que des pages remplies pour le référencement.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="shell faq-wrap">
          <div className="faq-intro"><p className="kicker">Questions fréquentes</p><h2 id="faq-title">Avant de commencer.</h2><p>Une question plus spécifique&nbsp;? Le premier échange sert aussi à vérifier si 3h36 Agency est le bon partenaire.</p></div>
          <div className="faq-list">
            {faqItems.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact" aria-labelledby="final-cta-title">
        <div className="shell final-cta-inner">
          <h2 id="final-cta-title">Votre prochain site doit-il simplement exister ou réellement travailler pour vous&nbsp;?</h2>
          <Link className="button button-light" href="/contact">Parler de mon projet <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
