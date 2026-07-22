import Link from "next/link";
import Image from "next/image";
import {
  clientMarks,
  collectiveRoles,
  expertises,
  faqItems,
  guarantees,
  monthlyPlans,
  offers,
  processSteps,
  projects,
} from "@/lib/site-data";

type ClientMark = (typeof clientMarks)[number];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function ClientLogo({ client, duplicate = false }: { client: ClientMark; duplicate?: boolean }) {
  return (
    <a
      className="client-mark"
      href={client.href}
      target="_blank"
      rel="noreferrer"
      aria-label={duplicate ? undefined : `Voir le site ${client.name}`}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      {"image" in client ? (
        <span className={`client-logo-image client-${client.name.toLowerCase().replaceAll(" ", "-")}`}>
          <Image src={client.image} alt={duplicate ? "" : client.name} width={160} height={52} loading="lazy" unoptimized />
          {"wordmark" in client ? <strong>{client.wordmark}</strong> : null}
        </span>
      ) : (
        <strong className={`client-wordmark client-${client.name.toLowerCase().replaceAll(" ", "-")}`}>
          {client.wordmark}
        </strong>
      )}
    </a>
  );
}

export default function Home() {
  return (
    <main id="contenu">
      <section className="agency-hero" aria-labelledby="hero-title">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="shell agency-hero-grid">
          <div className="agency-hero-copy">
            <p className="eyebrow">Collectif web, design & acquisition en Savoie</p>
            <h1 id="hero-title">
              Faire émerger une image claire, un site solide et une <em>visibilité utile.</em>
            </h1>
            <p className="agency-hero-lead">
              3h36 agency réunit trois indépendants complémentaires pour concevoir des identités, des sites,
              des contenus et des actions de visibilité qui servent réellement l’activité de ses clients.
            </p>
            <div className="cta-row">
              <Link className="button" href="/contact">
                Parler de votre projet <span aria-hidden="true">↗</span>
              </Link>
              <a className="button button-secondary" href="#offres">
                Voir les offres
              </a>
            </div>
            <dl className="hero-facts" aria-label="Le collectif en trois repères">
              <div><dt>03</dt><dd>expertises complémentaires</dd></div>
              <div><dt>01</dt><dd>interlocuteur principal</dd></div>
              <div><dt>100%</dt><dd>sur mesure, sans formule opaque</dd></div>
            </dl>
          </div>

          <div className="hero-projects" aria-label="Sélection de projets réels">
            <a className="hero-project hero-project-main" href="https://www.monaviszen.fr/" target="_blank" rel="noreferrer">
              <Image src="/images/projects/aviszen-home-web.webp" alt="Interface du projet AvisZen" fill sizes="(max-width: 900px) 75vw, 38vw" preload unoptimized />
              <span><strong>AvisZen</strong><small>Plateforme d’e-réputation</small></span>
            </a>
            <a className="hero-project hero-project-side" href="https://flowsaver.vercel.app/" target="_blank" rel="noreferrer">
              <Image src="/images/projects/flowsaver-home-web.webp" alt="Interface du projet FlowSaver" fill sizes="(max-width: 900px) 43vw, 22vw" loading="eager" unoptimized />
              <span><strong>FlowSaver</strong><small>Produit SaaS</small></span>
            </a>
            <a className="hero-project hero-project-small" href="https://plum-dun-six.vercel.app/" target="_blank" rel="noreferrer">
              <Image src="/images/projects/plum-home-web.webp" alt="Interface du projet Plum" fill sizes="(max-width: 900px) 52vw, 25vw" loading="eager" unoptimized />
              <span><strong>Plum</strong><small>Outil éditorial</small></span>
            </a>
          </div>
        </div>
      </section>

      <section className="client-belt" aria-label="Projets et marques accompagnés">
        <div className="shell client-belt-heading">
          <p>Des univers différents, une même exigence de clarté</p>
          <span>Projets en ligne</span>
        </div>
        <div className="client-marquee">
          <div className="client-track">
            <div className="client-group">
              {clientMarks.map((client) => <ClientLogo client={client} key={client.name} />)}
            </div>
            <div className="client-group" aria-hidden="true">
              {clientMarks.map((client) => <ClientLogo client={client} duplicate key={`duplicate-${client.name}`} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="agency-intro" aria-labelledby="intro-title">
        <div className="shell intro-grid">
          <p className="section-index">01 — Ce que nous faisons</p>
          <div>
            <p className="kicker">Une équipe dimensionnée pour le projet</p>
            <h2 id="intro-title">La précision d’une agence, avec la souplesse d’un collectif.</h2>
          </div>
          <p className="intro-copy">
            Une marque n’a pas besoin d’empiler les prestataires. Elle a besoin d’un cap, des bonnes compétences au bon moment et de décisions qui restent compréhensibles. Le collectif relie stratégie, création et diffusion dans un même dispositif.
          </p>
        </div>
      </section>

      <div id="expertises" className="expertise-list">
        {expertises.map((expertise, index) => (
          <section className={`expertise-row${index % 2 ? " expertise-row-reverse" : ""}`} key={expertise.id} aria-labelledby={`expertise-${expertise.id}`}>
            <div className="shell expertise-grid">
              <div className="expertise-copy">
                <p className="expertise-number">{expertise.number}</p>
                <p className="kicker">Expertise</p>
                <h2 id={`expertise-${expertise.id}`}>{expertise.title}</h2>
                <p className="expertise-lead">{expertise.lead}</p>
                <p>{expertise.description}</p>
                <ul className="deliverable-list">
                  {expertise.deliverables.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <figure className="expertise-visual">
                <div className="expertise-image-wrap">
                  <Image src={expertise.image} alt={expertise.imageAlt} fill sizes="(max-width: 900px) 100vw, 55vw" unoptimized />
                </div>
                <figcaption><span>Projet réel</span>{expertise.project}</figcaption>
              </figure>
            </div>
          </section>
        ))}
      </div>

      <section className="agency-section offers-section" id="offres" aria-labelledby="offers-title">
        <div className="shell">
          <div className="split-heading">
            <div>
              <p className="section-index">02 — Des points de départ lisibles</p>
              <p className="kicker">Offres web</p>
              <h2 id="offers-title">Savoir ce que l’on achète avant de commencer.</h2>
            </div>
            <p>
              Trois cadres pour se situer. Le devis final précise les livrables, les responsabilités, le calendrier et ce qui n’est pas inclus.
            </p>
          </div>
          <div className="compact-offer-grid">
            {offers.map((offer, index) => (
              <article className={`compact-offer${offer.badge ? " compact-offer-featured" : ""}`} key={offer.id}>
                <div className="compact-offer-top">
                  <span>0{index + 1}</span>
                  {offer.badge ? <strong>{offer.badge}</strong> : null}
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-price">{offer.price}</div>
                <ul>
                  {offer.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p className="offer-timeline">Délai indicatif · {offer.timeline}</p>
                <Link className="text-link" href={offer.cta.href}>{offer.cta.label} <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subscription-section" aria-labelledby="subscriptions-title">
        <div className="shell subscription-grid">
          <div className="subscription-intro">
            <p className="kicker">Après la mise en ligne</p>
            <h2 id="subscriptions-title">Continuer uniquement quand cela a du sens.</h2>
            <p>Maintenance, visibilité et acquisition restent des choix. Aucun abonnement n’est nécessaire pour devenir propriétaire de son projet.</p>
          </div>
          <div className="subscription-list">
            {monthlyPlans.map((plan, index) => (
              <article key={plan.id}>
                <span>0{index + 1}</span>
                <div><h3>{plan.name}</h3><p>{plan.description}</p></div>
                <strong>{plan.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="collective-section" id="collectif" aria-labelledby="collective-title">
        <div className="shell collective-grid">
          <div className="collective-statement">
            <p className="section-index section-index-light">03 — Le collectif</p>
            <p className="kicker">Trois indépendants, une direction commune</p>
            <h2 id="collective-title">Les compétences d’une équipe, sans multiplier les interlocuteurs.</h2>
            <p>
              Le noyau réunit trois métiers complémentaires. Selon le projet, chacun intervient au bon moment, tandis qu’un interlocuteur principal garde le fil des décisions, du budget et du planning.
            </p>
            <Link className="button button-light" href="/contact">Rencontrer le collectif <span aria-hidden="true">↗</span></Link>
          </div>
          <ol className="collective-roles">
            {collectiveRoles.map((profile) => (
              <li key={profile.number}>
                <span>{profile.number}</span>
                <div><h3>{profile.role}</h3><p>{profile.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="agency-section projects-section" id="realisations" aria-labelledby="projects-title">
        <div className="shell">
          <div className="split-heading">
            <div>
              <p className="section-index">04 — Réalisations</p>
              <p className="kicker">Des projets visibles, pas des maquettes fictives</p>
              <h2 id="projects-title">Du studio local au produit SaaS.</h2>
            </div>
            <div>
              <p>Chaque aperçu mène vers le site réel. Les descriptions portent sur ce qui est visible, sans inventer de chiffre ou de résultat.</p>
              <Link className="text-link" href="/realisations">Voir les 8 projets en détail <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="real-project-grid">
            {projects.map((project, index) => (
              <article className={`real-project project-tone-${project.tone}${index === 0 || index === 5 ? " real-project-wide" : ""}`} key={project.name}>
                <a className="real-project-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={`Voir ${project.name}`}>
                  <Image src={project.image} alt={project.imageAlt} fill sizes={index === 0 || index === 5 ? "(max-width: 620px) 100vw, 88vw" : "(max-width: 620px) 100vw, 44vw"} unoptimized />
                  <span aria-hidden="true">↗</span>
                </a>
                <div className="real-project-copy">
                  <div><span>{project.type}</span><span>{project.sector}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.solution}</p>
                  <ul>{project.levers.map((lever) => <li key={lever}>{lever}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method-section" id="methode" aria-labelledby="method-title">
        <div className="shell">
          <div className="method-heading">
            <div>
              <p className="section-index">05 — L’approche</p>
              <p className="kicker">Pas d’effet tunnel</p>
              <h2 id="method-title">Quatre temps, des décisions visibles.</h2>
            </div>
            <p>Les détails varient selon le projet, mais la logique reste la même : comprendre avant de créer, valider avant d’engager la suite.</p>
          </div>
          <ol className="method-steps">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="guarantees-section" aria-labelledby="guarantees-title">
        <div className="shell guarantees-grid">
          <div>
            <p className="kicker">Le cadre de travail</p>
            <h2 id="guarantees-title">Ce qui doit rester clair, même quand le projet devient complexe.</h2>
          </div>
          <ul className="guarantee-list">
            {guarantees.map((guarantee, index) => <li key={guarantee}><span>{String(index + 1).padStart(2, "0")}</span>{guarantee}</li>)}
          </ul>
        </div>
      </section>

      <section className="agency-section faq-section" aria-labelledby="faq-title">
        <div className="shell faq-grid-v2">
          <div className="faq-sticky">
            <p className="section-index">06 — Questions fréquentes</p>
            <p className="kicker">Avant de travailler ensemble</p>
            <h2 id="faq-title">Des réponses directes.</h2>
            <p>Une question propre à votre contexte ? Le premier échange sert précisément à vérifier le besoin et la bonne façon d’y répondre.</p>
            <Link className="text-link" href="/contact">Poser une question <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="faq-list-v2">
            {faqItems.map((item, index) => (
              <details key={item.question}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band" aria-labelledby="contact-title">
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">Un projet en tête ?</p>
            <h2 id="contact-title">Commençons par remettre le besoin au clair.</h2>
          </div>
          <div>
            <p>Parlez-nous de votre activité, de ce qui bloque aujourd’hui et de l’échéance visée. Nous vous répondrons avec un prochain pas concret.</p>
            <Link className="button button-light" href="/contact">Parler de votre projet <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
