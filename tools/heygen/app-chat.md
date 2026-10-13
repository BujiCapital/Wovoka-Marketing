# Working in the HeyGen app's chat

The HeyGen app has a chat (the Video Agent) that turns a brief into a finished video. It is the quickest
route for a single video and the best place to review and fix one. Its weak spot is getting our files in.

## What it can and can't read

Found on 13 Oct 2026 while making the first Carbon.Supply video:

| We tried | Result |
|---|---|
| A link to a **private** GitHub repo | Can't read it |
| A link to **this public repo**, through HeyGen's GitHub reader | Couldn't read it either, although the repo is public and opens without a login |
| Uploading a **ZIP** in the chat | Not accepted |
| Uploading **.md files** in the chat | Not accepted |
| **Pasting** Markdown text into the chat | Works. HeyGen asked for it in chunks |
| Public **raw.githubusercontent.com** links to `.md` files | Works |
| Raw GitHub links to **MP4 and PNG** files | Doesn't import them. It asked for the files attached directly, or links from a file host or CDN |

So text goes in as raw links (or pasted), and pictures and video go in as uploads.

## Handing it a brand folder

1. **Send the brief with raw links to the Markdown**, in this order: `guardrails.md`, `messages.md`,
   `brand.md`, `video/scripts.md`, then `b-roll/README.md`. A raw link looks like this:

   ```
   https://raw.githubusercontent.com/BujiCapital/Wovoka-Marketing/main/<brand>/<file>.md
   ```

   On GitHub, the **Raw** button on any file gives you the link.
2. **Attach the media directly.** Download the clips and logo you need from the brand folder (the
   **Download raw file** button on GitHub) and drag them into the chat, or upload them once to the media
   library in HeyGen so every video can reuse them. Use the PNG logos: HeyGen's uploads take PNG and JPEG
   images, not SVG.
3. **If a link fails, paste the text.** Start with the script, then the facts, the brand rules and the
   guardrails. Keep each paste to one file.
4. **Ask for the extras up front:** the video, its caption, and a list of every number shown with its source.

The API removes all of this: files are uploaded once and used by ID. See [api-and-cli.md](api-and-cli.md).

## A message to start from

Replace the angle brackets. Keep the numbers and wording from the brand folder exactly.

```
Please make a <length>-second <portrait|landscape> video for <channel> from the files below.
The repository is public; these are raw links. Read them in this order:

- Guardrails: https://raw.githubusercontent.com/BujiCapital/Wovoka-Marketing/main/<brand>/guardrails.md
- Approved numbers: https://raw.githubusercontent.com/BujiCapital/Wovoka-Marketing/main/<brand>/messages.md
- Brand: https://raw.githubusercontent.com/BujiCapital/Wovoka-Marketing/main/<brand>/brand.md
- Scripts: https://raw.githubusercontent.com/BujiCapital/Wovoka-Marketing/main/<brand>/video/scripts.md
- B-roll guide: https://raw.githubusercontent.com/BujiCapital/Wovoka-Marketing/main/<brand>/b-roll/README.md

I've attached the b-roll clips and the logo.

Make script <number>, "<title>". Follow it exactly, scene by scene.
The presenter is my selected avatar, in my own voice. It is the only person on screen.
Use only the numbers in messages.md, word for word.
Before you render, show me the scene plan.
When it's done, send the video, the caption from the script, and every number shown with its source.
```

## Working with the chat

- **Select Lee's avatar and voice in the app**, then call him "the selected presenter" in the brief. Don't
  describe how he looks: HeyGen says describing a chosen avatar is the most common cause of a mismatched one.
- **Ask for the plan first.** A wrong number caught in the scene plan is cheaper than one caught after the
  render.
- **Fix by scene.** "Change scene 2 only: make the background darker and keep the narration." The other
  scenes stay as they are.
- **Say what you want, not what you don't.** "Visuals are our screen recordings and motion graphics" works
  better than "No stock footage". See [prompting.md](prompting.md#say-what-you-want-not-what-you-dont).
- **Finished videos appear under Projects** in HeyGen. Download from there and put the draft on the content
  desk.
