/* ═══════════════════════════════════════════════════════════════
   LOC'RUN — tout ce qui bouge se règle ICI, dans ce seul bloc.
   Une ligne à modifier, jamais de chasse dans le code.
   ═══════════════════════════════════════════════════════════════ */

// URL provisoire — remplacer par la vraie campagne HelloAsso
const LIENS = {
  helloasso: "https://www.helloasso.com/associations/loc-run",
  facebook:  "https://www.facebook.com/groups/boulocoursapied",  // groupe « Bouloc course à pied »
  instagram: "https://www.instagram.com/boulocrunning",          // @boulocrunning
  whatsapp:  "https://chat.whatsapp.com/KNjFjfBC0QyEYOcIFbpHJP"  // groupe WhatsApp
};

const CONTACT = {
  email: "assolocrun@outlook.com",
  objet: "Message depuis le site Loc'Run"
};

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

/* MENTIONS LÉGALES — strict minimum obligatoire pour un site associatif
   non marchand : éditeur, responsable de publication, contact, hébergeur. */
const MENTIONS = {
  titre: "Mentions légales",
  pied: "Ce site ne dépose aucun cookie et ne collecte aucune donnée de navigation.",
  sections: [
    { titre: "Éditeur du site", texte: "Loc'Run, association loi 1901 déclarée le 9 février 2026 en préfecture de la Haute-Garonne.\nSiège social : 5 impasse de Narquières, 31620 Bouloc." },
    { titre: "Responsable de la publication", texte: "Vincent Pace, président de l'association." },
    { titre: "Contact", texte: "assolocrun@outlook.com — 06 77 08 58 17" },
    { titre: "Hébergement", texte: "[À COMPLÉTER : nom de l'hébergeur, adresse postale et téléphone.]" },
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

/* ═══════════════════ fin du bloc à modifier ═══════════════════ */

const MOIS = ["JANV", "FÉVR", "MARS", "AVR", "MAI", "JUIN", "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC"];
const DOCS = { statuts: STATUTS, mentions: MENTIONS };

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ─────────────── Liens externes ─────────────── */

$$("[data-link]").forEach(a => {
  const url = LIENS[a.dataset.link];
  if (url) a.href = url;
});

/* ─────────────── Menu mobile ─────────────── */

const nav     = $("#nav");
const burger  = $("#burger");
const menu    = $("#mobile-menu");
const desktop = window.matchMedia("(min-width: 880px)");

function setMenu(open) {
  menu.hidden = !open;
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}

burger.addEventListener("click", () => setMenu(menu.hidden));
$$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));
desktop.addEventListener("change", () => setMenu(false));

/* ─────────────── Barre au défilement ─────────────── */

let scrolled = false;
const onScroll = () => {
  const now = window.scrollY > 40;
  if (now !== scrolled) {
    scrolled = now;
    nav.classList.toggle("is-scrolled", now);
  }
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ─────────────── Agenda ─────────────── */

const panel = $("#agenda-panel");
const tabs  = $$(".tab");

function formatDate(iso) {
  const [an, mo, jo] = iso.split("-");
  return { jour: jo, mois: `${MOIS[Number(mo) - 1]} ${an.slice(2)}` };
}

function evenementsPour(onglet) {
  const aujourdhui = new Date().toISOString().slice(0, 10);
  const avenir = onglet === "avenir";
  return EVENEMENTS
    .filter(e => (avenir ? e.date >= aujourdhui : e.date < aujourdhui))
    .sort((a, b) => (avenir ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)));
}

function renderAgenda(onglet) {
  const liste = evenementsPour(onglet);
  panel.replaceChildren();

  if (!liste.length) {
    const vide = document.createElement("div");
    vide.className = "agenda__empty";
    const h3 = document.createElement("h3");
    h3.className = "display";
    h3.textContent = "Pas d'événement programmé pour l'instant.";
    const p = document.createElement("p");
    p.textContent = "Les rendez-vous du mardi et du dimanche, eux, ont toujours lieu.";
    vide.append(h3, p);
    panel.append(vide);
    return;
  }

  for (const ev of liste) {
    const { jour, mois } = formatDate(ev.date);

    const article = document.createElement("article");
    article.className = "event";

    const date = document.createElement("div");
    date.className = "event__date";
    const dJour = document.createElement("p");
    dJour.className = "mono event__day";
    dJour.textContent = jour;
    const dMois = document.createElement("p");
    dMois.className = "mono event__month";
    dMois.textContent = mois;
    date.append(dJour, dMois);

    const body = document.createElement("div");
    body.className = "event__body";

    const meta = document.createElement("div");
    meta.className = "event__meta";
    const type = document.createElement("span");
    type.className = "chip chip--type";
    type.textContent = ev.type;
    meta.append(type);
    if (ev.inscriptions) {
      const open = document.createElement("span");
      open.className = "chip chip--open";
      open.textContent = "INSCRIPTIONS OUVERTES";
      meta.append(open);
    }

    const titre = document.createElement("h3");
    titre.className = "display event__title";
    titre.textContent = ev.titre;

    const lieu = document.createElement("p");
    lieu.className = "event__place";
    lieu.textContent = ev.lieu;

    body.append(meta, titre, lieu);
    article.append(date, body);

    if (ev.distance) {
      const dist = document.createElement("p");
      dist.className = "mono event__distance";
      dist.textContent = ev.distance;
      article.append(dist);
    }

    panel.append(article);
  }
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => {
      const on = t === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    panel.setAttribute("aria-labelledby", tab.id);
    renderAgenda(tab.dataset.tab);
  });
});

renderAgenda("avenir");

/* ─────────────── Modales (statuts, mentions) ─────────────── */

const modal      = $("#modal");
const modalTitre = $("#modal-title");
const modalBody  = $("#modal-body");
const modalClose = $("#modal-close");
let lastFocus = null;

function ouvrirModal(cle) {
  const doc = DOCS[cle];
  if (!doc) return;

  lastFocus = document.activeElement;
  modalTitre.textContent = doc.titre;
  modalBody.replaceChildren();

  for (const bloc of doc.sections) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = bloc.titre;
    const p = document.createElement("p");
    p.textContent = bloc.texte;
    div.append(h3, p);
    modalBody.append(div);
  }

  const pied = document.createElement("div");
  pied.className = "modal__foot";
  const p = document.createElement("p");
  p.textContent = doc.pied;
  pied.append(p);
  modalBody.append(pied);

  modal.hidden = false;
  document.body.classList.add("is-locked");
  modalClose.focus();
}

function fermerModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("is-locked");
  if (lastFocus) lastFocus.focus();
}

$$("[data-modal]").forEach(a => {
  a.addEventListener("click", ev => {
    ev.preventDefault();
    setMenu(false);
    ouvrirModal(a.dataset.modal);
  });
});

modalClose.addEventListener("click", fermerModal);
modal.addEventListener("click", ev => { if (ev.target === modal) fermerModal(); });

document.addEventListener("keydown", ev => {
  if (ev.key === "Escape") { fermerModal(); setMenu(false); return; }
  // Piège à focus : la modale garde le clavier tant qu'elle est ouverte.
  if (ev.key !== "Tab" || modal.hidden) return;
  const cibles = $$('a[href], button, input, textarea, [tabindex]:not([tabindex="-1"])', modal)
    .filter(el => !el.hasAttribute("disabled"));
  if (!cibles.length) return;
  const premier = cibles[0], dernier = cibles[cibles.length - 1];
  if (ev.shiftKey && document.activeElement === premier) { ev.preventDefault(); dernier.focus(); }
  else if (!ev.shiftKey && document.activeElement === dernier) { ev.preventDefault(); premier.focus(); }
});

/* ─────────────── Formulaire de contact ─────────────── */
/* Sans backend : ouvre le mail prérempli. Pour brancher un service de
   formulaire statique (Formspree, Basin…), remplacer ce handler par
   un vrai action="" sur le <form>.                                    */

const form   = $("#contact-form");
const status = $("#form-status");

form.addEventListener("submit", ev => {
  ev.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = "Merci de remplir le nom, l'e-mail et le message.";
    status.classList.add("is-error");
    const premier = $(":invalid", form);
    if (premier) premier.focus();
    return;
  }

  status.classList.remove("is-error");
  status.textContent = "Ouverture de votre messagerie…";

  const { nom, email, message } = form.elements;
  const corps = `Nom : ${nom.value}\nE-mail : ${email.value}\n\n${message.value}`;
  window.location.href = `mailto:${CONTACT.email}`
    + `?subject=${encodeURIComponent(CONTACT.objet)}`
    + `&body=${encodeURIComponent(corps)}`;
});

/* ─────────────── Apparition au défilement ─────────────── */

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const panneaux = $$("[data-reveal]");
  panneaux.forEach(p => $$("[data-reveal-line]", p).forEach(l => l.classList.add("is-armed")));

  const io = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      $$("[data-reveal-line]", entry.target).forEach((l, i) => {
        setTimeout(() => l.classList.add("is-in"), i * 110);
      });
      obs.unobserve(entry.target);
    }
  }, { threshold: 0.25 });

  panneaux.forEach(p => io.observe(p));
}
