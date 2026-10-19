# Kape.Me brand kit

Kape.Me has no logo, icon or share-card file. This kit is a **starter wordmark, not a designed logo**:
the name set in the site's own font and colours, rendered from `kit.json` on 19 Oct 2026. Rules for
colour, type and video are in [`../brand.md`](../brand.md).

## Social set (`social/`)

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Profile picture: "k." monogram in terracotta on coffee (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | Starter wordmark "kape.me" with the monogram, 1600×480 |
| `cover-linkedin-1584x396.png` | LinkedIn page cover |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type at a glance |

There is no `logos/` or `share-cards/` folder. The site serves no logo file, and its pages carry no share
image in the repository (the LA guide points to an image hosted elsewhere).

Do not recolour or stretch the wordmark. Replace this set when a designed logo exists.

## Fonts

Fraunces (headlines, wordmark) and Inter (text), both free from Google Fonts.

Re-render `social/` with `node tools/brand-kit/render.mjs kapeme` after editing `kit.json`.
