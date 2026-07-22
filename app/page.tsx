import Link from "next/link";
import Image from "next/image";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import {
  clientMarks,
  collectiveRoles,
  expertises,
  faqItems,
  guarantees,
  monthlyPlans,
  offers,
  processSteps,
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
              Une image claire, un site solide, une <em>visibilité utile.</em>
            </h1>
            <p className="agency-hero-lead">
              Trois indépendants réunissent stratégie, design et acquisition pour construire des marques
              cohérentes, des outils simples à comprendre et une visibilité que l’on peut piloter.
            </p>
            <div className="cta-row">
              <Link className="button" href="/contact">
                Parler de votre projet <span aria-hidden="true">↗</span>
              </Link>
              <a className="button button-secondary" href="#expertises">
                Découvrir les expertises
              </a>
            </div>
            <dl className="hero-facts" aria-label="Le collectif en trois repères">
              <div><dt>03</dt><dd>expertises complémentaires</dd></div>
              <div><dt>01</dt><dd>interlocuteur principal</dd></div>
              <div><dt>100%</dt><dd>sur mesure, sans formule opaque</dd></div>
            </dl>
          </div>

          <figure className="hero-agency-visual">
            <Image
              src="/images/agency/hero-collective-v2.webp"
              alt="Table de travail réunissant stratégie web, création graphique et production photo-vidéo"
              fill
              sizes="(max-width: 900px) 100vw, 47vw"
              preload
              unoptimized
            />
            <figcaption>
              <strong>Trois savoir-faire, une direction commune</strong>
              <span>Web</span><span>Design</span><span>Acquisition</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="client-belt" aria-label="Projets et marques accompagnés">
        <div className="shell client-belt-heading">
          <p>Projets sur lesquels nous avons travaillé</p>
          <span>Sites actuellement en ligne</span>
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

      <section className="agency-section projects-section projects-section-featured" id="realisations" aria-labelledby="projects-title">
        <div className="shell">
          <div className="split-heading projects-heading">
            <div>
              <p className="section-index">04 — Réalisations</p>
              <p className="kicker">Sites et produits réellement en ligne</p>
              <h2 id="projects-title">Des projets visibles, pas des promesses.</h2>
            </div>
            <p>La sélection avance seule. Survolez-la pour la mettre en pause, utilisez les flèches ou faites-la glisser.</p>
          </div>
          <ProjectCarousel />
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
                <figcaption><span>Notre façon de travailler</span>{expertise.visualLabel}</figcaption>
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
