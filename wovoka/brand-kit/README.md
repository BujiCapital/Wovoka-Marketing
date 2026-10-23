# Wovoka brand kit

Logo files and share cards copied from www.wovoka.io on 19 Oct 2026, plus a rendered social set. Rules for
colour, type and video are in [`../brand.md`](../brand.md).

## Logos (`logos/`)

| File | Use |
|---|---|
| `wovoka-logo-white.webp`, `wovoka-logo-white.png` | White logo for dark grounds (the site header), 416×106 |
| `wovoka-logo-white.svg` | The same white logo as SVG (served as `footer-logo-(2).svg`) |
| `wovoka-logo-white-1664.png` | The SVG rendered at 1664 px wide, for end cards and slides |
| `wovoka-logo.png` | Full-colour logo for paper or white, 416×106 |
| `wovoka-logo-832.png` | The colour logo scaled up to 832 px; slightly soft, use small (starter: confirm) |
| `wovoka-mark-white.svg`, `wovoka-mark-white-1024.png` | The leaf mark alone, white, cut from the SVG logo; for profile pictures and a corner bug |
| `favicon-48.png`, `webclip-192.png` | The site's favicon and phone icon (colour mark) |

There is no large full-colour logo on the site. Ask Lee for the master file before printing anything.
(starter: confirm)

Do not recolour, stretch or add effects to the logo or the mark.

## Share cards (`share-cards/`)

The 1200×630 cards the rebuilt pages use for link previews. All three are landscapes or crops with no
people. Good as title cards or thumbnails, or as the last frame of a video about that page.

| File | Page |
|---|---|
| `home.jpg` | https://www.wovoka.io/ |
| `our-model.jpg` | https://www.wovoka.io/our-model |
| `carbon-market.jpg` | https://www.wovoka.io/carbon-market |

The older pages' share images and photos were not copied: they belong to the previous design, and many
of its photos show people.

## Social set (`social/`)

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Channel profile pictures: white mark on green night (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | Logo on green night and on paper, 1600×480 |
| `cover-linkedin-1584x396.png` | LinkedIn page cover with the hero line |
| `cover-facebook-1640x624.png` | Facebook page cover with the hero line |
| `palette.png` | Colour and type sheet |

Re-render `social/` with `node tools/brand-kit/render.mjs wovoka` after editing `kit.json`.

## Fonts

Barlow (headlines) and Inter Tight (text), both free from Google Fonts.
