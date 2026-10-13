# HeyGen recipes for our marketing

Workflows we expect to repeat, adapted from HeyGen's cookbook (https://developers.heygen.com/overview.md) to
our brands and rules. Each one ends the same way: a draft on the content desk, never a post straight from
HeyGen.

## 1. A brand video from a script

The standard loop, and the one to learn first.

1. Pick a script from the brand's `video/scripts.md`.
2. Turn it into a brief with the template in [prompting.md](prompting.md#a-brief-to-start-from).
3. Render it with Lee's avatar and voice, the brand kit, the glossary and the matching b-roll: in the app
   ([app-chat.md](app-chat.md)) or with the CLI ([api-and-cli.md](api-and-cli.md#render-a-script-with-the-video-agent)).
4. Review it with the [checklist](prompting.md#review-before-the-content-desk) and fix single scenes.
5. Make the other shapes the brand needs. Portrait and landscape come from the Video Agent; square comes from
   a direct render or a centre crop.

Worked example: [Carbon.Supply's scripts](../../carbon-supply/video/scripts.md).

## 2. A week of shorts for one brand

Short videos at a steady rhythm, one brief per topic.

- **Topics** come from the brand's `content.md` (public pages worth a video) and `messages.md` (the facts).
- **Shape of each short:** a hook in the first two to five seconds, two or three points, then the call to
  action. 15 to 60 seconds, portrait.
- **Hooks:** a bold, specific opening beats a safe one in HeyGen's tests. Write two hooks for the same video
  and post both to see which works.
- **Submitting several at once:** pay-as-you-go runs 10 jobs at a time, so space the submissions a few
  seconds apart and poll them together (`heygen video statuses list`). HeyGen's batch endpoint takes up to
  100 direct avatar renders in one call, but not Video Agent briefs.
- **Variations HeyGen suggests:** one topic from five angles (beginner, advanced, myth-busting, case study,
  opinion), or two hooks for the same body.

## 3. A public page, data story or newsletter into a video

Use a page that's already public on the brand's site, so every fact has a source.

- **Adapt, don't summarise.** Pick the most visual and surprising points, not all of them. A good paragraph
  can be a dull scene, and the reverse.
- **Attach the page's own charts and share cards** as files, so the video shows our real visuals.
- **One source, several cuts:** a 30-second portrait teaser, a 60-second LinkedIn cut, a 90-second landscape
  version for the site or YouTube. Write each brief for its channel; don't just trim the long one.
- **The call to action points back to the page.**

## 4. Product demo from screen recordings

- Attach the brand's b-roll clips or fresh screenshots and walk through features one at a time, explaining
  the benefit, not just the button.
- When the product changes, re-record the b-roll (Carbon.Supply's
  [`b-roll/record.mjs`](../../carbon-supply/b-roll/record.mjs) does this with a scripted browser) and render
  again. The dates on screen must match the date in the narration.

## 5. Translate a finished video

HeyGen translates the speech, keeps Lee's voice and re-syncs his lips.

```bash
heygen video-translate create -d '{
  "video": { "type": "url", "url": "<public link to the approved English video>" },
  "output_languages": ["<language name>"],
  "mode": "precision",
  "brand_glossary_id": "<glossary_id>"
}'
```

- **Plan for it at the brief stage:** keep Lee on screen throughout (lip-sync needs his face), use short
  sentences, and avoid idioms.
- **Language names, not codes.** Get the exact names from `GET /v3/video-translations/languages`.
- **`speed` or `precision`.** Speed is the default and quicker; precision gives better lip-sync. Use
  precision for anything with Lee's face up close.
- **Proofread first.** Both modes can stop at the translated subtitles
  (`heygen video-translate proofreads create`) so someone can correct them before the final render is paid
  for.
- **The glossary** keeps brand names untranslated (`do_not_translate_terms`) and fixes how terms are
  translated (`forced_translations`).
- **A speaker of the language checks it** before it goes on the content desk. Numbers and claims must say
  exactly what the English says.
- Captions come with every translation (`srt_caption_url` or `vtt_caption_url`; the links last 7 days and
  are renewed each time you ask).

## 6. Clips from a long video

HeyGen's AI clipping picks the best moments of a long recording (a talk, a webinar, an interview) and cuts
them to length.

```bash
heygen ai-clipping create -d '{
  "video": { "type": "asset_id", "asset_id": "<asset_id>" },
  "output_settings": {
    "duration_types": ["30", "60"],
    "aspect_ratio": "portrait",
    "prompt": "The moments about <topic>."
  }
}'
```

- Lengths: `30`, `60`, `180` or `long`. Shapes: `portrait`, `landscape` or `square`.
- Captions are burned in by default; set `"captions": false` for clean footage.
- Each clip comes with a "virality score": HeyGen's prediction, not a reason to skip the review.
- Only clip recordings where every person on screen has agreed to appear.

## 7. Small tools

- **Background music:** `heygen audio sounds list --query "calm ambient piano"` searches HeyGen's catalogue
  by description (`--type sound_effects` for effects). Download straight away: the links expire. Note the
  track with the draft.
- **Filler words:** `heygen filler-word-removal create` cuts "um", "uh" and long silences from a finished
  recording. If nothing changes, HeyGen refunds the charge.
- **Animated data:** HeyGen's Video Agent builds its charts and on-screen text with Hyperframes, their
  open-source HTML-to-video framework. Rendering our own Hyperframes compositions
  (https://developers.heygen.com/hyperframes-overview.md) is an option for a data-heavy brand, not yet tried.
- **Generated clips:** HeyGen Video (`heygen model videos create`) invents 5 to 15 second scenes from a
  prompt. Use it only for landscapes or abstract shots, and check every frame for people: our rules allow no
  generated images of identifiable community members.

## Not tried yet

- Making videos through Postiz's HeyGen integration. If we use it, the video still goes to the content desk
  first.
- Templates for a repeatable weekly format. A template can now be made from one of our own finished videos
  over the API (`create_template`, then `set_template_variables` to mark the lines that change), with no
  editor work. See [capabilities.md](capabilities.md#templates).
- Fixing one spoken line without a new render: new audio in Lee's voice, then lip-sync it onto the approved
  video (`create_lipsync`).
