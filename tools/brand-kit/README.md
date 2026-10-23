# Brand kit renderer

`render.mjs` draws the social set of a brand kit from that brand's `brand-kit/kit.json`: profile pictures,
logos on dark and light grounds, LinkedIn and Facebook covers, and a colour and type card. It uses the
brand's own colours and Google Fonts, and its real logo or mark where one exists. Where a brand has no
designed logo it sets the name in the brand's font as a starter wordmark.

```
npm i playwright
node tools/brand-kit/render.mjs <brand-folder> [<brand-folder> ...]
# just one file type:
node tools/brand-kit/render.mjs --only cover-linkedin-page <brand-folder> ...
```

It writes `<brand>/brand-kit/social/`:

| File | Size | Use |
|---|---|---|
| `profile-1024.png`, `profile-400.png` | square | Channel profile pictures (circle-crop safe) |
| `logo-on-dark.png`, `logo-on-light.png` | 1600×480 | End cards, slides, email headers |
| `cover-linkedin-1584x396.png` | 1584×396 | LinkedIn banner for a personal profile |
| `cover-linkedin-page-1128x191.png` | 1128×191, drawn at 2× (2256×382) | LinkedIn company or organization page cover |
| `cover-facebook-1640x624.png` | 1640×624 | Facebook page cover |
| `palette.png` | 1600×900 | Colour and type reference |

Edit `kit.json`, re-render, and look at every file before committing.
