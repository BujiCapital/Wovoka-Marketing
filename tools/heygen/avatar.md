# Lee's avatar: making it great

Every brand video uses one presenter: Lee Pearson's own HeyGen avatar and voice. This page covers how we pick
the best avatar, test it, and re-record it if it isn't good enough. Lee made two avatars in the HeyGen app on
13 Oct 2026.

The avatar, look and voice IDs never go in this public repo. Keep them with the API key, or look them up
when you need them.

## What a great avatar looks like

Judge every test render against this list. A pass means a viewer who knows Lee wouldn't stop on anything.

- **Lips match on hard words:** "carbon dot supply", "Verra", "Isometric", "VM0033", and numbers.
- **Eyes on the lens**, not drifting to one side.
- **Hands stay small and natural** and come back to rest; no movement that visibly loops.
- **Clean edges** where the background was removed: hair, ears, shoulders against near-black `#0b0e0c`.
- **The voice sounds like Lee** to someone who knows him: calm, clear, about 2.5 words a second, not flat.
- **Framing works:** head and shoulders on the left third in landscape, and still works cropped to portrait
  without cutting off the head.

## 1. Compare the two we have

Run the same test render on both avatars, with each engine the look supports, then compare them side by
side.

```bash
heygen avatar list --ownership private                 # Lee's characters
heygen avatar looks list --group-id <group_id>         # each one's looks
heygen avatar looks get <look_id>                      # avatar_type, supported_api_engines, status
heygen avatar get <group_id>                           # consent_status, default_voice_id
```

- **Only a `digital_twin` look counts.** That means it was trained from video of Lee. A photo avatar
  moves less naturally, and HeyGen's engine table doesn't list Avatar V for it.
- **Consent must be `completed`** before a twin will render.
- **Test line** (about 20 seconds, full of the words that trip avatars up):

  > "We read Verra, Gold Standard, Isometric and Equitable Earth every morning. In September, Verra 5584
  > came back as Krasop Blue Carbon, with VM0033, VM0007 and VM0047. Carbon projects move on the registry
  > weeks before anyone announces them. Carbon dot supply."

- **Render settings:** `type: "avatar"`, 1080p, `16:9`, the look's own `default_voice_id`,
  `remove_background: true` with a near-black `#0b0e0c` background. Render once with
  `"engine": { "type": "avatar_iv" }`, and once with `avatar_v` if the look lists it.
- That's up to four short renders. Watch them at full size, with sound, against the list above.
- **Keep the winner** as the one avatar every brand uses. Don't delete the other one; Lee decides that.

## 2. If neither is great, record a new one

This is HeyGen's guidance for digital twins, plus our framing. Most of an avatar's quality comes from this
recording.

**Camera**
- A phone in landscape, or a proper camera, on a tripod. Don't touch it once recording starts.
- 1080p or 4K at 30 fps, landscape (16:9). HeyGen's advice is to record landscape and crop to portrait
  later.
- Head and upper body in frame, face centred and large (HeyGen suggests about half the frame). Stay the
  same distance from the camera throughout.

**Light and background**
- Soft, even light on the face: two softboxes at about 45°, or a ring light. Window light changes as clouds
  move, so avoid relying on it. Watch for bright spots on the forehead and nose.
- A plain, single-colour wall (or a green screen) that contrasts with hair, skin and clothes. We remove it
  and put near-black behind Lee, so **don't wear black or very dark clothes**: they'll merge into the
  background (our call, from the brand's near-black background).

**Sound**
- A quiet room where Lee's voice is the loudest thing the mic hears. No fans, echo or music. A little room
  tone is fine.

**Delivery**
- Eyes on the lens. If you use a teleprompter, put the text as close to the lens as you can and keep it
  narrow.
- Speak the way you'd present: calm, clear and expressive. HeyGen warns that a flat voice makes a flat
  avatar.
- Small, ordinary hand movements that come back to a resting position. No pointing or thumbs-up: whatever
  is in the footage gets reused in every video.
- About **two minutes**, one person in frame, face in frame from the first frame to the last. The
  [training script](#training-script-about-two-minutes) below is the right length.

**Upload**
- In the HeyGen app (upload, phone or webcam), or by API: upload the file (direct upload, since two minutes
  of 1080p is usually over 32 MB), then `POST /v3/avatars` with `type: "digital_twin"`.
- **Add it to Lee's existing character** (pass that `avatar_group_id`), so it becomes a new look of the same
  person. HeyGen tracks consent per character, so a new character means recording consent again.
- HeyGen checks the footage and flags anything to fix before you submit. In the app you can also choose to
  normalise the volume and remove the background.
- **Consent:** for a new character, HeyGen gives Lee a link (valid for 24 hours) to record a short statement
  on his webcam. The twin can't render until he does.

**More looks.** In the same session, extra clips of 30 seconds or more with a different outfit or setting
become more looks of the same character. One good look is enough for carbon.supply to start.

## Training script (about two minutes)

For the recording only, not for publishing. Read it naturally, the way you'd say it to one person. Small slips
don't matter. Every fact in it is in [carbon-supply/messages.md](../../carbon-supply/messages.md).

> Hi, I'm Lee Pearson. I want to tell you about something we built at Wovoka, because it changed how I read
> the carbon market.
>
> Carbon projects move on the registry long before anyone announces them. A project gets listed, a status
> changes, a verification is requested. Most people find out weeks later, from a press release or a
> newsletter.
>
> So we built Carbon.Supply. Every morning at six, Manila time, it reads four registries: Verra, Gold
> Standard, Isometric and Equitable Earth. It keeps every day, so it can show you what moved, from what to
> what, with a link to the record.
>
> Here's the kind of thing it catches. In September, Verra 5584 dropped out of the registry export. Four days
> later it came back as Krasop Blue Carbon, with a new proponent, a new validator and three methodologies:
> VM0033, VM0007 and VM0047. Nobody announced that. It was just there, in the data, if you were looking.
>
> That's what I find interesting. The quiet rows. Delistings, relistings, projects that are late to verify.
> They're never in a press release, but they're where the stories are.
>
> You don't need the whole market, either. You pick the slice you work in: a region, or a type of project.
> There are eleven editions, and the weekly read is free.
>
> If you'd rather ask than read, there's an AI analyst on WhatsApp. Ask what's new in your region this week,
> or whether a project on your list is registered yet. Every answer links to the registry record, because an
> AI can get things wrong, and you should be able to check.
>
> That's Carbon.Supply. Carbon dot supply. Thanks for listening.

## 3. The voice

- **Start with the twin's own voice.** HeyGen clones Lee's voice from the training footage automatically.
  Set it as the character's default (`heygen avatar update <group_id> --default-voice-id <voice_id>`) and
  pass it on every render anyway.
- **Fix pronunciation with the glossary**, not by misspelling the script. See
  [api-and-cli.md](api-and-cli.md#pronunciation-glossary).
- **If the voice is the weak spot**, HeyGen Voice can train a professional clone from 20 minutes or more of
  Lee speaking: 1 to 10 recordings, one speaker, little silence or noise. Recordings Lee already has, such as
  talks or interviews where only he speaks, may be enough. It's a paid add-on (one voice slot), and Lee's
  decision. An instant clone takes one recording (it uses the first three minutes) and is free while HeyGen
  previews it.
- **Check one thing before switching voices:** HeyGen's docs say HeyGen Voice clones speak through its
  text-to-speech, so a render may need the audio file made first and passed to the avatar instead of a
  `voice_id`. Test that with one short render before relying on it, especially with the Video Agent.

## 4. Render settings that suit the avatar

- **Engine:** Avatar V when the look lists `avatar_v` in `supported_api_engines`. It's HeyGen's most
  natural motion and lip-sync. Avatar IV otherwise.
- **Gestures:** `motion_prompt` works on both engines, for example "calm, small hand gestures at chest
  height, hands return to rest". `expressiveness` is Avatar IV only; sending it with Avatar V is an error.
- **Background:** `remove_background: true` and near-black `#0b0e0c`, so the brand's colours sit behind Lee.
- **Resolution:** 1080p.
- **Always pass** the look as `avatar_id` and the voice as `voice_id`, on direct renders and on the Video
  Agent alike.

## 5. Hand over

When a look passes, note its group, look, voice and engine with the API key (not here), then render the
first carbon.supply script with it ([recipes.md](recipes.md#1-a-brand-video-from-a-script)).

## Sources

All read 13 Oct 2026:

- Video to avatar (footage requirements, consent, the cloned voice):
  https://developers.heygen.com/docs/avatar-from-video.md
- Create avatar (characters and looks, statuses): https://developers.heygen.com/docs/create-avatar.md
- Avatar V and engine comparison: https://developers.heygen.com/avatar-v.md and
  https://developers.heygen.com/models.md
- Digital twin render settings: https://developers.heygen.com/generate-avatar-video.md
- HeyGen Voice and professional clones: https://developers.heygen.com/docs/models/heygen-voice.md and
  https://developers.heygen.com/docs/voices/professional-voice-clone.md
- HeyGen's recording advice: https://www.heygen.com/blog/how-to-create-high-quality-digital-twins and
  https://www.heygen.com/academy/avatars/how-to-create-a-digital-twin
