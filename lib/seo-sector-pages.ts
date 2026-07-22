export type SeoSectorPagePath =
  | "secteurs"
  | "secteurs/batiment"
  | "secteurs/batiment/seo-local"
  | "secteurs/batiment/google-ads"
  | "secteurs/batiment/photo-video"
  | "secteurs/pme"
  | "secteurs/startups"
  | "secteurs/independants";

export type SectorCopyItem = Readonly<{
  title: string;
  description: string;
}>;

export type SectorFaqItem = Readonly<{
  question: string;
  answer: string;
}>;

export type SectorRelatedRoute = Readonly<{
  href: string;
  label: string;
  description: string;
}>;

export type SectorPageCta = Readonly<{
  title: string;
  description: string;
  label: string;
  href: "/contact";
}>;

export type SeoSectorPage = Readonly<{
  path: SeoSectorPagePath;
  seo: Readonly<{
    title: string;
    description: string;
  }>;
  eyebrow: string;
  h1: string;
  lead: string;
  audience: readonly SectorCopyItem[];
  realities: readonly SectorCopyItem[];
  problems: readonly SectorCopyItem[];
  approach: readonly SectorCopyItem[];
  deliverables: readonly SectorCopyItem[];
  qualificationCriteria: readonly SectorCopyItem[];
  faq: readonly SectorFaqItem[];
  relatedRoutes: readonly SectorRelatedRoute[];
  cta: SectorPageCta;
}>;

export const seoSectorPagesByPath: Record<SeoSectorPagePath, SeoSectorPage> = {
  secteurs: {
    path: "secteurs",
    seo: {
      title: "Solutions digitales par secteur en Savoie | 3h36",
      description:
        "3h36 conçoit des systèmes de visibilité adaptés au bâtiment, aux PME, aux startups et aux indépendants : marque, site, SEO, GEO et acquisition.",
    },
    eyebrow: "Des priorités différentes selon votre activité",
    h1: "Un système digital construit autour de votre manière de vendre.",
    lead:
      "Une entreprise du bâtiment ne gagne pas un chantier comme une startup convainc ses premiers clients, et un expert indépendant ne rassure pas comme une PME déjà installée. 3h36 adapte le positionnement, les preuves, le site, les contenus et l’acquisition au cycle de décision réel de chaque secteur. Cette page vous oriente vers le dispositif le plus pertinent, sans transformer quatre marchés différents en une offre générique.",
    audience: [
      {
        title: "Bâtiment et travaux",
        description:
          "Artisans, entreprises spécialisées, entreprises générales, maîtres d’œuvre et bureaux d’études qui doivent rendre leurs métiers, leurs zones et leurs réalisations immédiatement vérifiables.",
      },
      {
        title: "PME en transformation",
        description:
          "Entreprises dont l’offre, l’organisation ou le niveau de service ont évolué plus vite que le site, les contenus et les outils d’acquisition.",
      },
      {
        title: "Startups et entreprises en lancement",
        description:
          "Équipes qui doivent matérialiser une proposition, gagner en crédibilité et organiser leurs premiers canaux sans figer trop tôt leur communication.",
      },
      {
        title: "Indépendants experts",
        description:
          "Consultants, créatifs, formateurs et spécialistes B2B qui veulent être choisis pour une expertise identifiable plutôt que comparés uniquement sur le prix.",
      },
    ],
    realities: [
      {
        title: "Le parcours d’achat détermine le dispositif",
        description:
          "Un besoin urgent, un appel d’offres, une recommandation et une recherche exploratoire ne demandent ni les mêmes pages, ni les mêmes preuves, ni le même appel à l’action.",
      },
      {
        title: "La visibilité n’a de valeur que si l’offre est lisible",
        description:
          "SEO, réponses générées par l’IA et campagnes payantes amplifient ce qui existe déjà. Avant d’acquérir du trafic, il faut rendre la cible, le problème traité, la zone et la différence de l’entreprise explicites.",
      },
      {
        title: "La preuve change selon le risque perçu",
        description:
          "Un chantier documenté, une démonstration produit, une méthode de consultant ou une étude de cas PME ne jouent pas le même rôle. Nous hiérarchisons les éléments qui réduisent réellement l’incertitude du décideur.",
      },
    ],
    problems: [
      {
        title: "Une présence correcte, mais interchangeable",
        description:
          "Des formules comme qualité, proximité et sur-mesure ne suffisent pas à distinguer une entreprise. Le secteur, les situations traitées et la manière de travailler doivent rendre le choix plus évident.",
      },
      {
        title: "Des canaux ajoutés sans direction commune",
        description:
          "Le site, les réseaux, Google Ads, le SEO et les outils IA sont souvent lancés séparément. Les messages divergent et personne ne sait quel canal mérite un investissement supplémentaire.",
      },
      {
        title: "Des demandes nombreuses mais peu exploitables",
        description:
          "Attirer davantage ne suffit pas lorsque les prospects sont hors cible, hors zone, trop précoces ou sans budget. Les pages et formulaires doivent aider à qualifier sans fermer la porte aux bons projets.",
      },
    ],
    approach: [
      {
        title: "1. Définir l’économie de la demande",
        description:
          "Nous clarifions les offres prioritaires, la valeur d’un projet, le temps de décision, la capacité de traitement, la zone desservie et les raisons qui rendent un contact intéressant.",
      },
      {
        title: "2. Organiser la présence par intention",
        description:
          "Les pages de secteurs, services, zones et réalisations reçoivent chacune un rôle distinct. Cette architecture limite la concurrence entre vos propres pages et facilite les parcours humains comme l’exploration par les moteurs.",
      },
      {
        title: "3. Produire les preuves nécessaires",
        description:
          "Textes, images, études de cas, réponses aux objections et informations d’entité sont créés en fonction du risque perçu, jamais pour remplir artificiellement un calendrier éditorial.",
      },
      {
        title: "4. Activer et arbitrer",
        description:
          "Référencement, visibilité locale, GEO et acquisition payante sont déployés selon l’urgence et la maturité. Les décisions s’appuient ensuite sur les demandes qualifiées, pas uniquement sur les impressions ou les clics.",
      },
    ],
    deliverables: [
      {
        title: "Carte des cibles et décisions",
        description:
          "Un cadrage des publics, situations d’achat, objections, preuves et actions attendues pour éviter une communication trop large.",
      },
      {
        title: "Architecture de visibilité",
        description:
          "Une répartition claire entre pages commerciales, pages sectorielles, contenus d’expertise, réalisations et zones réellement couvertes.",
      },
      {
        title: "Socle de marque et de conversion",
        description:
          "Messages, direction visuelle, parcours, formulaires et éléments de confiance alignés sur le niveau d’engagement demandé au prospect.",
      },
      {
        title: "Plan d’activation mesurable",
        description:
          "Un ordre de déploiement pour le SEO, le GEO, le contenu et les campagnes, avec des conversions définies avant l’analyse des performances.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Une priorité commerciale réelle",
        description:
          "Le projet fonctionne mieux lorsqu’une offre, une cible ou une zone doit clairement progresser, plutôt que lorsqu’il s’agit seulement de rafraîchir une apparence.",
      },
      {
        title: "Un décideur impliqué",
        description:
          "Les arbitrages de positionnement et de preuves nécessitent l’accès à une personne capable de valider l’offre, les contraintes et les engagements publics.",
      },
      {
        title: "Des éléments vérifiables",
        description:
          "Réalisations, méthodes, expertises, zones et résultats ne sont publiés que lorsqu’ils peuvent être expliqués et validés par l’entreprise.",
      },
      {
        title: "La volonté de mesurer",
        description:
          "Un système de visibilité progresse lorsqu’appels, formulaires, rendez-vous ou opportunités sont suivis au-delà du simple volume de trafic.",
      },
    ],
    faq: [
      {
        question: "Pourquoi créer des pages par secteur ?",
        answer:
          "Parce que les critères de choix, les preuves et les cycles de décision changent. Une page sectorielle utile décrit ces réalités et oriente vers les bons services ; elle ne se contente pas de répéter une page commerciale avec un nouveau mot-clé.",
      },
      {
        question: "Faut-il choisir un seul secteur pour travailler avec 3h36 ?",
        answer:
          "Non. Nous identifions la cible prioritaire du projet et les éventuelles cibles secondaires. Une hiérarchie claire évite toutefois de construire un site qui tente de parler à tout le monde au même niveau.",
      },
      {
        question: "SEO, GEO et Google Ads doivent-ils démarrer ensemble ?",
        answer:
          "Pas nécessairement. Le choix dépend de la demande existante, de l’urgence, du budget média, de la maturité des pages et de la capacité à traiter les contacts. Le socle de mesure, lui, doit être défini avant l’activation.",
      },
      {
        question: "Intervenez-vous uniquement en Savoie ?",
        answer:
          "Non. La Savoie et le bassin chambérien constituent un ancrage fort, mais l’accompagnement peut être mené à distance. Nous ne revendiquons pas une implantation dans une ville où nous ne sommes pas établis.",
      },
    ],
    relatedRoutes: [
      {
        href: "/secteurs/batiment",
        label: "Bâtiment",
        description: "Générer des demandes mieux qualifiées à partir des métiers, zones et chantiers.",
      },
      {
        href: "/secteurs/pme",
        label: "PME",
        description: "Faire évoluer la présence digitale avec l’offre et l’organisation.",
      },
      {
        href: "/secteurs/startups",
        label: "Startups",
        description: "Construire une crédibilité forte sans rigidifier une offre encore en mouvement.",
      },
      {
        href: "/secteurs/independants",
        label: "Indépendants",
        description: "Transformer une expertise personnelle en positionnement et en demandes choisies.",
      },
    ],
    cta: {
      title: "Identifions le système adapté à votre marché.",
      description:
        "Présentez votre activité, votre cible prioritaire et la façon dont un nouveau client vous choisit aujourd’hui. Nous vous aiderons à déterminer le premier chantier utile.",
      label: "Présenter mon activité",
      href: "/contact",
    },
  },

  "secteurs/batiment": {
    path: "secteurs/batiment",
    seo: {
      title: "Communication et acquisition pour le bâtiment en Savoie | 3h36",
      description:
        "Un système digital pour artisans et entreprises du bâtiment en Savoie : métiers, chantiers, SEO local, Google Ads, photo, vidéo et devis qualifiés.",
    },
    eyebrow: "Bâtiment, rénovation et maîtrise d’œuvre",
    h1: "Rendre votre savoir-faire visible avant même la première visite de chantier.",
    lead:
      "Dans le bâtiment, la confiance se construit avec des faits : des métiers clairement délimités, des chantiers comparables, une zone réaliste, des images propres et une prise de contact adaptée. 3h36 réunit site, SEO local, campagnes et production visuelle dans un système conçu pour réduire les demandes hors cible et donner aux bons prospects les raisons de vous appeler.",
    audience: [
      {
        title: "Artisans et entreprises spécialisées",
        description:
          "Maçonnerie, couverture, charpente, menuiserie, électricité, plomberie, chauffage, isolation, peinture et second œuvre avec un besoin de visibilité localisé.",
      },
      {
        title: "Entreprises générales et rénovation",
        description:
          "Structures qui coordonnent plusieurs lots et doivent expliquer leur périmètre, leurs interlocuteurs, leurs types d’opérations et leur capacité d’accompagnement.",
      },
      {
        title: "Maîtres d’œuvre et bureaux d’études",
        description:
          "Acteurs dont la valeur repose sur la conception, le suivi, la technicité et la relation avec des clients ou donneurs d’ordre aux cycles de décision plus longs.",
      },
      {
        title: "Entreprises qui veulent sélectionner leurs chantiers",
        description:
          "Équipes déjà sollicitées qui cherchent moins de demandes imprécises et davantage de projets alignés sur leurs métiers, leur zone et leur capacité.",
      },
    ],
    realities: [
      {
        title: "La zone influence directement la rentabilité",
        description:
          "Temps de trajet, accès, stationnement, relief, approvisionnement et organisation des équipes rendent certaines demandes intéressantes et d’autres non. La zone affichée doit correspondre à la zone réellement servie.",
      },
      {
        title: "Le prospect cherche une situation comparable",
        description:
          "Une galerie générale rassure peu si elle ne permet pas d’identifier un type d’ouvrage, une contrainte, une technique ou le rôle exact de l’entreprise sur le chantier.",
      },
      {
        title: "Urgence et projet planifié ne se traitent pas pareil",
        description:
          "Une recherche de dépannage, une rénovation complète et une consultation B2B demandent des pages, messages, horaires de réponse et critères de qualification différents.",
      },
      {
        title: "La réputation locale prolonge le bouche-à-oreille",
        description:
          "Une recommandation conduit souvent à une vérification en ligne. Le site, les avis, les coordonnées et les profils publics doivent raconter la même activité sans exagérer la zone ni les qualifications.",
      },
    ],
    problems: [
      {
        title: "Un site catalogue sans hiérarchie commerciale",
        description:
          "Tous les métiers sont placés au même niveau, sans indiquer les chantiers prioritaires ni les cas où l’entreprise apporte le plus de valeur.",
      },
      {
        title: "Des photos dispersées et peu exploitables",
        description:
          "Les images restent dans les téléphones ou disparaissent dans les fils sociaux. Sans contexte, elles ne deviennent ni études de cas, ni preuves pour une page métier, ni supports pour une campagne.",
      },
      {
        title: "Des demandes impossibles à qualifier",
        description:
          "Un formulaire limité au nom et au message reporte tout le tri sur l’équipe. Type de travaux, commune, échéance et documents utiles peuvent être recueillis sans rendre le parcours administratif.",
      },
      {
        title: "Une acquisition suivie au clic plutôt qu’au devis",
        description:
          "Le trafic et les appels bruts ne distinguent pas une demande rentable d’un contact hors métier. Le suivi doit aller jusqu’à une qualification commerciale exploitable.",
      },
    ],
    approach: [
      {
        title: "1. Prioriser les chantiers recherchés",
        description:
          "Nous cartographions métiers, types d’ouvrage, clients, zones, capacité, saisonnalité et demandes à écarter afin de concentrer la présence sur les projets réellement souhaités.",
      },
      {
        title: "2. Organiser les preuves",
        description:
          "Services, réalisations, équipe, méthode et informations pratiques sont structurés pour répondre aux vérifications d’un particulier, d’un prescripteur ou d’un donneur d’ordre.",
      },
      {
        title: "3. Choisir les bons leviers",
        description:
          "Le SEO local capte une demande durable, Google Ads répond à une intention immédiate, et la photo-vidéo alimente les pages comme les campagnes. Leur poids dépend du métier et du calendrier commercial.",
      },
      {
        title: "4. Relier acquisition et terrain",
        description:
          "Formulaires, appels et sources sont suivis, puis rapprochés de la qualité des demandes. L’objectif est d’améliorer les arbitrages, pas de promettre un volume déconnecté de la capacité des équipes.",
      },
    ],
    deliverables: [
      {
        title: "Architecture métiers, zones et chantiers",
        description:
          "Une structure éditoriale qui sépare les intentions utiles sans multiplier des pages locales presque identiques.",
      },
      {
        title: "Pages et parcours de demande",
        description:
          "Des pages métier documentées, des appels à l’action adaptés et un formulaire qui recueille les informations nécessaires au premier tri.",
      },
      {
        title: "Bibliothèque de réalisations",
        description:
          "Un format réutilisable pour présenter le contexte, l’intervention, les contraintes et les visuels validés de chaque chantier pertinent.",
      },
      {
        title: "Plan SEO, Ads et contenus",
        description:
          "Une feuille de route coordonnée entre recherche locale, campagnes, images, avis et mesure des conversions.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Des métiers et une zone définissables",
        description:
          "Le système est plus efficace lorsque l’entreprise sait quelles prestations et quels secteurs géographiques elle veut développer ou limiter.",
      },
      {
        title: "Une capacité de réponse organisée",
        description:
          "Avant d’accélérer la demande, il faut identifier qui rappelle, sous quel délai et avec quelles informations. Une acquisition sans traitement commercial fait perdre les meilleurs contacts.",
      },
      {
        title: "Des preuves publiables",
        description:
          "Photos autorisées, descriptions de chantiers, méthodes et informations d’entreprise doivent pouvoir être vérifiées et validées avant publication.",
      },
      {
        title: "Un objectif au-delà du simple trafic",
        description:
          "Les critères de réussite peuvent être des demandes dans la bonne zone, un type de chantier, des candidatures ou des consultations B2B, mais ils doivent être explicités.",
      },
    ],
    faq: [
      {
        question: "Le même site peut-il parler aux particuliers et aux professionnels ?",
        answer:
          "Oui, si les parcours sont séparés lorsque leurs attentes diffèrent. Un particulier vérifie souvent le type de travaux, les réalisations et la zone ; un donneur d’ordre peut chercher des capacités, méthodes, documents et références spécifiques.",
      },
      {
        question: "Faut-il créer une page pour chaque commune de Savoie ?",
        answer:
          "Non. Une page locale n’est utile que si elle répond à une réalité distincte : présence, chantiers, contraintes, équipe ou offre spécifique. Des dizaines de pages où seule la ville change fragilisent la qualité globale.",
      },
      {
        question: "Pouvez-vous travailler avec nos photos de chantier existantes ?",
        answer:
          "Oui après inventaire de leur qualité, de leur contexte et des droits de diffusion. Les images utiles peuvent être organisées et complétées par une production pensée pour les pages et formats manquants.",
      },
      {
        question: "Comment savoir si le SEO ou Google Ads doit passer en premier ?",
        answer:
          "Nous regardons la demande, l’urgence commerciale, la concurrence, la maturité du site et la capacité à financer un test média. Le SEO construit un actif progressif ; Ads peut tester plus vite une offre si la page et la mesure sont prêtes.",
      },
    ],
    relatedRoutes: [
      {
        href: "/secteurs/batiment/seo-local",
        label: "SEO local pour le bâtiment",
        description: "Structurer métiers, zones, chantiers et réputation pour la recherche locale.",
      },
      {
        href: "/secteurs/batiment/google-ads",
        label: "Google Ads pour le bâtiment",
        description: "Capter une demande active sans payer durablement les mauvaises recherches.",
      },
      {
        href: "/secteurs/batiment/photo-video",
        label: "Photo et vidéo de chantier",
        description: "Transformer le travail réalisé en preuves commerciales réutilisables.",
      },
      {
        href: "/site-internet-batiment-savoie",
        label: "Site internet pour le bâtiment",
        description: "Découvrir l’offre de conception dédiée aux entreprises du secteur.",
      },
    ],
    cta: {
      title: "Votre prochain dispositif doit attirer les bons chantiers.",
      description:
        "Indiquez vos métiers, vos zones prioritaires et les demandes que vous souhaitez davantage — ou moins — recevoir. Nous cadrerons le levier à traiter en premier.",
      label: "Parler de mes chantiers",
      href: "/contact",
    },
  },

  "secteurs/batiment/seo-local": {
    path: "secteurs/batiment/seo-local",
    seo: {
      title: "SEO local pour artisans du bâtiment en Savoie | 3h36",
      description:
        "Référencement local pour artisans et entreprises du bâtiment : pages métiers, zones réelles, chantiers, Google Business Profile, avis et suivi des demandes.",
    },
    eyebrow: "Référencement local des métiers du bâtiment",
    h1: "Être trouvé pour le bon métier, dans la bonne zone, avec les bonnes preuves.",
    lead:
      "Le SEO local d’une entreprise du bâtiment ne consiste pas à répéter une liste de communes. Il relie une prestation précise, une zone réellement couverte, des réalisations documentées, une entité cohérente et une réputation vérifiable. 3h36 organise ce socle pour que les moteurs comme les prospects comprennent ce que vous faites, où vous intervenez et pourquoi votre réponse mérite d’être considérée.",
    audience: [
      {
        title: "Artisans dépendants du bouche-à-oreille",
        description:
          "Entreprises reconnues sur le terrain mais difficiles à trouver lorsqu’un prospect sans recommandation cherche leur métier à proximité.",
      },
      {
        title: "Structures présentes sur trop de requêtes imprécises",
        description:
          "Sites qui reçoivent du trafic sans rapport avec les prestations prioritaires, la zone desservie ou la nature des chantiers acceptés.",
      },
      {
        title: "Entreprises qui changent d’échelle",
        description:
          "Équipes qui ouvrent une nouvelle activité, structurent plusieurs métiers ou souhaitent élargir raisonnablement leur rayon d’intervention.",
      },
      {
        title: "Acteurs B2B à expertise technique",
        description:
          "Bureaux d’études, maîtres d’œuvre et spécialistes dont les recherches sont moins nombreuses mais demandent des pages plus précises et des preuves plus détaillées.",
      },
    ],
    realities: [
      {
        title: "Un métier peut couvrir plusieurs intentions",
        description:
          "Dépannage, remplacement, rénovation, entretien et projet neuf ne correspondent pas à la même urgence ni au même contenu. Les regrouper sans hiérarchie brouille l’offre.",
      },
      {
        title: "Une zone déclarée doit être crédible",
        description:
          "La proximité perçue dépend de l’implantation, du secteur de service, des références et de la cohérence des informations publiques. Une longue liste de villes ne crée pas à elle seule une pertinence locale.",
      },
      {
        title: "Les chantiers enrichissent la compréhension du métier",
        description:
          "Une réalisation bien décrite associe un besoin, un lieu suffisamment précis, une intervention et des images. Elle apporte davantage qu’une galerie anonyme et peut soutenir les pages de services concernées.",
      },
      {
        title: "La réputation est un actif continu",
        description:
          "Avis, réponses, coordonnées et profils publics doivent rester à jour. Ils complètent les pages du site sans autoriser l’invention de retours, de notes ou de qualifications.",
      },
    ],
    problems: [
      {
        title: "Une seule page pour tous les services",
        description:
          "Elle ne peut pas répondre en profondeur aux questions propres à chaque métier et limite les liens possibles depuis les réalisations, le profil Google ou des partenaires locaux.",
      },
      {
        title: "Des pages de villes dupliquées",
        description:
          "Remplacer Chambéry par Aix-les-Bains ou Albertville sans apporter de réalité locale produit un ensemble répétitif, peu utile et concurrent de ses propres pages.",
      },
      {
        title: "Un profil Google déconnecté du site",
        description:
          "Catégories, services, horaires, photos, téléphone et adresse ou zone de service peuvent raconter une activité différente de celle présentée sur les pages.",
      },
      {
        title: "Des positions suivies sans qualité commerciale",
        description:
          "Une progression sur un mot-clé ne dit pas si les appels concernent le bon chantier. Les requêtes, pages d’entrée et conversions doivent être rapprochées du tri commercial.",
      },
    ],
    approach: [
      {
        title: "1. Cartographier demandes, métiers et zones",
        description:
          "Nous séparons les requêtes selon le service, le besoin, le client, l’urgence et la zone, puis retenons seulement les ensembles que l’entreprise peut réellement servir.",
      },
      {
        title: "2. Auditer le socle local",
        description:
          "Indexation, architecture, contenus, données d’entité, profil Google, avis, citations, performances et conversions sont contrôlés avant d’ajouter de nouvelles pages.",
      },
      {
        title: "3. Construire les pages et la preuve",
        description:
          "Pages métier, réalisations et éventuelles pages locales sont reliées selon leur rôle. Les informations structurées aident à expliciter des faits déjà visibles, elles ne remplacent pas le contenu.",
      },
      {
        title: "4. Publier, observer et renforcer",
        description:
          "Search Console, profil Google et conversions font apparaître les requêtes et zones utiles. Les contenus sont renforcés à partir de données réelles, sans garantie de position ni production automatique en masse.",
      },
    ],
    deliverables: [
      {
        title: "Audit SEO local bâtiment",
        description:
          "Un état des lieux priorisé de l’indexation, des pages, du profil local, de l’entité, des avis, du maillage et du suivi des contacts.",
      },
      {
        title: "Carte éditoriale métiers-zones",
        description:
          "Une répartition non redondante entre pages de services, chantiers, zones justifiées, questions fréquentes et contenus d’expertise.",
      },
      {
        title: "Optimisation des pages prioritaires",
        description:
          "Titres, contenu, hiérarchie, liens, images, appels à l’action et balisage ajustés autour d’une intention claire par page.",
      },
      {
        title: "Cadre de réputation locale",
        description:
          "Un processus licite pour solliciter des avis authentiques, y répondre et maintenir les informations publiques cohérentes.",
      },
      {
        title: "Tableau de bord décisionnel",
        description:
          "Requêtes, pages, appels et formulaires analysés avec la qualité des demandes lorsque l’entreprise peut la renseigner.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Une implantation et une zone exactes",
        description:
          "Nous devons pouvoir publier des informations cohérentes sur l’établissement ou la zone de service, sans créer de fausse adresse ni simuler une présence locale.",
      },
      {
        title: "Des prestations prioritaires",
        description:
          "Le référencement progresse plus proprement lorsque les métiers recherchés sont hiérarchisés selon la capacité, la marge, la saison et les objectifs de l’entreprise.",
      },
      {
        title: "Un accès aux actifs numériques",
        description:
          "Site, domaine, Search Console, mesure d’audience et profil Google doivent être accessibles ou récupérables pour diagnostiquer la situation et suivre les corrections.",
      },
      {
        title: "La possibilité de documenter le terrain",
        description:
          "Chantiers, questions clients et connaissances techniques fournissent la matière qui distingue durablement les pages d’un contenu générique.",
      },
    ],
    faq: [
      {
        question: "Combien de temps faut-il pour voir un effet en SEO local ?",
        answer:
          "Il n’existe pas de délai universel. L’historique du domaine, la concurrence, l’état technique, la réputation et la profondeur du contenu influencent la progression. Nous distinguons les corrections observables rapidement des gains qui demandent publication et consolidation.",
      },
      {
        question: "Une fiche Google Business Profile suffit-elle ?",
        answer:
          "Non. Elle peut être déterminante dans le parcours local, mais elle doit s’appuyer sur un site cohérent, des pages utiles, des coordonnées exactes, des preuves et un traitement régulier des avis et informations.",
      },
      {
        question: "Pouvez-vous garantir la première position ?",
        answer:
          "Non. Aucun prestataire ne contrôle les classements, la concurrence ou l’évolution des moteurs. Nous nous engageons sur une méthode documentée, une mise en œuvre vérifiable et une mesure liée aux demandes commerciales.",
      },
      {
        question: "Le SEO local aide-t-il aussi la visibilité dans les réponses IA ?",
        answer:
          "Un site accessible, des informations d’entité cohérentes, des contenus précis et des sources publiques fiables facilitent la compréhension de l’entreprise. Cela peut soutenir sa citabilité, sans garantir qu’un moteur génératif la mentionnera pour une requête donnée.",
      },
    ],
    relatedRoutes: [
      {
        href: "/referencement-seo-chambery",
        label: "SEO local à Chambéry",
        description: "Voir l’accompagnement dédié au référencement local et aux recherches organiques du bassin chambérien.",
      },
      {
        href: "/secteurs/batiment/google-ads",
        label: "Google Ads bâtiment",
        description: "Tester et capter une demande immédiate sur des recherches sélectionnées.",
      },
      {
        href: "/secteurs/batiment/photo-video",
        label: "Photo et vidéo de chantier",
        description: "Créer les preuves visuelles qui enrichissent métiers et réalisations.",
      },
      {
        href: "/secteurs/batiment",
        label: "Système digital bâtiment",
        description: "Replacer le SEO local dans une stratégie complète de demandes qualifiées.",
      },
    ],
    cta: {
      title: "Vérifions ce que Google comprend de votre entreprise.",
      description:
        "Partagez votre site, votre profil Google, vos métiers prioritaires et votre zone réelle. Nous identifierons les incohérences et les opportunités à traiter en premier.",
      label: "Demander un premier échange",
      href: "/contact",
    },
  },

  "secteurs/batiment/google-ads": {
    path: "secteurs/batiment/google-ads",
    seo: {
      title: "Google Ads pour entreprises du bâtiment en Savoie | 3h36",
      description:
        "Campagnes Google Ads pour artisans et entreprises du bâtiment : métiers rentables, zones précises, landing pages, suivi des appels et qualification des devis.",
    },
    eyebrow: "Acquisition payante pour artisans et entreprises du BTP",
    h1: "Investir sur les recherches qui peuvent devenir de vrais chantiers.",
    lead:
      "Google Ads peut placer une entreprise du bâtiment devant une demande active, mais un clic n’est ni un devis ni un chantier rentable. 3h36 construit les campagnes autour des métiers prioritaires, des zones servies, de pages cohérentes et d’un suivi qui distingue les simples contacts des opportunités réellement exploitables.",
    audience: [
      {
        title: "Entreprises qui veulent remplir une période précise",
        description:
          "Structures capables d’absorber de nouveaux projets et qui souhaitent activer rapidement une prestation ou une zone sans attendre uniquement la progression organique.",
      },
      {
        title: "Artisans avec une offre rentable et délimitée",
        description:
          "Métiers pour lesquels la valeur d’un chantier, la zone et les critères de sélection permettent de fixer un cadre d’enchères et de qualification réaliste.",
      },
      {
        title: "Entreprises qui lancent une activité",
        description:
          "Équipes qui veulent tester la demande sur un nouveau service avec une page dédiée et des conversions mesurées avant d’élargir leur dispositif.",
      },
      {
        title: "Structures déjà présentes en Ads mais sans lecture commerciale",
        description:
          "Comptes qui génèrent des clics ou appels, mais sans distinguer les demandes hors zone, les recherches d’emploi, les fournisseurs ou les projets non adaptés.",
      },
    ],
    realities: [
      {
        title: "Toutes les recherches n’ont pas la même valeur",
        description:
          "Un besoin urgent, une recherche de prix, une inspiration et une consultation professionnelle traduisent des maturités différentes. Les campagnes et pages doivent les séparer lorsque cela change la réponse commerciale.",
      },
      {
        title: "Le rayon géographique doit être piloté",
        description:
          "Une zone trop large consomme le budget sur des chantiers difficiles à servir ; une zone trop étroite peut limiter inutilement la demande. Le réglage dépend des déplacements, équipes et types de travaux.",
      },
      {
        title: "La page d’arrivée influence la qualité",
        description:
          "Envoyer toutes les annonces vers l’accueil oblige le prospect à rechercher l’information. Une landing page dédiée confirme le métier, la zone, les preuves et le prochain pas attendu.",
      },
      {
        title: "Le retour terrain est indispensable",
        description:
          "La plateforme publicitaire voit un appel ou un formulaire ; l’entreprise sait si le projet était pertinent. Sans ce retour, l’optimisation privilégie le volume plutôt que la qualité.",
      },
    ],
    problems: [
      {
        title: "Des mots-clés trop génériques",
        description:
          "Ils mélangent plusieurs métiers, besoins informationnels, recherches d’emploi et demandes hors périmètre, puis masquent les requêtes qui produisent réellement des opportunités.",
      },
      {
        title: "Une seule campagne pour tous les services",
        description:
          "Budgets, zones, annonces et pages se concurrencent. Les activités prioritaires ne peuvent pas être pilotées proprement lorsqu’elles partagent le même ensemble indistinct.",
      },
      {
        title: "Des conversions mal configurées",
        description:
          "Compter chaque visite de contact, clic secondaire ou appel très court comme un résultat fausse les arbitrages et peut orienter automatiquement les enchères vers de mauvais signaux.",
      },
      {
        title: "Un budget augmenté avant de corriger le parcours",
        description:
          "Davantage de diffusion ne compense pas une offre floue, un site lent, une page sans preuve ou une équipe qui rappelle trop tard.",
      },
    ],
    approach: [
      {
        title: "1. Établir l’économie d’un chantier",
        description:
          "Nous recensons valeur, marge indicative, taux de transformation connu, capacité, saison, zones et raisons de refus afin de définir les limites du test.",
      },
      {
        title: "2. Structurer campagnes et exclusions",
        description:
          "Métiers, intentions et géographies sont regroupés de façon pilotable. Les termes non pertinents sont surveillés et exclus sans bloquer aveuglément des recherches utiles.",
      },
      {
        title: "3. Aligner annonces et landing pages",
        description:
          "La promesse de l’annonce se poursuit sur une page qui explique l’intervention, la zone, les preuves, les critères du projet et le mode de contact.",
      },
      {
        title: "4. Mesurer puis qualifier",
        description:
          "Appels, formulaires et sources sont suivis avec consentement et paramétrage adaptés. Le retour commercial permet ensuite de distinguer contact, devis possible et demande hors cible.",
      },
    ],
    deliverables: [
      {
        title: "Cadrage média bâtiment",
        description:
          "Une sélection des services, zones, intentions, budgets de test et indicateurs compatibles avec la valeur et la capacité de l’entreprise.",
      },
      {
        title: "Structure de compte lisible",
        description:
          "Des campagnes, groupes, mots-clés, audiences et exclusions organisés pour savoir où le budget est dépensé et pourquoi.",
      },
      {
        title: "Annonces et pages dédiées",
        description:
          "Des messages cohérents avec la recherche et des landing pages conçues pour informer, rassurer et qualifier sans promesse excessive.",
      },
      {
        title: "Plan de mesure des demandes",
        description:
          "Un suivi des formulaires, appels et autres actions utiles, avec une convention simple pour remonter la qualité des contacts lorsque c’est possible.",
      },
      {
        title: "Pilotage et journal de décisions",
        description:
          "Des ajustements documentés sur les requêtes, zones, annonces, pages et budgets, reliés aux résultats observés plutôt qu’aux seuls indicateurs de plateforme.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Une capacité disponible",
        description:
          "La campagne doit servir une période ou un objectif pour lequel l’entreprise peut réellement répondre, visiter, chiffrer et produire.",
      },
      {
        title: "Un budget média distinct",
        description:
          "Les dépenses publicitaires sont versées à la plateforme et se distinguent du travail de stratégie, création, landing page, mesure et pilotage.",
      },
      {
        title: "Un circuit de traitement clair",
        description:
          "Un responsable, un délai de réponse et des critères de qualification sont nécessaires pour ne pas perdre les contacts que la campagne génère.",
      },
      {
        title: "L’accès aux données commerciales utiles",
        description:
          "Même un retour simple — pertinent, hors zone, hors métier, devis envoyé — améliore les décisions et évite d’optimiser uniquement pour le volume.",
      },
    ],
    faq: [
      {
        question: "Quel budget Google Ads faut-il prévoir dans le bâtiment ?",
        answer:
          "Il dépend du métier, de la zone, de la concurrence, du volume recherché et de la valeur d’un projet. Nous définissons un test permettant d’obtenir assez de signaux sans présenter un budget générique comme une garantie de résultats.",
      },
      {
        question: "Faut-il arrêter le SEO pendant les campagnes ?",
        answer:
          "Non. Les deux leviers répondent à des horizons différents. Ads peut tester des messages et capter une demande immédiate ; le SEO construit des pages et une présence qui ne dépendent pas de chaque clic payé.",
      },
      {
        question: "Pouvez-vous suivre les appels téléphoniques ?",
        answer:
          "Oui selon les outils retenus, les contraintes de consentement et le niveau d’analyse nécessaire. Le dispositif doit rester proportionné et distinguer un appel déclenché d’un appel commercialement pertinent.",
      },
      {
        question: "Garantissez-vous un nombre de devis ?",
        answer:
          "Non. La demande, les enchères, la concurrence, l’offre, la page et le traitement commercial influencent le résultat. Nous définissons un cadre de test, des signaux fiables et des règles d’arbitrage plutôt qu’un volume invérifiable.",
      },
    ],
    relatedRoutes: [
      {
        href: "/gestion-google-ads",
        label: "Gestion Google Ads",
        description: "Découvrir l’offre d’acquisition payante pour les entreprises locales.",
      },
      {
        href: "/secteurs/batiment/seo-local",
        label: "SEO local bâtiment",
        description: "Construire en parallèle une visibilité organique sur les métiers et zones utiles.",
      },
      {
        href: "/secteurs/batiment/photo-video",
        label: "Photo et vidéo de chantier",
        description: "Alimenter les annonces et landing pages avec des preuves propres à l’entreprise.",
      },
      {
        href: "/secteurs/batiment",
        label: "Système digital bâtiment",
        description: "Relier campagnes, site, réputation locale et traitement des demandes.",
      },
    ],
    cta: {
      title: "Avant d’acheter des clics, cadrons les chantiers recherchés.",
      description:
        "Indiquez vos prestations prioritaires, votre zone, votre capacité et vos campagnes existantes. Nous déterminerons si Ads est le bon premier levier et dans quelles limites.",
      label: "Cadrer une campagne",
      href: "/contact",
    },
  },

  "secteurs/batiment/photo-video": {
    path: "secteurs/batiment/photo-video",
    seo: {
      title: "Photo et vidéo de chantier en Savoie | 3h36",
      description:
        "Reportages photo et vidéo pour artisans et entreprises du bâtiment : chantiers, gestes métier, équipes et contenus pensés pour site, SEO et campagnes.",
    },
    eyebrow: "Production visuelle pour le bâtiment",
    h1: "Transformer vos chantiers en preuves que vos prospects peuvent comprendre.",
    lead:
      "Une belle image finale ne raconte pas toujours la difficulté résolue, les gestes maîtrisés ni le rôle de l’entreprise. 3h36 prépare les prises de vue à partir des usages commerciaux : pages métier, études de chantier, recrutement, réseaux ou campagnes. Chaque reportage vise une matière visuelle exploitable, contextualisée et respectueuse des contraintes du site.",
    audience: [
      {
        title: "Artisans dont le savoir-faire est visuel",
        description:
          "Métiers où la précision du geste, la qualité des finitions, les matériaux et les étapes expliquent mieux la valeur qu’une longue promesse commerciale.",
      },
      {
        title: "Entreprises avec des chantiers de référence",
        description:
          "Structures qui veulent documenter une opération représentative avant qu’elle ne devienne inaccessible, occupée ou masquée par la suite des travaux.",
      },
      {
        title: "Équipes qui recrutent",
        description:
          "Entreprises souhaitant montrer les personnes, l’environnement, les moyens et la réalité du travail sans recourir uniquement à des images génériques.",
      },
      {
        title: "Acteurs B2B qui doivent expliquer une intervention",
        description:
          "Maîtres d’œuvre, bureaux d’études, fabricants et spécialistes pour lesquels schémas, plans, contexte et parole d’expert complètent la seule vue du résultat.",
      },
    ],
    realities: [
      {
        title: "Le bon moment de prise de vue est court",
        description:
          "Certaines étapes ne restent visibles que quelques heures ou quelques jours. Le planning éditorial doit suivre l’avancement du chantier et identifier les séquences irremplaçables.",
      },
      {
        title: "La sécurité et les autorisations priment",
        description:
          "Accès, équipements, coactivité, droit à l’image, confidentialité et accord du client final sont cadrés avant la production. Une image utile ne justifie jamais de perturber ou de mettre en risque le chantier.",
      },
      {
        title: "Un format ne convient pas à tous les supports",
        description:
          "Une bannière de site, une étude de cas, une vidéo verticale et une annonce demandent des cadrages, durées et espaces de texte différents. Les usages doivent être connus avant la prise de vue.",
      },
      {
        title: "Le contexte donne sa valeur à l’image",
        description:
          "Lieu, contrainte, étape et métier permettent au prospect de comprendre ce qu’il regarde. Sans légende ni classement, même une photothèque de qualité devient difficile à exploiter.",
      },
    ],
    problems: [
      {
        title: "Uniquement des photos avant-après",
        description:
          "Elles montrent une transformation mais pas toujours la méthode, les détails, l’équipe ni la complexité. Les étapes intermédiaires rendent le savoir-faire plus tangible.",
      },
      {
        title: "Des images verticales récupérées au hasard",
        description:
          "Les photos prises pour un message rapide manquent souvent de résolution, stabilité, variété et cadrages adaptés aux pages du site ou aux supports imprimés.",
      },
      {
        title: "Un reportage sans plan de diffusion",
        description:
          "Une production peut rester inutilisée si personne ne sait quelles pages, publications, campagnes ou présentations elle doit alimenter.",
      },
      {
        title: "Des visuels sans informations associées",
        description:
          "Lorsque métier, commune, date, étape, matériaux et autorisations ne sont pas consignés, retrouver et publier correctement les images devient coûteux.",
      },
    ],
    approach: [
      {
        title: "1. Définir les usages et la narration",
        description:
          "Nous listons les pages et formats à alimenter, les messages, les gestes à montrer, les intervenants et les informations nécessaires à la future étude de cas.",
      },
      {
        title: "2. Préparer le chantier",
        description:
          "Repérage, horaires, lumière, accès, sécurité, personnes, autorisations et moments clés sont anticipés avec l’interlocuteur responsable.",
      },
      {
        title: "3. Produire une matière variée",
        description:
          "Vues d’ensemble, détails, gestes, portraits, ambiance, progression et séquences vidéo sont captés selon le périmètre validé, sans mise en scène incompatible avec le terrain.",
      },
      {
        title: "4. Livrer pour la diffusion",
        description:
          "Sélection, traitement, montage, déclinaisons et classement facilitent l’utilisation sur le site, les réseaux, les campagnes, les dossiers et les supports de recrutement.",
      },
    ],
    deliverables: [
      {
        title: "Plan de prises de vue",
        description:
          "Une liste organisée des séquences, personnes, gestes, détails et formats nécessaires en fonction des usages retenus.",
      },
      {
        title: "Reportage photo de chantier",
        description:
          "Une sélection cohérente de vues larges, détails, actions et équipes, traitée pour les supports définis au cadrage.",
      },
      {
        title: "Séquences ou montage vidéo",
        description:
          "Selon le projet, des rushes organisés ou des formats montés conçus pour une page, une présentation ou des publications spécifiques.",
      },
      {
        title: "Déclinaisons multi-supports",
        description:
          "Des exports adaptés aux proportions et contraintes du web, des réseaux, de la publicité ou de documents commerciaux prévus au périmètre.",
      },
      {
        title: "Fiche de contexte éditorial",
        description:
          "Les informations validées du chantier sont associées aux médias pour faciliter légendes, textes alternatifs et rédaction d’une étude de réalisation.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Un chantier représentatif",
        description:
          "Le sujet doit correspondre aux types de projets que l’entreprise veut obtenir, ou montrer un savoir-faire utile à sa marque employeur et à ses partenaires.",
      },
      {
        title: "Un accès sécurisé et coordonné",
        description:
          "Un interlocuteur doit pouvoir confirmer les conditions d’accès, les équipements requis, les étapes et la compatibilité de la production avec le planning du chantier.",
      },
      {
        title: "Des autorisations clarifiées",
        description:
          "Client final, propriétaires, personnes identifiables, plans et informations sensibles sont vérifiés avant diffusion. Les usages autorisés doivent être compris par les parties concernées.",
      },
      {
        title: "Des supports cibles identifiés",
        description:
          "Le reportage gagne en valeur lorsque site, étude de cas, campagnes, recrutement ou réseaux sont priorisés avant de choisir les cadrages et livrables.",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous intervenir pendant un chantier en activité ?",
        answer:
          "Oui si les conditions d’accès, de sécurité et de coactivité sont validées avec l’entreprise responsable. Le déroulé est adapté pour limiter l’impact sur les équipes et respecter les zones interdites.",
      },
      {
        question: "Faut-il filmer tout le chantier ?",
        answer:
          "Non. Quelques étapes choisies peuvent mieux raconter l’intervention qu’une captation continue. Nous sélectionnons les moments selon le savoir-faire à montrer et les contenus prévus.",
      },
      {
        question: "Proposez-vous des prises de vue par drone ?",
        answer:
          "Elles ne sont envisagées que lorsque le sujet le justifie et que la zone, la météo, les autorisations et le cadre réglementaire permettent l’intervention d’un opérateur adapté. Ce besoin est confirmé au cadrage.",
      },
      {
        question: "Les images peuvent-elles améliorer le SEO ?",
        answer:
          "Des images originales, légères, correctement nommées et contextualisées enrichissent une page et sa compréhension. Elles ne remplacent ni un contenu utile, ni une architecture claire, ni l’autorité nécessaire au référencement.",
      },
    ],
    relatedRoutes: [
      {
        href: "/photo-video-entreprise-savoie",
        label: "Photo et vidéo d’entreprise",
        description: "Découvrir l’offre de production visuelle au-delà du seul chantier.",
      },
      {
        href: "/secteurs/batiment/seo-local",
        label: "SEO local bâtiment",
        description: "Intégrer les réalisations aux pages métiers et à la visibilité locale.",
      },
      {
        href: "/secteurs/batiment/google-ads",
        label: "Google Ads bâtiment",
        description: "Utiliser des preuves visuelles cohérentes sur les pages d’acquisition.",
      },
      {
        href: "/secteurs/batiment",
        label: "Système digital bâtiment",
        description: "Relier les contenus aux chantiers, aux zones et aux demandes qualifiées.",
      },
    ],
    cta: {
      title: "Le prochain chantier peut devenir une preuve durable.",
      description:
        "Indiquez le type d’ouvrage, l’étape à venir, le lieu et les supports que vous souhaitez alimenter. Nous préparerons un périmètre compatible avec le terrain.",
      label: "Préparer un reportage",
      href: "/contact",
    },
  },

  "secteurs/pme": {
    path: "secteurs/pme",
    seo: {
      title: "Stratégie digitale pour PME en Savoie | 3h36",
      description:
        "3h36 structure la présence digitale des PME : offre, site, SEO, GEO, contenus, acquisition et mesure, sans perdre les actifs utiles de l’existant.",
    },
    eyebrow: "PME établies, en croissance ou en transmission",
    h1: "Faire évoluer votre présence digitale au rythme réel de l’entreprise.",
    lead:
      "Une PME change souvent par couches : nouvelles offres, nouvelles équipes, nouveaux marchés et outils ajoutés au fil du temps. Le site finit par raconter une version ancienne de l’entreprise tandis que marketing et commercial utilisent des supports différents. 3h36 remet l’offre, la marque, les parcours et l’acquisition dans un système commun, avec une transition compatible avec l’activité en cours.",
    audience: [
      {
        title: "PME dont l’offre s’est élargie",
        description:
          "Entreprises qui ont ajouté des services, secteurs ou implantations sans réorganiser leur discours ni aider le prospect à trouver l’interlocuteur et la solution adaptés.",
      },
      {
        title: "Directions qui préparent une nouvelle étape",
        description:
          "Croissance, repositionnement, recrutement, transmission, fusion ou nouvelle direction nécessitant une présence qui reflète le cap sans effacer l’histoire utile.",
      },
      {
        title: "Équipes commerciales peu soutenues par le site",
        description:
          "Structures dont les pages, cas clients et contenus ne répondent pas aux objections rencontrées en rendez-vous ou ne permettent pas d’envoyer une ressource précise.",
      },
      {
        title: "PME dépendantes de quelques canaux",
        description:
          "Entreprises reposant sur le réseau, un apporteur, un salon ou une plateforme et souhaitant développer une source de demandes mieux maîtrisée.",
      },
    ],
    realities: [
      {
        title: "L’existant contient des actifs à protéger",
        description:
          "Pages positionnées, domaines, données, documents, habitudes internes et reconnaissance visuelle ne doivent pas disparaître par défaut lors d’une refonte.",
      },
      {
        title: "Plusieurs décideurs évaluent le projet",
        description:
          "Direction, commercial, marketing, informatique et équipes métier peuvent porter des priorités différentes. Une gouvernance explicite évite que le site devienne une addition de demandes contradictoires.",
      },
      {
        title: "Le cycle commercial dépasse souvent une visite",
        description:
          "Les contenus doivent soutenir la découverte, la comparaison, la validation interne et la prise de contact, puis continuer d’aider le commercial après le premier échange.",
      },
      {
        title: "Le déploiement doit préserver l’activité",
        description:
          "Migration, formulaires, adresses e-mail, données, redirections et outils connectés exigent un plan de bascule, des responsabilités et une recette documentée.",
      },
    ],
    problems: [
      {
        title: "Une arborescence calquée sur l’organigramme",
        description:
          "Elle reflète les services internes mais rarement les situations, questions et critères de choix des clients. Le prospect doit comprendre par où commencer sans connaître l’organisation.",
      },
      {
        title: "Une marque différente selon le support",
        description:
          "Site, devis, présentations, recrutement et réseaux accumulent des variantes visuelles et éditoriales qui réduisent la reconnaissance et compliquent la production.",
      },
      {
        title: "Des leads attribués au dernier clic",
        description:
          "Un cycle long mêle souvent recommandation, recherche, consultation de cas et contact direct. La mesure doit accepter cette complexité sans prétendre reconstituer parfaitement chaque décision.",
      },
      {
        title: "Une dette éditoriale permanente",
        description:
          "Les actualités sont lancées puis abandonnées, les fiches ne sont plus maintenues et personne ne sait qui valide. Un modèle éditorial doit correspondre aux ressources réellement disponibles.",
      },
    ],
    approach: [
      {
        title: "1. Auditer les actifs et les dépendances",
        description:
          "Nous inventorient pages, positions, contenus, outils, données, utilisateurs, contraintes, documents commerciaux et parcours avant de décider ce qui doit être conservé ou remplacé.",
      },
      {
        title: "2. Aligner direction, métiers et commercial",
        description:
          "Des ateliers ciblés clarifient les offres prioritaires, les segments, les preuves, les responsabilités et les décisions qui ne peuvent pas être résolues uniquement par le design.",
      },
      {
        title: "3. Construire par lots cohérents",
        description:
          "Fondations de marque, architecture, pages stratégiques, cas, outils et acquisition sont séquencés pour créer de la valeur sans attendre nécessairement un grand lancement unique.",
      },
      {
        title: "4. Transmettre et piloter",
        description:
          "Règles, composants, modèles de pages, accès et indicateurs sont documentés afin que l’équipe sache faire vivre le dispositif et décider des prochaines améliorations.",
      },
    ],
    deliverables: [
      {
        title: "Audit de présence et de parcours",
        description:
          "Un diagnostic croisant marque, contenus, technique, acquisition, usages internes et points de friction du cycle commercial.",
      },
      {
        title: "Architecture d’offre et d’information",
        description:
          "Une hiérarchie partagée entre solutions, secteurs, cas, ressources et points de contact, adaptée aux différents décideurs.",
      },
      {
        title: "Système de marque et d’interface",
        description:
          "Des règles visuelles, éditoriales et des composants réutilisables pour produire sans réinventer la présentation à chaque support.",
      },
      {
        title: "Plan de migration et de continuité",
        description:
          "URLs, redirections, contenus, données, accès, tests et responsabilités organisés pour limiter les pertes évitables pendant la bascule.",
      },
      {
        title: "Pilotage SEO, GEO et acquisition",
        description:
          "Des priorités de visibilité reliées aux offres, aux contenus vérifiables et aux conversions utiles, avec une fréquence de décision tenable pour l’équipe.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Un sponsor interne identifié",
        description:
          "Une personne doit pouvoir arbitrer entre métiers, valider le cap et protéger les décisions lorsque les demandes internes s’accumulent.",
      },
      {
        title: "L’accès aux bons interlocuteurs",
        description:
          "Direction, commercial et experts métier détiennent des informations différentes. Leur contribution ciblée évite de produire une communication déconnectée du terrain.",
      },
      {
        title: "Une disponibilité pour inventorier l’existant",
        description:
          "Accès, contenus, outils, données et contraintes doivent être recensés avant migration. Les zones inconnues sont signalées plutôt que supposées.",
      },
      {
        title: "Des objectifs hiérarchisés",
        description:
          "Notoriété, demandes, recrutement, distributeurs et documentation peuvent coexister, mais le projet doit définir ce qui guide les premiers arbitrages.",
      },
    ],
    faq: [
      {
        question: "Faut-il forcément refaire tout le site d’une PME ?",
        answer:
          "Non. Un audit peut montrer qu’une correction d’architecture, de contenus, de mesure ou de pages prioritaires suffit. Une refonte complète se justifie lorsque la base technique, l’expérience et le positionnement empêchent durablement l’évolution.",
      },
      {
        question: "Comment éviter de perdre le référencement existant ?",
        answer:
          "Nous inventorions les URLs et performances, conservons ce qui reste pertinent, préparons les redirections, contrôlons les métadonnées et surveillons l’indexation après lancement. Une migration comporte toujours une part de variation, mais elle ne doit pas être improvisée.",
      },
      {
        question: "Pouvez-vous travailler avec notre équipe ou nos prestataires actuels ?",
        answer:
          "Oui si les rôles, accès, livrables et décisions sont clarifiés. Le collectif peut prendre un périmètre complet ou s’intégrer à une équipe interne et à des partenaires déjà en place.",
      },
      {
        question: "Comment préparer la visibilité dans les moteurs IA ?",
        answer:
          "Nous rendons l’entreprise identifiable, ses offres explicites, ses auteurs et preuves vérifiables, ses contenus accessibles et ses données cohérentes. Ce travail soutient le SEO et la citabilité sans promettre une mention dans chaque réponse générée.",
      },
    ],
    relatedRoutes: [
      {
        href: "/refonte-site-internet-pme-savoie",
        label: "Refonte de site pour PME",
        description: "Découvrir l’offre dédiée à la modernisation et à la migration du site.",
      },
      {
        href: "/geo",
        label: "Visibilité GEO",
        description: "Structurer des informations vérifiables que les moteurs de réponse IA peuvent comprendre et citer.",
      },
      {
        href: "/gestion-google-ads",
        label: "Gestion Google Ads",
        description: "Activer des campagnes sur des offres et pages suffisamment mûres.",
      },
      {
        href: "/realisations",
        label: "Études de cas",
        description: "Voir comment différents projets ont été cadrés et réalisés.",
      },
    ],
    cta: {
      title: "Faisons évoluer le système, pas seulement sa façade.",
      description:
        "Présentez l’étape que traverse votre PME, les équipes concernées et ce que le dispositif actuel ne permet plus de faire. Nous proposerons un ordre de travail réaliste.",
      label: "Cadrer la transformation",
      href: "/contact",
    },
  },

  "secteurs/startups": {
    path: "secteurs/startups",
    seo: {
      title: "Solutions digitales pour startups, par stade | 3h36",
      description:
        "Validation, lancement, premiers clients ou structuration : choisissez le bon dispositif de marque, site et acquisition selon le stade de votre startup.",
    },
    eyebrow: "Startups et entreprises en lancement",
    h1: "Choisir le bon dispositif selon ce que votre startup doit encore prouver.",
    lead:
      "Cette page sert de repère entre quatre moments différents : valider une proposition, préparer un lancement, professionnaliser une première traction ou structurer plusieurs segments. Chaque stade demande un niveau différent de marque, de site et d’acquisition ; l’enjeu est de choisir le prochain dispositif utile sans figer ce qui doit encore être appris.",
    audience: [
      {
        title: "Fondateurs avec une offre déjà testable",
        description:
          "Équipes capables de décrire un problème, un public, une proposition et le prochain apprentissage commercial attendu du site ou de la campagne.",
      },
      {
        title: "Startups qui préparent un lancement",
        description:
          "Projets ayant besoin d’aligner identité, démonstration, liste d’attente, demande de démo ou premier parcours de conversion autour d’une date et d’une cible.",
      },
      {
        title: "Jeunes entreprises qui professionnalisent leur image",
        description:
          "Structures qui ont validé une première traction mais utilisent encore une présentation provisoire, difficile à décliner ou insuffisante face à de nouveaux décideurs.",
      },
      {
        title: "Produits qui ouvrent un nouveau marché",
        description:
          "Équipes qui doivent expliquer un usage inédit, créer une catégorie ou adapter leur discours à un segment distinct sans reconstruire toute la marque.",
      },
    ],
    realities: [
      {
        title: "La proposition évolue plus vite que les supports",
        description:
          "Les apprentissages commerciaux modifient cible, vocabulaire, fonctionnalités et objections. Le système éditorial doit permettre ces changements sans casser toute l’expérience.",
      },
      {
        title: "La crédibilité repose sur des signaux limités",
        description:
          "Quand les références sont encore rares, la clarté du problème, la qualité de la démonstration, l’équipe, la méthode et l’honnêteté sur le stade du produit prennent davantage de poids.",
      },
      {
        title: "Plusieurs publics ne demandent pas le même récit",
        description:
          "Client, partenaire, candidat et investisseur n’attendent pas les mêmes informations. La page principale doit rester commerciale, avec des parcours secondaires quand ils sont réellement nécessaires.",
      },
      {
        title: "L’acquisition sert aussi à apprendre",
        description:
          "Une campagne ou une landing page peut tester un segment et un message, à condition de définir ce qui sera observé et de ne pas présenter un signal précoce comme une validation définitive.",
      },
    ],
    problems: [
      {
        title: "Une marque spectaculaire mais difficile à utiliser",
        description:
          "Le concept visuel capte l’attention, mais l’équipe ne dispose pas de règles, de composants ni de modèles pour produire les écrans et contenus du quotidien.",
      },
      {
        title: "Une page qui parle surtout de fonctionnalités",
        description:
          "Sans situation d’usage, bénéfice, différenciation et prochain pas, le visiteur doit reconstruire seul la valeur du produit.",
      },
      {
        title: "Un investissement prématuré dans trop de canaux",
        description:
          "SEO, Ads, réseaux, relations presse et contenu sont ouverts en même temps sans équipe ni boucle d’apprentissage suffisante pour les alimenter correctement.",
      },
      {
        title: "Des affirmations difficiles à prouver",
        description:
          "Superlatifs, chiffres sans source et promesses trop larges fragilisent la confiance. Une jeune entreprise gagne à distinguer vision, capacités actuelles et résultats effectivement observés.",
      },
    ],
    approach: [
      {
        title: "1. Situer le stade et la prochaine décision",
        description:
          "Nous définissons ce qui est validé, ce qui reste hypothétique, le public prioritaire et l’action attendue : entretien, inscription, démo, achat, candidature ou partenariat.",
      },
      {
        title: "2. Construire un socle modulable",
        description:
          "Positionnement, langage, identité et composants sont assez cohérents pour inspirer confiance, mais assez souples pour intégrer les apprentissages sans recommencer entièrement.",
      },
      {
        title: "3. Matérialiser l’offre",
        description:
          "Landing page, site, démonstration, parcours produit et contenus prioritaires rendent la proposition observable et donnent à l’équipe un support commun pour vendre et recueillir des retours.",
      },
      {
        title: "4. Activer une boucle d’acquisition",
        description:
          "Un canal est choisi selon la demande existante, le cycle et les ressources. Les signaux sont interprétés avec prudence, puis le message et les pages évoluent avant d’élargir l’investissement.",
      },
    ],
    deliverables: [
      {
        title: "Cadre de positionnement",
        description:
          "Problème, cible, catégorie, proposition, alternatives, preuves disponibles et vocabulaire de base consignés dans un document utilisable par l’équipe.",
      },
      {
        title: "Identité visuelle évolutive",
        description:
          "Un système reconnaissable avec règles, composants et déclinaisons prioritaires, dimensionné aux usages présents plutôt qu’à une organisation imaginaire.",
      },
      {
        title: "Site ou landing de validation",
        description:
          "Un parcours qui explique la valeur, matérialise le produit, répond aux principales objections et mesure l’action définie au cadrage.",
      },
      {
        title: "Kit de lancement",
        description:
          "Selon le besoin : démonstration, présentation, visuels, contenus fondateurs, e-mails et pages nécessaires pour coordonner la mise sur le marché.",
      },
      {
        title: "Plan d’expérimentation",
        description:
          "Hypothèse, cible, canal, page, signal attendu et règle de décision décrits avant le test afin de distinguer apprentissage et simple activité marketing.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Un problème et un public formulables",
        description:
          "La proposition peut encore évoluer, mais l’équipe doit être capable de nommer la situation qu’elle cherche à résoudre et les personnes auprès desquelles elle veut l’apprendre.",
      },
      {
        title: "Un fondateur disponible",
        description:
          "Les décisions de catégorie, promesse et preuve ne peuvent pas être entièrement déléguées. Un interlocuteur fondateur doit participer aux arbitrages structurants.",
      },
      {
        title: "Un budget cohérent avec l’étape",
        description:
          "Le périmètre est dimensionné aux ressources et au prochain jalon. Nous évitons de vendre un écosystème lourd lorsque la priorité consiste encore à tester une proposition.",
      },
      {
        title: "L’acceptation de l’itération",
        description:
          "Le premier système doit pouvoir être corrigé à partir de conversations, usages et données. Une version initiale professionnelle n’est pas présentée comme une vérité définitive sur le marché.",
      },
    ],
    faq: [
      {
        question: "Faut-il une identité complète avant de lancer une startup ?",
        answer:
          "Il faut une identité suffisamment claire et cohérente pour le prochain jalon, pas nécessairement tous les supports imaginables. Nous priorisons les usages réels puis enrichissons le système lorsque l’offre et l’équipe se stabilisent.",
      },
      {
        question: "Pouvez-vous travailler à partir d’un MVP existant ?",
        answer:
          "Oui. Nous pouvons auditer la proposition, le parcours, l’interface et les retours disponibles afin de préserver ce qui fonctionne et de concentrer le projet sur les incompréhensions ou frictions les plus importantes.",
      },
      {
        question: "Le SEO est-il pertinent dès le lancement ?",
        answer:
          "Oui lorsque des recherches existent déjà autour du problème ou de la catégorie et que l’équipe peut produire une matière experte durable. Si le marché ne formule pas encore le besoin ainsi, d’autres canaux peuvent apprendre plus vite avant d’investir fortement.",
      },
      {
        question: "Pouvez-vous garantir qu’une campagne validera notre marché ?",
        answer:
          "Non. Une campagne teste un message, une audience, une page et un contexte donnés. Elle apporte des signaux à interpréter avec les entretiens, usages, ventes et contraintes du produit ; elle ne remplace pas à elle seule une validation de marché.",
      },
    ],
    relatedRoutes: [
      {
        href: "/lancement-marque-startup-savoie",
        label: "Lancement de marque startup",
        description: "Découvrir l’offre de positionnement, identité et mise en marché.",
      },
      {
        href: "/identite-visuelle-chambery",
        label: "Identité visuelle",
        description: "Construire un système reconnaissable et réellement utilisable par l’équipe.",
      },
      {
        href: "/site-acquisition",
        label: "Site d’acquisition",
        description: "Matérialiser l’offre dans un parcours rapide, lisible et mesurable.",
      },
      {
        href: "/realisations/plum",
        label: "Étude de cas Plum",
        description: "Voir un projet mêlant produit, identité, expérience et développement.",
      },
    ],
    cta: {
      title: "Construisons pour votre prochain jalon, pas pour une startup imaginaire.",
      description:
        "Partagez votre stade, votre cible, ce qui a déjà été testé et la décision que le prochain dispositif doit permettre. Nous dimensionnerons le périmètre utile.",
      label: "Présenter la startup",
      href: "/contact",
    },
  },

  "secteurs/independants": {
    path: "secteurs/independants",
    seo: {
      title: "Visibilité pour consultants et indépendants experts | 3h36",
      description:
        "Positionnement, site, contenus, SEO et acquisition pour consultants, freelances et indépendants qui veulent vendre une expertise claire à de meilleurs clients.",
    },
    eyebrow: "Consultants, freelances et experts indépendants",
    h1: "Faire de votre expertise une raison claire de vous choisir.",
    lead:
      "Un indépendant expérimenté n’a pas besoin de paraître plus grand qu’il ne l’est. Il doit rendre son domaine d’autorité, sa méthode, ses situations d’intervention et ses limites suffisamment clairs pour attirer les missions où son expertise compte réellement. 3h36 transforme cette matière en positionnement, site et système de contenus capable de prolonger la recommandation et de générer des conversations mieux qualifiées.",
    audience: [
      {
        title: "Consultants et experts B2B",
        description:
          "Professionnels qui interviennent sur des décisions complexes et doivent rendre leur méthode, leur expérience et le résultat attendu lisibles pour plusieurs décideurs.",
      },
      {
        title: "Freelances positionnés sur une expertise",
        description:
          "Créatifs, développeurs, spécialistes marketing ou opérateurs qui veulent sortir des plateformes généralistes et être sollicités pour un périmètre choisi.",
      },
      {
        title: "Formateurs et accompagnateurs",
        description:
          "Indépendants qui doivent séparer programmes, interventions sur mesure, ressources et prise de contact sans diluer leur sujet central.",
      },
      {
        title: "Profils qui passent de l’exécution au conseil",
        description:
          "Professionnels dont la valeur repose désormais autant sur le diagnostic, la direction et la transmission que sur la production elle-même.",
      },
    ],
    realities: [
      {
        title: "La personne et l’offre sont liées",
        description:
          "Parcours, point de vue et façon de travailler participent au choix. Ils doivent toutefois servir le problème du client, pas transformer la page en biographie centrée uniquement sur soi.",
      },
      {
        title: "La capacité est volontairement limitée",
        description:
          "Le but n’est pas toujours d’obtenir plus de contacts. Une présence efficace peut surtout réduire les demandes hors périmètre et augmenter la part de conversations avec de bons enjeux.",
      },
      {
        title: "La preuve est souvent confidentielle",
        description:
          "Les missions ne peuvent pas toutes citer client, données ou documents. Méthode, situations anonymisées, livrables types et enseignements peuvent néanmoins être présentés sans inventer de résultat.",
      },
      {
        title: "Le contenu doit rester soutenable",
        description:
          "Un indépendant ne peut pas alimenter tous les réseaux et formats. Quelques sujets d’autorité, travaillés dans la durée, valent mieux qu’une fréquence ambitieuse rapidement abandonnée.",
      },
    ],
    problems: [
      {
        title: "Un titre trop large",
        description:
          "Consultant, coach, designer ou freelance ne suffit pas à comprendre le problème traité, le niveau de décision, le secteur ou les situations dans lesquelles intervenir.",
      },
      {
        title: "Un portfolio sans interprétation",
        description:
          "Une liste de livrables montre ce qui a été produit mais pas le diagnostic, les arbitrages, le rôle exact ni la façon dont l’expertise change le projet.",
      },
      {
        title: "Une offre entièrement sur mesure",
        description:
          "Lorsque rien n’est cadré avant l’appel, chaque prospect demande une longue explication. Des formats d’intervention lisibles peuvent orienter sans rigidifier les missions complexes.",
      },
      {
        title: "Une dépendance totale à la recommandation",
        description:
          "Le réseau reste puissant, mais il devient difficile à piloter et ne transmet pas toujours le bon positionnement. Le site doit prolonger la recommandation et permettre une découverte autonome.",
      },
    ],
    approach: [
      {
        title: "1. Extraire le positionnement du parcours réel",
        description:
          "Nous analysons missions réussies, problèmes récurrents, personnes qui achètent, moments d’intervention, alternatives et limites pour identifier un territoire crédible plutôt qu’une formule publicitaire.",
      },
      {
        title: "2. Structurer les formats d’engagement",
        description:
          "Diagnostic, mission, accompagnement, atelier ou ressource sont organisés selon la façon dont un client progresse, avec un niveau de détail adapté avant le premier échange.",
      },
      {
        title: "3. Construire le socle d’autorité",
        description:
          "Page d’accueil, offres, méthode, cas et contenus répondent aux questions d’un décideur. L’identité rend l’ensemble reconnaissable sans masquer la personnalité de l’expert.",
      },
      {
        title: "4. Installer une acquisition soutenable",
        description:
          "SEO, GEO, partenariats, contenus ou campagnes sont sélectionnés selon le marché et la capacité. Le rythme tient compte du temps facturable et du nombre de missions réellement souhaité.",
      },
    ],
    deliverables: [
      {
        title: "Plateforme de positionnement personnel",
        description:
          "Cible, situations, promesse, méthode, preuves, limites, ton et vocabulaire réunis dans un cadre utilisable pour le site comme pour les échanges commerciaux.",
      },
      {
        title: "Architecture d’offres",
        description:
          "Des formats et portes d’entrée qui rendent la collaboration compréhensible sans réduire chaque mission à un produit standard.",
      },
      {
        title: "Site d’autorité",
        description:
          "Un espace distinctif et rapide qui présente expertise, cas, méthode et prise de contact avec un niveau de confiance adapté aux missions visées.",
      },
      {
        title: "Système de contenus experts",
        description:
          "Des thèmes prioritaires, formats réutilisables et règles de publication conçus à partir des questions réelles des prospects et du temps disponible.",
      },
      {
        title: "Parcours de qualification",
        description:
          "Des appels à l’action et un formulaire qui recueillent contexte, enjeu, calendrier et ordre de grandeur lorsque ces informations sont nécessaires au tri.",
      },
    ],
    qualificationCriteria: [
      {
        title: "Une expertise déjà exercée",
        description:
          "Le travail de positionnement s’appuie sur des situations, décisions et savoir-faire réels. Il ne remplace pas la construction initiale d’une compétence ou d’une offre encore entièrement théorique.",
      },
      {
        title: "La volonté de faire des choix",
        description:
          "Être plus précis peut écarter certaines demandes. Le projet doit accepter cette sélection pour gagner en lisibilité auprès des clients réellement recherchés.",
      },
      {
        title: "Des missions cibles économiquement cohérentes",
        description:
          "Le niveau d’investissement dans la marque, le site et l’acquisition doit correspondre à la valeur des missions, à la capacité annuelle et à l’ambition commerciale.",
      },
      {
        title: "Une implication personnelle",
        description:
          "Le point de vue, la méthode et les exemples ne peuvent pas être inventés par une agence. Nous les extrayons et les structurons avec l’expert, qui valide chaque affirmation importante.",
      },
    ],
    faq: [
      {
        question: "Dois-je afficher mes tarifs sur mon site ?",
        answer:
          "Cela dépend de la standardisation de l’offre et du rôle du prix dans la qualification. Une fourchette, un minimum d’engagement ou des critères de projet peuvent filtrer sans nécessairement afficher un tarif unique pour des missions complexes.",
      },
      {
        question: "Un site personnel est-il utile si mes clients viennent du réseau ?",
        answer:
          "Oui, car une recommandation est souvent suivie d’une vérification. Le site précise votre positionnement, donne des preuves et aide la personne recommandée à comprendre quand et comment vous solliciter.",
      },
      {
        question: "Faut-il publier chaque semaine pour être visible ?",
        answer:
          "Non. La régularité utile dépend du canal et des ressources. Un corpus restreint de contenus solides, mis à jour et reliés aux offres peut être plus durable qu’une cadence élevée sans profondeur.",
      },
      {
        question: "Le GEO peut-il faire citer mon expertise par les moteurs IA ?",
        answer:
          "Des contenus originaux, une identité cohérente, des auteurs identifiables et des sources externes fiables peuvent améliorer la compréhension et la citabilité. Aucun dispositif ne peut garantir qu’un moteur vous citera sur une question précise.",
      },
    ],
    relatedRoutes: [
      {
        href: "/site-internet-consultant-savoie",
        label: "Site internet pour consultant",
        description: "Découvrir l’offre de conception dédiée aux experts indépendants.",
      },
      {
        href: "/identite-visuelle-chambery",
        label: "Identité visuelle",
        description: "Créer un langage reconnaissable, cohérent avec la personnalité et les missions.",
      },
      {
        href: "/referencement-seo",
        label: "Référencement SEO",
        description: "Développer une présence autour de sujets d’autorité et de recherches utiles.",
      },
      {
        href: "/site-vitrine",
        label: "Site vitrine professionnel",
        description: "Concevoir un parcours clair, rapide et orienté vers la bonne prise de contact.",
      },
    ],
    cta: {
      title: "Votre expertise mérite mieux qu’une liste de services.",
      description:
        "Présentez les missions que vous voulez davantage réaliser, celles que vous souhaitez éviter et ce qui rend votre approche différente sur le terrain. Nous en ferons un système lisible.",
      label: "Clarifier mon positionnement",
      href: "/contact",
    },
  },
};

export const seoSectorPagePaths = Object.keys(
  seoSectorPagesByPath,
) as SeoSectorPagePath[];

export function getSeoSectorPage(
  pathOrSegments: string | readonly string[] | undefined,
): SeoSectorPage | undefined {
  const path = Array.isArray(pathOrSegments)
    ? ["secteurs", ...pathOrSegments].join("/")
    : pathOrSegments ?? "secteurs";

  return seoSectorPagesByPath[path as SeoSectorPagePath];
}
