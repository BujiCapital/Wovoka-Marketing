# Mindoro Coffee brand kit

Files the site serves, copied from mindorocoffee.com on 19 Oct 2026, plus a social set rendered from
`kit.json`. Rules for colour, type and video are in [`../brand.md`](../brand.md); the site's own kit is
at https://www.mindorocoffee.com/brand/.

## Logos (`logos/`)

| File | Served at | Use |
|---|---|---|
| `cherries.svg` | /assets/cherries.svg | Four-cherry mark, vector. Top of the primary lockup |
| `favicon.svg` | /assets/favicon.svg | App icon, one Arabica cherry on espresso |
| `apple-touch-icon.png` | /assets/apple-touch-icon.png | The app icon as a 180×180 PNG |
| `carabao-cream.png` | /assets/carabao-cream.png | Mascot for dark grounds. Means "talk to us" |
| `carabao-espresso.png` | /assets/carabao-espresso.png | Mascot for cream grounds |

Do not recolour, stretch or add effects. Keep the cherries in order (Robusta, Arabica, Excelsa,
Liberica) and never use fewer than four in the row. Scale the carabao in whole multiples so the pixels
stay hard.

## Share cards (`share-cards/`)

| File | Page |
|---|---|
| `home.png` | https://www.mindorocoffee.com/ (the primary lockup on espresso) |
| `first-season-hulled-beans.jpg` | The site's "first season at home" page (hulled beans, no people) |

## Social set (`social/`)

Rendered from `kit.json`.

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Profile picture: the app-icon cherry on espresso (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | Cherry icon, wordmark and coordinate line, 1600×480 |
| `cover-linkedin-1584x396.png` | LinkedIn page cover |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type at a glance |

The social logos use the single-cherry app icon next to the wordmark. Where there is room, prefer the
primary lockup with the four-cherry row (`share-cards/home.png`).

## Fonts

DM Serif Display, DM Sans and JetBrains Mono, all free from Google Fonts.

Re-render `social/` with `node tools/brand-kit/render.mjs mindoro-coffee` after editing `kit.json`.
