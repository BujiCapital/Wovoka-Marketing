# Ghost Dance brand kit

Copies of the files the site serves at https://www.ghost.dance/icons/ and its share card, taken on
19 Oct 2026, plus a rendered social set. Rules for colour, type and video are in [`../brand.md`](../brand.md).

## Logos (`logos/`)

Ghost Dance has an icon but no separate wordmark file. The lockups in `social/` set the name in the
site's style next to the icon.

| File | Served at | Use |
|---|---|---|
| `icon.svg` | https://www.ghost.dance/icons/icon.svg | The icon, any size; corner bug in video |
| `icon-512.png` | https://www.ghost.dance/icons/icon-512.png | The icon as a PNG |
| `icon-192.png` | https://www.ghost.dance/icons/icon-192.png | Small PNG |
| `apple-touch-icon-180.png` | https://www.ghost.dance/icons/apple-touch-icon.png | Small PNG, 180×180 |

Do not recolour, stretch or add effects to the icon. Gold `#E8B04B` is the one highlight colour.

## Share cards (`share-cards/`)

| File | Page |
|---|---|
| `home.jpg` | https://www.ghost.dance/ (1200×630). Good as a title card, thumbnail or last frame |

The app's mission share card (`og-clouds-v4.png`) is left out on purpose: it talks about pay.

## Social (`social/`)

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Channel profile pictures (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | Icon and wordmark: end cards, slides, email headers |
| `cover-linkedin-1584x396.png` | LinkedIn page banner |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type reference |

Re-render `social/` with `node tools/brand-kit/render.mjs ghost-dance` after editing `kit.json`, and look
at every file before committing.

## Fonts

Noto Serif (headlines and wordmark), Noto Sans (text) and IBM Plex Mono (labels), all free from Google
Fonts. The site itself uses system fonts for serif and sans; see [`../brand.md`](../brand.md).
