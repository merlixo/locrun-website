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

Des URL sont écrites en dur dans `index.html` (`canonical`, `og:url`,
`og:image`, `twitter:image` et le bloc JSON-LD), ainsi que dans
`robots.txt`, `sitemap.xml` et la fonction `baliserEvenements()` de
`app.js`. Les mettre à jour, sinon les aperçus de partage (Facebook,
WhatsApp, iMessage…) et le référencement pointeront vers l'ancienne
adresse. Vérification : `grep -rn "locrun.vercel.app" --exclude-dir=.git .`

## Référencement (SEO)

Le site est indexable : pas d'en-tête `noindex`, un `robots.txt` ouvert et un
`sitemap.xml`. Ce qui est en place côté code :

| Fichier | Rôle |
|---------|------|
| `robots.txt`  | autorise tous les robots, déclare le sitemap |
| `sitemap.xml` | l'unique URL du site — mettre `<lastmod>` à jour de temps en temps |
| `index.html`  | `title`, `description`, `canonical`, Open Graph, `robots`, JSON-LD `SportsClub` + `WebSite` + `WebPage` |
| `app.js`      | génère le JSON-LD `SportsEvent` de l'agenda depuis `EVENEMENTS` — rien à écrire à la main |

**Ce que le code ne peut pas faire.** Un site neuf n'est pas indexé tout seul :
il faut le déclarer et lui donner des liens entrants.

1. **Google Search Console** — <https://search.google.com/search-console> :
   ajouter `https://locrun.vercel.app`, valider par balise HTML (à coller dans
   le `<head>`), puis « Inspection de l'URL » → « Demander une indexation ».
   C'est l'étape indispensable.
2. **Liens entrants** : mairie de Bouloc, offices de tourisme, annuaires
   d'associations (Le Compte Asso, HelloAsso, Jogging-International…), bio
   Instagram, pages des courses auxquelles le club participe. C'est le
   principal levier de classement pour un site local.
3. **Google Business Profile** — <https://business.google.com> : fiche
   « club de course à pied » à Bouloc. C'est elle qui fait apparaître le club
   dans Google Maps et dans le bloc local des résultats.
4. **Nom de domaine propre** (`locrun.fr`, ~10 €/an) : `*.vercel.app` est un
   domaine partagé par des milliers de projets et inspire peu confiance à
   Google comme aux visiteurs. En cas de changement, voir « Si le domaine
   change » plus haut — et penser à `robots.txt` et `sitemap.xml`.

Les coordonnées `geo` du JSON-LD sont celles du centre de la commune, pas du
siège : à affiner si la fiche Google Business est créée.

## Modifier le contenu

Tout ce qui change au fil de la saison est regroupé dans un seul
fichier, **[`contenu.js`](contenu.js)**. Il n'y a jamais besoin
d'ouvrir `app.js` :

| Constante    | Rôle |
|--------------|------|
| `LIENS`       | HelloAsso (campagne d'adhésion), Instagram, WhatsApp |
| `CONTACT`     | adresse e-mail et objet du message |
| `EVENEMENTS`  | agenda — dupliquer une ligne pour ajouter une date ; `lien` rend le titre cliquable |
| `PARTENAIRES` | encarts partenaires — déposer le logo dans `assets/`, écrire son chemin dans `logo` |
| `MENTIONS`    | mentions légales (affichées en modale) |
| `STATUTS`     | statuts de l'association (affichés en modale) |

Un événement passe tout seul de l'onglet « À venir » à « Passés » selon sa
date, sans intervention.

### Restant à compléter

- `PARTENAIRES` : trois encarts attendent leur logo (visuels à venir).
- `STATUTS` : le texte affiché est un canevas générique loi 1901, **pas** les
  statuts réellement adoptés — à remplacer par les vrais articles (ou par un
  lien vers le PDF signé).
- Aucune page Facebook publique n'a pu être trouvée : le club communique via
  WhatsApp et Instagram, Facebook a donc été retiré du site.

La mention d'hébergeur est renseignée (Vercel Inc., Covina CA). La LCEN
demande aussi un téléphone : Vercel n'en publie pas, seulement
<https://vercel.com/help>. À réviser si le site change d'hébergeur.

## Licence

Le code (HTML, CSS, JavaScript) est sous [licence MIT](LICENSE) : réutilisable
librement, y compris comme point de départ pour le site d'une autre
association.

**En revanche, le nom, le logo, la bannière, les photographies et les textes
restent la propriété de Loc'Run, tous droits réservés.** Les photos montrent
des adhérents identifiables : leur réutilisation nécessite un accord écrit.
Le détail figure dans le fichier [`LICENSE`](LICENSE).

## Structure

```
index.html    balisage
styles.css    styles (tokens en haut du fichier)
contenu.js    ← le fichier à modifier : liens, agenda, partenaires, mentions, statuts
app.js        comportements (menu, agenda, modales, formulaire)
assets/       images
vercel.json   en-têtes de cache et de sécurité
robots.txt    autorisation d'indexation + adresse du sitemap
sitemap.xml   la page du site, pour Google
LICENSE       MIT pour le code, tous droits réservés pour les visuels
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
