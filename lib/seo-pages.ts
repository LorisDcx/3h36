export type SeoCommercialPageSlug =
  | "agence-web-chambery"
  | "creation-site-internet-chambery"
  | "site-internet-batiment-savoie"
  | "refonte-site-internet-pme-savoie"
  | "referencement-seo-chambery"
  | "referencement-seo"
  | "geo"
  | "google-ads-chambery"
  | "gestion-google-ads"
  | "lancement-marque-startup-savoie"
  | "identite-visuelle-chambery"
  | "photo-video-entreprise-savoie"
  | "site-internet-consultant-savoie"
  | "agence-web-aix-les-bains"
  | "agence-web-albertville";

export type SeoCopyBlock = Readonly<{
  title: string;
  description: string;
}>;

export type SeoFaqItem = Readonly<{
  question: string;
  answer: string;
}>;

export type SeoRelatedRoute = Readonly<{
  href: string;
  label: string;
  description: string;
}>;

export type SeoPageCta = Readonly<{
  title: string;
  description: string;
  label: string;
  href: "/contact";
}>;

export type SeoCommercialPage = Readonly<{
  slug: SeoCommercialPageSlug;
  seo: Readonly<{
    title: string;
    description: string;
  }>;
  eyebrow: string;
  h1: string;
  lead: string;
  audience: readonly SeoCopyBlock[];
  problems: readonly SeoCopyBlock[];
  approach: readonly SeoCopyBlock[];
  deliverables: readonly SeoCopyBlock[];
  proofNote: string;
  faq: readonly SeoFaqItem[];
  relatedRoutes: readonly SeoRelatedRoute[];
  cta: SeoPageCta;
}>;

export const seoCommercialPagesBySlug: Record<
  SeoCommercialPageSlug,
  SeoCommercialPage
> = {
  "agence-web-chambery": {
    slug: "agence-web-chambery",
    seo: {
      title: "Agence web à Chambéry : site, SEO et Ads | 3h36",
      description:
        "3h36 accompagne les entreprises de Chambéry avec un site clair, une image crédible et une acquisition mesurable en SEO local et Google Ads.",
    },
    eyebrow: "Collectif web et acquisition à Chambéry",
    h1: "Une agence web à Chambéry pour transformer votre présence en demandes utiles.",
    lead:
      "3h36 réunit stratégie, design, développement, contenus et acquisition dans une même direction. Nous concevons des dispositifs adaptés aux PME, entreprises du bâtiment, jeunes marques et experts indépendants du bassin chambérien : pas seulement un site à montrer, mais une présence cohérente que vos prospects peuvent trouver, comprendre et choisir.",
    audience: [
      {
        title: "PME en phase de structuration",
        description:
          "Votre entreprise a grandi, mais le site, les messages ou le suivi des demandes ne reflètent plus votre niveau réel. Nous remettons l’offre, les preuves et les parcours commerciaux au même niveau que votre activité.",
      },
      {
        title: "Entreprises locales qui dépendent des demandes entrantes",
        description:
          "Artisans, bureaux d’études, entreprises de services et acteurs du bâtiment ont besoin d’être visibles sur une zone précise et de qualifier rapidement appels, formulaires et demandes de devis.",
      },
      {
        title: "Créateurs d’entreprise et startups",
        description:
          "Lorsque la marque doit convaincre ses premiers clients, partenaires ou investisseurs, nous alignons le positionnement, l’identité, le site et les premières actions d’acquisition.",
      },
      {
        title: "Consultants et indépendants à forte expertise",
        description:
          "Nous aidons les profils expérimentés à sortir d’une présentation trop générique pour rendre leur méthode, leurs sujets de prédilection et leur valeur immédiatement lisibles.",
      },
    ],
    problems: [
      {
        title: "Un site esthétique qui n’explique pas assez",
        description:
          "Une belle interface ne remplace ni une offre précise, ni des preuves, ni un prochain pas évident. Nous organisons l’information selon les questions réelles d’un prospect avant son appel.",
      },
      {
        title: "Une visibilité locale trop dépendante du bouche-à-oreille",
        description:
          "Le bouche-à-oreille reste précieux, mais il doit être prolongé par des pages de services solides, une présence locale cohérente et des contenus capables de répondre à des recherches concrètes.",
      },
      {
        title: "Des prestataires et des données dispersés",
        description:
          "Site, publicité, images et mesure sont souvent pilotés séparément. Cette fragmentation rend les arbitrages lents et empêche de savoir quelles actions participent réellement aux demandes commerciales.",
      },
    ],
    approach: [
      {
        title: "1. Clarifier la cible et la décision",
        description:
          "Nous commençons par les offres prioritaires, la zone réellement desservie, les objections, la valeur d’un contact et la façon dont une vente se conclut. Ce cadrage évite de construire une présence générique.",
      },
      {
        title: "2. Concevoir le parcours et la preuve",
        description:
          "Arborescence, messages, identité et appels à l’action sont conçus ensemble. Les réalisations, méthodes, certifications et éléments de réassurance ne sont publiés que lorsqu’ils peuvent être documentés.",
      },
      {
        title: "3. Développer un socle rapide et indexable",
        description:
          "Le site est pensé pour le mobile, la lisibilité, l’accessibilité, les performances et l’exploration par les moteurs. Les métadonnées, données structurées et liens internes servent le contenu au lieu de le remplacer.",
      },
      {
        title: "4. Mesurer puis renforcer",
        description:
          "Nous suivons les actions qui comptent — formulaires, appels, rendez-vous ou demandes qualifiées — afin de décider quelles pages, requêtes et campagnes méritent d’être développées.",
      },
    ],
    deliverables: [
      {
        title: "Positionnement et architecture éditoriale",
        description:
          "Une hiérarchie claire entre votre promesse, vos offres, vos secteurs, vos zones d’intervention et vos preuves.",
      },
      {
        title: "Design et développement du site",
        description:
          "Une interface distinctive, responsive et pensée pour guider vers une prise de contact sans sacrifier la qualité de lecture.",
      },
      {
        title: "Socle SEO local et informations d’entité",
        description:
          "Pages orientées intentions, maillage interne, balisage sémantique, données structurées pertinentes et informations d’entité cohérentes.",
      },
      {
        title: "Mesure et acquisition",
        description:
          "Configuration des conversions et, selon le projet, accompagnement Search Console, Google Business Profile ou Google Ads.",
      },
    ],
    proofNote:
      "Nos études de cas décrivent les choix, livrables et technologies que nous pouvons documenter. Les chiffres de trafic, de prospects ou de chiffre d’affaires ne sont publiés qu’avec une source vérifiable et l’accord du projet concerné.",
    faq: [
      {
        question: "Travaillez-vous uniquement avec des entreprises situées à Chambéry ?",
        answer:
          "Non. Chambéry est un territoire prioritaire, mais nous accompagnons aussi des organisations en Savoie et à distance. Une page locale ne signifie pas que nous possédons une adresse dans chaque ville : nous indiquons clairement notre mode d’intervention et la zone réellement couverte.",
      },
      {
        question: "Pouvez-vous reprendre un site existant sans tout recommencer ?",
        answer:
          "Oui, si l’audit montre que la base technique, le CMS et la structure restent adaptés. Nous distinguons ce qui peut être conservé, ce qui doit être corrigé et ce qui freine la visibilité ou la conversion avant de proposer une refonte complète.",
      },
      {
        question: "Le SEO et Google Ads peuvent-ils être réunis dans le même projet ?",
        answer:
          "Oui. Le SEO construit une présence durable sur des intentions pertinentes ; Google Ads peut accélérer l’apprentissage et capter une demande immédiate. Les deux canaux doivent partager les mêmes pages, messages et données de conversion.",
      },
      {
        question: "Garantissez-vous une première position sur Google ?",
        answer:
          "Non. Une position dépend de la concurrence, de l’historique du domaine, de la pertinence locale et des évolutions du moteur. Nous nous engageons sur un travail documenté, une base mesurable et des décisions expliquées, jamais sur un classement invérifiable.",
      },
    ],
    relatedRoutes: [
      {
        href: "/creation-site-internet-chambery",
        label: "Création de site à Chambéry",
        description: "Construire un site rapide, crédible et orienté conversion.",
      },
      {
        href: "/referencement-seo-chambery",
        label: "SEO local à Chambéry",
        description: "Développer votre visibilité sur les recherches locales utiles.",
      },
      {
        href: "/google-ads-chambery",
        label: "Google Ads à Chambéry",
        description: "Piloter des campagnes autour de demandes et de zones rentables.",
      },
    ],
    cta: {
      title: "Faisons le point sur votre présence actuelle.",
      description:
        "Expliquez-nous votre offre, votre zone et l’objectif commercial prioritaire. Nous vous répondrons avec un premier angle de travail, sans transformer l’échange en audit automatisé.",
      label: "Présenter mon projet",
      href: "/contact",
    },
  },

  "creation-site-internet-chambery": {
    slug: "creation-site-internet-chambery",
    seo: {
      title: "Création de site internet à Chambéry | 3h36",
      description:
        "Création et refonte de sites rapides à Chambéry : stratégie, design, développement, SEO local et suivi des conversions pour entreprises ambitieuses.",
    },
    eyebrow: "Sites vitrines et sites d’acquisition",
    h1: "Un site internet conçu à Chambéry pour être compris, trouvé et contacté.",
    lead:
      "Un site professionnel doit répondre rapidement à trois questions : pourquoi vous choisir, quelle preuve vous apportez et comment vous contacter. 3h36 transforme ces réponses en un outil clair, rapide et mesurable, adapté aux usages mobiles comme aux cycles de décision plus longs.",
    audience: [
      {
        title: "Entreprise sans site ou avec une présence minimale",
        description:
          "Vous avez besoin d’un socle crédible pour être recommandé, présenté à un partenaire et trouvé par un prospect qui vérifie votre activité avant de vous appeler.",
      },
      {
        title: "Structure dont le site ne génère pas de demandes",
        description:
          "Le trafic existe parfois, mais l’offre reste difficile à parcourir, les formulaires sont trop vagues ou aucune conversion n’est mesurée correctement.",
      },
      {
        title: "Entreprise qui lance une nouvelle offre",
        description:
          "Une landing page ou une architecture dédiée permet de tester une proposition sans noyer le message dans l’ensemble du site historique.",
      },
    ],
    problems: [
      {
        title: "L’entreprise est plus sérieuse que son site",
        description:
          "Un design daté, des informations incomplètes ou une expérience mobile fragile créent un doute précisément au moment où un prospect cherche à se rassurer.",
      },
      {
        title: "Toutes les offres sont présentées sur une seule page",
        description:
          "Sans page dédiée, il devient difficile d’expliquer un service, de répondre à ses objections, de le positionner dans Google et de l’envoyer dans une campagne publicitaire pertinente.",
      },
      {
        title: "Personne ne sait ce que produit le site",
        description:
          "Le nombre de visites ne suffit pas. Nous définissons les événements utiles et vérifions que formulaires, clics téléphone et prises de rendez-vous remontent dans les outils de mesure.",
      },
    ],
    approach: [
      {
        title: "Cadrage commercial",
        description:
          "Objectifs, clients prioritaires, offres rentables, zones, preuves disponibles et chemin de vente sont recensés avant d’écrire l’arborescence.",
      },
      {
        title: "Contenu et structure",
        description:
          "Chaque page reçoit une intention principale, une promesse, des réponses aux objections et une action attendue. Nous évitons les pages artificielles créées uniquement pour répéter un mot-clé.",
      },
      {
        title: "Direction visuelle et prototype",
        description:
          "Le système graphique, la hiérarchie et les composants sont testés sur les pages structurantes avant de généraliser le design.",
      },
      {
        title: "Développement, contrôle et mise en ligne",
        description:
          "Responsive, accessibilité, métadonnées, redirections, formulaires, consentement, indexation et conversions sont vérifiés selon le périmètre du projet.",
      },
    ],
    deliverables: [
      {
        title: "Arborescence et parcours",
        description:
          "Un plan de site relié aux intentions de recherche et aux décisions de vos prospects.",
      },
      {
        title: "Maquettes et système d’interface",
        description:
          "Des écrans responsive et des composants cohérents, conçus pour évoluer sans perdre l’identité initiale.",
      },
      {
        title: "Site administrable ou maintenu",
        description:
          "La solution technique est choisie selon la fréquence des contenus, les intégrations et les personnes qui devront intervenir après la mise en ligne.",
      },
      {
        title: "Fondations de visibilité",
        description:
          "Titres, descriptions, canonicals, sitemap, robots, images, données structurées pertinentes et maillage des pages importantes.",
      },
      {
        title: "Plan de mesure",
        description:
          "Des conversions définies en amont et testées avant d’utiliser les données pour guider le SEO ou la publicité.",
      },
    ],
    proofNote:
      "Un portfolio permet de juger une direction créative, pas de déduire automatiquement les performances commerciales. Nous détaillons donc le contexte, les décisions et les livrables de chaque réalisation, sans attribuer au site des résultats non mesurés.",
    faq: [
      {
        question: "Combien de temps faut-il pour créer un site internet ?",
        answer:
          "Un site vitrine cadré peut généralement avancer en quelques semaines ; une plateforme avec rédaction, plusieurs offres, contenus photo, connexions et validations demande davantage de temps. Le calendrier dépend surtout du périmètre et de la disponibilité des contenus et interlocuteurs.",
      },
      {
        question: "Le référencement est-il inclus dans la création ?",
        answer:
          "Le socle technique et éditorial doit être prévu dès la conception. Une stratégie SEO continue — recherche de sujets, contenus, popularité locale et analyse — représente ensuite un travail distinct, dimensionné selon le marché.",
      },
      {
        question: "Pourrai-je modifier les textes et les images ?",
        answer:
          "Oui lorsque l’autonomie éditoriale fait partie du besoin. Nous identifions les zones qui doivent être administrables et évitons de complexifier tout le site si seules quelques informations évoluent réellement.",
      },
      {
        question: "Pouvez-vous récupérer mon nom de domaine et mes contenus ?",
        answer:
          "Nous pouvons accompagner la migration après inventaire des accès, pages, médias, e-mails et URLs existantes. Les redirections et la continuité de mesure sont traitées avant la bascule pour limiter les pertes évitables.",
      },
    ],
    relatedRoutes: [
      {
        href: "/refonte-site-internet-pme-savoie",
        label: "Refonte de site pour PME",
        description: "Moderniser sans effacer les actifs utiles de l’existant.",
      },
      {
        href: "/site-internet-batiment-savoie",
        label: "Sites internet pour le bâtiment",
        description: "Présenter les métiers, chantiers et zones d’intervention.",
      },
      {
        href: "/realisations",
        label: "Voir les réalisations",
        description: "Découvrir des projets numériques et les choix qui les structurent.",
      },
    ],
    cta: {
      title: "Votre futur site doit résoudre un problème précis.",
      description:
        "Dites-nous ce qui ne fonctionne plus aujourd’hui et ce que vous attendez d’une demande entrante. Nous cadrerons le bon niveau de projet.",
      label: "Cadrer mon site",
      href: "/contact",
    },
  },

  "site-internet-batiment-savoie": {
    slug: "site-internet-batiment-savoie",
    seo: {
      title: "Site internet pour entreprise du bâtiment en Savoie | 3h36",
      description:
        "Sites et acquisition pour artisans et entreprises du bâtiment en Savoie : chantiers, services, zones, devis, SEO local et Google Ads mesurés.",
    },
    eyebrow: "Présence digitale pour les métiers du bâtiment",
    h1: "Un site de bâtiment qui montre votre savoir-faire et prépare de meilleurs devis.",
    lead:
      "Dans le bâtiment, un prospect veut vérifier des réalisations comparables, comprendre votre zone, savoir si vous traitez son type de chantier et obtenir une réponse claire. Nous structurons ces informations pour les artisans, entreprises générales, bureaux d’études et métiers spécialisés de Savoie, avec des parcours adaptés aux particuliers comme aux donneurs d’ordre.",
    audience: [
      {
        title: "Artisans et entreprises spécialisées",
        description:
          "Couverture, charpente, maçonnerie, menuiserie, électricité, plomberie, rénovation énergétique ou second œuvre : chaque métier nécessite ses propres preuves, contraintes et critères de qualification.",
      },
      {
        title: "Entreprises générales et contractants",
        description:
          "Un site doit rendre lisibles les types d’opérations, le rôle de l’entreprise, les partenaires, les moyens et le niveau d’accompagnement sans transformer la page en catalogue technique.",
      },
      {
        title: "Bureaux d’études, maîtres d’œuvre et acteurs B2B",
        description:
          "Les décideurs professionnels recherchent des compétences, références, méthodes, documents et interlocuteurs. Le parcours ne peut pas être calqué sur une demande de devis grand public.",
      },
      {
        title: "Structures qui recrutent autant qu’elles vendent",
        description:
          "Sur un marché où les compétences sont disputées, les équipes, les conditions de travail, les chantiers et les possibilités d’évolution méritent un espace aussi clair que les offres commerciales.",
      },
    ],
    problems: [
      {
        title: "Des chantiers visibles seulement sur les réseaux sociaux",
        description:
          "Les publications passent vite et sont difficiles à filtrer. Des études de chantier structurées permettent de retrouver un type d’ouvrage, une technique, une commune ou une problématique précise.",
      },
      {
        title: "Trop de demandes hors zone ou hors métier",
        description:
          "Un formulaire sans qualification augmente le temps passé au téléphone. Type de projet, localisation, calendrier, budget indicatif et documents peuvent être demandés avec mesure, sans décourager les bons prospects.",
      },
      {
        title: "Une visibilité locale uniforme malgré des zones très différentes",
        description:
          "Intervenir à Chambéry, dans l’Avant-Pays, autour d’Albertville ou en vallée n’implique pas les mêmes délais, accès ni typologies de chantier. Les contenus doivent refléter la zone réellement desservie.",
      },
      {
        title: "Des campagnes payantes impossibles à évaluer",
        description:
          "Sans suivi des appels, formulaires et demandes qualifiées, le coût par clic ne dit pas si une campagne génère de vrais projets. Nous séparons activité publicitaire et résultat commercial.",
      },
    ],
    approach: [
      {
        title: "Cartographier métiers, chantiers et zones",
        description:
          "Nous distinguons les activités prioritaires, les projets recherchés, les secteurs rentables, les communes effectivement couvertes et les critères qui rendent une demande exploitable.",
      },
      {
        title: "Construire une bibliothèque de preuves",
        description:
          "Chaque chantier utile peut documenter un contexte, une contrainte, une intervention, des matériaux et un résultat observable. Les photos sont légendées et les informations sensibles sont validées avant publication.",
      },
      {
        title: "Créer des pages d’entrée adaptées",
        description:
          "Services, secteurs, réalisations et zones ne sont séparés que lorsque le contenu apporte une réponse distincte. Cette discipline évite les dizaines de pages de communes quasi identiques.",
      },
      {
        title: "Relier visibilité et traitement des demandes",
        description:
          "SEO local, Google Ads, formulaire, appel et éventuel CRM sont reliés pour savoir quelles sources conduisent à des demandes sérieuses puis à des devis.",
      },
    ],
    deliverables: [
      {
        title: "Pages métiers détaillées",
        description:
          "Des contenus qui expliquent le périmètre, les méthodes, les cas adaptés et les limites de chaque prestation.",
      },
      {
        title: "Réalisations et reportages de chantier",
        description:
          "Une structure réutilisable pour montrer les étapes, contraintes et savoir-faire avec photos, vidéo ou vues comparatives selon les autorisations.",
      },
      {
        title: "Qualification des demandes",
        description:
          "Formulaires différenciés, pièces jointes, choix de zone et événements de conversion configurés selon le cycle commercial.",
      },
      {
        title: "SEO local et profil d’établissement",
        description:
          "Informations cohérentes, pages réellement utiles, contenus de proximité et recommandations pour les avis et le profil Google Business.",
      },
      {
        title: "Campagnes et pages d’atterrissage",
        description:
          "Lorsque Google Ads est pertinent, des annonces et landing pages sont organisées par service, zone et niveau d’intention, avec exclusions et suivi.",
      },
    ],
    proofNote:
      "Les assurances, qualifications, labels, marques partenaires, montants et délais de chantier ne sont affichés qu’après validation de documents à jour. Aucun cas, avis client ou résultat commercial n’est créé pour compléter artificiellement une page.",
    faq: [
      {
        question: "Faut-il créer une page pour chaque commune de Savoie ?",
        answer:
          "Non. Une page locale n’a de sens que si l’intervention, les contraintes, les réalisations ou les informations diffèrent réellement. Une page de zone solide et quelques contenus locaux documentés valent mieux qu’une série de textes interchangeables.",
      },
      {
        question: "Comment présenter des chantiers sans dévoiler les clients ?",
        answer:
          "Nous pouvons anonymiser l’adresse, cadrer les images, retirer les informations sensibles et décrire la problématique à une échelle suffisante. L’autorisation de publication et les droits sur les images doivent être confirmés.",
      },
      {
        question: "Le site peut-il réduire les demandes non pertinentes ?",
        answer:
          "Il peut mieux annoncer le périmètre, la zone, les types de projets et collecter les informations nécessaires. Il ne supprimera pas toutes les demandes hors cible, mais il facilite leur tri et rend le premier échange plus productif.",
      },
      {
        question: "SEO local ou Google Ads : par quoi commencer ?",
        answer:
          "Cela dépend de l’urgence, de la concurrence et de la valeur d’un chantier. Le SEO construit progressivement la présence ; Ads peut tester une offre ou une zone plus vite. Dans les deux cas, une page convaincante et un suivi des demandes sont indispensables.",
      },
    ],
    relatedRoutes: [
      {
        href: "/photo-video-entreprise-savoie",
        label: "Photo et vidéo d’entreprise",
        description: "Constituer une banque d’images de vos équipes et chantiers.",
      },
      {
        href: "/google-ads-chambery",
        label: "Google Ads local",
        description: "Capter et mesurer les recherches à forte intention.",
      },
      {
        href: "/agence-web-albertville",
        label: "Agence web à Albertville",
        description: "Une approche adaptée au bassin albertvillois et aux vallées.",
      },
    ],
    cta: {
      title: "Votre prochain site peut commencer par vos vrais chantiers.",
      description:
        "Partagez vos métiers prioritaires, votre zone et quelques réalisations représentatives. Nous vous aiderons à transformer cette matière en parcours commercial.",
      label: "Présenter mon entreprise",
      href: "/contact",
    },
  },

  "refonte-site-internet-pme-savoie": {
    slug: "refonte-site-internet-pme-savoie",
    seo: {
      title: "Refonte de site internet pour PME en Savoie | 3h36",
      description:
        "Refonte de site pour PME en Savoie : audit, contenus, design, migration SEO, redirections et mesure pour moderniser sans perdre vos actifs utiles.",
    },
    eyebrow: "Refonte, migration et croissance",
    h1: "Refondre le site de votre PME sans effacer ce qui fonctionne déjà.",
    lead:
      "Une refonte ne consiste pas à poser un nouveau design sur les mêmes imprécisions. Nous auditons l’existant, préservons les pages et signaux utiles, clarifions l’offre puis organisons la migration pour réduire les pertes évitables de visibilité, de données et de repères pour vos clients.",
    audience: [
      {
        title: "PME dont l’activité a dépassé le site",
        description:
          "Nouveaux métiers, nouvelles zones, recrutements, changement de cible ou montée en gamme rendent l’ancienne arborescence insuffisante.",
      },
      {
        title: "Entreprise pénalisée par une base technique vieillissante",
        description:
          "Lenteurs, expérience mobile fragile, administration compliquée, dépendances obsolètes ou problèmes d’indexation peuvent justifier une migration structurée.",
      },
      {
        title: "Direction qui manque de données fiables",
        description:
          "Lorsque les conversions ne sont pas définies ou que les outils ont été installés sans gouvernance, la refonte devient l’occasion de repartir avec un plan de mesure compréhensible.",
      },
      {
        title: "Équipe marketing freinée par le site",
        description:
          "Créer une landing page, publier un cas client ou modifier une offre ne devrait pas nécessiter de contourner le système à chaque fois.",
      },
    ],
    problems: [
      {
        title: "Les meilleures pages risquent de disparaître",
        description:
          "Supprimer des URLs, consolider des contenus ou modifier la navigation sans inventaire peut faire perdre des liens, des positions et des accès directs encore utiles.",
      },
      {
        title: "La refonte devient un projet purement esthétique",
        description:
          "Sans objectifs de compréhension, conversion, publication et visibilité, les mêmes problèmes commerciaux réapparaissent sous une interface plus récente.",
      },
      {
        title: "Le lancement dépend d’une liste de contenus jamais terminée",
        description:
          "Nous hiérarchisons les pages indispensables, les contenus à migrer, ceux à réécrire et les enrichissements qui peuvent arriver après la mise en ligne.",
      },
      {
        title: "Personne n’est responsable de la bascule",
        description:
          "Domaine, DNS, hébergement, formulaires, e-mails, consentement, analytics, redirections et indexation doivent être attribués et testés avant le jour de mise en production.",
      },
    ],
    approach: [
      {
        title: "1. Inventaire de l’existant",
        description:
          "Nous recensons URLs, contenus, trafic disponible, liens, conversions, technologies, accès et usages internes afin de savoir ce qui mérite d’être conservé.",
      },
      {
        title: "2. Arbitrage éditorial et commercial",
        description:
          "Les offres, audiences et parcours cibles définissent la future architecture. Chaque ancienne page reçoit une destination : conserver, améliorer, fusionner, rediriger ou retirer.",
      },
      {
        title: "3. Conception et développement progressifs",
        description:
          "Les gabarits critiques sont validés tôt, puis alimentés avec les vrais contenus. Cette méthode révèle les manques avant qu’ils bloquent la recette finale.",
      },
      {
        title: "4. Plan de migration et surveillance",
        description:
          "Redirections, canonicals, sitemap, robots, données structurées, formulaires et conversions sont contrôlés avant et après la bascule. Search Console sert à repérer les anomalies d’exploration.",
      },
    ],
    deliverables: [
      {
        title: "Audit de conservation",
        description:
          "Un inventaire actionnable des pages, contenus, positions disponibles, liens, technologies et risques de migration.",
      },
      {
        title: "Nouvelle architecture",
        description:
          "Une organisation alignée sur les offres actuelles, les cibles, les zones et les responsabilités éditoriales de l’équipe.",
      },
      {
        title: "Système de pages évolutif",
        description:
          "Des modèles pour services, secteurs, cas, ressources et campagnes, sans multiplier les mises en page incohérentes.",
      },
      {
        title: "Table de redirections et recette SEO",
        description:
          "Une correspondance des anciennes et nouvelles URLs, puis des contrôles techniques au moment de la mise en ligne.",
      },
      {
        title: "Mesure documentée",
        description:
          "Événements, conversions, responsabilités et tableau de lecture définis pour éviter de repartir avec des données inutilisables.",
      },
    ],
    proofNote:
      "Une migration peut être préparée avec méthode, mais aucune agence ne peut garantir une absence totale de fluctuation organique. Les décisions de suppression, fusion et redirection sont documentées ; les résultats sont observés après la mise en ligne avant toute conclusion.",
    faq: [
      {
        question: "Une refonte fait-elle forcément perdre du référencement ?",
        answer:
          "Non, mais elle crée un risque si les contenus, URLs, liens internes et signaux techniques changent sans plan. Une migration préparée vise à conserver les actifs utiles et peut aussi corriger des limites anciennes ; des fluctuations temporaires restent possibles.",
      },
      {
        question: "Faut-il garder tous les anciens contenus ?",
        answer:
          "Non. Certains peuvent être obsolètes, concurrencer une meilleure page ou ne plus correspondre à l’activité. La décision doit s’appuyer sur leur utilité, leur qualité, leurs liens, leur trafic disponible et leur rôle commercial.",
      },
      {
        question: "Peut-on changer de CMS ou de technologie ?",
        answer:
          "Oui si le changement répond à un besoin réel de performance, sécurité, administration ou intégration. Le choix technique est séparé de la structure des URLs et du plan de migration pour éviter une rupture inutile.",
      },
      {
        question: "Que faut-il surveiller après la mise en ligne ?",
        answer:
          "Les erreurs serveur, pages introuvables, redirections, indexation, formulaires, conversions, performances et principales pages d’entrée. Nous comparons des périodes pertinentes sans attribuer chaque variation à la refonte.",
      },
    ],
    relatedRoutes: [
      {
        href: "/creation-site-internet-chambery",
        label: "Création de site à Chambéry",
        description: "Découvrir notre méthode de conception complète.",
      },
      {
        href: "/referencement-seo-chambery",
        label: "Référencement SEO local",
        description: "Construire la visibilité après la migration.",
      },
      {
        href: "/realisations",
        label: "Études de cas",
        description: "Voir comment nous documentons les choix de chaque projet.",
      },
    ],
    cta: {
      title: "Avant de refaire, identifions ce qu’il faut préserver.",
      description:
        "Envoyez l’adresse de votre site et les changements envisagés. Nous pourrons repérer les premières zones de risque et cadrer l’audit nécessaire.",
      label: "Préparer ma refonte",
      href: "/contact",
    },
  },

  "referencement-seo-chambery": {
    slug: "referencement-seo-chambery",
    seo: {
      title: "Référencement SEO à Chambéry | Agence 3h36",
      description:
        "Référencement SEO à Chambéry : audit, pages locales, contenus, Google Business Profile et mesure pour attirer des recherches utiles à votre activité.",
    },
    eyebrow: "Référencement naturel et visibilité locale",
    h1: "Développer votre visibilité à Chambéry sur les recherches qui comptent.",
    lead:
      "Le SEO local relie une offre, une intention et un territoire réellement desservi. Nous travaillons le socle technique, les pages de services, le profil Google Business, les contenus et les signaux locaux pour aider les entreprises du bassin chambérien à être trouvées par des prospects qui cherchent précisément leur savoir-faire.",
    audience: [
      {
        title: "PME qui veut réduire sa dépendance à la publicité",
        description:
          "Le référencement peut installer des points d’entrée durables autour des offres et questions réellement liées au cycle de vente, à condition d’accepter un travail progressif et mesuré.",
      },
      {
        title: "Entreprise locale insuffisamment visible",
        description:
          "Une activité peut être reconnue par ses clients et rester absente des recherches locales. Site, profil d’établissement, avis, mentions et cohérence des informations doivent alors être traités ensemble.",
      },
      {
        title: "Entreprise du bâtiment ou de services de proximité",
        description:
          "Une recherche locale exprime souvent un métier, un problème et une zone. Les pages doivent préciser prestations, communes desservies, réalisations et critères de contact sans se réduire à une liste de lieux.",
      },
      {
        title: "Site établi dont la visibilité stagne",
        description:
          "Un historique de pages et de requêtes permet souvent d’améliorer l’existant avant de publier davantage. Nous cherchons les contenus proches d’une première page, les requêtes mal servies et les problèmes d’architecture.",
      },
    ],
    problems: [
      {
        title: "Le site n’est pas correctement exploré",
        description:
          "Sitemap absent, robots mal configuré, canonicals incohérents, contenus rendus inaccessibles ou liens internes faibles peuvent empêcher de bonnes pages d’être découvertes et comprises.",
      },
      {
        title: "Plusieurs pages se disputent la même intention",
        description:
          "Créer des variantes de ville ou de service sans différence réelle dilue le signal. Nous attribuons un rôle précis à chaque page et consolidons celles qui se répètent.",
      },
      {
        title: "Le site et le profil Google ne racontent pas la même chose",
        description:
          "Nom, coordonnées, horaires, catégories, services et zones doivent rester cohérents. Une information locale inexacte réduit la confiance et peut envoyer un prospect au mauvais endroit.",
      },
      {
        title: "Le contenu est produit en volume sans information nouvelle",
        description:
          "Des articles interchangeables n’installent pas l’autorité. Nous privilégions les sujets proches de la décision, les exemples locaux, les données de terrain et les réponses qu’un expert peut réellement assumer.",
      },
    ],
    approach: [
      {
        title: "1. Audit technique et local",
        description:
          "Nous examinons exploration, indexation, architecture, pages d’entrée, requêtes disponibles, performances, profil d’établissement et cohérence des informations locales.",
      },
      {
        title: "2. Carte des intentions",
        description:
          "Les recherches sont regroupées par besoin : choisir un prestataire, résoudre un problème, comparer, comprendre un prix ou vérifier une expertise. Une page n’est créée que si elle mérite une réponse distincte.",
      },
      {
        title: "3. Pages de services et preuves locales",
        description:
          "Services, réalisations, méthode, FAQ et informations de zone sont reliés. Une page de ville n’est ajoutée que si l’activité et le contenu permettent une réponse réellement locale.",
      },
      {
        title: "4. Mesure dans Search Console",
        description:
          "Nous suivons requêtes, pages, indexation, clics et conversions organiques. Le profil Google Business est lu avec ses propres données, sans confondre visibilité et demande commerciale.",
      },
      {
        title: "5. Amélioration continue",
        description:
          "Nous enrichissons ce qui commence à répondre à une demande, corrigeons les pages faibles et cherchons des mentions légitimes auprès d’écosystèmes professionnels, partenaires, médias ou réseaux locaux.",
      },
    ],
    deliverables: [
      {
        title: "Audit SEO technique et éditorial",
        description:
          "Un diagnostic priorisé des problèmes d’exploration, indexation, structure, contenu, performance et mesure.",
      },
      {
        title: "Cartographie mots-clés et intentions",
        description:
          "Une correspondance entre besoins, pages existantes, pages à créer et risque de concurrence interne.",
      },
      {
        title: "Socle SEO local",
        description:
          "Informations d’entreprise, services, zones, profils officiels, données structurées pertinentes et liens locaux sont rendus cohérents, sans inventer d’adresse.",
      },
      {
        title: "Plan de contenus experts",
        description:
          "Des contenus commerciaux et éditoriaux reliés aux décisions de vos prospects, avec brief, sources attendues, auteur et objectif mesurable.",
      },
      {
        title: "Tableau de suivi SEO local",
        description:
          "Indexation, clics organiques, pages d’entrée, actions du profil d’établissement et conversions sont suivis avec une définition claire de chaque indicateur.",
      },
    ],
    proofNote:
      "Aucune agence ne peut garantir une première position locale. Nous datons les observations, distinguons position, clic et demande commerciale, et ne publions un résultat que si la requête, la zone, la période et la source de mesure sont précisées.",
    faq: [
      {
        question: "Quelle différence entre SEO classique et SEO local ?",
        answer:
          "Le SEO local ajoute la pertinence géographique : zone réellement servie, profil d’établissement, coordonnées, avis, mentions locales et contenus situés. Le socle technique et la qualité des pages restent les mêmes.",
      },
      {
        question: "Faut-il avoir une adresse à Chambéry pour cibler Chambéry ?",
        answer:
          "Une entreprise peut expliquer qu’elle intervient à Chambéry si c’est vrai, mais elle ne doit pas inventer d’établissement. La proximité du profil compte pour certains résultats cartographiques ; le site peut, lui, documenter une zone de service réelle avec des preuves utiles.",
      },
      {
        question: "Combien de temps faut-il pour voir des résultats SEO ?",
        answer:
          "Cela dépend du point de départ, de la concurrence, de la demande et de la capacité à publier de bonnes preuves. Des corrections techniques peuvent être prises en compte rapidement ; construire une visibilité stable sur des requêtes disputées demande généralement plusieurs cycles d’exploration, publication et amélioration.",
      },
      {
        question: "Faut-il publier beaucoup d’articles ?",
        answer:
          "Non. Il faut couvrir avec précision les sujets qui soutiennent votre activité et apporter une information que la page concurrente ne donne pas. Quelques ressources fortes, maintenues et reliées aux offres peuvent être plus utiles qu’un rythme éditorial rempli de textes génériques.",
      },
      {
        question: "Dois-je créer une page pour chaque ville autour de Chambéry ?",
        answer:
          "Non. Une page locale doit contenir des informations, cas, modalités ou contraintes propres à la zone. Lorsque rien ne change, une page de service ou de secteur bien construite évite la duplication et la concurrence interne.",
      },
    ],
    relatedRoutes: [
      {
        href: "/agence-web-chambery",
        label: "Agence web à Chambéry",
        description: "Relier stratégie, site, contenus et acquisition.",
      },
      {
        href: "/google-ads-chambery",
        label: "Google Ads à Chambéry",
        description: "Compléter la visibilité organique par une demande immédiate.",
      },
      {
        href: "/geo",
        label: "Visibilité dans les moteurs IA",
        description: "Découvrir notre approche GEO, distincte du SEO local.",
      },
    ],
    cta: {
      title: "Votre visibilité mérite un diagnostic vérifiable.",
      description:
        "Partagez votre domaine, vos offres prioritaires et les zones réellement desservies. Nous identifierons les premiers freins techniques, éditoriaux et locaux.",
      label: "Demander un diagnostic",
      href: "/contact",
    },
  },

  "google-ads-chambery": {
    slug: "google-ads-chambery",
    seo: {
      title: "Gestion Google Ads à Chambéry | 3h36 Agency",
      description:
        "Campagnes Google Ads à Chambéry : stratégie, annonces, landing pages, conversions et optimisation pour PME, bâtiment et services à forte intention.",
    },
    eyebrow: "Acquisition payante locale et mesurable",
    h1: "À Chambéry, piloter Google Ads à partir des demandes qualifiées, pas seulement des clics.",
    lead:
      "Une campagne rentable ne commence pas dans l’interface Google Ads. Elle commence par une offre claire, une zone réaliste, une valeur de conversion et une page capable de rassurer. Nous construisons ce dispositif pour les entreprises de Chambéry et de Savoie, puis optimisons les campagnes selon la qualité des demandes remontées par le terrain.",
    audience: [
      {
        title: "Entreprise qui veut tester rapidement une offre",
        description:
          "La recherche payante peut valider la demande et les formulations à condition de définir un budget d’apprentissage, une page dédiée et des critères de succès avant le lancement.",
      },
      {
        title: "PME dont les campagnes manquent de lisibilité",
        description:
          "Dépenses, conversions importées et recommandations automatiques ne suffisent pas à savoir si les contacts sont exploitables. Nous reconstruisons la lecture autour du parcours commercial.",
      },
      {
        title: "Entreprise locale avec plusieurs métiers ou zones",
        description:
          "Des ensembles distincts évitent de mélanger des intentions, marges, saisons et rayons d’intervention qui ne se pilotent pas de la même façon.",
      },
      {
        title: "Acteur du bâtiment ou service à forte valeur",
        description:
          "Lorsque quelques projets bien qualifiés comptent davantage qu’un grand volume de formulaires, les mots-clés, questions du formulaire et retours CRM doivent refléter cette réalité.",
      },
    ],
    problems: [
      {
        title: "Les conversions mesurent tout et donc rien",
        description:
          "Une visite de page ou un clic secondaire ne doit pas être confondu avec un appel, un devis ou un rendez-vous. Nous séparons micro-actions et objectifs commerciaux.",
      },
      {
        title: "Le budget part sur des recherches trop larges",
        description:
          "Types de correspondance, mots-clés négatifs, zones et horaires doivent être contrôlés. Les termes de recherche sont relus pour détecter les besoins hors cible et les nouvelles opportunités.",
      },
      {
        title: "Toutes les annonces mènent vers l’accueil",
        description:
          "Une page généraliste oblige le visiteur à recommencer sa recherche. Une landing page reprend l’offre, la zone, les preuves, les objections et l’action promises par l’annonce.",
      },
      {
        title: "La qualité des prospects ne revient jamais dans Ads",
        description:
          "Sans retour sur les demandes sérieuses, l’algorithme optimise les signaux les plus faciles à obtenir. Une qualification simple permet de distinguer contact, opportunité et client lorsque les outils le permettent.",
      },
    ],
    approach: [
      {
        title: "1. Économie de la campagne",
        description:
          "Nous cadrons valeur moyenne, marge disponible, taux de transformation connu, capacité de traitement, zones et saisonnalité avant de proposer un niveau de budget.",
      },
      {
        title: "2. Mesure et pages d’atterrissage",
        description:
          "Les conversions, règles de consentement et landing pages sont préparées et testées avant d’accélérer la diffusion.",
      },
      {
        title: "3. Structure et lancement contrôlé",
        description:
          "Campagnes, groupes, intentions, annonces, ressources, zones, négatifs et budgets sont organisés pour rendre chaque décision lisible.",
      },
      {
        title: "4. Lecture de la qualité",
        description:
          "Nous rapprochons les données publicitaires des retours commerciaux : demande hors zone, petit projet, rendez-vous, devis, vente ou raison de perte.",
      },
      {
        title: "5. Arbitrages continus",
        description:
          "Les budgets sont déplacés selon la demande réelle et la capacité de l’entreprise. Nous testons annonces et pages sans conclure sur un échantillon insuffisant.",
      },
    ],
    deliverables: [
      {
        title: "Plan de campagne",
        description:
          "Objectifs, offres, zones, intentions, budget média, hypothèses et indicateurs sont définis avant activation.",
      },
      {
        title: "Configuration du suivi",
        description:
          "Formulaires, appels ou rendez-vous sont testés avec Google Tag Manager et les outils adaptés au projet, dans le respect du consentement applicable.",
      },
      {
        title: "Annonces et landing pages",
        description:
          "Des messages cohérents entre la requête, l’annonce et la page, avec variantes conçues pour apprendre réellement.",
      },
      {
        title: "Optimisation des recherches",
        description:
          "Analyse des termes, négatifs, enchères, zones, appareils, horaires et signaux de qualité selon un rythme compatible avec le volume.",
      },
      {
        title: "Compte rendu décisionnel",
        description:
          "Un tableau court qui distingue dépense, conversions suivies, demandes qualifiées et actions à mener, sans masquer les limites de l’attribution.",
      },
    ],
    proofNote:
      "Le budget média est payé directement à la plateforme et reste distinct de nos honoraires. Nous ne promettons ni coût par prospect fixe, ni volume garanti : les prévisions sont des hypothèses, et les chiffres présentés en cas client doivent provenir d’un compte et d’une période identifiés.",
    faq: [
      {
        question: "Quel budget Google Ads faut-il prévoir à Chambéry ?",
        answer:
          "Il dépend du volume de recherches, du coût des enchères, de la zone, de la valeur d’une vente et du nombre de données nécessaire pour décider. Nous proposons un budget d’apprentissage cohérent après avoir cadré ces éléments, plutôt qu’un minimum identique pour tous.",
      },
      {
        question: "Puis-je lancer Google Ads avec un site existant ?",
        answer:
          "Oui si la page répond correctement à l’intention, fonctionne sur mobile et permet une mesure fiable. Sinon, une landing page ciblée peut être préparée avant d’envoyer du trafic payant.",
      },
      {
        question: "À qui appartient le compte publicitaire ?",
        answer:
          "Le compte, les données et le moyen de paiement doivent idéalement rester au nom du client. 3h36 reçoit les accès nécessaires à la gestion, ce qui évite une dépendance artificielle au prestataire.",
      },
      {
        question: "Google Ads améliore-t-il le référencement naturel ?",
        answer:
          "L’achat d’annonces ne donne pas directement de meilleure position organique. En revanche, les campagnes peuvent révéler des formulations, offres et pages qui convertissent, informations utiles pour prioriser le travail SEO.",
      },
    ],
    relatedRoutes: [
      {
        href: "/referencement-seo-chambery",
        label: "SEO local à Chambéry",
        description: "Installer une présence organique en complément des annonces.",
      },
      {
        href: "/site-internet-batiment-savoie",
        label: "Acquisition pour le bâtiment",
        description: "Qualifier les recherches de chantier et de devis.",
      },
      {
        href: "/site-acquisition",
        label: "Site d’acquisition",
        description: "Construire les pages et le suivi nécessaires aux campagnes.",
      },
    ],
    cta: {
      title: "Avant d’acheter des clics, vérifions ce qu’ils doivent produire.",
      description:
        "Indiquez votre offre, votre zone, votre budget envisagé et la valeur d’une demande sérieuse. Nous vous dirons si Search est un canal cohérent et ce qu’il faut préparer.",
      label: "Évaluer une campagne",
      href: "/contact",
    },
  },

  "lancement-marque-startup-savoie": {
    slug: "lancement-marque-startup-savoie",
    seo: {
      title: "Lancement de marque et startup en Savoie | 3h36",
      description:
        "Positionnement, identité, landing page, MVP et acquisition pour startups et nouvelles entreprises en Savoie prêtes à tester une offre sérieusement.",
    },
    eyebrow: "De l’hypothèse à une marque testable",
    h1: "Lancer une marque crédible sans construire trop tôt ce que le marché n’a pas validé.",
    lead:
      "Une jeune entreprise doit expliquer une idée nouvelle, rassurer sans historique et apprendre vite. Nous organisons le positionnement, l’identité, la landing page ou le MVP et les premiers canaux d’acquisition autour d’hypothèses explicites. L’objectif n’est pas de jouer à la grande marque : c’est de disposer d’un système assez solide pour convaincre, tester et évoluer.",
    audience: [
      {
        title: "Fondateurs avec une expertise et un problème identifié",
        description:
          "Le produit n’est pas toujours défini dans le détail, mais le besoin, le public et la capacité à interroger le marché sont suffisamment concrets pour cadrer une première version.",
      },
      {
        title: "Startup qui prépare ses premiers clients pilotes",
        description:
          "La présence doit rendre la proposition compréhensible, collecter les bons signaux et soutenir une démonstration ou un recrutement de bêta-testeurs.",
      },
      {
        title: "Entreprise nouvelle avec un budget de lancement",
        description:
          "Identité, outils et acquisition peuvent avancer avec cohérence lorsque les priorités et décisions sont portées par un interlocuteur disponible.",
      },
      {
        title: "Projet qui doit monter en gamme",
        description:
          "Une première version a permis d’apprendre, mais le discours, le design ou le parcours ne soutiennent plus la prochaine étape commerciale.",
      },
    ],
    problems: [
      {
        title: "La solution est décrite avant le problème",
        description:
          "Un prospect ne peut pas évaluer une liste de fonctions s’il ne reconnaît pas la situation, la conséquence et la différence apportée par le produit.",
      },
      {
        title: "L’identité cherche à compenser un positionnement flou",
        description:
          "Logo et univers visuel deviennent coûteux à reprendre lorsqu’ils ont été conçus avant les choix de cible, catégorie, ton et promesse.",
      },
      {
        title: "Le MVP contient trop de scénarios",
        description:
          "Nous isolons la boucle d’usage qui doit être testée, les données nécessaires et les opérations qui peuvent rester manuelles avant d’automatiser.",
      },
      {
        title: "L’acquisition démarre sans instrument d’apprentissage",
        description:
          "Une liste d’inscrits ou des clics n’expliquent pas pourquoi une personne s’intéresse au produit. Questions, événements et entretiens doivent permettre de relier le signal à l’hypothèse.",
      },
    ],
    approach: [
      {
        title: "1. Formuler l’hypothèse de marché",
        description:
          "Public prioritaire, situation déclenchante, alternative actuelle, bénéfice attendu et raison de croire sont formulés dans un langage testable.",
      },
      {
        title: "2. Construire le minimum de marque nécessaire",
        description:
          "Nom si nécessaire, messages, identité flexible et principes d’interface sont dimensionnés pour la phase réelle, avec assez de cohérence pour être crédible.",
      },
      {
        title: "3. Mettre en ligne un parcours observable",
        description:
          "Landing page, démonstration, formulaire de qualification, réservation ou MVP sont reliés à des événements qui indiquent ce que les utilisateurs ont réellement fait.",
      },
      {
        title: "4. Recruter les premiers retours",
        description:
          "Réseaux, partenariats, contenu, approche directe ou publicité sont choisis selon la cible. Le canal sert d’abord à apprendre avant d’être présenté comme une machine de croissance.",
      },
      {
        title: "5. Consolider ce qui est confirmé",
        description:
          "Les retours conduisent à renforcer, simplifier ou abandonner certaines hypothèses. La marque et le produit sont conçus pour absorber ces décisions sans repartir systématiquement de zéro.",
      },
    ],
    deliverables: [
      {
        title: "Plateforme de positionnement",
        description:
          "Cible, problème, catégorie, proposition de valeur, preuves disponibles, ton et messages prioritaires.",
      },
      {
        title: "Identité de lancement",
        description:
          "Logo ou signature, couleurs, typographies, principes visuels et règles essentielles pour présenter la marque avec cohérence.",
      },
      {
        title: "Landing page ou site de lancement",
        description:
          "Un parcours concentré sur l’hypothèse, la démonstration et l’action utile : entretien, inscription, démo, précommande ou demande pilote.",
      },
      {
        title: "Prototype ou MVP ciblé",
        description:
          "Lorsque le projet le nécessite, une boucle produit prioritaire et les fonctions indispensables pour la tester avec de vrais utilisateurs.",
      },
      {
        title: "Plan d’acquisition initial",
        description:
          "Canaux, messages, audiences, instrumentation et critères d’apprentissage définis pour la première phase.",
      },
    ],
    proofNote:
      "Nous ne présentons pas une inscription comme un client, un prototype comme un produit mature, ni un projet interne comme une mission externe. Les étapes, statuts et limites des produits montrés dans nos études de cas sont indiqués avec transparence.",
    faq: [
      {
        question: "Faut-il avoir terminé le produit avant de travailler la marque ?",
        answer:
          "Non. Un premier positionnement et un système visuel flexible aident à tester le produit. Il faut toutefois accepter que certains choix évoluent avec les retours et éviter de figer trop tôt une plateforme de marque très lourde.",
      },
      {
        question: "Pouvez-vous développer un MVP ?",
        answer:
          "Oui lorsque la boucle principale, les utilisateurs, les données et le mode de test peuvent être cadrés. Une phase de découverte permet de séparer les fonctions indispensables des automatisations qui peuvent attendre.",
      },
      {
        question: "Comment choisir entre landing page et site complet ?",
        answer:
          "Une landing page convient à une hypothèse et une action principales. Plusieurs publics, offres, preuves ou sujets de référencement justifient une architecture plus large. Nous choisissons selon la décision à faciliter, pas selon une règle de volume.",
      },
      {
        question: "Travaillez-vous avec tous les projets en création ?",
        answer:
          "Nous privilégions les fondateurs capables de consacrer du temps au cadrage et aux retours, avec un budget cohérent avec l’étape visée. Une idée seule, sans public accessible ni décisionnaire disponible, nécessite d’abord un travail de validation interne.",
      },
    ],
    relatedRoutes: [
      {
        href: "/identite-visuelle-chambery",
        label: "Identité visuelle",
        description: "Créer un système de marque crédible et adaptable.",
      },
      {
        href: "/solutions-metiers",
        label: "MVP et solutions métiers",
        description: "Concevoir une première boucle produit utile.",
      },
      {
        href: "/realisations/plum",
        label: "Étude de cas Plum",
        description: "Voir la construction d’un produit éditorial cohérent.",
      },
    ],
    cta: {
      title: "Transformons l’idée en hypothèse que le marché peut juger.",
      description:
        "Présentez le problème, le public, ce qui a déjà été testé et l’étape que vous voulez atteindre. Nous vous proposerons un périmètre compatible avec cette phase.",
      label: "Cadrer mon lancement",
      href: "/contact",
    },
  },

  "identite-visuelle-chambery": {
    slug: "identite-visuelle-chambery",
    seo: {
      title: "Identité visuelle et design de marque à Chambéry | 3h36",
      description:
        "Identité visuelle à Chambéry : positionnement, logo, système graphique, contenus et déploiement digital pour entreprises, startups et indépendants.",
    },
    eyebrow: "Identité, direction artistique et contenus",
    h1: "Une identité visuelle qui rend votre entreprise reconnaissable et cohérente.",
    lead:
      "Une image professionnelle ne se limite pas à un logo. Elle organise les signes qui permettent d’identifier votre entreprise, de comprendre sa personnalité et de retrouver le même niveau d’exigence sur un site, une proposition commerciale, un réseau social ou une photographie. Nous créons ce système à partir du positionnement réel de la marque.",
    audience: [
      {
        title: "Entreprise qui se lance",
        description:
          "Vous avez besoin d’un socle visuel capable de convaincre dès les premiers supports, sans acheter une charte disproportionnée ou une collection d’effets difficiles à utiliser.",
      },
      {
        title: "PME devenue plus mature que son image",
        description:
          "L’entreprise, ses offres et ses clients ont évolué mais les supports accumulent plusieurs styles. Une refonte rétablit la cohérence sans effacer inutilement les repères acquis.",
      },
      {
        title: "Expert ou consultant qui doit incarner une position",
        description:
          "La direction visuelle aide à sortir des codes génériques tout en laissant la méthode, la voix et les preuves occuper le premier plan.",
      },
      {
        title: "Marque qui prépare un site ou une campagne",
        description:
          "Lorsque l’identité et les contenus sont pensés avec les futurs formats, le déploiement gagne en qualité et évite les adaptations improvisées.",
      },
    ],
    problems: [
      {
        title: "Un logo isolé sans règles d’usage",
        description:
          "Sans variantes, proportions, typographies, couleurs et exemples, le signe est rapidement déformé ou entouré de choix incohérents.",
      },
      {
        title: "Une identité copiée sur les tendances du secteur",
        description:
          "Suivre les mêmes références que tous les concurrents produit une image correcte mais interchangeable. Nous cherchons une différence pertinente, pas une originalité décorative.",
      },
      {
        title: "Des supports impossibles à produire en autonomie",
        description:
          "Une charte utile prévoit les formats récurrents et un niveau de complexité compatible avec les personnes qui devront créer les prochaines pages, publications ou documents.",
      },
      {
        title: "Le discours et le visuel racontent deux marques",
        description:
          "Ton, promesse, photographie, mise en page et animation doivent soutenir la même perception. Nous travaillons leur articulation avant de multiplier les déclinaisons.",
      },
    ],
    approach: [
      {
        title: "1. Comprendre la position à rendre visible",
        description:
          "Public, alternatives, personnalité, niveau de gamme, preuves, usages et contraintes sont rassemblés dans un brief décisionnel.",
      },
      {
        title: "2. Explorer des territoires distincts",
        description:
          "Des directions argumentées permettent de comparer des logiques de marque, pas seulement des préférences de couleurs. La piste retenue est éprouvée sur de vrais supports.",
      },
      {
        title: "3. Construire le système",
        description:
          "Signature, palette, typographies, compositions, iconographie, image et mouvement sont définis au niveau nécessaire pour produire avec cohérence.",
      },
      {
        title: "4. Déployer et transmettre",
        description:
          "Les fichiers sont préparés pour les usages convenus et accompagnés de règles compréhensibles. Nous distinguons les droits cédés, les licences et les ressources tierces.",
      },
    ],
    deliverables: [
      {
        title: "Fondations de marque",
        description:
          "Positionnement synthétique, personnalité, messages et principes qui permettent d’évaluer les choix visuels.",
      },
      {
        title: "Logo et signatures",
        description:
          "Versions principales et secondaires, monochromes, zones de protection et formats adaptés aux supports définis.",
      },
      {
        title: "Système graphique",
        description:
          "Couleurs, typographies, grilles, formes, iconographie, traitement photo ou illustration et principes de mouvement selon le projet.",
      },
      {
        title: "Guide d’utilisation",
        description:
          "Un document opérationnel avec règles, interdits et exemples, dimensionné selon le nombre de personnes et de canaux.",
      },
      {
        title: "Kit de lancement",
        description:
          "Déclinaisons prioritaires — site, réseaux, présentation, documents ou campagne — choisies selon les usages réels plutôt qu’un pack générique.",
      },
    ],
    proofNote:
      "Les maquettes servent à montrer le potentiel d’un système, mais elles sont distinguées des supports réellement produits. Les polices, photographies et ressources tierces sont utilisées selon leurs licences ; aucune marque fictive n’est présentée comme un client.",
    faq: [
      {
        question: "Quelle différence entre un logo et une identité visuelle ?",
        answer:
          "Le logo est un signe d’identification. L’identité réunit aussi typographies, couleurs, compositions, images, iconographie et règles qui créent une expérience cohérente même lorsque le logo n’est pas au centre.",
      },
      {
        question: "Pouvez-vous moderniser une identité sans changer le logo ?",
        answer:
          "Oui si le signe reste pertinent et techniquement exploitable. Un travail sur les proportions, les variantes et le système environnant peut suffire. Nous évaluons ce que la marque a intérêt à conserver avant de recommander une rupture.",
      },
      {
        question: "L’identité inclut-elle le site internet ?",
        answer:
          "Le site peut être intégré au même projet, mais les livrables et budgets restent distingués. Concevoir les deux ensemble permet d’éprouver immédiatement l’identité dans une expérience réelle.",
      },
      {
        question: "Quels fichiers sont remis à la fin ?",
        answer:
          "La liste dépend des usages convenus : fichiers vectoriels et raster, variantes colorimétriques, exports web, guide et modèles éventuels. Les licences et conditions de cession sont précisées dans la proposition.",
      },
    ],
    relatedRoutes: [
      {
        href: "/photo-video-entreprise-savoie",
        label: "Photo et vidéo",
        description: "Prolonger l’identité avec des images originales.",
      },
      {
        href: "/lancement-marque-startup-savoie",
        label: "Lancement de marque",
        description: "Aligner positionnement, identité et première expérience.",
      },
      {
        href: "/creation-site-internet-chambery",
        label: "Création de site",
        description: "Déployer le système de marque dans un parcours digital.",
      },
    ],
    cta: {
      title: "Construisons une image que votre équipe saura faire vivre.",
      description:
        "Montrez-nous vos supports actuels, vos prochaines utilisations et la perception que vous voulez changer. Nous définirons le système réellement nécessaire.",
      label: "Parler de ma marque",
      href: "/contact",
    },
  },

  "photo-video-entreprise-savoie": {
    slug: "photo-video-entreprise-savoie",
    seo: {
      title: "Photo et vidéo d’entreprise en Savoie | 3h36",
      description:
        "Reportage photo, portrait, chantier et vidéo d’entreprise en Savoie : conception, production et déclinaisons pensées pour votre site et vos campagnes.",
    },
    eyebrow: "Images de marque produites sur le terrain",
    h1: "Des photos et vidéos d’entreprise qui montrent votre réalité avec justesse.",
    lead:
      "Une banque d’images originale donne un visage à l’entreprise, documente son savoir-faire et évite les visuels génériques que les prospects voient partout. Nous préparons les prises de vue en fonction des pages, campagnes et formats qui les utiliseront, puis organisons les fichiers pour qu’ils restent exploitables au-delà d’une seule publication.",
    audience: [
      {
        title: "PME qui veut présenter ses équipes et ses lieux",
        description:
          "Portraits, gestes, environnement de travail et scènes d’échange permettent de rendre l’organisation plus tangible auprès des clients comme des candidats.",
      },
      {
        title: "Entreprise du bâtiment ou de l’industrie",
        description:
          "Chantiers, ateliers, détails techniques, moyens et étapes demandent une préparation compatible avec la sécurité, les autorisations et la réalité du planning.",
      },
      {
        title: "Marque qui prépare un site ou une campagne",
        description:
          "Le cadrage prévoit dès le départ formats horizontaux, verticaux, zones de texte, miniatures et séquences nécessaires aux pages et annonces.",
      },
      {
        title: "Expert qui doit incarner sa pratique",
        description:
          "Des portraits et situations de travail bien dirigés installent une présence professionnelle sans transformer la personne en modèle publicitaire déconnecté de son métier.",
      },
    ],
    problems: [
      {
        title: "Les images ne racontent pas la même entreprise",
        description:
          "Photos d’équipe, captures de téléphone, banques d’images et anciens visuels coexistent sans direction. Une ligne photographique crée des repères communs de lumière, couleur, cadrage et présence humaine.",
      },
      {
        title: "Le shooting est organisé sans connaître les supports",
        description:
          "Une photo peut être réussie et inutilisable sous un titre, dans un format mobile ou au milieu d’une page. La liste de prises de vue part des besoins de contenu.",
      },
      {
        title: "Les droits et autorisations restent flous",
        description:
          "Personnes, clients, bâtiments, œuvres, plaques, machines et musiques peuvent nécessiter des validations. Nous identifions ces sujets avant la diffusion.",
      },
      {
        title: "La vidéo concentre trop de messages",
        description:
          "Un film unique ne peut pas toujours servir de présentation, publicité, témoignage et contenu social. Nous distinguons le récit principal et les capsules dérivées.",
      },
    ],
    approach: [
      {
        title: "1. Définir les usages",
        description:
          "Pages, formats, publics, messages, durée de vie, canaux et contraintes de diffusion sont listés avant le choix des scènes.",
      },
      {
        title: "2. Préparer le terrain",
        description:
          "Repérage, météo, horaires, personnes, autorisations, tenues, sécurité, bruit et disponibilité des espaces sont intégrés au plan de production.",
      },
      {
        title: "3. Diriger sans dénaturer",
        description:
          "Nous créons des situations lisibles tout en préservant les gestes et relations crédibles. L’objectif est de montrer le métier, pas de fabriquer un décor sans rapport avec lui.",
      },
      {
        title: "4. Monter et décliner",
        description:
          "Sélection, traitement, montage, sous-titres et exports sont adaptés aux usages convenus. Les versions sont nommées et livrées de façon à rester retrouvables.",
      },
      {
        title: "5. Intégrer aux parcours",
        description:
          "Les images sont optimisées pour le web, légendées lorsqu’elles apportent une information et placées au bon moment dans les pages ou campagnes.",
      },
    ],
    deliverables: [
      {
        title: "Direction et liste de prises de vue",
        description:
          "Intentions, références, scènes, cadrages, personnes et formats reliés aux futurs supports.",
      },
      {
        title: "Reportage photo d’entreprise",
        description:
          "Portraits, équipes, gestes, lieux, produits ou chantiers selon un périmètre, une durée et un nombre d’images définis.",
      },
      {
        title: "Film ou capsules vidéo",
        description:
          "Scénario, tournage, montage, habillage, musique sous licence et sous-titrage selon le dispositif retenu.",
      },
      {
        title: "Exports par canal",
        description:
          "Formats web, haute définition, horizontaux, verticaux ou carrés prévus dans la proposition, avec règles simples d’utilisation.",
      },
      {
        title: "Bibliothèque organisée",
        description:
          "Sélection, noms de fichiers, dossiers et informations de droits pour faciliter la réutilisation par les équipes.",
      },
    ],
    proofNote:
      "Les lieux, personnes et chantiers ne sont publiés qu’avec les autorisations nécessaires. Les images générées, maquettes et prises de vue réelles sont identifiées comme telles ; aucune scène artificielle n’est présentée comme la réalité d’une entreprise.",
    faq: [
      {
        question: "Vous déplacez-vous dans toute la Savoie ?",
        answer:
          "Le déplacement peut être organisé selon le lieu, la durée, les accès et le matériel nécessaire. Les frais et contraintes sont précisés avant validation ; nous ne prétendons pas disposer d’un studio ou d’une équipe permanente dans chaque ville.",
      },
      {
        question: "Combien de photos sont livrées ?",
        answer:
          "Le nombre dépend du temps de prise de vue, des scènes et du niveau de retouche. Nous préférons définir une sélection utile et cohérente dans la proposition plutôt que promettre un volume qui encourage les doublons.",
      },
      {
        question: "Pouvez-vous filmer un chantier en activité ?",
        answer:
          "Oui lorsque l’accès, les règles de sécurité, les autorisations et le planning le permettent. Un échange avec le responsable du site et, si nécessaire, un repérage permettent de prévoir les séquences sans gêner les opérations.",
      },
      {
        question: "Les droits d’utilisation sont-ils inclus ?",
        answer:
          "Le territoire, la durée, les médias et les usages prévus sont indiqués dans le devis ou la cession. Les droits des personnes, musiques, lieux et autres éléments tiers restent traités séparément lorsqu’ils s’appliquent.",
      },
    ],
    relatedRoutes: [
      {
        href: "/identite-visuelle-chambery",
        label: "Identité visuelle",
        description: "Définir la direction qui guidera les prises de vue.",
      },
      {
        href: "/site-internet-batiment-savoie",
        label: "Site pour le bâtiment",
        description: "Transformer les reportages de chantier en preuves utiles.",
      },
      {
        href: "/creation-site-internet-chambery",
        label: "Création de site",
        description: "Concevoir les pages qui accueilleront vos images.",
      },
    ],
    cta: {
      title: "Préparons des images pour des usages réels.",
      description:
        "Indiquez les lieux, personnes, supports et échéances concernés. Nous construirons une production adaptée à votre terrain et à votre stratégie de diffusion.",
      label: "Préparer un tournage",
      href: "/contact",
    },
  },

  "site-internet-consultant-savoie": {
    slug: "site-internet-consultant-savoie",
    seo: {
      title: "Site internet pour consultant en Savoie | 3h36",
      description:
        "Sites pour consultants, experts et freelances premium en Savoie : positionnement, offres, contenus d’autorité et parcours de prise de rendez-vous.",
    },
    eyebrow: "Présence digitale pour experts indépendants",
    h1: "Un site de consultant qui rend votre expertise facile à comprendre et à recommander.",
    lead:
      "Une expertise solide peut rester difficile à acheter lorsqu’elle est présentée comme une longue liste de compétences. Nous transformons votre expérience, votre méthode et vos terrains d’intervention en offres lisibles, contenus d’autorité et parcours de contact adaptés aux décideurs que vous voulez réellement accompagner.",
    audience: [
      {
        title: "Consultant senior qui développe son activité directe",
        description:
          "Votre expérience est reconnue dans un réseau, mais votre présence ne permet pas encore à un nouveau décideur de comprendre votre angle, vos missions et votre niveau d’intervention.",
      },
      {
        title: "Freelance spécialisé qui veut monter en gamme",
        description:
          "Le site aide à passer d’une disponibilité vendue au jour à une expertise structurée autour de problèmes, méthodes et livrables précis.",
      },
      {
        title: "Cabinet ou collectif d’experts",
        description:
          "Les offres communes, compétences individuelles et modes de collaboration sont organisés sans donner l’impression d’un annuaire de profils.",
      },
      {
        title: "Formateur, coach ou expert avec plusieurs formats",
        description:
          "Conseil, accompagnement, atelier et formation nécessitent une hiérarchie claire afin que chaque public identifie le bon point d’entrée.",
      },
    ],
    problems: [
      {
        title: "La page À propos porte tout le discours",
        description:
          "Un parcours ou un CV ne suffit pas à expliquer les problèmes traités, les organisations concernées, les modalités et la différence de méthode.",
      },
      {
        title: "Les offres sont trop personnalisées pour être nommées",
        description:
          "Personnaliser une mission n’empêche pas de montrer des cadres d’intervention, résultats attendus, étapes et critères qui aident un prospect à se reconnaître.",
      },
      {
        title: "Les contenus démontrent du savoir mais ne conduisent nulle part",
        description:
          "Articles, conférences ou publications doivent être reliés aux sujets d’expertise et à une manière naturelle de poursuivre l’échange.",
      },
      {
        title: "Le formulaire attire des demandes peu sérieuses",
        description:
          "Contexte, organisation, enjeu, échéance et budget indicatif peuvent préparer le rendez-vous sans imposer un questionnaire interminable.",
      },
    ],
    approach: [
      {
        title: "1. Isoler votre territoire d’expertise",
        description:
          "Nous distinguons expérience générale, sujets sur lesquels vous avez un point de vue et situations pour lesquelles un décideur a une raison de vous appeler.",
      },
      {
        title: "2. Formaliser les offres sans les rigidifier",
        description:
          "Les missions sont organisées par problème, public, format ou étape, avec une marge claire pour le sur-mesure.",
      },
      {
        title: "3. Construire les preuves",
        description:
          "Cas anonymisés si nécessaire, méthodes, interventions, publications, certifications et témoignages autorisés sont présentés avec leur contexte.",
      },
      {
        title: "4. Déployer une présence d’auteur",
        description:
          "Biographie, pages de sujets, articles, questions fréquentes et profils officiels créent une identité cohérente autour de la personne et de son cabinet.",
      },
      {
        title: "5. Qualifier la prise de contact",
        description:
          "L’appel à l’action et le formulaire sont ajustés au cycle de vente : diagnostic, rendez-vous, demande de formation, conférence ou mission.",
      },
    ],
    deliverables: [
      {
        title: "Positionnement et messages",
        description:
          "Promesse, publics, sujets d’autorité, offres et vocabulaire issus de votre pratique réelle.",
      },
      {
        title: "Site d’expert responsive",
        description:
          "Pages d’offres, méthode, profil, preuves, contenus et contact dans une direction visuelle crédible sans surjouer le personal branding.",
      },
      {
        title: "Structure de contenus",
        description:
          "Formats d’articles, analyses ou ressources reliés aux questions commerciales et aux domaines où vous pouvez apporter une voix originale.",
      },
      {
        title: "Prise de rendez-vous qualifiée",
        description:
          "Formulaire, calendrier éventuel, confirmations et événements de conversion adaptés à votre disponibilité et à votre processus.",
      },
      {
        title: "Socle SEO d’auteur et de service",
        description:
          "Informations cohérentes, biographies, profils officiels, métadonnées, maillage et balisages pertinents pour clarifier la relation entre expert, sujets et offres.",
      },
    ],
    proofNote:
      "Les diplômes, certifications, clients, interventions et résultats de mission sont publiés uniquement lorsqu’ils peuvent être confirmés et lorsque la confidentialité le permet. Un cas anonymisé conserve assez de contexte pour rester utile sans rendre le client identifiable.",
    faq: [
      {
        question: "Un consultant a-t-il besoin de plus qu’une page LinkedIn ?",
        answer:
          "LinkedIn facilite la découverte et la conversation, mais le site vous donne un espace stable pour organiser les offres, preuves, contenus et prises de contact selon votre propre logique. Les deux supports sont complémentaires.",
      },
      {
        question: "Dois-je afficher mes tarifs ?",
        answer:
          "Pas nécessairement. Une fourchette, un budget minimum, un format ou les facteurs de prix peuvent cependant filtrer les demandes et réduire l’incertitude. Le choix dépend de la standardisation des missions et de votre stratégie commerciale.",
      },
      {
        question: "Pouvez-vous m’aider à rédiger mes offres ?",
        answer:
          "Oui. Le travail part d’entretiens, documents, propositions existantes et cas réels. Nous reformulons sans inventer une méthode, un résultat ou une spécialisation que vous ne pouvez pas défendre.",
      },
      {
        question: "Le référencement local est-il utile si je travaille à distance ?",
        answer:
          "Il peut aider pour les recherches de proximité et la confiance, mais ne doit pas enfermer votre offre. L’architecture peut articuler une base en Savoie avec des pages et contenus destinés à un marché plus large.",
      },
    ],
    relatedRoutes: [
      {
        href: "/identite-visuelle-chambery",
        label: "Identité d’expert",
        description: "Créer un univers professionnel cohérent et personnel.",
      },
      {
        href: "/referencement-seo-chambery",
        label: "Référencement SEO",
        description: "Développer la visibilité des offres et contenus experts.",
      },
      {
        href: "/photo-video-entreprise-savoie",
        label: "Portrait et vidéo",
        description: "Incarner votre pratique avec des images originales.",
      },
    ],
    cta: {
      title: "Votre expertise mérite mieux qu’une liste de compétences.",
      description:
        "Partagez vos missions les plus pertinentes, vos clients cibles et la façon dont les opportunités arrivent aujourd’hui. Nous structurerons un parcours qui vous ressemble.",
      label: "Structurer ma présence",
      href: "/contact",
    },
  },

  "agence-web-aix-les-bains": {
    slug: "agence-web-aix-les-bains",
    seo: {
      title: "Agence web pour Aix-les-Bains : site et visibilité | 3h36",
      description:
        "Agence web pour Aix-les-Bains : sites, image, SEO local et acquisition adaptés au tourisme, bien-être, services et entreprises du lac du Bourget.",
    },
    eyebrow: "Web, image et acquisition autour d’Aix-les-Bains",
    h1: "Une présence digitale pensée pour les rythmes d’Aix-les-Bains et du lac du Bourget.",
    lead:
      "Autour d’Aix-les-Bains, les établissements touristiques, acteurs du bien-être, commerces, services et entreprises locales rencontrent des enjeux particuliers : saisonnalité, réputation, réservation, clientèle de passage et fidélisation. Nous concevons des sites et campagnes qui rendent ces temporalités lisibles sans réduire le territoire à une image de carte postale.",
    audience: [
      {
        title: "Hébergement, restauration et activités touristiques",
        description:
          "Le parcours doit relier découverte, informations pratiques, disponibilité, réservation et alternatives hors saison, tout en maîtrisant la dépendance aux plateformes.",
      },
      {
        title: "Bien-être, santé non réglementée et services à la personne",
        description:
          "Les prestations, qualifications, contre-indications éventuelles, lieux et modalités de rendez-vous demandent une présentation précise et rassurante.",
      },
      {
        title: "Commerces et marques liées au territoire",
        description:
          "Une identité et des contenus originaux peuvent s’appuyer sur le lac, les usages et les savoir-faire sans reprendre les mêmes codes visuels que tous les acteurs locaux.",
      },
      {
        title: "PME de services du bassin aixois",
        description:
          "Au-delà du tourisme, les entreprises B2B et services locaux ont besoin de pages d’offres, preuves et zones qui soutiennent une prospection continue.",
      },
    ],
    problems: [
      {
        title: "La saison forte masque les périodes creuses",
        description:
          "Les contenus, offres et campagnes doivent anticiper plusieurs rythmes de demande au lieu de présenter toute l’année le même message.",
      },
      {
        title: "Le site dépend entièrement d’un outil de réservation",
        description:
          "Une plateforme peut conclure la transaction, mais le site doit expliquer l’expérience, répondre aux objections et capter les recherches de marque ou de destination.",
      },
      {
        title: "Les avis sont nombreux mais peu valorisés",
        description:
          "La réputation locale se travaille par la qualité du service, une collecte conforme, des réponses humaines et des informations cohérentes. Les avis ne doivent pas être copiés ou balisés de manière trompeuse.",
      },
      {
        title: "Les visiteurs ne trouvent pas les informations pratiques",
        description:
          "Accès, stationnement, horaires saisonniers, langues, réservation, conditions et mobilité doivent rester accessibles sur mobile, y compris depuis une recherche de dernière minute.",
      },
    ],
    approach: [
      {
        title: "1. Cartographier les saisons et publics",
        description:
          "Nous distinguons habitant, curiste, visiteur, groupe, entreprise ou client récurrent, ainsi que les moments où chacun prépare sa décision.",
      },
      {
        title: "2. Organiser l’offre et la réservation",
        description:
          "Pages, disponibilités, prises de rendez-vous, bons cadeaux ou demandes de groupe sont reliés sans imposer un parcours identique à tous les besoins.",
      },
      {
        title: "3. Produire des contenus situés",
        description:
          "Photographies, conseils d’accès, partenaires, expériences et ressources locales apportent une valeur qu’une page générique sur Aix-les-Bains ne peut pas reproduire.",
      },
      {
        title: "4. Piloter la demande",
        description:
          "SEO local, profil d’établissement, campagnes et conversions sont observés par période, offre et public afin d’ajuster la visibilité au calendrier réel.",
      },
    ],
    deliverables: [
      {
        title: "Site mobile et orienté réservation",
        description:
          "Un parcours rapide entre découverte, preuve, information pratique et moteur de réservation ou prise de contact.",
      },
      {
        title: "Architecture saisonnière",
        description:
          "Des pages et contenus qui peuvent évoluer selon les périodes sans créer chaque année de nouvelles URLs inutiles.",
      },
      {
        title: "Contenus photo et vidéo",
        description:
          "Une représentation originale des lieux, équipes et expériences, préparée pour le site, les réseaux et les campagnes.",
      },
      {
        title: "SEO local et réputation",
        description:
          "Pages utiles, informations cohérentes, profil Google Business et méthode de collecte d’avis respectueuse des plateformes.",
      },
      {
        title: "Acquisition par période",
        description:
          "Campagnes, budgets et pages d’atterrissage ajustés aux offres et fenêtres de décision plutôt qu’à une dépense constante par défaut.",
      },
    ],
    proofNote:
      "3h36 peut intervenir pour les entreprises du bassin aixois sans revendiquer une implantation inexistante à Aix-les-Bains. Les données touristiques, horaires, tarifs, avis et disponibilités publiés restent sous la responsabilité des sources et établissements qui les fournissent.",
    faq: [
      {
        question: "Pouvez-vous connecter un moteur de réservation existant ?",
        answer:
          "Souvent oui, par lien, widget ou intégration selon l’outil. Nous évaluons l’expérience mobile, la mesure, les conditions techniques et la propriété des données avant de choisir la meilleure solution.",
      },
      {
        question: "Comment travailler le référencement touristique local ?",
        answer:
          "En décrivant précisément l’expérience, le public, la période, le lieu et les informations pratiques, puis en maintenant un profil d’établissement cohérent. Les partenariats et contenus locaux doivent apporter une valeur réelle, pas servir uniquement à placer une ville dans le texte.",
      },
      {
        question: "Faut-il traduire le site ?",
        answer:
          "Cela dépend de la part de clientèle internationale et des pages réellement consultées. Une traduction professionnelle des parcours prioritaires est préférable à une version complète non maintenue.",
      },
      {
        question: "Pouvez-vous promouvoir une offre hors saison ?",
        answer:
          "Oui si l’offre, les disponibilités et le public sont définis. Nous pouvons préparer une page et tester SEO, partenariats, e-mail ou publicité selon le délai et le volume de demande disponible.",
      },
    ],
    relatedRoutes: [
      {
        href: "/photo-video-entreprise-savoie",
        label: "Photo et vidéo en Savoie",
        description: "Montrer les lieux et expériences avec une image originale.",
      },
      {
        href: "/site-vitrine",
        label: "Site vitrine professionnel",
        description: "Découvrir notre méthode de conception et de mesure.",
      },
      {
        href: "/referencement-seo",
        label: "Référencement en Savoie",
        description: "Structurer durablement la visibilité organique.",
      },
    ],
    cta: {
      title: "Adaptons votre présence au vrai calendrier de vos clients.",
      description:
        "Présentez votre activité, vos périodes fortes et les réservations ou demandes que vous voulez développer autour d’Aix-les-Bains.",
      label: "Parler de mon activité",
      href: "/contact",
    },
  },

  "agence-web-albertville": {
    slug: "agence-web-albertville",
    seo: {
      title: "Agence web pour Albertville : site, SEO et Ads | 3h36",
      description:
        "Agence web pour Albertville et ses vallées : sites, SEO local, contenus et acquisition pour bâtiment, services, industrie et économie de montagne.",
    },
    eyebrow: "Présence digitale à Albertville et dans les vallées",
    h1: "Un dispositif web adapté aux entreprises d’Albertville et aux marchés de montagne.",
    lead:
      "Le bassin albertvillois relie activités locales, bâtiment, industrie, services et économie de montagne. Les entreprises peuvent travailler sur une zone étendue, avec des accès, saisons et clientèles très différents. Nous rendons cette réalité lisible dans le site, les contenus et l’acquisition plutôt que de la résumer à une simple liste de communes.",
    audience: [
      {
        title: "Bâtiment, rénovation et métiers techniques",
        description:
          "Chantiers en plaine, stations ou vallées demandent de préciser les zones, contraintes, saisonnalités et types d’ouvrages réellement pris en charge.",
      },
      {
        title: "Industrie et services B2B",
        description:
          "Capacités, qualité, délais, documentation, recrutement et références doivent être présentés pour des décideurs qui n’achètent pas comme un particulier.",
      },
      {
        title: "Acteurs de l’hospitalité et de la montagne",
        description:
          "La clientèle peut préparer son séjour loin du territoire. Le parcours doit articuler expérience, accès, disponibilité et informations saisonnières sur mobile.",
      },
      {
        title: "Entreprises qui interviennent de la Combe de Savoie aux vallées",
        description:
          "Une présence locale crédible explique les territoires effectivement couverts, les modalités d’intervention et les différences de service sans multiplier les pages artificielles.",
      },
    ],
    problems: [
      {
        title: "La zone d’intervention reste ambiguë",
        description:
          "Un prospect ne sait pas si l’entreprise se déplace jusqu’à son chantier ou son établissement. Une carte décorative ne remplace pas des conditions et exemples concrets.",
      },
      {
        title: "Les réalisations ne sont pas classées par enjeu",
        description:
          "Un portfolio chronologique aide peu à comparer. Typologie, altitude ou accès, saison, métier, contrainte et rôle de l’entreprise rendent les cas plus utiles.",
      },
      {
        title: "Le recrutement est traité comme une page secondaire",
        description:
          "Les métiers techniques ont besoin d’une présentation honnête des équipes, missions, environnement, mobilité et étapes de candidature.",
      },
      {
        title: "Les campagnes consomment sur des zones non rentables",
        description:
          "La géographie publicitaire doit tenir compte des trajets, capacités, types de projets et saisons, pas seulement d’un rayon autour d’Albertville.",
      },
    ],
    approach: [
      {
        title: "1. Définir le marché réellement couvert",
        description:
          "Nous cartographions offres, clientèles, vallées, contraintes de déplacement, saisons et valeur des projets pour éviter une promesse territoriale trop large.",
      },
      {
        title: "2. Documenter les opérations représentatives",
        description:
          "Chantiers, installations, interventions ou expériences sont transformés en cas lisibles avec contexte, rôle, méthodes et images autorisées.",
      },
      {
        title: "3. Créer des parcours par décision",
        description:
          "Client particulier, acheteur B2B, partenaire, candidat ou visiteur n’attendent pas les mêmes informations. La navigation sépare ces besoins sans fragmenter inutilement le site.",
      },
      {
        title: "4. Déployer la visibilité par priorité",
        description:
          "Pages locales utiles, profil d’établissement, contenus, partenariats et campagnes sont développés selon les zones et offres que l’entreprise peut réellement absorber.",
      },
    ],
    deliverables: [
      {
        title: "Architecture offres, secteurs et zones",
        description:
          "Un plan éditorial qui évite de mélanger marché local, missions B2B, vallée et économie saisonnière.",
      },
      {
        title: "Site rapide et robuste",
        description:
          "Une expérience mobile lisible, y compris pour des utilisateurs qui cherchent une information pratique ou un contact depuis le terrain.",
      },
      {
        title: "Cas et reportages métier",
        description:
          "Des formats pour documenter savoir-faire, équipes, chantiers, installations ou expériences sans publier d’informations sensibles.",
      },
      {
        title: "SEO local différencié",
        description:
          "Des contenus fondés sur les prestations et contraintes du territoire, avec informations d’entité et profil d’établissement cohérents.",
      },
      {
        title: "Campagnes géographiques maîtrisées",
        description:
          "Zones, exclusions, saisonnalité, landing pages et conversions configurées selon l’économie réelle des interventions.",
      },
    ],
    proofNote:
      "3h36 peut accompagner les entreprises du bassin albertvillois sans revendiquer une adresse locale inexistante. Les zones d’intervention, accès, certifications et références de chaque client sont vérifiés avant publication ; aucune commune n’est ciblée sans contenu propre et service réel.",
    faq: [
      {
        question: "Pouvez-vous créer des pages pour la Tarentaise ou le Beaufortain ?",
        answer:
          "Oui si l’entreprise y intervient réellement et dispose d’informations, réalisations ou modalités spécifiques. Une page utile doit expliquer ce qui change pour le client ; elle ne doit pas dupliquer le texte d’Albertville avec un autre nom de territoire.",
      },
      {
        question: "Comment montrer des références industrielles confidentielles ?",
        answer:
          "Nous pouvons anonymiser le donneur d’ordre, limiter les vues, décrire la famille de problème et faire valider le contenu. Si le niveau de détail utile crée encore un risque, mieux vaut ne pas publier le cas.",
      },
      {
        question: "Le site peut-il aussi servir au recrutement ?",
        answer:
          "Oui. Pages métiers, vie d’équipe, conditions, mobilité, candidatures et contenus terrain peuvent créer un parcours distinct du parcours commercial, avec ses propres conversions.",
      },
      {
        question: "Faut-il cibler toutes les stations dans Google Ads ?",
        answer:
          "Non. Les zones sont choisies selon l’offre, la capacité, les trajets, la saison et la valeur des projets. Une extension se décide après lecture des termes de recherche et de la qualité des demandes, pas pour maximiser la couverture affichée.",
      },
    ],
    relatedRoutes: [
      {
        href: "/site-internet-batiment-savoie",
        label: "Sites pour le bâtiment",
        description: "Présenter les métiers, zones et chantiers avec précision.",
      },
      {
        href: "/photo-video-entreprise-savoie",
        label: "Photo et vidéo terrain",
        description: "Documenter équipes, ateliers et interventions.",
      },
      {
        href: "/gestion-google-ads",
        label: "Gestion Google Ads",
        description: "Piloter zones, budgets et demandes à l’échelle de la Savoie.",
      },
    ],
    cta: {
      title: "Rendons votre territoire d’intervention aussi clair que vos métiers.",
      description:
        "Indiquez vos offres prioritaires, vos zones, vos saisons et les projets que vous cherchez autour d’Albertville. Nous structurerons le dispositif en conséquence.",
      label: "Cadrer ma présence locale",
      href: "/contact",
    },
  },

  "referencement-seo": {
    slug: "referencement-seo",
    seo: {
      title: "Agence SEO en Savoie : technique, contenu et local | 3h36",
      description:
        "Accompagnement SEO en Savoie pour PME : audit technique, architecture, contenus experts, référencement local et mesure des demandes organiques.",
    },
    eyebrow: "Référencement naturel pour les entreprises de Savoie",
    h1: "Une stratégie SEO reliée à vos offres, vos preuves et vos objectifs commerciaux.",
    lead:
      "3h36 accompagne les PME, entreprises du bâtiment, jeunes marques et experts qui veulent installer une visibilité organique durable. Nous traitons la technique, l’architecture, les contenus, le référencement local et la mesure comme un même système. Le but n’est pas de publier le plus grand nombre de pages, mais de devenir la réponse la plus utile sur les recherches compatibles avec votre activité.",
    audience: [
      {
        title: "PME avec plusieurs offres ou marchés",
        description:
          "Une architecture claire évite que les services, secteurs, zones et ressources se concurrencent. Chaque ensemble de pages reçoit un rôle dans le parcours de recherche et de vente.",
      },
      {
        title: "Entreprise du bâtiment ou de services",
        description:
          "Les recherches locales et métiers nécessitent des pages précises, des réalisations documentées et une zone d’intervention honnête plutôt qu’une longue série de communes répétées.",
      },
      {
        title: "Site qui possède déjà un historique",
        description:
          "Search Console, pages d’entrée, liens et contenus existants peuvent révéler des gains plus rapides que la création systématique de nouveaux articles.",
      },
      {
        title: "Équipe qui veut internaliser une partie du SEO",
        description:
          "Nous pouvons structurer les règles, modèles, briefs et indicateurs afin que vos experts contribuent sans produire des contenus impossibles à maintenir.",
      },
    ],
    problems: [
      {
        title: "Le moteur ne découvre pas correctement les bonnes pages",
        description:
          "Liens internes faibles, redirections, canonicals, sitemap, rendu, erreurs ou profondeur excessive peuvent limiter l’exploration et diluer l’importance des pages commerciales.",
      },
      {
        title: "Le site couvre des mots-clés mais pas les décisions",
        description:
          "Une requête n’est pas un sujet isolé : le prospect veut comprendre une solution, un prix, un risque, une méthode ou une preuve. Le contenu doit servir ce besoin avant de viser une formulation.",
      },
      {
        title: "Les pages locales sont interchangeables",
        description:
          "Remplacer un nom de ville ne crée pas une réponse locale. Nous recherchons les différences de zone, cas, accès, saison, public ou modalité qui justifient réellement une page.",
      },
      {
        title: "Le trafic n’est pas relié aux opportunités",
        description:
          "Une croissance de clics peut venir de sujets éloignés du chiffre d’affaires. Nous suivons les pages qui amènent formulaires, appels ou rendez-vous, avec les limites normales de l’attribution.",
      },
    ],
    approach: [
      {
        title: "1. Diagnostiquer le socle",
        description:
          "Exploration, indexation, architecture, performance, métadonnées, données structurées, maillage, profils locaux et mesure sont audités puis classés par impact et effort.",
      },
      {
        title: "2. Cartographier la demande utile",
        description:
          "Nous relions recherches, étapes de décision, offres, secteurs et territoires. Cette carte attribue une intention principale à chaque page et révèle les manques comme les doublons.",
      },
      {
        title: "3. Renforcer les pages qui vendent",
        description:
          "Offres, cas, preuves, objections, auteurs et appels à l’action sont améliorés avant de lancer un calendrier éditorial éloigné des priorités commerciales.",
      },
      {
        title: "4. Publier une expertise difficile à reproduire",
        description:
          "Données internes partageables, méthodes, études, outils, comparatifs et retours de terrain donnent aux contenus une raison d’être lus, liés et cités.",
      },
      {
        title: "5. Observer et arbitrer",
        description:
          "Search Console, analytics et conversions alimentent une revue régulière. Nous consolidons, enrichissons ou retirons des contenus selon leur rôle, pas uniquement selon leur volume de clics.",
      },
    ],
    deliverables: [
      {
        title: "Audit SEO priorisé",
        description:
          "Un diagnostic technique, structurel, éditorial et local avec responsables, dépendances et ordre de mise en œuvre.",
      },
      {
        title: "Carte des pages et intentions",
        description:
          "Un document qui relie requêtes, publics, offres, contenus existants, nouvelles pages et risques de cannibalisation.",
      },
      {
        title: "Optimisations techniques et on-page",
        description:
          "Corrections d’exploration, indexation, liens, gabarits, métadonnées et balisages selon la plateforme et le périmètre convenus.",
      },
      {
        title: "Programme éditorial expert",
        description:
          "Briefs, sources, auteurs, angles, maillage et critères de qualité pour des pages que l’entreprise peut réellement défendre.",
      },
      {
        title: "Pilotage et transmission",
        description:
          "Tableau de bord lisible, journal des actions, points d’apprentissage et règles permettant à l’équipe de continuer sans dépendance opaque.",
      },
    ],
    proofNote:
      "Nous ne garantissons ni position précise, ni délai universel, ni volume de trafic. Tout résultat communiqué doit préciser la période, la source, le périmètre et ce qui a effectivement été mis en œuvre ; corrélation et causalité ne sont pas confondues.",
    faq: [
      {
        question: "Quelle est la différence entre un audit et un accompagnement SEO ?",
        answer:
          "L’audit identifie et priorise les problèmes à un instant donné. L’accompagnement met en œuvre, mesure, enrichit les contenus et adapte les décisions aux données observées. Un audit seul est pertinent si une équipe peut appliquer et suivre les recommandations.",
      },
      {
        question: "Faut-il refaire le site avant de commencer le SEO ?",
        answer:
          "Pas toujours. Beaucoup de corrections et d’améliorations peuvent être réalisées sur l’existant. Une refonte devient pertinente lorsque la technologie, l’architecture ou les modèles de pages empêchent durablement de répondre au besoin.",
      },
      {
        question: "Comment éviter que plusieurs pages se cannibalisent ?",
        answer:
          "Nous attribuons une intention et un rôle à chaque URL, comparons les pages qui apparaissent sur les mêmes requêtes et choisissons de différencier, fusionner, rediriger ou mieux relier selon leur valeur réelle.",
      },
      {
        question: "Les backlinks sont-ils nécessaires ?",
        answer:
          "Les liens externes contribuent à la découverte et à la réputation, mais leur qualité et leur contexte comptent. Nous privilégions partenaires, réseaux professionnels, médias, ressources utiles et mentions légitimes ; nous n’achetons pas de volumes de liens artificiels.",
      },
      {
        question: "Pouvez-vous travailler avec notre équipe ou notre développeur ?",
        answer:
          "Oui. Les recommandations peuvent être livrées avec critères d’acceptation, exemples et ordre de priorité. Les responsabilités de développement, contenu, validation et mesure sont attribuées au démarrage.",
      },
    ],
    relatedRoutes: [
      {
        href: "/referencement-seo-chambery",
        label: "SEO local à Chambéry",
        description: "Une approche dédiée au bassin chambérien et au profil local.",
      },
      {
        href: "/geo",
        label: "GEO et moteurs IA",
        description: "Rendre l’expertise compréhensible et éligible à la citation.",
      },
      {
        href: "/refonte-site-internet-pme-savoie",
        label: "Refonte SEO de site PME",
        description: "Préserver les actifs organiques pendant une migration.",
      },
    ],
    cta: {
      title: "Partons de vos données et de vos priorités réelles.",
      description:
        "Envoyez votre domaine, vos principales offres et les zones ou marchés visés. Nous déterminerons si la priorité est technique, éditoriale, locale ou structurelle.",
      label: "Parler de mon SEO",
      href: "/contact",
    },
  },

  "gestion-google-ads": {
    slug: "gestion-google-ads",
    seo: {
      title: "Agence Google Ads en Savoie : gestion et tracking | 3h36",
      description:
        "Gestion Google Ads en Savoie pour PME : audit de compte, structure, conversions, landing pages, optimisation et gouvernance transparente.",
    },
    eyebrow: "Pilotage Google Ads pour les entreprises de Savoie",
    h1: "Une gestion Google Ads transparente, du compte jusqu’à la qualité des prospects.",
    lead:
      "3h36 pilote la recherche payante comme un système d’acquisition complet : compte détenu par le client, mesure vérifiée, campagnes lisibles, pages cohérentes et retour des équipes commerciales. Nous accompagnons les PME et services à forte valeur qui veulent comprendre où part leur budget et quelles demandes il produit réellement.",
    audience: [
      {
        title: "PME avec un compte existant difficile à lire",
        description:
          "Les campagnes ont accumulé recommandations, objectifs et automatisations. Un audit permet de distinguer ce qui sert encore la stratégie de ce qui masque les décisions.",
      },
      {
        title: "Entreprise qui lance l’acquisition payante",
        description:
          "Nous préparons l’économie, la mesure, les pages et la gouvernance avant d’activer un budget qui ne produirait autrement que des données ambiguës.",
      },
      {
        title: "Services à forte valeur ou cycle long",
        description:
          "Un formulaire n’est qu’une étape. Les retours sur rendez-vous, opportunités, devis et ventes aident à piloter selon la qualité plutôt que le nombre brut de conversions.",
      },
      {
        title: "Organisation multi-offres ou multi-zones",
        description:
          "Budgets, priorités, marges et capacités peuvent être séparés afin qu’un segment très volumique ne consomme pas mécaniquement les ressources des autres.",
      },
    ],
    problems: [
      {
        title: "Le client n’est pas propriétaire du compte",
        description:
          "Un compte détenu par un prestataire fragilise l’historique et la continuité. Nous privilégions un accès accordé à 3h36 sur une propriété administrée par l’entreprise.",
      },
      {
        title: "Les objectifs automatiques ont remplacé la stratégie",
        description:
          "Les recommandations de plateforme peuvent être utiles, mais elles ne connaissent ni vos marges, ni votre capacité, ni les raisons pour lesquelles un prospect est refusé.",
      },
      {
        title: "Le tracking compte plusieurs fois la même action",
        description:
          "Balises, import Analytics, appels et pages de confirmation peuvent créer des doublons. Nous définissons des objectifs primaires et secondaires puis testons leur déclenchement.",
      },
      {
        title: "Les landing pages ne correspondent pas aux annonces",
        description:
          "Une promesse publicitaire précise doit conduire vers une page qui reprend l’offre, les conditions, les preuves et le prochain pas, sans obliger le visiteur à explorer tout le site.",
      },
    ],
    approach: [
      {
        title: "1. Audit de gouvernance et d’économie",
        description:
          "Accès, facturation, structure, objectifs, historique, marges, valeur d’un contact et traitement commercial sont vérifiés ensemble.",
      },
      {
        title: "2. Plan de mesure",
        description:
          "Les événements utiles, consentements, conversions principales, imports éventuels et règles d’attribution sont documentés puis testés.",
      },
      {
        title: "3. Restructuration maîtrisée",
        description:
          "Nous conservons l’historique exploitable et modifions ce qui empêche la lecture. Une reconstruction complète n’est proposée que lorsqu’elle apporte un bénéfice clair.",
      },
      {
        title: "4. Cohérence annonce-page",
        description:
          "Intentions, textes, ressources, mots-clés, exclusions et landing pages sont alignés par offre et public.",
      },
      {
        title: "5. Boucle commerciale",
        description:
          "Les équipes remontent régulièrement la qualité des demandes. Les ajustements de budget et d’enchères prennent en compte cette réalité avec les données disponibles.",
      },
    ],
    deliverables: [
      {
        title: "Audit du compte",
        description:
          "Propriété, accès, facturation, objectifs, structure, recherches, annonces, zones, budgets et qualité des données.",
      },
      {
        title: "Architecture de campagnes",
        description:
          "Une organisation documentée par offres, intentions, zones et priorités, avec règles de nommage et responsabilités.",
      },
      {
        title: "Tracking des conversions",
        description:
          "Configuration et recette des actions retenues, avec séparation des signaux primaires et secondaires.",
      },
      {
        title: "Landing pages et messages",
        description:
          "Création ou optimisation des pages nécessaires, en cohérence avec les annonces et les critères de qualification.",
      },
      {
        title: "Pilotage mensuel",
        description:
          "Analyse des recherches, budgets, enchères, annonces, pages et retours commerciaux, suivie d’actions et d’hypothèses explicites.",
      },
    ],
    proofNote:
      "Le compte, l’historique et le budget média restent la propriété du client. Les honoraires sont séparés des dépenses Google. Nous ne garantissons pas de coût par acquisition ou de volume : toute comparaison tient compte de la période, des changements de mesure et de la qualité des prospects.",
    faq: [
      {
        question: "Pouvez-vous auditer un compte géré par une autre agence ?",
        answer:
          "Oui avec les accès nécessaires et dans le respect du contrat existant. L’audit examine la cohérence avec vos objectifs ; il ne suppose pas qu’une structure différente est automatiquement mauvaise.",
      },
      {
        question: "Dois-je changer de compte Google Ads ?",
        answer:
          "Généralement non. Conserver un compte dont l’entreprise est propriétaire préserve l’historique. Un nouveau compte n’est envisagé que pour une raison précise de propriété, structure juridique ou contamination majeure des données.",
      },
      {
        question: "Quel engagement faut-il prévoir ?",
        answer:
          "Une phase initiale doit être assez longue pour mettre en place, collecter un volume raisonnable et réaliser plusieurs cycles d’optimisation. La durée dépend du budget, du volume de recherche et du cycle commercial ; elle est explicitée dans la proposition.",
      },
      {
        question: "Pouvez-vous relier Ads à notre CRM ?",
        answer:
          "Selon le CRM, les identifiants disponibles et les règles de consentement, certaines étapes hors ligne peuvent être réimportées. Nous évaluons d’abord la qualité des données et la faisabilité avant de promettre une intégration.",
      },
      {
        question: "Que se passe-t-il si les campagnes ne sont pas rentables ?",
        answer:
          "Nous cherchons si le problème vient de la demande, du ciblage, du message, de la page, de la qualification, du traitement commercial ou de l’économie de l’offre. Si le canal n’est pas cohérent, réduire ou arrêter fait partie des décisions possibles.",
      },
    ],
    relatedRoutes: [
      {
        href: "/google-ads-chambery",
        label: "Google Ads à Chambéry",
        description: "Une page dédiée aux campagnes et recherches du bassin local.",
      },
      {
        href: "/site-acquisition",
        label: "Site d’acquisition",
        description: "Construire les landing pages et le suivi nécessaires.",
      },
      {
        href: "/referencement-seo",
        label: "Référencement naturel",
        description: "Articuler acquisition immédiate et visibilité organique.",
      },
    ],
    cta: {
      title: "Reprenons le contrôle du compte et de ses décisions.",
      description:
        "Indiquez votre budget, vos objectifs, l’ancienneté du compte et la façon dont les prospects sont qualifiés. Nous cadrerons l’audit et les accès nécessaires.",
      label: "Auditer mon compte Ads",
      href: "/contact",
    },
  },

  geo: {
    slug: "geo",
    seo: {
      title: "Agence GEO en Savoie : visibilité dans les moteurs IA | 3h36",
      description:
        "GEO à Chambéry et en Savoie : entité, accessibilité, contenus sources, citations et tests pour améliorer votre visibilité dans les moteurs IA.",
    },
    eyebrow: "Generative Engine Optimization en Savoie",
    h1: "Devenir une source compréhensible et crédible pour les moteurs de réponse IA.",
    lead:
      "Le GEO vise à améliorer la capacité d’une marque à être comprise, retenue et éventuellement citée dans des réponses générées par des services comme ChatGPT, Gemini, Copilot ou Perplexity. Il ne remplace pas le SEO et ne garantit jamais une mention. Nous travaillons l’accès au contenu, l’entité, les preuves, les données originales et les citations externes, puis testons des scénarios datés pour savoir ce qui est réellement observable.",
    audience: [
      {
        title: "Entreprise experte absente des réponses IA",
        description:
          "La marque possède une vraie expérience mais celle-ci reste enfermée dans des documents commerciaux, des échanges privés ou des pages trop générales pour devenir une source exploitable.",
      },
      {
        title: "PME régionale qui veut occuper une catégorie",
        description:
          "Clarifier métiers, territoires, clients, méthodes et preuves aide les systèmes comme les humains à comprendre dans quelles situations l’entreprise mérite d’être considérée.",
      },
      {
        title: "Organisation capable de produire des données originales",
        description:
          "Observatoire sectoriel, baromètre local, étude, benchmark ou retour d’expérience documenté peuvent créer une ressource que journalistes, partenaires et moteurs ont une raison de reprendre.",
      },
      {
        title: "Marque déjà structurée en SEO",
        description:
          "Le GEO est plus pertinent lorsque le site est accessible, indexable et soutenu par des contenus solides. Nous évitons de vendre une surcouche IA alors que les fondations restent cassées.",
      },
    ],
    problems: [
      {
        title: "Les robots ne peuvent pas accéder aux contenus importants",
        description:
          "Rendu, authentification, directives de robots, protections, canonicals ou architecture peuvent rendre une information difficile à explorer. Chaque agent possède ses propres règles et usages à examiner.",
      },
      {
        title: "L’entreprise est décrite différemment selon les sources",
        description:
          "Nom, activité, zone, dirigeants, profils et offres incohérents rendent l’entité ambiguë. Le site officiel doit fournir une référence claire et reliée aux profils pertinents.",
      },
      {
        title: "Les contenus affirment sans permettre de vérifier",
        description:
          "Superlatifs, chiffres sans méthodologie et textes sans auteur n’offrent aucune base solide à une citation. Nous ajoutons contexte, date, source, limites et responsabilité éditoriale.",
      },
      {
        title: "Le suivi se résume à quelques prompts choisis",
        description:
          "Une réponse favorable isolée ne constitue pas une part de voix. Les scénarios doivent couvrir plusieurs formulations, modèles, dates et types de besoins, avec conservation des preuves.",
      },
      {
        title: "Le GEO est confondu avec la production massive de texte IA",
        description:
          "Générer davantage de pages génériques augmente le bruit. La différenciation vient d’une expertise, de données et de preuves difficiles à reproduire, pas du volume automatisé.",
      },
    ],
    approach: [
      {
        title: "1. Audit d’éligibilité",
        description:
          "Nous vérifions accès, exploration, indexation, rendu, architecture, informations d’entité, auteurs, sources, mentions externes et qualité des contenus de référence.",
      },
      {
        title: "2. Cartographie des questions conversationnelles",
        description:
          "Les scénarios reproduisent des décisions réelles : trouver un prestataire, comparer des approches, évaluer un budget, résoudre un problème ou chercher une expertise régionale.",
      },
      {
        title: "3. Construction de l’entité",
        description:
          "Page organisation, profils, biographies, services, zones, contacts, politiques éditoriales et données structurées pertinentes décrivent la même réalité, sans inventer d’implantation ou de distinction.",
      },
      {
        title: "4. Création de contenus sources",
        description:
          "Études, observatoires, méthodes, cas, données, outils et réponses expertes sont conçus avec une date, un auteur, un protocole et des limites compréhensibles.",
      },
      {
        title: "5. Citations et distribution légitimes",
        description:
          "Partenaires, réseaux, fédérations, médias, événements et communautés sont approchés parce que la ressource leur apporte une valeur, jamais pour fabriquer des mentions factices.",
      },
      {
        title: "6. Tests reproductibles",
        description:
          "Nous conservons moteur, modèle si disponible, date, formulation, réponse et sources citées. Les résultats sont comparés dans le temps sans prétendre contrôler les systèmes tiers.",
      },
    ],
    deliverables: [
      {
        title: "Audit GEO et matrice de présence",
        description:
          "État des contenus accessibles, entité, sources, mentions externes et visibilité observée sur des scénarios définis.",
      },
      {
        title: "Architecture d’entité",
        description:
          "Informations officielles, auteurs, profils, pages de référence et données structurées nécessaires pour réduire les ambiguïtés.",
      },
      {
        title: "Plan de contenus citables",
        description:
          "Sujets, données, experts, protocoles, formats et canaux de diffusion pour produire des ressources réellement originales.",
      },
      {
        title: "Observatoire ou actif de référence",
        description:
          "Selon le projet, conception d’une étude régionale ou sectorielle avec méthodologie publique, données datées et mise à jour planifiée.",
      },
      {
        title: "Protocole de suivi IA",
        description:
          "Bibliothèque de scénarios, fréquence, moteurs, journal de réponses, sources citées et conversions issues des référents identifiables.",
      },
    ],
    proofNote:
      "Aucun prestataire ne contrôle les réponses ou citations d’un moteur génératif. Les tests varient selon la date, le modèle, la formulation, la localisation et la personnalisation. Nous présentons le GEO comme une démarche d’éligibilité et d’observation, jamais comme une garantie de recommandation.",
    faq: [
      {
        question: "Le GEO remplace-t-il le SEO ?",
        answer:
          "Non. Les moteurs génératifs s’appuient sur des contenus accessibles, des sources et des systèmes de recherche variés. Un bon socle SEO, une entité claire et une réputation vérifiable restent indispensables ; le GEO ajoute une méthode de contenus et de tests orientée réponses IA.",
      },
      {
        question: "Pouvez-vous garantir une citation dans ChatGPT ?",
        answer:
          "Non. Nous pouvons améliorer la qualité et l’accessibilité des informations, produire des ressources originales et suivre des scénarios. Le choix final de citer, recommander ou omettre une marque appartient au système interrogé.",
      },
      {
        question: "Faut-il créer un fichier llms.txt ?",
        answer:
          "Ce fichier peut servir d’expérimentation ou de documentation pour certains outils, mais il n’est pas une garantie d’exploration ou de visibilité universelle. Nous priorisons les standards réellement utilisés, les règles de robots et le contenu visible avant tout fichier émergent.",
      },
      {
        question: "Comment mesure-t-on la visibilité dans les moteurs IA ?",
        answer:
          "Par un panel de questions datées et reproductibles, les mentions et sources observées, les référents identifiables dans l’analytics et les conversions associées. Les résultats doivent être interprétés comme des observations, pas comme un classement stable.",
      },
      {
        question: "Quel contenu a le plus de chances d’être cité ?",
        answer:
          "Un contenu précis, accessible, daté, signé et soutenu par une méthode ou une donnée originale offre une meilleure matière qu’un texte promotionnel. La citation dépend aussi de la réputation de la source et du contexte de la question.",
      },
    ],
    relatedRoutes: [
      {
        href: "/referencement-seo",
        label: "Agence SEO en Savoie",
        description: "Sécuriser exploration, indexation et visibilité organique.",
      },
      {
        href: "/observatoire-geo-savoie",
        label: "Observatoire GEO Savoie",
        description: "Consulter le protocole public de suivi des mentions, citations et erreurs.",
      },
      {
        href: "/ressources/apparaitre-chatgpt-google-ai",
        label: "Apparaître dans les moteurs IA",
        description: "Comprendre les leviers documentés par Google, OpenAI et les moteurs de réponse.",
      },
      {
        href: "/ressources/mesurer-visibilite-ia-entreprise",
        label: "Mesurer la visibilité IA",
        description: "Construire un suivi reproductible sans fabriquer un classement artificiel.",
      },
      {
        href: "/ressources/seo-vs-geo-pme",
        label: "SEO ou GEO ?",
        description: "Distinguer les deux disciplines et choisir le bon ordre de travail.",
      },
    ],
    cta: {
      title: "Évaluons ce que les moteurs IA peuvent réellement comprendre de vous.",
      description:
        "Partagez votre domaine, vos sujets d’expertise et les questions sur lesquelles vous voulez être considéré. Nous cadrerons un audit et un protocole sans promesse artificielle.",
      label: "Demander un audit GEO",
      href: "/contact",
    },
  },
};
