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

Déployé sur Vercel : <https://locrun.vercel.app>

Aucune configuration à faire — pas de `package.json`, donc Vercel sert la
racine du dépôt telle quelle (preset « Other », pas d'étape de build).
Chaque push sur `main` redéploie.

Le site marche aussi sur n'importe quel autre hébergeur statique
(Netlify, Cloudflare Pages, GitHub Pages, OVH…). Pas de backend.

### ⚠️ En cas de remplacement d'une image

[`vercel.json`](vercel.json) met `assets/` en cache **un an, en
`immutable`**. Les noms de fichiers ne sont pas hashés : remplacer une
image sans changer son nom ne sera donc **pas** visible par les visiteurs
déjà venus sur le site. Pour changer une photo, lui donner un nouveau nom
(`photo-sortie-chemin-2.jpg`) et mettre à jour `index.html`.

### Si le domaine change

Trois URL sont écrites en dur dans le `<head>` de `index.html` :
`canonical`, `og:url` et `og:image`. Les mettre à jour, sinon les aperçus
de partage (Facebook, WhatsApp, iMessage…) et le référencement pointeront
vers l'ancienne adresse.

## Modifier le contenu

Tout ce qui change au fil de la saison est regroupé dans un seul
fichier, **[`contenu.js`](contenu.js)**. Il n'y a jamais besoin
d'ouvrir `app.js` :

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
- Trois emplacements partenaires libres dans `index.html`
  (`.partners__slot` marqués `[À COMPLÉTER]`).

La mention d'hébergeur est renseignée (Vercel Inc., Covina CA). La LCEN
demande aussi un téléphone : Vercel n'en publie pas, seulement
<https://vercel.com/help>. À réviser si le site change d'hébergeur.

## Structure

```
index.html    balisage
styles.css    styles (tokens en haut du fichier)
contenu.js    ← le fichier à modifier : liens, agenda, mentions, statuts
app.js        comportements (menu, agenda, modales, formulaire)
assets/       images
vercel.json   en-têtes de cache et de sécurité
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
