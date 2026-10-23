# Inclusive Forests brand kit

Copies of the mark and share card the site serves at https://www.inclusiveforests.org/assets/, taken on
19 Oct 2026, plus a rendered social set. Rules for colour, type and video are in [`../brand.md`](../brand.md).

## Logos (`logos/`)

| File | Served at | Use |
|---|---|---|
| `mark-footer.png` | https://www.inclusiveforests.org/assets/logo-footer.png | The mark, 400×350, transparent. The one to use |
| `mark-nav.png` | https://www.inclusiveforests.org/assets/logo-nav.png | Smaller copy from the menu bar; has a faint strip on its right edge, so prefer `mark-footer.png` |
| `favicon.png` | https://www.inclusiveforests.org/assets/favicon.png | Browser icon, 96×84 |

Do not recolour, stretch or add effects to the mark.

Left out on purpose: the full illustrated logo files in the site's folder (`logo.png`, `logo-web.png`,
`logo-wide.png`). They are not shown on the public pages, and they draw people.

## Share cards (`share-cards/`)

| File | Page |
|---|---|
| `home.jpg` | Every public page uses this card (1200×800). Good as a title card, thumbnail or last frame. (starter: confirm the source of the coast photo before using it on its own) |

## Social (`social/`)

| File | Use |
|---|---|
| `profile-1024.png`, `profile-400.png` | Channel profile pictures (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | Mark and wordmark: end cards, slides, email headers |
| `cover-linkedin-1584x396.png` | LinkedIn page banner |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `palette.png` | Colour and type reference |

The wordmark in `logo-on-*.png` is set in Playfair Display next to the mark, as the site's menu bar does.

Re-render `social/` with `node tools/brand-kit/render.mjs inclusive-forests` after editing `kit.json`, and
look at every file before committing.

## Fonts

Playfair Display (headlines, wordmark) and DM Sans (text), both free from Google Fonts.

## Photos

The site's other photos are not copied here. Some are stock (Unsplash, Pexels, Wikimedia Commons) and the
Commons ones need a credit line. Check the credit in the site's footer before using any of them.
