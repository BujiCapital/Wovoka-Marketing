# Carbon Kids brand kit

The same files the site serves at https://carbon.kids/brand/, /art/ and /share/, copied here on 19 Oct
2026 so tools can use them directly. Rules for colour, type and video are in [`../brand.md`](../brand.md).

## Logos (`logos/`)

| File | Use |
|---|---|
| `carbon-kids-lockup.svg`, `carbon-kids-lockup.png` | The CK bubble and CARBON KIDS. Light grounds only (cream, white, pale sky) |
| `carbon-kids-icon.svg`, `carbon-kids-icon-1024.png` | The CK icon on its sky tile: corner bug, avatars |
| `apple-touch-icon.png` | The site's small app icon |

The PNGs are exports of the site's SVGs (lockup 1600 px wide, icon 1024 px). Do not recolour, stretch or
add effects. The lockup is not made for dark grounds.

## Share cards and book art (`share-cards/`)

The site's own link-preview cards, plus two pieces of book art. All show animals and landscape only.

| File | Page or source |
|---|---|
| `home.png` | https://carbon.kids/ (also used on /why/ and the other grown-up pages) |
| `play-seed-run.png` | https://carbon.kids/play/ (Tammy's Seed Run) |
| `play-owl.png` | https://carbon.kids/play/owl/ (Night Owl Hide and Seek) |
| `book-one-cover.png` | Cover of book one, from https://carbon.kids/art/cover.svg (1080×1080) |
| `book-one-page-05.png` | Page 5, "The STOMP", from https://carbon.kids/art/page-05.svg (1080×1080) |

Book one is still in draft, so any post using the cover must say it is coming, not out. The other game
cards on the site are not copied here because they show drawn people.

## Social set (`social/`)

Rendered from `kit.json`:

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Channel profile picture (the CK icon on pale sky) |
| `logo-on-dark.png` | The lockup on pale sky (the darkest ground it suits) |
| `logo-on-light.png` | The lockup on cream |
| `cover-linkedin-1584x396.png` | LinkedIn page cover |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type at a glance |

Re-render `social/` with `node tools/brand-kit/render.mjs carbon-kids` after editing `kit.json`.

## Fonts

Baloo 2 and Nunito, both free from Google Fonts.
