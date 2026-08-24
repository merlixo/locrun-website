/* ═══════════════════════════════════════════════════════════════
   LOC'RUN — comportements de la page.
   Le contenu éditable vit dans contenu.js, chargé juste avant ce
   fichier : c'est là que se règlent liens, agenda et documents.
   ═══════════════════════════════════════════════════════════════ */

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
