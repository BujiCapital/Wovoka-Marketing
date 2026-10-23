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

The logo: **kape.me** in Fraunces (soft, 720) on one line, with a Filipino coffee sock standing in for the
dot. Its drop lands on the baseline where the dot would be. The sock's wooden handle lies over "pe" and rises
to the right like an acute accent, so the logo shows how the name is said: ka-PÉ (Lee, 20 Oct 2026).

| File | Use |
|---|---|
| `kapeme-logo-on-dark.png`, `kapeme-logo-on-light.png` | **Main logo**, for coffee and paper grounds |
| `kapeme-icon.svg`, `kapeme-icon-on-dark.svg` | **Icon**: the coffee sock on its handle with one drop, on terracotta or coffee. Profile pictures, corner bug |
| `*.svg` | The same, as vectors. The letters are live Fraunces text loaded from Google Fonts: use the PNGs, and have a designer outline the letters before print or packaging |
| `concepts/` | Earlier rounds: the sock, siphon and kettle marks; the drip, pot and badge lockups; other handles (plain wire, fused, arc); `round-7-stack/` the two-line logo and the sock-and-pot icon; `round-8-accent/` the level-handle version of the current logo |

There is no `share-cards/` folder: the site's pages carry no share image in the repository.

Do not recolour or stretch the wordmark. Replace this set when a designed logo exists.

## Fonts

Fraunces (headlines, wordmark) and Inter (text), both free from Google Fonts.

Re-render `social/` with `node tools/brand-kit/render.mjs kapeme` after editing `kit.json`.
