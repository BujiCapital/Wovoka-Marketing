# Wovoka Studio brand kit

The same files the site serves at https://wovoka.dev/assets/brand/ and https://wovoka.dev/og/, copied here
on 19 Oct 2026 so tools can use them directly. Rules for colour, type and video are in
[`../brand.md`](../brand.md). The site's own kit page is https://wovoka.dev/brand.

## Logos (`logos/`)

| File | Use |
|---|---|
| `wordmark-on-dark.svg`, `.png` | WOVOKA in sun with STUDIO in cream: end cards, night and sunset grounds |
| `wordmark-on-light.svg`, `.png` | WOVOKA in ink: paper or white |
| `icon.svg`, `icon-1024.png` | The W on a night tile over the jeepney stripe: corner bug, avatars |
| `icon-512.png`, `apple-touch-icon.png` | The site's app icons |
| `tamaraw.svg`, `.png` | The pixel tamaraw with sunset shades (the mascot) |
| `tamaraw-plain.svg`, `.png` | The pixel tamaraw, plain |

Do not recolour, stretch, outline or retype the wordmark. Keep the tamaraw on its pixel grid: scale in
whole steps, no smoothing.

## Share cards (`share-cards/`)

The 1200×630 cards the site uses for link previews, on the sunset with the tamaraw. Good as title cards,
thumbnails or the last frame of a video about that page.

| File | Page |
|---|---|
| `home.png` | https://wovoka.dev/ |
| `studio.png` | https://wovoka.dev/studio |
| `start.png` | https://wovoka.dev/start |
| `brand.png` | https://wovoka.dev/brand |

## Social set (`social/`)

Rendered from `kit.json`:

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Channel profile picture (the icon on night) |
| `logo-on-dark.png`, `logo-on-light.png` | Wordmark on night and on paper, 1600×480 |
| `cover-linkedin-1584x396.png` | LinkedIn page cover |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type at a glance |

Re-render `social/` with `node tools/brand-kit/render.mjs wovoka-studio` after editing `kit.json`.

## Fonts

Bungee, Bricolage Grotesque, Instrument Sans and IBM Plex Mono, all free from Google Fonts.
