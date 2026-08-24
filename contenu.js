/* ═══════════════════════════════════════════════════════════════
   LOC'RUN — contenu du site.
   C'est LE seul fichier à modifier au fil de la saison : liens,
   agenda, mentions légales, statuts. Rien à toucher dans app.js.

   Chargé par index.html juste avant app.js.
   ═══════════════════════════════════════════════════════════════ */


/* AGENDA — pour ajouter un événement : duplique une ligne, change les valeurs.
   date  : "AAAA-MM-JJ" (l'événement passe tout seul dans l'onglet « Passés »)
   type  : "SORTIE" · "COURSE" · "VIE DE L'ASSO"
   inscriptions : true affiche le badge rouge INSCRIPTIONS OUVERTES, sinon false
   distance : texte libre, ou "" si ça n'a pas de sens                            */
const EVENEMENTS = [
  { date: "2026-09-13", titre: "Sortie découverte des chemins", lieu: "Départ : stade municipal, Bouloc", distance: "8 KM",  type: "SORTIE",        inscriptions: false },
  { date: "2026-10-11", titre: "Foulées de Castelnau",          lieu: "Castelnau-d'Estrétefonds",         distance: "10 KM", type: "COURSE",        inscriptions: true  },
  { date: "2026-11-20", titre: "Assemblée générale",            lieu: "Salle des fêtes, Bouloc",          distance: "",      type: "VIE DE L'ASSO", inscriptions: false },
  { date: "2026-06-21", titre: "Sortie de fin de saison",       lieu: "Départ : place de la mairie",      distance: "12 KM", type: "SORTIE",        inscriptions: false },
  { date: "2026-04-05", titre: "Première sortie collective",    lieu: "Chemins autour du village",        distance: "6 KM",  type: "SORTIE",        inscriptions: false }
];

// URL provisoire — remplacer par la vraie campagne HelloAsso
const LIENS = {
  helloasso: "https://www.helloasso.com/associations/loc-run",
  facebook:  "https://www.facebook.com/groups/boulocoursapied",
  instagram: "https://www.instagram.com/boulocrunning",
  whatsapp:  "https://chat.whatsapp.com/KNjFjfBC0QyEYOcIFbpHJP"
};

const CONTACT = {
  email: "assolocrun@outlook.com",
  objet: "Message depuis le site Loc'Run"
};

/* MENTIONS LÉGALES — strict minimum obligatoire pour un site associatif
   non marchand : éditeur, responsable de publication, contact, hébergeur. */
const MENTIONS = {
  titre: "Mentions légales",
  pied: "Ce site ne dépose aucun cookie et ne collecte aucune donnée de navigation.",
  sections: [
    { titre: "Éditeur du site", texte: "Loc'Run, association loi 1901 déclarée le 9 février 2026 en préfecture de la Haute-Garonne.\nSiège social : 5 impasse de Narquières, 31620 Bouloc." },
    { titre: "Responsable de la publication", texte: "Vincent Pace, président de l'association." },
    { titre: "Contact", texte: "assolocrun@outlook.com — 06 77 08 58 17" },
    { titre: "Hébergement", texte: "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (https://vercel.com).\nIl est publié à l'adresse https://locrun.vercel.app." },
    { titre: "Propriété intellectuelle", texte: "Les textes, photographies et le logo présents sur ce site sont la propriété de Loc'Run. Toute reproduction sans autorisation est interdite." },
    { titre: "Données personnelles", texte: "Les informations transmises via le formulaire de contact servent uniquement à répondre à votre message et ne sont ni conservées ni transmises à des tiers. Les adhésions sont gérées par HelloAsso, responsable du traitement des données collectées lors du paiement. Vous pouvez demander l'accès, la rectification ou la suppression de vos données à assolocrun@outlook.com." }
  ]
};

/* STATUTS — articles de base d'une association loi 1901. */
const STATUTS = {
  titre: "Statuts de l'association",
  pied: "Statuts adoptés par l'assemblée générale constitutive du 9 février 2026.",
  sections: [
    { titre: "Article 1 — Dénomination", texte: "Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, ayant pour titre Loc'Run." },
    { titre: "Article 2 — Objet", texte: "L'association a pour objet la pratique et la promotion de la course à pied, dans un esprit de convivialité, d'entraide et d'accessibilité à tous les niveaux." },
    { titre: "Article 3 — Siège social", texte: "Le siège social est fixé au 5 impasse de Narquières, 31620 Bouloc. Il peut être transféré sur simple décision du conseil d'administration." },
    { titre: "Article 4 — Durée", texte: "La durée de l'association est illimitée." },
    { titre: "Article 5 — Composition", texte: "L'association est composée de membres actifs, qui participent aux activités et versent une cotisation annuelle, et de membres d'honneur, désignés par le conseil d'administration et dispensés de cotisation." },
    { titre: "Article 6 — Admission et cotisation", texte: "L'adhésion est ouverte à toute personne qui adhère aux présents statuts et s'acquitte de la cotisation annuelle, dont le montant est fixé chaque année par l'assemblée générale." },
    { titre: "Article 7 — Perte de la qualité de membre", texte: "La qualité de membre se perd par démission, par non-paiement de la cotisation, par décès, ou par radiation prononcée par le conseil d'administration pour motif grave, l'intéressé ayant été invité à fournir ses explications." },
    { titre: "Article 8 — Ressources", texte: "Les ressources de l'association comprennent les cotisations, les subventions publiques, les dons et le mécénat, ainsi que toute autre ressource autorisée par la loi." },
    { titre: "Article 9 — Assemblée générale", texte: "L'assemblée générale réunit tous les membres au moins une fois par an. Elle entend les rapports d'activité et financier, approuve les comptes, fixe le montant des cotisations et élit les membres du conseil d'administration. Les décisions sont prises à la majorité des membres présents." },
    { titre: "Article 10 — Conseil d'administration", texte: "L'association est administrée par un conseil d'administration élu par l'assemblée générale. Il désigne parmi ses membres un bureau composé au minimum d'un président, d'un trésorier et d'un secrétaire." },
    { titre: "Article 11 — Règlement intérieur", texte: "Un règlement intérieur peut être établi par le conseil d'administration pour préciser les modalités d'application des présents statuts." },
    { titre: "Article 12 — Dissolution", texte: "La dissolution est prononcée par une assemblée générale extraordinaire convoquée à cet effet. L'actif net est attribué à une ou plusieurs associations poursuivant un objet similaire, conformément à l'article 9 de la loi du 1er juillet 1901." }
  ]
};
