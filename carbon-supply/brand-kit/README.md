# Carbon.Supply brand kit

The same files the site serves at https://carbon.supply/brand/ and https://carbon.supply/og/, copied here on
13 Oct 2026 so tools can use them directly. Rules for colour, type and video are in [`../brand.md`](../brand.md).

## Logos (`logos/`)

| File | Use |
|---|---|
| `logo-on-dark.png` | Mark and wordmark on near-black: end cards, dark slides |
| `logo-on-light.png` | Mark and wordmark on cream or white |
| `mark.svg`, `mark-light.svg` | The bare mark ("the Bracket") for dark and light grounds; corner bug in video |
| `mark-square.svg`, `favicon.svg` | Square tile and favicon |
| `profile-1024.png`, `profile-640.png` | Channel profile pictures (circle-crop safe) |
| `icon-512.png` | App-style icon |
| `logo-email.png` | Email header, 1200×240 |
| `facebook-cover-1640x624.png` | Facebook page cover |

Do not recolour, stretch or add effects to the mark. Gold `#c4a35a` is the only brand colour.

## Share cards (`share-cards/`)

The 1200×630 cards the site uses for link previews. Good as title cards or thumbnails, or as the last frame
of a video about that page.

| File | Page |
|---|---|
| `home.jpg` | https://carbon.supply/ |
| `pricing.jpg` | https://carbon.supply/pricing/ |
| `analysis-pipeline-841-million-tonnes.jpg` | https://carbon.supply/analysis/pipeline-841-million-tonnes/ |
| `analysis-late-to-verify-worldwide.jpg` | https://carbon.supply/analysis/late-to-verify-worldwide/ |
| `analysis-unretired-credits.jpg` | https://carbon.supply/analysis/unretired-credits/ |
| `stories-krasop-blue-carbon-relisting.jpg` | https://carbon.supply/stories/krasop-blue-carbon-relisting/ |
| `guides-philippines.jpg` | https://carbon.supply/guides/philippines/ |
| `issues-early-signals.jpg` | https://carbon.supply/issues/early-signals/ |

Every other page's card is at `https://carbon.supply/og/<page>-<hash>.jpg`; the exact URL is in the page's
`og:image` tag.

## Fonts

IBM Plex Sans, IBM Plex Mono and Fraunces, all free from Google Fonts.

## Social set (`social/`)

`cover-linkedin-page-1128x191.png` (drawn at 2256×382) is the LinkedIn page cover, rendered from
`kit.json` with `node tools/brand-kit/render.mjs --only cover-linkedin-page carbon-supply`. The profile
picture and Facebook cover stay the hand-made files in `logos/`. Don't render the full set for this brand.
