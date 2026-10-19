# Wovoka Advisory brand kit

Logo files and share images copied from the new build of www.wovokagroup.com on 19 Oct 2026, plus a
rendered social set. Rules for colour, type and video are in [`../brand.md`](../brand.md). Served URLs
work after the domain cutover.

## Logos (`logos/`)

| File | Use |
|---|---|
| `wovoka-advisory-logo.webp`, `wovoka-advisory-logo.png` | The logo, forest green on white, 999×357. Served as `/assets/img/wovoka-advisory-logo.jpg` |
| `apple-touch-icon-180.png` | The "W" icon, green on white |
| `favicon-32.png`, `favicon.ico` | Favicons |
| `wovoka-advisory-logo-white.png` | White logo with a transparent ground, for forest green. Made from the green logo; not on the site (starter: confirm) |
| `wovoka-advisory-w-white.png` | White "W", transparent, made from the icon; used for the profile pictures (starter: confirm) |

The green logo has a solid white ground, so use it only on white. Do not recolour, stretch or add effects
to the logo. Ask Lee for a master file before printing anything.

## Share images (`share-cards/`)

The site uses full photos as link previews, not designed cards. Both are landscapes with no identifiable
people.

| File | Page (after cutover) |
|---|---|
| `home-degraded-mangrove-aerial.webp` (`.jpg` copy) | https://www.wovokagroup.com/ (aerial of degraded tidal flats with mangrove regrowth) |
| `founder-uganda-2006-resource-centre.jpg` | https://www.wovokagroup.com/founder (an unfinished brick building, Uganda, 2006) |

Other pages have no share image. The site's other field photos were not copied here.

## Social set (`social/`)

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Channel profile pictures: white "W" on forest (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | Logo on forest and on white, 1600×480 |
| `cover-linkedin-1584x396.png` | LinkedIn page cover with the site's title line |
| `cover-facebook-1640x624.png` | Facebook page cover with the site's title line |
| `palette.png` | Colour and type sheet |

Re-render `social/` with `node tools/brand-kit/render.mjs wovoka-advisory` after editing `kit.json`.

## Fonts

Spectral (headlines), Inter (text) and IBM Plex Mono (labels), all free from Google Fonts.
