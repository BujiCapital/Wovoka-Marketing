# Buji Vanilla brand kit

Files the site serves, copied from bujivanilla.com on 19 Oct 2026, plus a social set rendered from
`kit.json`. Rules for colour, type and video are in [`../brand.md`](../brand.md).

## Logos (`logos/`)

| File | Served at | Use |
|---|---|---|
| `buji-logo-cream.png` | https://bujivanilla.com/images/logo-cream.png | Logo on deep green or dark photos |
| `buji-logo-dark.png` | https://bujivanilla.com/images/logo-dark.png | Logo on cream or paper |

Both are transparent PNGs, 247×200. They are small: fine for a corner bug or an end card, soft if blown up
large. The site has no separate icon or favicon.

## Share cards (`share-cards/`)

The site's own link-preview images. Good as title cards or thumbnails.

| File | Page |
|---|---|
| `home.jpg` | https://bujivanilla.com/ (also used by /trade and /ig) |
| `farmers.jpg` | https://bujivanilla.com/farmers (resized to 1600 wide) |

Skipped: the share card for `/farmers/celebration`, because it is a group photo of people.

## Social set (`social/`)

Rendered from `kit.json`. Use these for channel set-up.

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Profile picture (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | Logo on deep green and on paper, 1600×480 |
| `cover-linkedin-1584x396.png` | LinkedIn page cover |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type at a glance |

Do not recolour, stretch or add effects to the logo. Use the cream logo on dark and the dark logo on
light, nothing else.

## Fonts

Platypi (headlines), Mulish (text) and Archivo Black (one hero word), all free from Google Fonts.

Re-render `social/` with `node tools/brand-kit/render.mjs buji-vanilla` after editing `kit.json`.
