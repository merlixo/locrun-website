# Loc'Run — site de l'association

Site statique de Loc'Run, association de course à pied à Bouloc (31620).
Implémentation de la maquette `Loc'Run v3.dc.html` (projet Claude Design
« Loc'Run website design »).

## Lancer en local

Aucune dépendance, aucun build :

```sh
python3 -m http.server 8000
# puis http://localhost:8000
```

(Ouvrir `index.html` directement fonctionne aussi, mais un serveur évite
les restrictions `file://`.)

## Mettre en ligne

Déposer le dossier tel quel sur n'importe quel hébergeur statique
(Netlify, Cloudflare Pages, GitHub Pages, OVH…). Pas de backend.

## Modifier le contenu

Tout ce qui change au fil de la saison est regroupé **en haut de
[`app.js`](app.js)**, dans un seul bloc :

| Constante    | Rôle |
|--------------|------|
| `LIENS`      | HelloAsso, Facebook, Instagram, WhatsApp |
| `CONTACT`    | adresse e-mail et objet du message |
| `EVENEMENTS` | agenda — dupliquer une ligne pour ajouter une date |
| `MENTIONS`   | mentions légales (affichées en modale) |
| `STATUTS`    | statuts de l'association (affichés en modale) |

Un événement passe tout seul de l'onglet « À venir » à « Passés » selon sa
date, sans intervention.

### Restant à compléter

- `LIENS.helloasso` : URL provisoire, à remplacer par la vraie campagne.
- `MENTIONS` → « Hébergement » : nom, adresse postale et téléphone de
  l'hébergeur (obligatoire).
- Trois emplacements partenaires libres dans `index.html`
  (`.partners__slot` marqués `[À COMPLÉTER]`).

## Structure

```
index.html    balisage
styles.css    styles (tokens en haut du fichier)
app.js        contenu éditable + comportements
assets/       images
```

## Notes d'implémentation

- Le formulaire de contact n'a pas de backend : il ouvre le client mail
  prérempli. Pour le brancher sur un service statique (Formspree, Basin…),
  remplacer le handler `submit` en bas de `app.js` par un `action=""` sur
  le `<form>`.
- Le menu mobile bascule en CSS à 880 px, comme la maquette.
- Les animations d'apparition et le défilement fluide respectent
  `prefers-reduced-motion`.
- Images redimensionnées à ~2× leur taille d'affichage (1,9 Mo au total).
  `photo-chaussures-bouloc` est passée de PNG à JPEG : c'est une photo
  sans transparence, le PNG pesait 1,7 Mo contre 231 Ko en JPEG.
- Deux corrections de texte par rapport à la maquette :
  « Une enérgie à partager » → « énergie », et « Echange » → « Échange ».
