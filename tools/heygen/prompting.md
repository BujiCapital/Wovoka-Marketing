# Writing a brief for HeyGen's Video Agent

The brief is the whole interface. The Video Agent decides everything you leave open: presenter, voice,
script, footage, on-screen text, colours, music, pacing and shape. For our brands, pin down the presenter,
the numbers, the look, the length, the shape and the call to action, and let it decide the rest.

Drawn from HeyGen's [prompting guide](https://developers.heygen.com/docs/prompting-guide.md), their
[14 prompt experiments](https://developers.heygen.com/writing-effective-video-prompts.md) and their
[video skill](https://developers.heygen.com/skills/heygen-video.md), then adjusted to our rules.

## The parts of a brief, in order

1. **One line saying what it is:** length, shape, channel. "Make a 30-second portrait video for Instagram
   Reels introducing Carbon.Supply." Put the length first: the agent paces every scene to it.
2. **The script.** This is the biggest single factor in quality. Write for the ear. In HeyGen's tests, a story
   beat a list, a bold opening beat a safe one, and natural speech beat rigid segments. Avoid scripts built on
   questions: they sound odd from one presenter.
3. **A tone line**, taken from the brand's `brand.md`. "Tone: a calm analyst explaining what moved. Plain,
   specific, no hype."
4. **The numbers**, word for word from `messages.md`, with the instruction to use only those and to show the
   source stamp.
5. **What each kind of visual should be.** Be explicit or the agent guesses: motion graphics for numbers,
   charts and the logo; our attached screen recordings for the product; landscapes for texture.
6. **A style paragraph, last.** Without one, the look drifts from scene to scene. Five or six sentences: a
   name for the style, the exact colours as hex codes, the type, how things move, the transitions, and one
   line for the feel. Or pass a brand kit (see [api-and-cli.md](api-and-cli.md#brand-kit)), which carries the
   colours, fonts and logo for you.

## Scene by scene, or a flowing script?

HeyGen's two guides pull in different directions, and both are right for different videos.

| | Scene by scene, with times | One flowing script, with a tone line |
|---|---|---|
| What you get | Exact control of the words, the on-screen text and which clip plays when | More natural delivery |
| The catch | HeyGen found timestamps can make the delivery sound choppy | Less control over what appears on screen |
| Use it for | Anything with a number on screen: data stories, brand intros, the scripts in each brand's `video/scripts.md` | Founder notes, opinion shorts, hooks |

Our default: scene by scene whenever a number appears, because an accurate number matters more than polish.
Flowing script for talking-head shorts.

When you give a script, say "Follow the script below exactly, scene by scene." Otherwise the agent may
rewrite it.

## Say what you want, not what you don't

HeyGen found that "don't" instructions ("Do NOT use stock footage", "No B-roll") make the agent play safe and
produce flat videos. Our guardrails are a list of nevers, so turn each one into a positive instruction in the
brief, and keep the list of nevers for the review:

| Guardrail | Write in the brief |
|---|---|
| No stock avatars or other people | "The only person on screen is the selected presenter." |
| No numbers outside `messages.md` | "Use only the numbers below, word for word." |
| No identifiable people in footage | "Visuals are our attached screen recordings, motion graphics and landscapes." |
| No "buy now" | "The call to action is: <the brand's call to action>." |

## The presenter

- With Lee's avatar chosen, **don't describe how he looks**. Call him "the selected presenter". HeyGen says
  describing a chosen avatar is the most common cause of a mismatched one.
- **If the video will be translated, keep him on screen**: lip-sync needs his face. HeyGen's tested wording:
  "This is a direct-to-camera message. Think of it like a FaceTime call: one person, one camera, sincere eye
  contact throughout. The presenter should be visible and speaking for the entire video."

## Attach files rather than describing them

Screenshots, screen recordings, PDFs and logos can be attached to the brief (up to 20 files: PNG, JPEG, MP4,
WebM, MP3, WAV or PDF). The agent works them into the video as visuals or as source material. In the app,
see [app-chat.md](app-chat.md) for how to get them in.

## Length and shape by channel

The brand's own `README.md` decides; this is HeyGen's starting point.

| Channel | Length | Shape |
|---|---|---|
| Reels, Shorts, TikTok, Stories | 15 to 60 seconds, hook in the first 2 | 9:16 portrait |
| LinkedIn | 30 to 90 seconds | HeyGen suggests 16:9; our brand READMEs ask for 1:1 in the feed |
| Website, YouTube | Any | 16:9 landscape |

Over the API, the Video Agent only renders landscape or portrait. For a 1:1 or 4:5 cut, render a direct
avatar or studio video at that shape (see [api-and-cli.md](api-and-cli.md#direct-renders-without-the-agent)),
or crop the centre of the 16:9 render.

## A brief to start from

```
Make a <length>-second <portrait|landscape> video for <channel>: <what it is, in one line>.

The presenter is the selected avatar, in the selected voice, and is the only person on screen.
Follow the script below exactly, scene by scene. Use motion graphics for every number, the attached screen
recordings for the product, and landscapes for texture.

Use only these numbers, word for word. While each is on screen, show "Source: <site> · <date>" bottom left.
- <fact from messages.md>
- <fact from messages.md>

Script:
Scene 1 (<what is on screen>): "<what the presenter says>"
Scene 2 (<what is on screen>): "<what the presenter says>"
Scene 3 (end card from brand.md): "<closing line>"

Tone: <from brand.md>.
The call to action is: <from the brand README>.
Burn in captions.

Style: <a name>. <background, text and accent colours as hex codes, from brand.md>. <headline font, number
font>. <how things move>. <the transitions>. <one line for the feel>.
```

## Review before the content desk

Watch the whole render with the sound on, then check:

- [ ] Every number, spoken or on screen, matches `messages.md`, and carries its source stamp
- [ ] The only person on screen is Lee's avatar, with the captions `brand.md` asks for on his first appearance
- [ ] No identifiable people in any stock or generated scene
- [ ] The brand name and any technical terms are pronounced right (fix with a glossary: see
      [api-and-cli.md](api-and-cli.md#pronunciation-glossary))
- [ ] The captions match the words
- [ ] Nothing on the brand's `guardrails.md` "never" list
- [ ] The music is from a commercially licensed library, noted with the draft
- [ ] The end card is as `brand.md` describes

Something wrong? Fix that scene only (see [api-and-cli.md](api-and-cli.md#fix-one-scene-not-the-whole-video)),
then check again.
