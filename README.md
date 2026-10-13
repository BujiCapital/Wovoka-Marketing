# Wovoka Marketing

Public marketing context for the Wovoka portfolio's brands: what each product is, who it is for, the facts
we use (each with a public source), how videos and posts look, and draft scripts. It is written for the
marketing team and for the AI tools they use (HeyGen, Claude and others), which can read it straight from
this repository.

**This repository is public.** Everything here may be read by anyone. It contains only what is already
public on our own websites.

## Brands

| Folder | Brand | Website |
|---|---|---|
| [`carbon-supply/`](carbon-supply/) | Carbon.Supply: carbon registry data, weekly editions and an AI analyst | https://carbon.supply |

More brands will follow, one folder each, copied from [`_template/`](_template/).

## Tool guides

How to use the tools we make marketing with, and what we have learned using them.

| Folder | Tool |
|---|---|
| [`tools/heygen/`](tools/heygen/) | HeyGen, for avatar videos: which route to use, how to brief it, the API and CLI, MCP, and recipes |

## Each brand folder

| File | What it gives you |
|---|---|
| `README.md` | Start here: the rules for this brand and how a video gets made |
| `product.md` | What the product is and does, in words you can say on camera |
| `audiences.md` | Who we are talking to, what they need, what makes them act |
| `messages.md` | Key messages and **every number we may use, with its public source and date** |
| `brand.md` | How a video looks and sounds: colours, type, logo, charts, presenter |
| `guardrails.md` | What we never say or show |
| `video/scripts.md` | Draft video scripts, scene by scene |
| `key-customer.md` | The one customer to picture when writing |
| `content.md` | Public pages worth a video, with their headlines |
| `brand-kit/` | Logos, profile pictures, share cards |
| `b-roll/` | Screen recordings and demo shots for video |

## Rules for every brand

1. **The presenter is Lee Pearson's own HeyGen avatar and voice, or no presenter.** No stock avatars, no
   invented presenters, no generated people.
2. **No photos, footage or generated images of identifiable community members.** Landscapes, data and
   product only.
3. **Every number comes from the brand's `messages.md`**, with its public source and the date it was true.
   Re-check it on the day you use it. No source, no number.
4. **Nothing is published without an approval.** A HeyGen render or a draft post is a draft. An editor
   approves it on our content desk; approved posts are scheduled through Postiz.
5. **No investment offers, returns or projections**, on any channel. We tell the story, never the offer.
6. **Music must be licensed for commercial use.**
7. Never imply a partnership or endorsement that is not public and confirmed.

## How to make a video

1. Open the brand's folder and read its `README.md`, `messages.md` and `guardrails.md`.
2. Pick a script in `video/scripts.md`, or write one from `messages.md` and a page on the brand's site.
3. Re-check every number against its source.
4. Render in HeyGen with Lee's avatar ([how](tools/heygen/)). Keep the on-screen text and the source stamps.
5. Put the draft on the content desk with the video, the caption and the list of facts used.

## Changing this repository

Open a pull request. Before merging, check that nothing internal has slipped in: no unconfirmed figures,
no client names, no prices or terms that are not on the brand's public site, no personal data.
