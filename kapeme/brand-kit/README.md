# Kape.Me brand kit

Kape.Me has no logo, icon or share-card file on its site. This kit is a **starter mark, not a finished
logo**: a drawing of the Filipino coffee sock beside the name set in the site's own font and colours,
rendered from `kit.json` on 19 Oct 2026. Rules for
colour, type and video are in [`../brand.md`](../brand.md).

## Social set (`social/`)

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Profile picture: the coffee-sock mark on coffee (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | The mark with "kape.me", 1600×480 |
| `cover-linkedin-1584x396.png` | LinkedIn page cover |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type at a glance |

## Logos (`logos/`)

| File | Use |
|---|---|
| `mark-coffee-sock.svg` | The chosen starter mark: a cloth coffee sock on a wire ring, dripping into a pot |
| `concepts/mark-siphon.svg` | Alternative: a siphon (vacuum) brewer |
| `concepts/mark-kettle.svg` | Alternative: an old enamel kettle |
| `concepts/compare.png` | The three side by side, on coffee and on paper |

There is no `share-cards/` folder: the site's pages carry no share image in the repository.

Do not recolour or stretch the wordmark. Replace this set when a designed logo exists.

## Fonts

Fraunces (headlines, wordmark) and Inter (text), both free from Google Fonts.

Re-render `social/` with `node tools/brand-kit/render.mjs kapeme` after editing `kit.json`.
