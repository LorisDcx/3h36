export type SeoArticleSlug =
  | "seo-ou-google-ads-pme-locale"
  | "site-internet-batiment-generer-devis"
  | "refonte-site-sans-perdre-referencement"
  | "prix-site-internet-professionnel-savoie"
  | "seo-vs-geo-pme"
  | "apparaitre-chatgpt-google-ai"
  | "mesurer-visibilite-ia-entreprise"
  | "agence-web-ou-freelance"
  | "google-business-profile-entreprise-batiment"
  | "lancer-marque-site-startup";

export type SeoArticleCategory =
  | "Acquisition"
  | "Sites web"
  | "SEO"
  | "GEO & IA"
  | "Pilotage"
  | "Entrepreneuriat";

export type SeoArticleSection = Readonly<{
  heading: string;
  body: readonly string[];
  bullets?: readonly string[];
}>;

export type SeoArticleFaq = Readonly<{
  question: string;
  answer: string;
}>;

export type SeoArticleRelatedRoute = Readonly<{
  href: string;
  label: string;
}>;

export type SeoArticleReference = Readonly<{
  title: string;
  publisher: string;
  url: string;
}>;

export type SeoArticle = Readonly<{
  slug: SeoArticleSlug;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  category: SeoArticleCategory;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  intro: string;
  keyTakeaways: readonly string[];
  sections: readonly SeoArticleSection[];
  faqs: readonly SeoArticleFaq[];
  relatedCommercialRoutes: readonly SeoArticleRelatedRoute[];
  references: readonly SeoArticleReference[];
}>;

export const seoArticles = [
  {
    slug: "seo-ou-google-ads-pme-locale",
    title: "SEO ou Google Ads pour une PME locale : comment choisir sans gaspiller son budget ?",
    seoTitle: "SEO ou Google Ads pour une PME locale ?",
    seoDescription:
      "Comparez SEO et Google Ads selon l’urgence, la marge, la zone et la capacité commerciale d’une PME locale en Savoie.",
    description:
      "Une méthode concrète pour arbitrer entre référencement naturel et Google Ads selon l’urgence, la marge, la zone de chalandise et la capacité commerciale d’une PME en Savoie.",
    category: "Acquisition",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "11 min",
    intro:
      "Une PME locale n’a généralement pas besoin de choisir définitivement entre SEO et Google Ads. Elle doit d’abord savoir quelle demande elle veut capter, combien vaut un prospect qualifié et dans quel délai elle attend un retour. Le SEO construit un actif durable, tandis que la publicité permet d’acheter immédiatement une présence sur des requêtes sélectionnées. Le bon arbitrage dépend moins d’une préférence de canal que de l’économie réelle de l’offre.",
    keyTakeaways: [
      "Google Ads est pertinent pour tester rapidement une offre et capter une demande déjà formulée, à condition de mesurer les demandes réellement qualifiées.",
      "Le SEO devient prioritaire lorsque les mêmes questions et services sont recherchés toute l’année et que l’entreprise peut investir dans des pages utiles et durables.",
      "Une stratégie hybride réduit le risque : les campagnes produisent des données à court terme, puis les enseignements renforcent les pages et le référencement naturel.",
      "Le bon indicateur n’est ni le trafic ni le coût par clic isolé, mais le coût d’acquisition d’un client compatible avec la marge et la capacité de production.",
    ],
    sections: [
      {
        heading: "Commencer par l’équation commerciale, pas par le canal",
        body: [
          "Avant de parler de mots-clés, une PME doit documenter cinq données : la prestation à développer, son panier ou sa marge moyenne, le taux de transformation d’un devis en client, la zone réellement desservie et le nombre de nouveaux dossiers que l’équipe peut absorber. Sans ce cadrage, une campagne peut générer des formulaires tout en restant non rentable, et un travail SEO peut attirer un public trop éloigné ou trop peu qualifié.",
          "Un calcul simple aide à fixer une limite. Si dix demandes sérieuses produisent deux clients, chaque demande vaut au maximum une fraction de la marge générée par ces deux ventes. Il faut ensuite conserver une marge de sécurité pour les appels non aboutis, les délais de décision et le temps commercial. Cette valeur cible permet de comparer un coût par prospect Google Ads avec le coût mensuel d’un programme SEO sur plusieurs mois.",
        ],
        bullets: [
          "Quelle offre veut-on vendre davantage, et non simplement rendre visible ?",
          "Dans quelles communes l’entreprise intervient-elle avec une marge correcte ?",
          "Qu’est-ce qu’une conversion utile : appel de plus de 60 secondes, devis détaillé, rendez-vous ou vente ?",
          "Qui rappelle les prospects, sous quel délai, et comment la qualité du contact est-elle renseignée ?",
        ],
      },
      {
        heading: "Quand Google Ads est le meilleur premier mouvement",
        body: [
          "La publicité sur le Réseau de Recherche convient bien à une offre déjà achetée après une recherche explicite : dépannage, devis de rénovation, audit, création de site ou accompagnement spécialisé. Elle permet de sélectionner une zone, des horaires et des familles de requêtes, puis d’arrêter rapidement ce qui ne produit pas de demandes utiles. Elle est également adaptée au lancement d’une offre, car elle donne des signaux sur les formulations qui déclenchent un clic et un contact.",
          "Cette rapidité ne dispense pas de construire une page d’atterrissage précise. Envoyer toutes les annonces vers l’accueil mélange les intentions et rend l’analyse difficile. Une campagne consacrée à la rénovation énergétique, par exemple, devrait aboutir sur une page qui explique les travaux concernés, la zone d’intervention, les preuves disponibles, le déroulement d’un devis et le prochain pas. Les termes de recherche, les mots-clés négatifs et les conversions qualifiées doivent être examinés régulièrement.",
        ],
        bullets: [
          "Besoin de demandes dans les prochaines semaines plutôt que dans plusieurs mois.",
          "Offre suffisamment rentable pour absorber un coût média et un coût de gestion.",
          "Capacité à répondre vite aux appels et à suivre la qualité de chaque demande.",
          "Marché saisonnier en Savoie : travaux extérieurs, tourisme, équipements ou périodes de lancement spécifiques.",
        ],
      },
      {
        heading: "Quand le SEO doit devenir prioritaire",
        body: [
          "Le référencement naturel est particulièrement intéressant lorsque les prospects posent les mêmes questions de façon récurrente et que l’entreprise possède une expertise démontrable. Une page solide sur un service, une étude de cas locale et un guide de décision peuvent continuer à être découverts sans payer chaque visite. Le résultat n’est toutefois ni immédiat ni garanti : l’indexation, la concurrence, l’ancienneté du domaine et la qualité des preuves influencent la progression.",
          "Pour une PME savoyarde, le SEO local ne consiste pas à publier la même page pour Chambéry, Aix-les-Bains, Albertville et Annecy en remplaçant le nom de la ville. Chaque page utile doit refléter une réalité : zone couverte, typologie de bâtiments ou d’entreprises, délais de déplacement, contraintes locales, projets réalisés et questions propres aux prospects du secteur. Des pages artificiellement dupliquées fragilisent la confiance et peuvent entrer en concurrence entre elles.",
        ],
        bullets: [
          "Créer une page par offre réellement distincte, avec un objectif commercial clair.",
          "Relier services, réalisations, secteurs et ressources par des liens internes descriptifs.",
          "Rendre l’auteur, la méthode, les sources et la date de mise à jour identifiables.",
          "Développer les preuves locales avant d’étendre la couverture à de nouvelles villes.",
        ],
      },
      {
        heading: "Le scénario hybride le plus raisonnable pour une PME",
        body: [
          "Une approche fréquente consiste à lancer une campagne étroite sur une offre prioritaire pendant que les fondations SEO sont construites. Les premières semaines servent à vérifier les recherches réelles, les objections, les zones rentables et les formulations qui convertissent. Ces observations ne déterminent pas seules la stratégie éditoriale, mais elles évitent de rédiger des pages sur des hypothèses non vérifiées.",
          "À mesure que les pages naturelles gagnent des impressions et des clics, le budget publicitaire peut être déplacé vers les requêtes très concurrentielles, les lancements, le remarketing lorsque le consentement le permet, ou les zones où l’organique reste faible. Il ne s’agit pas de couper automatiquement les annonces lorsqu’une page remonte : une comparaison incrémentale et la qualité des prospects sont plus utiles qu’une règle générale.",
        ],
        bullets: [
          "Mois 1 : mesure, campagne pilote et correction de la page d’atterrissage.",
          "Mois 2 : pages de services, fiche Google Business Profile et premières études de cas.",
          "Mois 3 : analyse conjointe des termes Ads, requêtes Search Console et retours commerciaux.",
          "Trimestre suivant : arbitrage par offre, zone et qualité de prospect, pas par canal global.",
        ],
      },
      {
        heading: "Mesurer ce qui arrive après le formulaire",
        body: [
          "Google Ads permet de mesurer des actions comme un appel, un formulaire ou un achat lorsque le suivi est configuré. Pour une activité de service, cette première conversion doit être rapprochée du CRM ou, à défaut, d’un tableau commercial simple. Un formulaire frauduleux et une demande correspondant au cœur de cible ne peuvent pas recevoir la même valeur.",
          "Un tableau de pilotage utile sépare au minimum les demandes reçues, joignables, qualifiées, devisées et gagnées. Il associe à chacune la source, la campagne, la page d’entrée et la zone. Cette discipline révèle parfois qu’un canal avec peu de formulaires apporte les contrats les plus intéressants. Elle empêche aussi l’algorithme publicitaire d’optimiser vers l’action la plus facile plutôt que vers la plus rentable.",
        ],
      },
      {
        heading: "Une grille de décision en quatre questions",
        body: [
          "Choisissez d’abord Ads si la demande est urgente, la marge connue, la page prête et le suivi commercial opérationnel. Choisissez d’abord SEO si l’entreprise peut attendre, possède une expertise à formaliser et souhaite réduire sa dépendance à l’achat de clics. Combinez les deux lorsque le budget autorise un apprentissage rapide sans sacrifier la construction d’actifs durables.",
          "Reportez l’investissement si l’offre reste floue, si personne ne rappelle les demandes ou si aucune preuve ne peut être publiée. Dans ce cas, améliorer le positionnement, le parcours et le suivi produit souvent plus de valeur qu’ajouter du trafic. Aucun canal ne répare durablement une proposition que le prospect ne comprend pas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Le SEO est-il réellement gratuit contrairement à Google Ads ?",
        answer:
          "Non. Le clic organique n’est pas facturé, mais la stratégie, la rédaction, les preuves, la technique et la maintenance demandent du temps et des compétences. Le SEO est un investissement dans un actif éditorial et technique ; Google Ads achète une diffusion tant que la campagne est financée.",
      },
      {
        question: "Quel budget Google Ads faut-il prévoir pour une PME locale ?",
        answer:
          "Il n’existe pas de montant universel. Le budget dépend du coût des enchères, de la zone, du nombre d’offres et surtout de la valeur d’un client. Une phase pilote doit être assez concentrée pour produire des données interprétables, avec une limite définie à partir de la marge et du taux de transformation.",
      },
      {
        question: "Peut-on arrêter le SEO une fois bien positionné ?",
        answer:
          "Les pages peuvent conserver une visibilité, mais les concurrents, les résultats et les besoins évoluent. Il reste nécessaire de maintenir le site, corriger les informations, enrichir les preuves et suivre les changements. La cadence peut diminuer, pas la vigilance.",
      },
      {
        question: "Faut-il cibler toute la Savoie dans une seule campagne ?",
        answer:
          "Pas nécessairement. Une entreprise doit cibler uniquement les zones qu’elle dessert de façon rentable. Chambéry, Aix-les-Bains, Albertville ou les vallées peuvent avoir des contraintes de déplacement, de saison et de demande différentes ; les données doivent pouvoir être analysées séparément.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/referencement-seo", label: "Référencement SEO en Savoie" },
      { href: "/gestion-google-ads", label: "Gestion Google Ads" },
      { href: "/refonte-site-internet-pme-savoie", label: "Refonte de site pour PME" },
    ],
    references: [
      {
        title: "Conversion tracking: Definition",
        publisher: "Google Ads Help",
        url: "https://support.google.com/google-ads/answer/6308",
      },
      {
        title: "Tips to improve your local ranking on Google",
        publisher: "Google Business Profile Help",
        url: "https://support.google.com/business/answer/7091",
      },
      {
        title: "Creating helpful, reliable, people-first content",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
  },
  {
    slug: "site-internet-batiment-generer-devis",
    title: "Site internet BTP : quelles pages prévoir pour obtenir des demandes de devis utiles ?",
    seoTitle: "Site internet BTP : quelles pages génèrent des devis ?",
    seoDescription:
      "Découvrez les pages, preuves et parcours à prévoir sur un site BTP pour obtenir des demandes de devis mieux qualifiées.",
    description:
      "Architecture, preuves, photos et qualification : un guide pour transformer le site d’une entreprise du bâtiment en outil commercial local sans promettre des leads artificiels.",
    category: "Sites web",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "12 min",
    intro:
      "Le site d’une entreprise du bâtiment ne doit pas seulement montrer de beaux chantiers. Il doit aider un propriétaire, un syndic ou un maître d’œuvre à vérifier rapidement quatre éléments : le type de travaux réellement pris en charge, la zone d’intervention, le niveau de confiance et la manière d’obtenir une première réponse. Une architecture claire améliore à la fois la qualification commerciale, le référencement local et la capacité des moteurs de recherche ou d’IA à décrire l’entreprise sans ambiguïté.",
    keyTakeaways: [
      "Une page par activité rentable est généralement plus utile qu’une page unique listant tous les métiers en quelques lignes.",
      "Les réalisations doivent documenter le contexte, les contraintes, les choix et la zone, pas seulement afficher une galerie avant/après.",
      "Le formulaire doit filtrer les demandes sans devenir un dossier administratif : type de projet, commune, délai, ordre de budget et coordonnées suffisent souvent.",
      "Les certifications, assurances, délais et performances ne doivent être mentionnés que s’ils sont exacts, à jour et vérifiables.",
    ],
    sections: [
      {
        heading: "Construire le site autour des décisions du client",
        body: [
          "Un prospect ne raisonne pas comme l’organigramme de l’entreprise. Il cherche une réponse à une situation : refaire une toiture, isoler un logement, rénover une salle de bains, agrandir une maison ou remettre aux normes un local professionnel. La navigation doit donc partir des prestations et des contextes d’usage, puis conduire vers des preuves et une demande de devis.",
          "Chaque page de service doit indiquer ce qui est inclus, ce qui ne l’est pas, les typologies de bâtiments concernées, les principales étapes et la zone desservie. Cette précision évite les appels hors cible. Elle donne également suffisamment de matière aux moteurs pour distinguer une entreprise générale, un couvreur, un façadier ou un spécialiste de la rénovation énergétique.",
        ],
        bullets: [
          "Accueil : promesse, métiers prioritaires, zone, preuves et accès rapide au devis.",
          "Pages services : une intention principale et un périmètre explicite par page.",
          "Réalisations : problèmes rencontrés, réponse apportée, lieu approximatif et visuels légendés.",
          "À propos : équipe, histoire, organisation, matériel ou méthode lorsque ces éléments sont documentés.",
          "Contact : téléphone visible, horaires de rappel et formulaire de préqualification.",
        ],
      },
      {
        heading: "Les pages commerciales qui évitent la dispersion",
        body: [
          "Une entreprise ne gagne rien à créer vingt pages si elle n’exerce réellement que quatre activités prioritaires. Il est préférable de développer des pages complètes pour les prestations les plus rentables, puis d’ajouter des sous-pages lorsque la méthode, la cible ou les preuves diffèrent réellement. Une page “rénovation intérieure” peut ainsi rester générale, tandis qu’une page dédiée aux cuisines n’a de sens que si l’entreprise possède une offre, des projets et un parcours propres à ce besoin.",
          "Les pages géographiques suivent la même logique. Une page consacrée à Chambéry doit contenir des éléments propres au bassin chambérien ; une page Savoie peut expliquer une couverture départementale plus large. Répéter le même texte pour chaque commune crée des pages peu utiles et susceptibles de se concurrencer. La zone doit être choisie selon les déplacements acceptables, pas selon la taille théorique du marché.",
        ],
        bullets: [
          "Page métier + page zone lorsque les deux apportent une information distincte.",
          "Un seul objectif de conversion principal par page : appel, visite technique ou devis.",
          "Des liens vers deux ou trois réalisations directement liées au service présenté.",
          "Une FAQ fondée sur les vraies questions reçues au téléphone ou en rendez-vous.",
        ],
      },
      {
        heading: "Transformer une réalisation en preuve exploitable",
        body: [
          "Une photographie spectaculaire attire l’attention, mais elle ne prouve pas à elle seule la capacité à gérer un projet comparable. Une étude de chantier utile précise le type de bâtiment, l’état initial, la contrainte principale, la solution retenue, les corps de métier impliqués et les limites de ce qui peut être affirmé. Les montants, durées ou performances ne sont publiés qu’avec l’accord du client et une donnée fiable.",
          "Les images originales sont particulièrement importantes dans le bâtiment. Elles montrent les gestes, les matériaux, la protection du chantier et la qualité de finition. Des légendes descriptives et des textes alternatifs sobres rendent les visuels compréhensibles hors contexte. Il faut conserver une cohérence entre la réalité montrée, la date du projet et la prestation revendiquée.",
        ],
        bullets: [
          "Situation avant travaux et objectif formulé par le client.",
          "Diagnostic ou arbitrage technique, sans remplacer l’avis d’un professionnel compétent.",
          "Étapes documentées avec des photos datées et autorisées.",
          "Résultat observable, sans inventer une économie d’énergie ou un gain financier.",
          "Lien vers la page de service correspondante et vers la demande de devis.",
        ],
      },
      {
        heading: "Qualifier un devis sans faire fuir le prospect",
        body: [
          "Un formulaire à un seul champ produit souvent des échanges inutiles ; un questionnaire de vingt questions décourage les projets sérieux. Le bon compromis collecte les informations nécessaires à une première décision : nature des travaux, commune, type de bien, calendrier souhaité, budget sous forme de fourchette facultative, coordonnées et possibilité d’ajouter quelques photos.",
          "Le site doit expliquer ce qui se passe après l’envoi : délai indicatif de rappel, vérification d’éligibilité, visite éventuelle et remise du devis. Cette transparence rassure et protège l’équipe commerciale. Sur mobile, le numéro doit être facilement utilisable et l’entreprise doit pouvoir attribuer les appels aux différentes sources lorsqu’elle met en place un suivi conforme.",
        ],
      },
      {
        heading: "Relier le site, la fiche Google et la réputation locale",
        body: [
          "Pour une recherche locale, le site et la fiche Google Business Profile doivent raconter la même entreprise : nom, activité principale, téléphone, zone de service et horaires cohérents. Google indique que les résultats locaux reposent principalement sur la pertinence, la distance et la notoriété. Une fiche complète, des photos récentes et des réponses professionnelles aux avis aident les prospects à vérifier l’activité, mais ne permettent pas d’acheter une meilleure position.",
          "Les avis doivent provenir d’expériences réelles et ne pas être récompensés. Une demande envoyée après la réception d’un chantier peut inviter le client à décrire librement son expérience. L’entreprise ne doit pas dicter des mots-clés ni filtrer uniquement les clients satisfaits. Sur le site, les témoignages sont attribués et publiés avec autorisation ; ils ne remplacent pas les études de cas.",
        ],
      },
      {
        heading: "Piloter les demandes plutôt que le volume de trafic",
        body: [
          "Le tableau de bord d’une entreprise du bâtiment doit distinguer les appels non pertinents, les projets hors zone, les demandes à rappeler, les visites réalisées, les devis remis et les chantiers signés. Une hausse de trafic sans hausse de visites techniques n’est pas un succès commercial. À l’inverse, une page peu visitée peut être très rentable si elle attire une prestation à forte valeur.",
          "Le suivi mensuel permet d’identifier les pages qui amènent les bons dossiers, les communes trop éloignées et les saisons où une activité doit être poussée plus tôt. Il guide la production de contenus : répondre à une objection récurrente ou documenter un nouveau chantier vaut mieux que publier un article générique uniquement pour ajouter des mots-clés.",
        ],
      },
    ],
    faqs: [
      {
        question: "Combien de pages faut-il pour le site d’une entreprise du bâtiment ?",
        answer:
          "Le nombre dépend des activités réellement exercées. Un socle peut réunir l’accueil, l’entreprise, le contact, les pages des principaux métiers et plusieurs réalisations détaillées. Il vaut mieux huit pages spécifiques et maintenues que trente pages presque identiques.",
      },
      {
        question: "Faut-il afficher les prix des travaux ?",
        answer:
          "Un prix ferme est rarement pertinent sans diagnostic, mais des fourchettes expliquées, les facteurs qui font varier un devis ou un minimum d’intervention peuvent filtrer les demandes. Les montants doivent être datés, contextualisés et mis à jour.",
      },
      {
        question: "Peut-on utiliser les photos de tous ses chantiers ?",
        answer:
          "Il faut disposer des droits nécessaires et respecter la vie privée, notamment lorsqu’un logement, une adresse, une plaque ou une personne est identifiable. Une autorisation claire du client et des intervenants concernés est préférable avant publication.",
      },
      {
        question: "Un site peut-il garantir un nombre de devis ?",
        answer:
          "Non. Le résultat dépend de la demande, de la concurrence, de la réputation, du budget d’acquisition et de la qualité du suivi commercial. Un site peut améliorer la compréhension, la visibilité et la qualification, mais aucune position ni volume de contrats sérieux ne peut être garanti.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/site-internet-batiment-savoie", label: "Site internet pour entreprise du bâtiment en Savoie" },
      { href: "/photo-video-entreprise-savoie", label: "Photo et vidéo d’entreprise en Savoie" },
      { href: "/secteurs/batiment/google-ads", label: "Google Ads pour le bâtiment" },
    ],
    references: [
      {
        title: "Tips to improve your local ranking on Google",
        publisher: "Google Business Profile Help",
        url: "https://support.google.com/business/answer/7091",
      },
      {
        title: "Tips to get more reviews",
        publisher: "Google Business Profile Help",
        url: "https://support.google.com/business/answer/3474122",
      },
      {
        title: "Créer un site internet pour développer l’activité de son entreprise",
        publisher: "France Num",
        url: "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/creer-un-site-internet-pour-developper",
      },
    ],
  },
  {
    slug: "refonte-site-sans-perdre-referencement",
    title: "Refondre un site sans perdre son référencement : la méthode de migration pour PME",
    seoTitle: "Refonte de site : préserver son référencement SEO",
    seoDescription:
      "La méthode pour refondre un site sans perdre ses positions utiles : inventaire, redirections, contenus, mesure et recette SEO.",
    description:
      "Inventaire des URL, redirections, contenus, mesure et contrôles : une méthode de refonte pour réduire le risque SEO sans promettre une migration invisible.",
    category: "SEO",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "13 min",
    intro:
      "Une refonte réussie ne consiste pas à remettre en ligne un design neuf à la même adresse. Elle doit préserver ce que les moteurs et les utilisateurs connaissent déjà : les URL utiles, les contenus qui répondent à une intention, les liens reçus, les données structurées et les parcours de conversion. Une variation temporaire reste possible pendant que Google explore et réindexe les pages. La bonne méthode réduit ce risque, rend les anomalies détectables et évite de supprimer par inadvertance les actifs les plus importants.",
    keyTakeaways: [
      "Aucune refonte ne devrait commencer sans un inventaire des URL, de leurs performances, de leurs liens entrants et de leur rôle commercial.",
      "Chaque ancienne URL doit avoir une décision documentée : conserver, améliorer, rediriger vers un équivalent pertinent ou retourner une véritable erreur si le contenu disparaît.",
      "Les redirections permanentes doivent pointer directement vers la destination finale et rester en place suffisamment longtemps.",
      "Le contrôle post-lancement porte autant sur l’indexation et les erreurs que sur les formulaires, appels, analytics et performances mobiles.",
    ],
    sections: [
      {
        heading: "Définir ce qui change avant de toucher aux URL",
        body: [
          "Changer simultanément de domaine, de CMS, d’arborescence, de contenu et de design multiplie les causes possibles d’un problème. Lorsque le contexte le permet, séparer les évolutions rend le diagnostic plus simple. Google recommande lui aussi de planifier une migration et, pour les sites complexes, d’envisager des étapes plutôt qu’un basculement improvisé.",
          "Le cadrage doit préciser l’objectif réel de la refonte : rendre l’offre plus claire, générer plus de demandes, améliorer la maintenance, corriger les performances ou repositionner l’entreprise. Un changement d’URL n’a de sens que s’il sert cette architecture. Modifier une adresse uniquement pour la rendre plus élégante crée un travail de migration sans bénéfice certain.",
        ],
        bullets: [
          "Lister les changements fonctionnels, éditoriaux, techniques et de domaine séparément.",
          "Conserver une version consultable de l’ancien site et de ses données avant lancement.",
          "Choisir une période où l’équipe peut surveiller et corriger rapidement.",
          "Éviter une mise en production juste avant une période commerciale critique.",
        ],
      },
      {
        heading: "Créer l’inventaire qui servira de plan de migration",
        body: [
          "L’inventaire réunit les URL trouvées dans le crawl, le sitemap, Search Console, l’outil analytics, les campagnes publicitaires et les principaux rapports de liens. Pour chaque page, il faut relever le titre, le statut HTTP, la canonical, le trafic, les impressions, les conversions et les liens entrants connus. Les pages peu visitées ne sont pas automatiquement inutiles : certaines rassurent un prospect en fin de décision ou reçoivent un lien stratégique.",
          "La cartographie associe ensuite chaque ancienne adresse à une nouvelle adresse. Une redirection vers l’accueil par défaut est rarement une réponse pertinente. Si deux contenus sont fusionnés, la nouvelle page doit réellement reprendre l’intention et les informations essentielles. Si un service n’existe plus et qu’aucun équivalent n’est disponible, un statut 404 ou 410 explicite peut être plus honnête qu’une redirection trompeuse.",
        ],
        bullets: [
          "Conserver à l’identique les URL déjà adaptées lorsque c’est possible.",
          "Améliorer les pages qui ont une valeur mais ne répondent plus assez bien au besoin.",
          "Fusionner uniquement les contenus réellement redondants.",
          "Documenter les suppressions et leurs conséquences commerciales.",
        ],
      },
      {
        heading: "Préserver le sens, pas seulement les mots-clés",
        body: [
          "Une refonte graphique peut réduire accidentellement une page riche à un titre et trois cartes visuelles. Le nouveau contenu doit conserver les réponses qui rendaient la page utile : périmètre de la prestation, processus, preuves, objections, zone et moyens de contact. Le texte n’a pas besoin d’être identique, mais l’intention principale ne doit pas être diluée.",
          "Les titres de page, H1, textes alternatifs, liens internes et données structurées doivent être transférés ou améliorés avec discernement. Les pages locales exigent une attention particulière : supprimer toute référence à une zone ou fusionner plusieurs implantations peut modifier le contexte que le moteur associe à l’entreprise. À l’inverse, ajouter des villes sans contenu propre ne crée pas une présence locale crédible.",
        ],
      },
      {
        heading: "Configurer les signaux techniques avant l’ouverture",
        body: [
          "La version de préproduction doit être protégée de l’indexation sans empêcher les tests. Au lancement, les règles temporaires ne doivent pas bloquer le nouveau site. Chaque page indexable reçoit une canonical cohérente, un statut 200, des liens accessibles et une présence dans le sitemap lorsqu’elle est destinée à la recherche. Les variantes HTTP, sans www ou anciens domaines doivent rejoindre la version canonique par une redirection permanente cohérente.",
          "Les redirections sont testées avant le basculement à partir de la cartographie. Elles doivent éviter les chaînes — ancienne URL vers URL intermédiaire puis destination — et les boucles. Les liens internes, menus, sitemaps et campagnes doivent pointer directement vers les nouvelles adresses afin de ne pas dépendre indéfiniment du mécanisme de redirection.",
        ],
        bullets: [
          "Vérifier robots.txt, balises robots, canonicals et sitemap sur le domaine de production.",
          "Tester un échantillon de redirections, puis la totalité de la liste automatisée.",
          "Contrôler les pages d’erreur, les ressources CSS, JavaScript, images et polices.",
          "Valider les données structurées avec les outils officiels lorsqu’elles sont utilisées.",
        ],
      },
      {
        heading: "Lancer avec un protocole de contrôle réversible",
        body: [
          "Le jour du lancement, une vérification courte mais systématique évite les incidents les plus coûteux : accueil et pages prioritaires accessibles, redirections actives, formulaires reçus, numéros cliquables, mesure chargée conformément au consentement, sitemap disponible et absence de blocage global. Les journaux serveur ou outils de supervision complètent les tests manuels.",
          "Search Console doit être configurée pour les propriétés concernées. En cas de changement de domaine, les variantes de l’ancien et du nouveau domaine sont vérifiées et les instructions de changement d’adresse sont suivies lorsque l’outil les prévoit. Un nouveau sitemap aide à découvrir les URL, mais ne garantit ni l’indexation ni le maintien des positions.",
        ],
      },
      {
        heading: "Surveiller les signaux qui permettent d’agir",
        body: [
          "Les premiers jours, on surveille les erreurs serveur, les pages introuvables, les formulaires et les redirections. Les semaines suivantes, on compare l’évolution des pages indexées, des impressions, des clics, des requêtes, des positions et des conversions. Une baisse globale n’a pas la même cause qu’une chute limitée à une famille de pages ; l’analyse doit rester au niveau de l’URL et de l’intention.",
          "Il faut conserver une annotation de la date de migration et éviter de corriger dix choses sans pouvoir mesurer leur effet. Google précise qu’une fluctuation temporaire est possible pendant le réexploration. Une anomalie durable, une exclusion massive ou une hausse des 404 stratégiques appelle toutefois une investigation immédiate.",
        ],
        bullets: [
          "J + 1 : disponibilité, erreurs, formulaires, redirections et mesure.",
          "J + 7 : couverture d’indexation, crawl, sitemap et pages prioritaires.",
          "J + 30 : requêtes, pages d’entrée, conversions et éventuelles cannibalisations.",
          "J + 90 : bilan par groupe de pages et priorités d’amélioration continue.",
        ],
      },
      {
        heading: "Ce qu’une agence sérieuse peut — et ne peut pas — promettre",
        body: [
          "Une équipe compétente peut promettre un inventaire, une cartographie, des tests, une surveillance et une documentation des décisions. Elle peut également réduire les erreurs prévisibles et réagir rapidement. Elle ne peut pas garantir l’absence totale de fluctuation ni imposer à un moteur un calendrier de réindexation.",
          "Le critère de qualité est donc la traçabilité : savoir quelles URL existaient, où elles conduisent, quelles données ont changé et quels contrôles ont été effectués. Sans cette discipline, une perte de visibilité devient un mystère. Avec elle, la plupart des écarts techniques peuvent être isolés et corrigés.",
        ],
      },
    ],
    faqs: [
      {
        question: "Une redirection 301 fait-elle perdre tout le référencement ?",
        answer:
          "Non. Google indique que les redirections permanentes ne provoquent pas en elles-mêmes une perte de PageRank. Elles doivent toutefois mener vers un contenu équivalent, fonctionner sans chaîne inutile et être accompagnées d’une migration cohérente.",
      },
      {
        question: "Faut-il conserver toutes les anciennes pages ?",
        answer:
          "Non. Une page obsolète, sans équivalent et sans valeur peut être supprimée. La décision doit être prise après examen de son trafic, de ses liens, de ses conversions et de son rôle dans le parcours, pas uniquement d’après son apparence ou sa date.",
      },
      {
        question: "Combien de temps laisser les redirections ?",
        answer:
          "Il est prudent de les maintenir durablement, notamment lorsque les anciennes URL peuvent encore recevoir des visites ou des liens. Les retirer trop tôt recrée des erreurs pour les utilisateurs et les moteurs.",
      },
      {
        question: "Le nouveau sitemap suffit-il pour conserver les positions ?",
        answer:
          "Non. Le sitemap facilite la découverte, mais ne remplace ni les redirections, ni le contenu, ni les liens internes, ni les contrôles d’indexation. Il ne garantit pas qu’une URL sera indexée ou classée.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/refonte-site-internet-pme-savoie", label: "Refonte de site internet pour PME en Savoie" },
      { href: "/site-vitrine", label: "Création d’un site vitrine" },
      { href: "/referencement-seo", label: "Accompagnement en référencement naturel" },
    ],
    references: [
      {
        title: "How to move a site with URL changes",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
      },
      {
        title: "Build and submit a sitemap",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
      },
      {
        title: "Modèles de cahiers des charges pour un site internet d’entreprise",
        publisher: "France Num",
        url: "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/modeles-de-cahiers-des-charges-pour-un-site",
      },
    ],
  },
  {
    slug: "prix-site-internet-professionnel-savoie",
    title: "Prix d’un site internet professionnel en Savoie : comprendre un devis avant de décider",
    seoTitle: "Prix d’un site internet professionnel en Savoie",
    seoDescription:
      "Comprenez ce qui détermine le prix d’un site professionnel en Savoie, les coûts récurrents et les questions à poser avant le devis.",
    description:
      "Ce qui compose réellement le prix d’un site professionnel : stratégie, contenus, design, développement, SEO, conformité, maintenance et coût total sur plusieurs années.",
    category: "Pilotage",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "10 min",
    intro:
      "Deux devis intitulés “site vitrine” peuvent couvrir des réalités incomparables. L’un assemble quelques pages à partir d’un modèle ; l’autre inclut le positionnement, les textes, les photographies, le suivi des conversions et une architecture capable d’évoluer. Le prix devient compréhensible lorsque chaque ligne est reliée à un objectif, un livrable, une responsabilité et un coût de fonctionnement futur. Ce guide ne propose pas un tarif universel : il donne une méthode pour comparer des offres sans acheter trop peu, ni financer des options inutiles.",
    keyTakeaways: [
      "Le nombre de pages n’est qu’un facteur : la recherche, les contenus, les fonctionnalités, les validations et les connexions métier influencent davantage la charge réelle.",
      "Un devis utile sépare conception initiale, dépenses tierces, maintenance, acquisition et évolutions futures.",
      "Le choix doit être rapporté à la valeur d’une demande commerciale et à la durée d’utilisation prévue, pas seulement au montant de départ.",
      "Une présence locale en Savoie peut simplifier ateliers et prises de vue, mais elle ne remplace pas une méthode, des compétences et des responsabilités clairement écrites.",
    ],
    sections: [
      {
        heading: "Les sept blocs qui composent réellement le prix",
        body: [
          "Un projet professionnel commence souvent avant la première maquette. Il faut comprendre l’entreprise, hiérarchiser ses offres, identifier les prospects prioritaires et organiser les preuves. Viennent ensuite l’architecture, la rédaction, la direction artistique, le développement, l’intégration, les tests et la mise en ligne. Lorsque ces étapes ne figurent pas dans le devis, elles sont soit absentes, soit absorbées sans visibilité, soit reportées sur le client.",
          "Le niveau de personnalisation change également la charge. Un site basé sur un système existant peut être parfaitement adapté à une activité simple ; une interface sur mesure devient pertinente lorsque la marque, le parcours ou les fonctionnalités créent un avantage réel. Le bon choix n’est pas le plus complexe, mais le plus cohérent avec l’objectif et la capacité de maintenance.",
        ],
        bullets: [
          "Cadrage : objectifs, cibles, offre, indicateurs et périmètre.",
          "Contenus : interviews, rédaction, réécriture, traduction, photos ou vidéos.",
          "Conception : arborescence, parcours, maquettes et système graphique.",
          "Production : développement, CMS, formulaires, intégrations et migration.",
          "Qualité : responsive, accessibilité, performances, sécurité et tests.",
          "Visibilité : métadonnées, maillage, données structurées et mesure.",
          "Exploitation : hébergement, maintenance, support et évolutions.",
        ],
      },
      {
        heading: "Comparer trois niveaux de projet sans s’arrêter à une étiquette",
        body: [
          "Un site de présence répond à un besoin de crédibilité : quelques pages précises, des coordonnées fiables et une expérience mobile propre. Un site d’acquisition ajoute des pages par offre, des preuves, une stratégie locale, une mesure des conversions et un plan d’amélioration. Un outil métier ou une plateforme intègre des comptes, des données, des automatisations ou des connexions qui nécessitent spécifications, sécurité et maintenance plus poussées.",
          "Ces niveaux ne correspondent pas à des tarifs fixes. Une petite structure peut investir fortement dans la photographie ou l’identité tout en gardant un développement simple. Une PME déjà équipée peut conserver son design mais financer une migration complexe. Le devis doit montrer où se trouve l’effort et pourquoi ce choix sert la priorité commerciale.",
        ],
        bullets: [
          "Présence : être trouvé, compris et contacté avec un socle fiable.",
          "Acquisition : développer des demandes mesurables sur plusieurs offres ou zones.",
          "Outil métier : automatiser ou rendre un service qui dépasse la communication.",
        ],
      },
      {
        heading: "Les coûts que le devis initial oublie parfois",
        body: [
          "Le nom de domaine, l’hébergement, les licences, la messagerie, les outils de consentement, la maintenance et les services externes peuvent être facturés séparément. Il faut savoir qui possède les comptes, qui renouvelle les abonnements et ce qui se passe en cas de changement de prestataire. Un tarif bas accompagné de licences indispensables ou d’une dépendance propriétaire peut coûter davantage sur plusieurs années.",
          "Le contenu vieillit également. Tarifs, équipe, réalisations, réglementations et offres doivent pouvoir être mis à jour. Le contrat doit préciser si le client dispose d’un CMS, si les modifications sont facturées à l’unité ou comprises dans un forfait, et dans quels délais les incidents sont traités. La maintenance n’est pas synonyme de nouvelles fonctionnalités : ces deux budgets doivent être distingués.",
        ],
        bullets: [
          "Coûts annuels récurrents et date de renouvellement.",
          "Propriété du domaine, des accès, des fichiers sources et des contenus.",
          "Sauvegardes, mises à jour de sécurité et procédure de restauration.",
          "Nombre d’heures ou nature des demandes incluses dans le support.",
          "Conditions de sortie et format de restitution des données.",
        ],
      },
      {
        heading: "Calculer un budget à partir du rôle commercial du site",
        body: [
          "Pour une entreprise de services, le site peut être évalué par le nombre de demandes qualifiées nécessaires pour amortir l’investissement sur sa durée d’usage. Le calcul utilise la marge moyenne d’un client, le taux de transformation des demandes et les coûts d’exploitation. Il ne garantit aucun résultat ; il indique simplement le niveau d’effort économiquement raisonnable.",
          "Un site qui sert principalement à rassurer des prospects venus par recommandation ne se mesure pas comme une plateforme destinée à créer une demande inconnue. Dans le premier cas, la clarté, les preuves et la vitesse de réponse dominent. Dans le second, il faut prévoir production éditoriale, SEO, campagnes éventuelles et suivi commercial. Le budget média ne doit jamais être confondu avec les honoraires de conception ou de gestion.",
        ],
      },
      {
        heading: "Ce que change — et ne change pas — un prestataire en Savoie",
        body: [
          "Une équipe locale peut faciliter les ateliers à Chambéry, Aix-les-Bains, Albertville ou dans les vallées, ainsi que les prises de vue sur site. Elle connaît plus facilement les réalités de déplacement, la saisonnalité touristique, les réseaux économiques et les contraintes de certaines activités. Ces avantages deviennent concrets seulement si le projet les exploite dans les contenus, les photos et la stratégie de zone.",
          "La proximité ne garantit ni la qualité technique ni le référencement. Il faut examiner la méthode, les réalisations documentées, la capacité à expliquer les choix et les conditions de maintenance. Une agence distante bien organisée peut être plus adaptée qu’un acteur local sans expérience du besoin ; l’inverse est également vrai. La localisation est un critère de collaboration, pas un label de compétence.",
        ],
      },
      {
        heading: "La grille de lecture d’un devis sérieux",
        body: [
          "Un devis comparable décrit les livrables, le nombre de cycles de validation, les responsabilités sur les contenus, le planning, les prérequis et les exclusions. Il indique les technologies ou, au minimum, les contraintes de propriété et de maintenance. Les formulations vagues comme “SEO inclus” doivent être détaillées : recherche d’intentions, métadonnées, redirections, pages locales, mesure ou accompagnement éditorial ne représentent pas le même travail.",
          "La décision finale peut s’appuyer sur quatre questions : le prestataire a-t-il compris le problème commercial ? Le périmètre permet-il d’atteindre un résultat utilisable ? Les coûts futurs et responsabilités sont-ils visibles ? L’entreprise pourra-t-elle récupérer et faire évoluer son actif ? Une réponse claire vaut davantage qu’une longue liste de fonctions jamais reliées au besoin.",
        ],
      },
    ],
    faqs: [
      {
        question: "Pourquoi ne donnez-vous pas un prix moyen unique ?",
        answer:
          "Parce qu’un prix sans périmètre induit en erreur. Une page de présentation, une refonte avec migration SEO et un outil connecté peuvent tous être appelés “site internet” alors que les responsabilités et la charge diffèrent fortement. Un budget utile vient après un cadrage minimal.",
      },
      {
        question: "Un abonnement mensuel est-il préférable à un achat initial ?",
        answer:
          "Cela dépend de ce qu’il inclut et des conditions de sortie. Un abonnement peut lisser le coût et intégrer maintenance ou amélioration continue. Il devient risqué si la propriété, la durée d’engagement, les hausses de tarif ou la restitution des données sont imprécises.",
      },
      {
        question: "Le SEO est-il compris dans la création du site ?",
        answer:
          "Un socle technique et éditorial devrait être prévu, mais une stratégie SEO durable demande ensuite des contenus, des preuves, de l’analyse et des améliorations. Le devis doit distinguer la préparation à l’indexation d’un accompagnement de référencement continu.",
      },
      {
        question: "Quelles obligations prévoir pour un site professionnel français ?",
        answer:
          "Le site doit notamment comporter des mentions permettant d’identifier l’éditeur et l’hébergeur, avec des exigences supplémentaires selon l’activité et les traitements de données. La conformité exacte dépend du contexte ; elle doit être vérifiée auprès de sources officielles ou d’un conseil compétent.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/site-vitrine", label: "Création d’un site vitrine" },
      { href: "/refonte-site-internet-pme-savoie", label: "Refonte de site pour PME en Savoie" },
      { href: "/services", label: "Toutes les solutions web et acquisition" },
    ],
    references: [
      {
        title: "Combien payer pour un site web ou un site e-commerce ?",
        publisher: "France Num",
        url: "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e",
      },
      {
        title: "Mentions sur votre site internet : les obligations à respecter",
        publisher: "Ministère de l’Économie",
        url: "https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter",
      },
      {
        title: "Questions-réponses sur les cookies et autres traceurs",
        publisher: "CNIL",
        url: "https://www.cnil.fr/fr/questions-reponses-lignes-directrices-modificatives-et-recommandation-cookies-traceurs",
      },
    ],
  },
  {
    slug: "seo-vs-geo-pme",
    title: "SEO et GEO pour une PME : deux disciplines ou un même socle de visibilité ?",
    seoTitle: "SEO vs GEO : priorités pour une PME",
    seoDescription:
      "SEO, GEO, moteurs IA : comprenez les différences, les points communs et l’ordre des priorités pour une PME qui veut être trouvée et citée.",
    description:
      "Comprendre ce qui change avec les réponses génératives, ce qui reste du SEO fondamental et comment une PME peut devenir une source fiable sans suivre de faux raccourcis.",
    category: "GEO & IA",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "11 min",
    intro:
      "Le SEO vise à rendre un contenu accessible, compréhensible et pertinent dans les moteurs de recherche. Le GEO — Generative Engine Optimization — cherche à augmenter la probabilité qu’une entreprise ou une source soit utilisée dans une réponse produite par une IA. Les interfaces diffèrent, mais le socle reste largement commun : pages indexables, informations exactes, expertise identifiable, réputation et contenu original. Google présente d’ailleurs l’optimisation pour ses fonctions génératives comme une continuité du SEO, et non comme une collection de balises secrètes.",
    keyTakeaways: [
      "Une page doit d’abord être accessible et utile pour pouvoir être découverte, comprise ou citée ; le GEO ne contourne pas les fondations du SEO.",
      "Les moteurs génératifs favorisent les informations faciles à vérifier et à attribuer : méthode, source, auteur, date, périmètre et limites.",
      "Les données structurées aident à décrire une entité, mais ne remplacent pas les informations visibles ni ne garantissent une citation.",
      "Le meilleur avantage d’une PME locale vient de données et d’expériences que les contenus génériques ne possèdent pas : cas réels, prix expliqués, contraintes du territoire et protocoles publiés.",
    ],
    sections: [
      {
        heading: "Ce que le SEO et le GEO ont réellement en commun",
        body: [
          "Un système génératif qui s’appuie sur le web doit retrouver des documents, estimer leur pertinence et relier les affirmations à des sources. Google explique que ses fonctions génératives utilisent ses systèmes de classement et des mécanismes de recherche associés. Une page bloquée, non indexable, dupliquée ou pauvre en informations ne devient donc pas soudainement performante parce qu’elle comporte une FAQ ou un fichier destiné aux IA.",
          "Le travail prioritaire reste de donner une URL stable à chaque sujet important, de rendre le contenu disponible dans le HTML, de créer des liens internes cohérents et de fournir une expérience satisfaisante. Une entreprise locale ajoute la cohérence de son nom, de son activité, de ses coordonnées et de sa zone entre le site, la fiche d’établissement et les sources externes fiables.",
        ],
      },
      {
        heading: "Ce que les réponses génératives changent dans la rédaction",
        body: [
          "Une page classique pouvait se concentrer sur une requête principale. Une réponse générative peut décomposer une question en plusieurs recherches : prix, contraintes, alternatives, localisation, preuves et comparaisons. Le contenu doit donc traiter le problème de façon complète sans créer une page superficielle pour chaque variante. Des sections autonomes, des titres descriptifs et des réponses directes facilitent la lecture humaine autant que la récupération d’un passage précis.",
          "La précision devient plus importante que l’emphase commerciale. Une affirmation chiffrée doit indiquer sa source et sa date. Une recommandation doit expliquer dans quel cas elle s’applique. Une étude de cas distingue les faits mesurés des observations. Cette discipline augmente la confiance, même si elle ne garantit jamais qu’un moteur choisira la page comme source.",
        ],
        bullets: [
          "Répondre d’abord, développer ensuite, sans cacher l’information essentielle derrière un formulaire.",
          "Définir les termes ambigus et expliciter les hypothèses d’un calcul.",
          "Publier les limites, contre-indications et cas où une autre solution est préférable.",
          "Mettre à jour la date seulement lorsque le contenu a réellement été révisé.",
        ],
      },
      {
        heading: "Construire une entité que les moteurs peuvent réconcilier",
        body: [
          "Pour recommander une entreprise, un moteur doit éviter de confondre son nom, ses activités et ses implantations. La page À propos doit identifier la structure, ses personnes, son rôle et son territoire réel. Les pages auteurs expliquent les expériences pertinentes. Les profils sociaux et annuaires professionnels cohérents confortent cette identité, tandis que des adresses ou descriptions contradictoires créent de l’incertitude.",
          "Le balisage Organization ou LocalBusiness peut décrire les informations visibles : nom, URL, logo, coordonnées et profils officiels. Il ne faut pas inventer une adresse, une note ou une certification uniquement pour remplir le schéma. Google recommande d’utiliser le sous-type le plus spécifique adapté et de ne fournir que des propriétés qui correspondent à la réalité présentée aux visiteurs.",
        ],
        bullets: [
          "Une dénomination stable et un nom de marque utilisé de manière cohérente.",
          "Une page équipe avec des responsabilités et expériences vérifiables.",
          "Une zone d’intervention honnête, sans fausses implantations locales.",
          "Des liens vers les profils officiels et des mentions externes pertinentes.",
        ],
      },
      {
        heading: "Créer du contenu non substituable pour la Savoie",
        body: [
          "Une définition du SEO ou une liste générique de conseils existe déjà sur des milliers de sites. Une PME savoyarde peut produire une information beaucoup plus difficile à remplacer : analyse de demandes reçues avec données anonymisées, évolution de prix documentée, guide de préparation d’un chantier alpin, comparaison de parcours clients locaux ou observatoire de la visibilité IA des entreprises de la région.",
          "La valeur ne vient pas du mot “Savoie” ajouté dans le titre, mais d’une méthode locale. Il faut indiquer l’échantillon, la période, les limites et les critères. Un observatoire annuel peut devenir une référence s’il est reproductible et utile aux entreprises, aux journalistes et aux réseaux économiques. Une série de classements opaques risque au contraire de nuire à la crédibilité.",
        ],
      },
      {
        heading: "Éviter les tactiques GEO sans fondement",
        body: [
          "Aucun fournisseur sérieux ne peut garantir qu’une marque sera recommandée par ChatGPT, Perplexity ou Google AI. Les réponses varient selon la formulation, la localisation, la fraîcheur des sources et les évolutions des produits. Google déconseille explicitement les “hacks” comme la multiplication de textes artificiels ou les fichiers IA inutiles lorsque l’objectif est de manipuler la visibilité.",
          "Autoriser un robot d’exploration peut rendre un contenu éligible à la découverte, mais ce n’est pas un facteur de classement. De même, placer une réponse dans une FAQ, ajouter du schéma ou répéter le nom de la marque ne crée pas une autorité. La priorité reste un ensemble de pages fiables, reconnues par de vraies sources et capables de satisfaire le lecteur sans nouvelle recherche.",
        ],
        bullets: [
          "Refuser les promesses de “top 1 IA” ou de nombre garanti de citations.",
          "Ne pas acheter de fausses mentions, avis ou articles dépourvus de lectorat réel.",
          "Ne pas publier à grande échelle des pages proches pour couvrir chaque formulation.",
          "Tester les recommandations tierces contre la documentation officielle et les données observées.",
        ],
      },
      {
        heading: "Un plan commun SEO + GEO pour une PME",
        body: [
          "Le premier niveau est technique : exploration, indexation, canonicals, sitemap, performance et mesure. Le deuxième est commercial : pages d’offres, secteurs, zones réellement couvertes et études de cas. Le troisième est réputationnel : profils officiels, avis authentiques, partenariats et liens éditoriaux. Le quatrième est éditorial : ressources fondées sur l’expérience et données originales.",
          "Le pilotage sépare ce qui est maîtrisable — qualité, publication, cohérence, accessibilité — de ce qui ne l’est pas — position exacte ou formulation d’une réponse IA. Search Console, les analytics, les journaux serveur et un protocole de tests permettent d’observer les tendances. Le succès se juge surtout sur les demandes qualifiées et la part de prospects qui identifient l’entreprise comme une référence.",
        ],
      },
    ],
    faqs: [
      {
        question: "Le GEO va-t-il remplacer le SEO ?",
        answer:
          "Non à court terme selon les principes publiés par Google : ses fonctions génératives reposent encore sur les fondations de la recherche. Le parcours change, mais l’accessibilité, la pertinence, la confiance et l’originalité restent essentielles.",
      },
      {
        question: "Faut-il créer un fichier llms.txt ?",
        answer:
          "Ce fichier peut avoir des usages documentaires dans certains contextes, mais Google indique qu’un fichier IA de ce type n’est pas nécessaire pour réussir dans ses fonctions génératives. Il ne doit jamais remplacer robots.txt, sitemap, structure HTML et contenus accessibles.",
      },
      {
        question: "Les FAQ améliorent-elles automatiquement la visibilité IA ?",
        answer:
          "Non. Une FAQ est utile lorsqu’elle répond à de vraies questions avec des informations précises. Son format ne garantit ni classement ni citation. Une réponse artificielle ou répétée n’acquiert pas de valeur parce qu’elle est placée dans un composant FAQ.",
      },
      {
        question: "Une petite entreprise peut-elle être citée face à de grands médias ?",
        answer:
          "Oui, notamment sur une expertise étroite ou locale qu’elle documente mieux. Ce résultat reste incertain et dépend de la question. Les données originales, cas de terrain et explications attribuables lui donnent davantage de raisons d’être utilisée comme source.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/geo", label: "Visibilité GEO dans les moteurs IA" },
      { href: "/referencement-seo", label: "Référencement SEO en Savoie" },
      { href: "/site-internet-consultant-savoie", label: "Site d’autorité pour consultant en Savoie" },
    ],
    references: [
      {
        title: "Optimizing your website for generative AI features on Google Search",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      },
      {
        title: "Organization structured data",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/appearance/structured-data/organization",
      },
      {
        title: "Publishers and Developers — FAQ",
        publisher: "OpenAI Help Center",
        url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
      },
    ],
  },
  {
    slug: "apparaitre-chatgpt-google-ai",
    title: "Comment apparaître dans ChatGPT et Google AI sans tomber dans les recettes miracles",
    seoTitle: "Apparaître dans ChatGPT et Google AI : le guide",
    seoDescription:
      "Un guide factuel pour rendre votre entreprise accessible, compréhensible et citable dans ChatGPT et les expériences IA de Google.",
    description:
      "Crawl, indexation, entité, contenus citables et réputation : la checklist prudente pour rendre une entreprise éligible aux réponses de ChatGPT, Google AI et Perplexity.",
    category: "GEO & IA",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "12 min",
    intro:
      "Aucune balise ne permet d’inscrire une entreprise dans une réponse générative. Il est toutefois possible d’augmenter sa découvrabilité : rendre le site accessible aux robots pertinents, publier des pages stables et factuelles, clarifier l’identité de l’entreprise et obtenir des confirmations externes légitimes. La nuance est importante : ces actions créent des conditions favorables, mais ni ChatGPT, ni Google, ni Perplexity ne garantissent l’indexation, la citation ou la recommandation d’un site.",
    keyTakeaways: [
      "Pour ChatGPT Search, OpenAI recommande de ne pas bloquer OAI-SearchBot ; GPTBot concerne un usage distinct lié à l’entraînement potentiel.",
      "Pour les fonctions génératives de Google Search, le site doit respecter les exigences habituelles de Google Search et rester éligible à l’affichage d’un extrait.",
      "Les pages les plus citables contiennent des faits attribuables, une méthode, une date, des limites et des informations originales.",
      "Une présence externe cohérente — profils officiels, organismes professionnels, presse, partenaires et avis authentiques — aide à confirmer l’entité sans recourir à de fausses mentions.",
    ],
    sections: [
      {
        heading: "Étape 1 : vérifier que les systèmes peuvent accéder au site",
        body: [
          "Une page publique doit répondre correctement, charger son contenu principal sans authentification et ne pas être bloquée par une directive noindex ou par robots.txt lorsque l’on souhaite qu’elle soit découverte. Le sitemap liste les URL canoniques importantes, mais il ne force pas leur indexation. Les pare-feu et services anti-bot doivent aussi être contrôlés : une règle peut autoriser un nom d’agent tout en bloquant ses requêtes au niveau réseau.",
          "OpenAI distingue OAI-SearchBot, utilisé pour faire apparaître du contenu dans ChatGPT Search, de GPTBot, associé à la collecte potentielle pour l’entraînement. Un éditeur peut donc prendre des décisions séparées. Perplexity documente également PerplexityBot et son comportement avec robots.txt. Pour Google AI Overviews et AI Mode, le socle est l’accès de Google Search et l’éligibilité normale du contenu ; autoriser un robot ne donne aucun avantage de classement.",
        ],
        bullets: [
          "Tester robots.txt et les balises robots sur les pages importantes.",
          "Vérifier les codes HTTP, canonicals et redirections depuis l’extérieur.",
          "Contrôler les journaux ou l’outil de sécurité pour détecter les blocages réels.",
          "Publier un sitemap à jour et le déclarer dans Search Console.",
        ],
      },
      {
        heading: "Étape 2 : rendre l’entreprise identifiable sans ambiguïté",
        body: [
          "Le site doit expliquer qui est l’entreprise, où elle intervient, qui porte l’expertise et comment la contacter. Une page À propos générique n’est pas suffisante pour distinguer une agence de trois homonymes. La dénomination, le logo, l’URL officielle, l’email, le téléphone et les profils doivent rester cohérents. Une adresse ne doit être affichée que si elle correspond à la réalité et aux règles du service utilisé.",
          "Le balisage Organization ou LocalBusiness peut reprendre ces informations visibles. Les liens sameAs servent à relier des profils réellement officiels, pas une liste d’annuaires quelconques. Les biographies présentent des expériences vérifiables plutôt qu’une accumulation d’adjectifs. Cette clarté sert autant un prospect qui cherche à se rassurer qu’un système tentant de réconcilier plusieurs sources.",
        ],
      },
      {
        heading: "Étape 3 : publier des unités d’information faciles à citer",
        body: [
          "Une page citable ne signifie pas une page écrite en fragments artificiels. Elle possède un titre précis, une introduction qui répond à la question, des sections descriptives et des affirmations accompagnées de leur contexte. Les tableaux de décision, méthodes, définitions et listes de contrôle sont utiles lorsqu’ils condensent un raisonnement réel, pas lorsqu’ils servent uniquement à multiplier les formulations.",
          "Chaque fait susceptible d’évoluer reçoit une date et une source. Les contenus de l’entreprise distinguent ce qui vient d’une documentation officielle, ce qui résulte d’une observation et ce qui relève d’une recommandation. Une méthode de test publie ses critères et son échantillon. Cette transparence rend la page plus vérifiable et évite qu’une réponse IA amplifie une affirmation commerciale non prouvée.",
        ],
        bullets: [
          "Définition courte suivie d’une explication et d’un cas d’usage.",
          "Données originales accompagnées du protocole de collecte.",
          "Comparaisons qui indiquent les critères et les cas où chaque option convient.",
          "Études de cas séparant livrables, observations et résultats mesurés.",
        ],
      },
      {
        heading: "Étape 4 : créer ce qu’une IA ne peut pas produire sans vous",
        body: [
          "Réécrire les conseils généraux des moteurs apporte peu de valeur. Une entreprise devient source lorsqu’elle publie une connaissance de première main : analyse anonymisée de ses demandes, observatoire local, retour d’expérience sur une migration, photos et contraintes d’un chantier, grille de prix expliquée ou processus testé. Pour 3h36, un observatoire reproductible de la visibilité IA des PME de Savoie serait plus différenciant qu’une série d’articles définissant le GEO.",
          "L’étude doit rester modeste dans ses conclusions. Les réponses IA varient et un petit échantillon ne représente pas tout le marché. Publier les prompts, la date, les appareils ou comptes utilisés, les moteurs testés et les règles de codage permet à d’autres de comprendre le résultat. Une correction publique en cas d’erreur renforce davantage la confiance qu’un classement prétendument définitif.",
        ],
      },
      {
        heading: "Étape 5 : obtenir des confirmations externes légitimes",
        body: [
          "Les moteurs ne se limitent pas au site de l’entreprise. Une fiche d’établissement exacte, un profil dans une fédération, une intervention dans un événement, un partenariat documenté ou un article de presse locale peuvent confirmer une activité. L’objectif n’est pas de semer le nom de marque partout, mais d’être mentionné dans des contextes où l’entreprise apporte une vraie contribution.",
          "Les liens achetés en masse, faux avis et communiqués sans information créent du bruit et un risque de réputation. Une stratégie durable transforme plutôt un travail réel en actif publiable : étude partagée avec un réseau économique, outil gratuit, intervention pédagogique, données locales ou cas client autorisé. La mention doit rester éditorialement justifiée.",
        ],
      },
      {
        heading: "Étape 6 : rendre le site utilisable par les humains et les agents",
        body: [
          "Une navigation claire, des formulaires accessibles, des boutons nommés et une structure HTML compréhensible améliorent l’expérience des personnes, des technologies d’assistance et des agents de navigateur. OpenAI indique que des rôles et libellés ARIA descriptifs aident son agent à interpréter les interfaces. Cela ne remplace pas l’accessibilité complète, mais rappelle qu’un site visuellement spectaculaire peut devenir difficile à utiliser si ses contrôles n’ont pas de sens hors de l’écran.",
          "Les informations clés ne doivent pas être enfermées dans une image, une animation ou un PDF non indexable. Les tarifs, conditions, zones et moyens de contact existent en texte lorsque cela sert l’utilisateur. Le formulaire fournit des messages d’erreur explicites et un résultat confirmant l’envoi, sans action irréversible déclenchée par surprise.",
        ],
      },
      {
        heading: "Étape 7 : mesurer sans confondre absence de preuve et absence d’effet",
        body: [
          "OpenAI indique que les liens issus de ChatGPT Search comportent un paramètre utm_source=chatgpt.com, ce qui permet d’identifier une partie du trafic référent dans les analytics. Google déploie des rapports dédiés à la visibilité dans ses fonctions génératives dans Search Console, mais leur disponibilité peut varier. Perplexity et d’autres services ne fournissent pas tous le même niveau d’information.",
          "Le suivi combine donc referrals, pages d’entrée, demandes où le prospect cite une IA et tests manuels répétés. Un test isolé n’est pas un classement : il faut utiliser une liste stable de questions, consigner la date, le moteur, la formulation et les sources citées. Le but est d’observer une tendance et de détecter les erreurs de marque, pas de fabriquer un score précis à partir d’un petit nombre de réponses.",
        ],
      },
    ],
    faqs: [
      {
        question: "Peut-on demander directement à ChatGPT d’ajouter son entreprise ?",
        answer:
          "Non. Il n’existe pas de formulaire garantissant l’ajout d’une entreprise aux réponses. OpenAI recommande de rendre le contenu public accessible à OAI-SearchBot pour qu’il puisse être découvert et potentiellement cité.",
      },
      {
        question: "Autoriser OAI-SearchBot autorise-t-il automatiquement l’entraînement ?",
        answer:
          "OpenAI documente des contrôles séparés : OAI-SearchBot concerne la recherche, tandis que GPTBot concerne la collecte potentielle pour l’entraînement. Le fichier robots.txt peut exprimer des règles distinctes pour ces agents.",
      },
      {
        question: "Le schéma FAQ garantit-il une citation dans une réponse IA ?",
        answer:
          "Non. Les données structurées peuvent aider à décrire un contenu, mais ne garantissent ni résultat enrichi ni citation. Les informations doivent être visibles, exactes et utiles indépendamment du balisage.",
      },
      {
        question: "Combien de temps faut-il pour apparaître ?",
        answer:
          "Aucun délai fiable ne peut être annoncé. La découverte, l’indexation, la concurrence, la réputation et la question posée jouent toutes un rôle. Le suivi doit porter sur plusieurs semaines ou mois et rester lié aux résultats commerciaux.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/geo", label: "Stratégie GEO et visibilité dans les moteurs IA" },
      { href: "/observatoire-geo-savoie", label: "Observatoire GEO Savoie" },
      { href: "/lancement-marque-startup-savoie", label: "Lancement de marque et startup en Savoie" },
    ],
    references: [
      {
        title: "Publishers and Developers — FAQ",
        publisher: "OpenAI Help Center",
        url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
      },
      {
        title: "Optimizing your website for generative AI features on Google Search",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      },
      {
        title: "Perplexity Crawlers",
        publisher: "Perplexity Documentation",
        url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
      },
    ],
  },
  {
    slug: "mesurer-visibilite-ia-entreprise",
    title: "Mesurer la visibilité d’une entreprise dans les moteurs IA : protocole, indicateurs et limites",
    seoTitle: "Mesurer la visibilité IA d’une entreprise",
    seoDescription:
      "Construisez un protocole reproductible pour suivre mentions, citations, exactitude et stabilité d’une entreprise dans les moteurs IA.",
    description:
      "Une méthode reproductible pour suivre les citations et recommandations dans ChatGPT, Google AI et Perplexity sans transformer quelques prompts en faux classement.",
    category: "GEO & IA",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "12 min",
    intro:
      "La visibilité IA ne se résume pas à demander une fois “quelle est la meilleure agence ?”. Une réponse peut changer selon le moteur, la formulation, la localisation, la session et la date. Pour produire un indicateur utile, il faut définir un panel de questions représentatives, conserver le même protocole, distinguer mention et citation, puis relier les observations aux visites et aux demandes commerciales. Le résultat est un baromètre imparfait mais explicable, jamais une position absolue.",
    keyTakeaways: [
      "Un protocole crédible documente les prompts, la date, le moteur, le contexte de localisation et les règles de classification.",
      "Il faut séparer présence de la marque, lien cité, description correcte, recommandation et conversion : ces événements n’ont pas la même valeur.",
      "Les données propriétaires des plateformes restent partielles ; analytics, Search Console, journaux serveur et retour des prospects doivent être croisés.",
      "La progression doit être comparée sur un panel stable et une période suffisamment longue, avec une trace des changements de contenu et de réputation.",
    ],
    sections: [
      {
        heading: "Définir les questions qui représentent un vrai parcours d’achat",
        body: [
          "Le panel commence par les situations commerciales, pas par le nom de la marque. Pour une agence en Savoie, il peut inclure la recherche d’un prestataire pour refaire le site d’une PME, générer des devis pour une entreprise du bâtiment, lancer une identité de startup ou améliorer une présence dans Google. Les questions informationnelles — prix, méthode, risques — complètent les demandes de recommandation.",
          "Chaque question reçoit une catégorie, une intention, une zone et une importance commerciale. Les variantes de formulation sont limitées et fixées avant la mesure. Ajouter après coup uniquement les prompts qui donnent un bon résultat fausse le baromètre. Un panel peut évoluer, mais les nouvelles séries doivent être comparées séparément jusqu’à disposer d’un historique suffisant.",
        ],
        bullets: [
          "Découverte : quels prestataires ou solutions existent pour ce besoin ?",
          "Comparaison : agence ou freelance, SEO ou Ads, refonte ou nouveau site ?",
          "Validation : quelles preuves vérifier avant de choisir ?",
          "Locale : qui intervient réellement à Chambéry, Aix-les-Bains ou en Savoie ?",
          "Marque : que sait le moteur de l’entreprise et ses services ?",
        ],
      },
      {
        heading: "Créer une fiche d’observation par réponse",
        body: [
          "Chaque exécution consigne la date, l’heure, le produit, la version ou interface lorsque l’information est disponible, la présence d’une connexion, la localisation déclarée et le prompt exact. La réponse est archivée dans le respect des conditions du service. Les sources citées sont enregistrées avec leur URL canonique et le passage auquel elles semblent se rattacher.",
          "Une grille commune évite l’interprétation opportuniste. Une marque simplement énumérée n’est pas une recommandation. Une citation d’un article ne signifie pas que l’entreprise est proposée comme prestataire. Une description exacte de l’activité est distincte d’un lien vers le site. Les erreurs factuelles sont relevées car leur correction peut être plus urgente que l’augmentation du nombre de mentions.",
        ],
        bullets: [
          "Mention de la marque : oui/non et contexte.",
          "URL citée : page, type de contenu et position dans la réponse.",
          "Description : exacte, partielle, ambiguë ou erronée.",
          "Recommandation explicite : oui/non, avec justification donnée par le moteur.",
          "Concurrents et sources externes présents dans la même réponse.",
        ],
      },
      {
        heading: "Choisir des indicateurs qui ne prétendent pas tout mesurer",
        body: [
          "Le taux de mention correspond à la part des réponses du panel où la marque apparaît. Le taux de citation compte les réponses qui lient une page de l’entreprise. La couverture thématique mesure le nombre de catégories où la présence existe. Un score d’exactitude peut suivre les informations essentielles : activité, zone, personnes et offres. Ces métriques décrivent uniquement le panel observé, pas l’ensemble des utilisateurs.",
          "Une “part de voix IA” peut être calculée parmi un groupe de concurrents, mais elle doit afficher la taille de l’échantillon et les règles de comptage. Pondérer les prompts par valeur commerciale peut aider au pilotage interne, à condition de ne pas publier le résultat comme une statistique universelle. Les intervalles et variations sont plus instructifs qu’un score au dixième.",
        ],
        bullets: [
          "Taux de mention sur le panel stable.",
          "Taux de citation vers le domaine et pages les plus utilisées.",
          "Exactitude de l’entité et nombre d’erreurs critiques.",
          "Diversité des sujets et zones où l’entreprise est visible.",
          "Visites et demandes attribuables à une source IA lorsque les données le permettent.",
        ],
      },
      {
        heading: "Croiser les résultats avec les données du site",
        body: [
          "OpenAI indique que les liens issus de ChatGPT Search incluent le paramètre utm_source=chatgpt.com. Il peut être utilisé dans l’outil analytics, sous réserve de la configuration et du consentement applicable. Les autres plateformes peuvent apparaître comme référents ou masquer une partie du parcours. Une question facultative dans le formulaire — “Comment nous avez-vous connu ?” — complète les données sans forcer une attribution parfaite.",
          "Google a annoncé en juin 2026 des rapports Search Console dédiés aux fonctions génératives, avec impressions, pages, pays, appareils et dates, d’abord déployés sur une partie des sites. Leur disponibilité doit donc être vérifiée dans chaque propriété. Les journaux serveur montrent le passage de robots documentés, mais un crawl ne prouve ni une citation ni une recommandation.",
        ],
      },
      {
        heading: "Organiser un cycle de mesure utile à la décision",
        body: [
          "Une mesure mensuelle convient à un panel stratégique ; un contrôle plus fréquent produit souvent beaucoup de bruit. Les changements importants — nouvelle étude, mention presse, refonte, mise à jour de robots.txt — sont annotés. L’analyse cherche des évolutions persistantes sur plusieurs vagues plutôt qu’une réaction immédiate à chaque réponse.",
          "Lorsqu’une source externe apparaît régulièrement, il faut comprendre pourquoi elle est utile : données originales, annuaire fiable, méthode claire ou réputation. L’objectif n’est pas de la copier, mais d’identifier l’information manquante sur le site. Une page citée peut être enrichie si les lecteurs ont encore besoin d’une deuxième recherche pour décider.",
        ],
        bullets: [
          "Semaine 0 : panel, grille, concurrents et ligne de base.",
          "Chaque mois : nouvelle vague dans des conditions aussi proches que possible.",
          "Chaque trimestre : analyse des tendances, erreurs et pages sources.",
          "Chaque semestre : révision du panel selon les ventes et questions réelles des prospects.",
        ],
      },
      {
        heading: "Publier un observatoire sans créer de fausse science",
        body: [
          "Un observatoire local peut devenir un actif éditorial puissant s’il publie sa méthode. La liste ou typologie des entreprises, le nombre de prompts, les moteurs, la période, les critères de présence et les limites doivent être accessibles. Les entreprises doivent pouvoir signaler une erreur. Toute relation commerciale ou sélection éditoriale est déclarée.",
          "Le rapport évite les titres comme “classement définitif des meilleures entreprises selon l’IA”. Il présente plutôt une photographie datée de la visibilité observée sur un panel donné. Les conclusions portent sur les tendances, sources et erreurs communes. Cette prudence rend l’étude plus réutilisable par les réseaux économiques et plus crédible pour les moteurs eux-mêmes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Existe-t-il un outil officiel donnant le classement d’une marque dans ChatGPT ?",
        answer:
          "Non. OpenAI documente le suivi du trafic référent, mais pas un classement universel des marques. Les outils tiers construisent leurs propres panels ; leur méthode, leur fraîcheur et leurs limites doivent être examinées.",
      },
      {
        question: "Combien de prompts faut-il tester ?",
        answer:
          "Le nombre dépend du nombre d’offres, de zones et d’intentions. Un petit panel bien défini et répété vaut mieux qu’une grande liste modifiée à chaque vague. Toute publication doit indiquer la taille exacte de l’échantillon.",
      },
      {
        question: "Un passage de PerplexityBot ou OAI-SearchBot prouve-t-il que le site est cité ?",
        answer:
          "Non. Le crawl indique seulement qu’une ressource a été demandée. La citation doit être observée dans une réponse ou dans les données de référence disponibles.",
      },
      {
        question: "Peut-on comparer les résultats d’un mois à l’autre ?",
        answer:
          "Oui avec prudence, si le panel et les conditions sont documentés. Les produits évoluent et les réponses comportent une variabilité naturelle ; on recherche donc une tendance sur plusieurs vagues plutôt qu’une variation ponctuelle.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/geo", label: "Pilotage de la visibilité dans les moteurs IA" },
      { href: "/observatoire-geo-savoie", label: "Protocole de l’Observatoire GEO Savoie" },
      { href: "/referencement-seo", label: "Socle de référencement SEO" },
    ],
    references: [
      {
        title: "Introducing Search Generative AI performance reports in Search Console",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
      },
      {
        title: "Publishers and Developers — FAQ",
        publisher: "OpenAI Help Center",
        url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
      },
      {
        title: "How does Perplexity follow robots.txt?",
        publisher: "Perplexity Help Center",
        url: "https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt",
      },
    ],
  },
  {
    slug: "agence-web-ou-freelance",
    title: "Agence web ou freelance : quel modèle choisir pour son site et son acquisition ?",
    seoTitle: "Agence web ou freelance : comment choisir ?",
    seoDescription:
      "Comparez agence web, collectif et freelance selon le périmètre, le pilotage, le risque, le budget et les compétences nécessaires.",
    description:
      "Une grille neutre pour choisir entre freelance, agence et collectif selon le périmètre, la coordination, le risque, le budget et la continuité attendue.",
    category: "Pilotage",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "10 min",
    intro:
      "Le statut du prestataire ne prédit ni la qualité ni la réussite d’un projet. Un freelance expérimenté peut être le meilleur choix pour un périmètre ciblé ; une agence devient utile lorsque plusieurs expertises doivent avancer ensemble ; un collectif peut offrir une équipe ajustée sans la structure permanente d’une grande organisation. La décision doit porter sur les personnes qui réaliseront le travail, leurs responsabilités et leur capacité à maintenir le dispositif après la mise en ligne.",
    keyTakeaways: [
      "Choisissez à partir du risque et du nombre d’expertises à coordonner, pas à partir d’une opposition simpliste entre prix et taille.",
      "Demandez qui conçoit, écrit, développe, mesure et maintient : le nom commercial ne révèle pas toujours l’équipe réelle.",
      "Un interlocuteur unique est utile seulement si les décisions, accès, livrables et validations restent documentés.",
      "Le meilleur prestataire sait limiter le périmètre et expliquer quand une compétence externe ou une phase supplémentaire est nécessaire.",
    ],
    sections: [
      {
        heading: "Choisir un freelance lorsque le besoin est étroit et bien cadré",
        body: [
          "Un freelance convient particulièrement à une mission où la compétence centrale est identifiable : direction artistique, développement d’un composant, audit SEO, gestion d’une campagne ou production photo. Le contact direct avec la personne qui exécute réduit les couches de communication. Le projet peut avancer rapidement lorsque le client dispose déjà d’une stratégie, de contenus et d’un responsable interne capable d’arbitrer.",
          "Le risque apparaît lorsqu’une seule personne doit couvrir des domaines très différents ou devient le point unique de défaillance. Il faut vérifier ses disponibilités, sa méthode de remplacement, la propriété des comptes et la documentation. Ce contrôle n’est pas une suspicion : il protège aussi le freelance d’attentes qui dépassent le périmètre convenu.",
        ],
        bullets: [
          "Mission spécialisée avec un livrable et un calendrier précis.",
          "Client capable de coordonner les autres intervenants.",
          "Faible dépendance à une disponibilité quotidienne après livraison.",
          "Responsabilités éditoriales et techniques déjà réparties.",
        ],
      },
      {
        heading: "Choisir une agence lorsque la coordination est le principal risque",
        body: [
          "Une agence prend de la valeur lorsque stratégie, identité, contenus, développement, SEO et acquisition doivent rester cohérents. Elle peut organiser les dépendances, répartir la charge et maintenir plusieurs compétences dans la durée. Ce modèle est adapté à une refonte sensible, à plusieurs marchés ou à un dispositif qui combine site, campagnes et production récurrente.",
          "La taille ne garantit toutefois pas que les personnes présentées lors de la vente travailleront sur le projet. Le client doit demander l’équipe nominative, le niveau de séniorité, la part sous-traitée et la disponibilité après lancement. Des processus lourds peuvent être inutiles pour un site simple ; ils deviennent précieux lorsqu’ils réduisent un vrai risque de coordination ou de conformité.",
        ],
      },
      {
        heading: "Comprendre le modèle du collectif",
        body: [
          "Un collectif réunit plusieurs indépendants autour d’une direction commune. Il peut former une équipe adaptée au projet et conserver un contact direct avec les spécialistes. Pour une PME, ce modèle combine souvent souplesse et pluralité de compétences. Sa qualité dépend cependant de la maturité de l’organisation : qui contracte, qui facture, qui porte la responsabilité et qui prend la décision finale ?",
          "Un collectif sérieux clarifie son interlocuteur principal, ses outils, ses délais de réponse et le rôle de chaque membre. Les accès appartiennent au client ou sont transférables. Les documents ne vivent pas uniquement dans les messages privés d’un intervenant. La souplesse doit rester visible dans le périmètre, pas se transformer en ambiguïté juridique ou opérationnelle.",
        ],
        bullets: [
          "Composition de l’équipe et engagement de chaque personne.",
          "Contrat, facturation, assurances et traitement des données.",
          "Pilotage des validations et résolution des désaccords.",
          "Continuité si un membre devient indisponible.",
        ],
      },
      {
        heading: "Comparer les propositions sur les mêmes critères",
        body: [
          "Le cahier des charges n’a pas besoin d’être un document de cinquante pages. Il doit décrire le contexte, les objectifs, les publics, les fonctionnalités indispensables, les contenus disponibles, le calendrier et le budget. France Num rappelle qu’un cadrage de ce type aide à obtenir des devis plus précis. Envoyer le même socle à chaque candidat rend les différences de méthode plus visibles.",
          "La comparaison distingue les livrables, le nombre de validations, la maintenance, les licences, les coûts tiers et les exclusions. Une proposition moins chère peut simplement attendre du client qu’il rédige tout ; une proposition plus élevée peut inclure stratégie, photo et mesure. Le prix ne devient comparable qu’après normalisation du périmètre.",
        ],
        bullets: [
          "Compréhension du problème commercial et reformulation des priorités.",
          "Qualité des réalisations comparables et explication du rôle tenu.",
          "Méthode de production, validation, test et mise en ligne.",
          "Coûts récurrents, propriété, maintenance et conditions de sortie.",
          "Capacité à dire ce qui n’est pas inclus ou pas encore décidé.",
        ],
      },
      {
        heading: "Conduire l’entretien qui révèle le fonctionnement réel",
        body: [
          "Plutôt que demander seulement “combien coûte un site ?”, présentez un cas concret : une offre à développer, un ancien site à migrer, des campagnes existantes ou un délai commercial. Demandez comment l’équipe commencerait, quelles informations lui manquent et quel risque elle traiterait d’abord. Une réponse prudente et structurée est souvent plus utile qu’une solution instantanée.",
          "Interrogez également l’après : qui surveille les formulaires, met à jour les dépendances, corrige une erreur d’indexation ou ajoute une page ? Un projet web continue après sa livraison. La capacité de l’entreprise à reprendre la main ou à obtenir du support doit être testée avant de signer.",
        ],
      },
      {
        heading: "Une règle de décision simple",
        body: [
          "Pour un livrable spécialisé, privilégiez la personne la plus compétente et disponible, quel que soit son statut. Pour un système qui combine plusieurs disciplines et doit produire un résultat commercial, privilégiez l’équipe qui démontre la meilleure coordination. Pour une mission récurrente, privilégiez la continuité, la mesure et la capacité à améliorer plutôt qu’une livraison ponctuelle.",
          "Enfin, ne forcez pas un projet complexe dans un budget de production simple. Réduisez plutôt le périmètre : une offre, une zone, une landing page et un système de mesure peuvent constituer une première phase cohérente. Un prestataire fiable aide à choisir ce noyau sans faire passer une version minimale pour une stratégie complète.",
        ],
      },
    ],
    faqs: [
      {
        question: "Une agence est-elle forcément plus chère qu’un freelance ?",
        answer:
          "Pas nécessairement à périmètre égal, mais une agence inclut souvent davantage de coordination et de compétences. Il faut comparer les mêmes livrables, responsabilités, coûts récurrents et niveaux de support.",
      },
      {
        question: "Peut-on confier le site à un freelance et le SEO à une agence ?",
        answer:
          "Oui, à condition que les responsabilités, accès et décisions techniques soient partagés. Le SEO doit intervenir avant l’arborescence et la migration, pas uniquement après la mise en ligne.",
      },
      {
        question: "Comment vérifier qui a réellement créé une réalisation ?",
        answer:
          "Demandez le rôle exact du prestataire : stratégie, design, développement, contenu, acquisition ou maintenance. Une réalisation d’équipe ne prouve pas que chaque participant a réalisé toutes les disciplines.",
      },
      {
        question: "Un collectif est-il une agence ?",
        answer:
          "Il peut offrir une expérience proche, mais son organisation juridique et opérationnelle varie. L’important est de savoir qui contracte, qui pilote, comment les responsabilités sont réparties et comment la continuité est assurée.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/services", label: "Les solutions du collectif 3h36" },
      { href: "/site-internet-consultant-savoie", label: "Site internet pour consultant en Savoie" },
      { href: "/site-vitrine", label: "Création d’un site vitrine" },
    ],
    references: [
      {
        title: "Modèles de cahiers des charges pour un site internet d’entreprise",
        publisher: "France Num",
        url: "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/modeles-de-cahiers-des-charges-pour-un-site",
      },
      {
        title: "Comment créer l’identité visuelle de son entreprise ?",
        publisher: "Bpifrance Création",
        url: "https://bpifrance-creation.fr/encyclopedie/developper-lactivite-son-entreprise/se-faire-connaitre-gerer-son-image/comment-creer",
      },
      {
        title: "Mentions sur votre site internet : les obligations à respecter",
        publisher: "Ministère de l’Économie",
        url: "https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter",
      },
    ],
  },
  {
    slug: "google-business-profile-entreprise-batiment",
    title: "Google Business Profile pour une entreprise du bâtiment : la méthode locale sans faux raccourcis",
    seoTitle: "Fiche Google pour une entreprise du bâtiment",
    seoDescription:
      "Optimisez la fiche Google d’une entreprise du bâtiment avec des zones, services, photos et avis exacts, sans fausse adresse ni raccourci risqué.",
    description:
      "Configurer, documenter et piloter une fiche Google d’artisan ou d’entreprise du bâtiment : éligibilité, zone, catégories, photos, avis et demandes de devis.",
    category: "SEO",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "11 min",
    intro:
      "Pour un couvreur, un rénovateur ou une entreprise générale, la fiche Google est souvent un point de vérification avant l’appel. Elle doit représenter l’activité telle qu’elle existe réellement : nom, catégorie, téléphone, horaires, adresse ou zone de service et preuves visuelles. Les règles interdisent les implantations fictives et les avis obtenus contre une récompense. Une fiche durable se développe avec la qualité des informations, la réputation et la cohérence du site, pas avec des astuces de nommage.",
    keyTakeaways: [
      "Une entreprise qui se déplace chez ses clients peut être éligible comme activité de zone de service, mais elle doit respecter les règles d’adresse et de représentation de Google.",
      "Google indique que les résultats locaux reposent principalement sur la pertinence, la distance et la notoriété ; aucune méthode ne permet d’acheter directement un meilleur classement local.",
      "Les photos originales, services précis et avis authentiques aident surtout les prospects à vérifier la qualité et le périmètre de l’entreprise.",
      "Le pilotage doit relier la fiche aux appels, demandes qualifiées et chantiers signés, pas seulement au nombre de vues.",
    ],
    sections: [
      {
        heading: "Vérifier l’éligibilité avant de créer la fiche",
        body: [
          "Google autorise les entreprises qui reçoivent des clients dans un lieu réel ou se déplacent physiquement chez eux. Une entreprise du bâtiment sans accueil client peut configurer une activité de zone de service et masquer l’adresse conformément aux règles. Un bureau virtuel, une boîte aux lettres ou une adresse utilisée uniquement pour couvrir une autre ville ne crée pas une implantation éligible.",
          "Il ne doit généralement exister qu’une fiche par entreprise, sauf situations prévues par les consignes, comme de véritables établissements distincts avec équipes et fonctionnement propres. Avant toute création, il faut chercher les anciennes fiches, vérifier la propriété et éviter les doublons. Une suspension peut couper un canal commercial important ; l’exactitude passe avant l’extension géographique.",
        ],
        bullets: [
          "Utiliser le nom réel de l’entreprise, sans ajouter des villes ou métiers absents de la marque.",
          "Afficher l’adresse seulement si les clients peuvent réellement y être accueillis selon les règles.",
          "Choisir une zone cohérente avec les déplacements habituels et la capacité de l’équipe.",
          "Conserver les justificatifs nécessaires à la vérification de l’activité.",
        ],
      },
      {
        heading: "Choisir les catégories et décrire les services avec précision",
        body: [
          "La catégorie principale doit représenter le cœur de l’activité, pas la requête la plus attractive. Les catégories secondaires couvrent les activités réellement proposées. Google recommande d’utiliser le plus petit nombre de catégories nécessaire pour décrire l’entreprise. Une liste excessive brouille la pertinence et peut créer des attentes que l’équipe ne peut pas satisfaire.",
          "Les services précisent le périmètre : type de rénovation, matériaux, clientèle, intervention ou diagnostic lorsque l’option est disponible. La description explique les spécialités et la zone sans empiler des mots-clés. Le site lié à la fiche doit confirmer les mêmes informations avec des pages de services et des réalisations correspondantes.",
        ],
      },
      {
        heading: "Traiter la zone de service comme une décision économique",
        body: [
          "Ajouter toutes les villes de Savoie n’oblige pas Google à afficher la fiche dans chacune d’elles. La distance reste un facteur du classement local. La zone doit surtout informer les clients et refléter la réalité opérationnelle. Une entreprise basée près de Chambéry peut accepter certains chantiers à Aix-les-Bains mais refuser des interventions urgentes dans une vallée éloignée ; ce niveau de précision évite les demandes non rentables.",
          "Le site peut créer des pages locales uniquement lorsque l’entreprise possède une matière spécifique : chantiers, contraintes, délais, équipe ou offre adaptée. Une page dupliquée pour chaque commune ne compense pas l’absence de présence réelle. Il est plus crédible de documenter quelques zones fortes, puis d’étendre lorsque les preuves et la capacité existent.",
        ],
        bullets: [
          "Cartographier le temps de trajet et la marge par type de chantier.",
          "Distinguer dépannage, visite technique et chantier planifié.",
          "Aligner la fiche, le site, les publicités et les réponses téléphoniques.",
          "Réviser la zone lorsque l’équipe ou les offres évoluent.",
        ],
      },
      {
        heading: "Publier des photos qui prouvent le travail sans exposer le client",
        body: [
          "Les photos utiles montrent l’équipe, le matériel, les étapes, les détails de finition et plusieurs typologies de chantier. Elles doivent être originales, correctement orientées et suffisamment récentes pour représenter l’activité actuelle. Les légendes ou publications associées restent factuelles : type de prestation et secteur général, sans divulguer une adresse privée.",
          "Avant publication, il faut vérifier les droits et masquer ce qui peut identifier un client ou un lieu : visages non autorisés, plaques, documents, systèmes de sécurité ou numéros de rue. Une banque d’images peut illustrer une ambiance sur le site, mais elle ne doit pas être présentée comme un chantier réalisé par l’entreprise.",
        ],
      },
      {
        heading: "Installer une demande d’avis conforme et régulière",
        body: [
          "Google permet de demander un avis via un lien ou un QR code, mais interdit les récompenses en échange d’un avis, de sa modification ou de son retrait. La demande peut être intégrée à la réception de chantier, lorsque le client a suffisamment de recul. Elle doit inviter à partager une expérience libre, sans imposer une note ou une liste de mots-clés.",
          "Les réponses aux avis restent courtes, professionnelles et utiles. En cas de critique, elles évitent de révéler des informations sur le client ou le chantier. Une réponse factuelle peut proposer de poursuivre l’échange hors ligne. Les avis ne remplacent ni les garanties, ni les assurances, ni les preuves de réalisation ; ils complètent la perception de confiance.",
        ],
        bullets: [
          "Demander à tous les clients selon un processus cohérent, pas uniquement aux plus satisfaits.",
          "Ne jamais acheter, échanger ou récompenser des avis.",
          "Répondre avec une formulation propre à la situation plutôt qu’un texte copié.",
          "Signaler par les canaux officiels les contenus qui violent réellement les règles.",
        ],
      },
      {
        heading: "Mesurer les demandes et entretenir les informations",
        body: [
          "Les performances de la fiche donnent des indications sur les interactions, mais le suivi commercial doit confirmer la qualité. Le numéro, le lien vers le site et le formulaire peuvent être associés à des paramètres de campagne ou à un système d’attribution conforme. L’équipe renseigne ensuite la commune, le type de travaux, le statut du devis et l’issue du dossier.",
          "Un rituel mensuel suffit souvent : vérifier horaires et coordonnées, ajouter des photos récentes, répondre aux avis, examiner les appels et corriger les informations. Les publications peuvent annoncer un contenu utile ou une évolution réelle ; une cadence artificielle sans information ne remplace pas la qualité de la fiche et la réputation de l’entreprise.",
        ],
      },
    ],
    faqs: [
      {
        question: "Puis-je créer une fiche dans chaque ville où j’interviens ?",
        answer:
          "Non si vous n’y possédez pas un établissement réel et éligible. Une zone de service permet d’indiquer les secteurs couverts sans créer de fausses adresses. Les doublons et bureaux virtuels exposent la fiche à des corrections ou suspensions.",
      },
      {
        question: "Ajouter “couvreur Chambéry” au nom aide-t-il le classement ?",
        answer:
          "Le nom doit correspondre à la représentation réelle de l’entreprise. Ajouter un métier ou une ville uniquement pour le référencement enfreint les consignes de représentation et peut entraîner une modification ou une sanction.",
      },
      {
        question: "Dois-je répondre à tous les avis ?",
        answer:
          "Une réponse montre que l’entreprise écoute ses clients et peut apporter un contexte utile. Elle doit rester professionnelle, concise et respectueuse de la confidentialité. La régularité compte davantage qu’une réponse longue et standardisée.",
      },
      {
        question: "La fiche Google remplace-t-elle le site ?",
        answer:
          "Non. La fiche dépend d’une plateforme et offre un espace limité. Le site permet d’expliquer les services, documenter les chantiers, qualifier les demandes et posséder ses contenus. Les deux doivent se confirmer mutuellement.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/site-internet-batiment-savoie", label: "Site internet pour le bâtiment en Savoie" },
      { href: "/secteurs/batiment/seo-local", label: "SEO local pour le bâtiment" },
      { href: "/photo-video-entreprise-savoie", label: "Photos et vidéos de chantiers en Savoie" },
    ],
    references: [
      {
        title: "Guidelines for representing your business on Google",
        publisher: "Google Business Profile Help",
        url: "https://support.google.com/business/answer/3038177",
      },
      {
        title: "Tips to improve your local ranking on Google",
        publisher: "Google Business Profile Help",
        url: "https://support.google.com/business/answer/7091",
      },
      {
        title: "Tips to get more reviews",
        publisher: "Google Business Profile Help",
        url: "https://support.google.com/business/answer/3474122",
      },
    ],
  },
  {
    slug: "lancer-marque-site-startup",
    title: "Lancer une startup : dans quel ordre construire la marque, le site et l’acquisition ?",
    seoTitle: "Lancer la marque et le site d’une startup",
    seoDescription:
      "Un ordre de travail concret pour lancer positionnement, identité, landing page, mesure et acquisition sans surconstruire trop tôt.",
    description:
      "Un plan par étapes pour aligner positionnement, identité, site de lancement et premiers canaux d’acquisition sans figer trop tôt une offre encore en validation.",
    category: "Entrepreneuriat",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readingTime: "12 min",
    intro:
      "Une jeune entreprise doit paraître crédible sans prétendre que tout est déjà stabilisé. Investir trop tôt dans un système complet peut figer une offre qui change encore ; attendre trop longtemps peut empêcher de convaincre les premiers clients, partenaires ou candidats. La bonne séquence construit d’abord une proposition testable, puis une identité et un site capables d’évoluer, avant d’accélérer l’acquisition sur les messages qui ont démontré leur utilité.",
    keyTakeaways: [
      "Le positionnement précède le logo : cible prioritaire, problème, alternative actuelle, différence et preuve doivent pouvoir être formulés simplement.",
      "Une identité de lancement doit être cohérente et extensible, pas nécessairement exhaustive sur tous les supports imaginables.",
      "Le premier site doit permettre une action mesurable — rendez-vous, demande d’accès, inscription ou achat — et apprendre quelque chose sur le marché.",
      "L’acquisition payante amplifie une proposition ; elle ne corrige pas durablement un message que les prospects ne comprennent pas.",
    ],
    sections: [
      {
        heading: "Phase 1 : transformer l’idée en proposition testable",
        body: [
          "Avant de nommer les fonctionnalités, la startup décrit une situation observable : qui rencontre le problème, à quel moment, comment il le résout aujourd’hui et pourquoi cette alternative devient insuffisante. La cible initiale doit être assez précise pour mener des entretiens et écrire une page, sans prétendre exclure définitivement tous les marchés adjacents.",
          "La proposition de valeur formule un résultat ou un progrès attendu, puis indique le mécanisme distinctif. Elle évite les superlatifs sans preuve. Les premières conversations recherchent les formulations spontanées, les objections, le coût de l’inaction et les critères de décision. Elles ne servent pas à faire voter les personnes sur un logo avant d’avoir vérifié le besoin.",
        ],
        bullets: [
          "Client initial et contexte dans lequel le problème devient prioritaire.",
          "Alternative utilisée aujourd’hui, y compris l’inaction ou un fichier manuel.",
          "Résultat attendu et preuve disponible à ce stade.",
          "Action que le prospect accepte de prendre : entretien, démonstration, pilote ou paiement.",
        ],
      },
      {
        heading: "Phase 2 : choisir un nom et une identité qui peuvent grandir",
        body: [
          "Le nom doit être vérifié sur les plans linguistique, numérique et juridique avec les professionnels ou bases compétentes. La disponibilité d’un domaine ou d’un compte social ne suffit pas à établir un droit. Une architecture de marque provisoire est préférable à un choix irréversible pris sans recherche, surtout lorsque plusieurs produits ou marchés sont envisagés.",
          "L’identité de lancement réunit un logo utilisable, une typographie, une palette accessible, des règles d’image et quelques composants. Bpifrance décrit l’identité visuelle comme un ensemble cohérent qui aide l’entreprise à être identifiable. Cette cohérence importe davantage qu’une collection de déclinaisons. Les fichiers sources, droits de police et règles d’utilisation sont documentés dès le départ.",
        ],
        bullets: [
          "Logo lisible aux petites tailles et variantes nécessaires.",
          "Contrastes et typographies adaptés au web et aux présentations.",
          "Direction photo ou illustration compatible avec les moyens réels.",
          "Gabarits pour le site, une présentation et les premiers contenus.",
        ],
      },
      {
        heading: "Phase 3 : construire un site minimum mais complet dans sa logique",
        body: [
          "Un site de lancement peut tenir sur une page si elle répond aux bonnes questions : pour qui, quel problème, quelle solution, pourquoi croire l’équipe et quelle prochaine étape. Il peut aussi nécessiter plusieurs pages lorsque les publics, offres ou besoins de référencement diffèrent. “Minimum” signifie réduire les hypothèses à tester, pas omettre les mentions légales, la sécurité, le responsive ou la mesure.",
          "Le contenu distingue ce qui existe de ce qui est prévu. Une démonstration, des captures du produit ou un prototype expliquent mieux qu’une image générique. Les logos clients, chiffres et témoignages ne sont utilisés qu’avec autorisation et contexte. Une startup sans référence peut présenter l’expertise de l’équipe, la méthode, les partenaires autorisés et le programme pilote sans fabriquer de validation sociale.",
        ],
        bullets: [
          "Promesse et cible identifiables dans le premier écran sans jargon interne.",
          "Description du fonctionnement ou de l’offre avec limites actuelles.",
          "Preuves disponibles et personnes responsables du projet.",
          "Appel à l’action unique ou hiérarchisé selon le niveau de maturité.",
          "Mesure de l’envoi, de la prise de rendez-vous ou de l’inscription.",
        ],
      },
      {
        heading: "Phase 4 : préparer le référencement et le GEO avant la notoriété",
        body: [
          "Même sans volume de recherche établi, le site doit créer une entité claire. Une page À propos nomme la société et l’équipe ; les pages produit définissent la catégorie et les cas d’usage ; les profils officiels utilisent la même description. Les moteurs pourront plus facilement relier les futures mentions à une source stable. Le contenu ne doit pas viser des dizaines de sujets éloignés simplement pour attirer du trafic.",
          "Les premières ressources répondent aux questions rencontrées pendant la vente : comparaison avec l’alternative, sécurité, intégration, coût, méthode ou réglementation. Elles citent les sources, indiquent l’auteur et la date, et expliquent ce que la startup sait par expérience. Cette transparence sert le SEO et les moteurs génératifs, tout en donnant aux prospects un document partageable en interne.",
        ],
      },
      {
        heading: "Phase 5 : utiliser l’acquisition comme instrument d’apprentissage",
        body: [
          "Une campagne ciblée peut tester quelques messages et atteindre une audience identifiée, mais elle doit conduire vers une page correspondant exactement à la promesse. Le suivi distingue clic, inscription, rendez-vous qualifié, pilote et client. Une hausse d’inscriptions non activées ne prouve pas que le canal fonctionne.",
          "Le budget se concentre d’abord sur une combinaison cible-offre-action. Les résultats qualitatifs — objections, raisons de refus, délai de décision — nourrissent le positionnement. Si personne ne poursuit après la démonstration, augmenter le budget média est rarement la première correction. Il faut examiner la proposition, le produit, le prix et le parcours commercial.",
        ],
        bullets: [
          "Définir la conversion et la valeur d’un résultat avant le lancement.",
          "Créer une page par hypothèse forte plutôt que mélanger plusieurs promesses.",
          "Conserver les termes de recherche et retours commerciaux dans le même bilan.",
          "Arrêter un test lorsque le budget ou la taille d’échantillon prévue est atteint, puis décider.",
        ],
      },
      {
        heading: "Phase 6 : passer du lancement au système de marque",
        body: [
          "Lorsque les premiers segments et messages se stabilisent, l’identité peut s’étendre : design system, bibliothèque de contenus, pages sectorielles, études de cas, documentation produit et campagnes récurrentes. La dette créée pendant le lancement est recensée plutôt que cachée. Les raccourcis acceptables pour un pilote ne deviennent pas automatiquement le socle de la croissance.",
          "Le bilan trimestriel relie l’image, le site et l’acquisition aux mêmes indicateurs : compréhension de l’offre, qualité des demandes, activation, vente et rétention selon le modèle. Il détermine ce qui doit être standardisé et ce qui reste expérimental. Une marque solide n’est pas figée ; elle rend les évolutions reconnaissables et compréhensibles.",
        ],
      },
      {
        heading: "Adapter cette séquence à une startup en Savoie",
        body: [
          "Une équipe située en Savoie peut combiner un marché national avec des ressources locales : entretiens avec des PME, pilotes industriels ou touristiques, réseaux d’accompagnement et événements de l’écosystème alpin. La communication doit distinguer l’ancrage du marché cible. Être basé à Chambéry ne signifie pas que le produit est limité à Chambéry ; inversement, revendiquer immédiatement une portée mondiale ne remplace pas des preuves d’usage.",
          "Les rencontres physiques, prises de vue et premiers cas locaux peuvent produire une matière originale. Cette proximité devient un avantage lorsqu’elle raccourcit l’apprentissage et crée des recommandations vérifiables. Elle ne doit pas conduire à inventer plusieurs implantations ou à publier des pages locales sans activité réelle.",
        ],
      },
    ],
    faqs: [
      {
        question: "Faut-il attendre que le produit soit fini pour créer le site ?",
        answer:
          "Non si le site sert à recruter des entretiens, une liste d’attente ou des pilotes. Il doit décrire honnêtement le stade du produit et proposer une action adaptée, sans présenter comme disponible une fonction encore hypothétique.",
      },
      {
        question: "Combien investir dans l’identité au lancement ?",
        answer:
          "Le montant dépend du marché, des supports et du niveau de confiance attendu. Il faut financer un système cohérent et exploitable, puis réserver les déclinaisons avancées au moment où les usages sont confirmés. Un cadrage évite de produire des supports qui ne seront jamais utilisés.",
      },
      {
        question: "Une landing page suffit-elle pour le SEO ?",
        answer:
          "Elle peut être indexée et répondre à une intention, mais un positionnement durable nécessite souvent des pages complémentaires : produit, cas d’usage, équipe, ressources et preuves. L’architecture doit suivre les besoins réels, pas un nombre arbitraire de pages.",
      },
      {
        question: "Quand lancer Google Ads ?",
        answer:
          "Lorsque la cible, la promesse, la page et la conversion peuvent être testées avec un budget défini. Si le marché ne recherche pas encore la catégorie, d’autres canaux — partenariats, prospection ciblée, événements ou contenus — peuvent être plus adaptés.",
      },
    ],
    relatedCommercialRoutes: [
      { href: "/lancement-marque-startup-savoie", label: "Lancement de marque et startup en Savoie" },
      { href: "/identite-visuelle-chambery", label: "Identité visuelle à Chambéry" },
      { href: "/site-acquisition", label: "Site de lancement et d’acquisition" },
    ],
    references: [
      {
        title: "Comment créer l’identité visuelle de son entreprise ?",
        publisher: "Bpifrance Création",
        url: "https://bpifrance-creation.fr/encyclopedie/developper-lactivite-son-entreprise/se-faire-connaitre-gerer-son-image/comment-creer",
      },
      {
        title: "Créer un site internet pour développer l’activité de son entreprise",
        publisher: "France Num",
        url: "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/creer-un-site-internet-pour-developper",
      },
      {
        title: "Creating helpful, reliable, people-first content",
        publisher: "Google Search Central",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
  },
] as const satisfies readonly SeoArticle[];

export const seoArticlesBySlug = Object.fromEntries(
  seoArticles.map((article) => [article.slug, article]),
) as unknown as Readonly<Record<SeoArticleSlug, SeoArticle>>;
