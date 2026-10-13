# The HeyGen API and CLI

The command-line tool (`heygen`) and the API reach the same video tools as the app, without the app's
limits on reading our files. Upload a brand's files once, then every render uses them by ID. This is our default route
for repeatable brand work.

Everything here is HeyGen's v3 API. **The v1 and v2 endpoints retire on 31 Oct 2026**; don't use them, and
move anything that still does.

## Set up

**The key.** Create it on HeyGen's API dashboard (https://app.heygen.com/developers/api). It is shown once.
Keep it only in the environment:

```bash
export HEYGEN_API_KEY=...   # in the shell or the environment's secrets, never in a file in this repo
```

- Never commit it, paste it into a chat or prompt, or put it in browser code. This repo is public.
- HeyGen keys can be limited to the scopes a job needs. `GET /v3/api_keys/self` shows what a key can do.
- Rotate it on the dashboard if it is ever exposed.

**The CLI.** One file, no dependencies, macOS and Linux (Windows through WSL):

```bash
curl -fsSL https://static.heygen.ai/cli/install.sh | bash
heygen --version
heygen auth status          # confirms the key works; or call GET /v3/users/me
```

What makes it good for scripts and AI assistants:

- JSON on stdout, errors as JSON on stderr, so output pipes straight into `jq`.
- `--request-schema` on any command prints the JSON it expects, without a key.
- `-d request.json` takes a full request body; flags override fields in it.
- `--wait` blocks until a render finishes (20 minutes by default, `--timeout 45m` to change it).
- Exit codes: `0` done, `1` error, `2` bad flags, `3` key problem, `4` still running when `--wait` gave up
  (the job exists; poll it, don't resubmit).
- It retries rate limits by itself twice (`HEYGEN_MAX_RETRIES` to change).
- `--human` gives tables for people.

**The skills.** HeyGen publishes skills that teach an AI assistant (Claude Code and others) its whole
pipeline, including prompt craft and avatar framing checks. Worth installing for anyone driving HeyGen from an
assistant: https://github.com/heygen-com/skills. They use the CLI when `HEYGEN_API_KEY` is set and MCP
otherwise.

## One-time setup for each brand

### Lee's avatar and voice

```bash
heygen avatar list --ownership private                 # Lee's avatar group (the character)
heygen avatar looks list --group-id <group_id>         # its looks; a look id is the avatar_id
heygen avatar looks get <look_id>                      # supported_api_engines, status
```

- A look's `supported_api_engines` says which renderers it takes. Use `avatar_v` (HeyGen's most natural
  motion and lip-sync) when it's listed, otherwise the default `avatar_iv`.
- The voice cloned from Lee's footage comes with the avatar as its `default_voice_id`. Pass it explicitly.
- A digital twin renders only after its consent is accepted (`consent_status` on `heygen avatar get`).
- IDs only work with our key, but keep them out of this public repo anyway: look them up when you need them.

### Brand kit

A brand kit holds a brand's colours, fonts and logo. HeyGen can build one by reading the brand's own website,
and the Video Agent then applies it to every scene: backgrounds, text, chart colours and logo placement.

```bash
heygen brand kits create --url https://<brand site> --name "<Brand>"
heygen brand kits get <brand_kit_id>      # poll every few seconds until status is "completed"
```

- The import usually takes under two minutes; fonts arrive last.
- It assigns colour roles (primary, secondary, tertiary, accent) by itself. Check them against the brand's
  `brand.md` and correct them with `PATCH /v3/brand-kits/{id}`. A role you send replaces that whole group, so
  send every role in it; `{}` clears a group and `null` is rejected.
- A brand kit works with the Video Agent only. For direct and studio renders, the look goes into the
  composition itself.
- A brand kit and a style (`style_id`) combine: the style sets the shape of the video, the kit makes it ours.

### Pronunciation glossary

A glossary tells the voice how to say our terms, for example `Carbon.Supply` as "carbon dot supply". It
changes only the spoken audio: captions keep the written spelling.

```bash
heygen brand glossaries create --name "<Brand> terms" -d '{
  "terms": [ { "term": "Carbon.Supply", "pronunciation": "carbon dot supply" } ]
}'
```

- Write a pronunciation the way you would coach someone to say it. Add terms once you've heard one wrong.
- The same glossary can list `do_not_translate_terms` (brand names to keep in every language) and
  `forced_translations`, which apply when a video is translated.
- Updating a list replaces it in full: read it, add to it, send it all back.
- One glossary per request. On the Video Agent it is set when the session starts and can't change after.

### Upload the b-roll and logos

```bash
heygen asset create --file carbon-supply/b-roll/landscape/home-hero.mp4     # returns an asset_id
```

- Up to 32 MB per file this way; larger files (up to 200 MB for video, 1.5 GB for audio) use direct upload
  (`heygen asset direct-uploads create`). Batches of up to 100 files are supported.
- Types: PNG, JPEG, MP4, WebM, MP3, WAV, PDF. No SVG.
- An `asset_id` doesn't expire. Upload once and reuse it in every video.
- A public URL also works as a file input, but it must open without a login and its extension must match
  the file type, or the render fails with `download_failed`.

## Render a script with the Video Agent

Write the brief using [prompting.md](prompting.md), save it as `prompt.txt`, then:

```bash
heygen video-agent create \
  --prompt "$(cat prompt.txt)" \
  --avatar-id <lee_look_id> --voice-id <lee_voice_id> \
  --brand-kit-id <brand_kit_id> --brand-glossary-id <glossary_id> \
  --orientation portrait \
  --mode chat \
  -d '{ "files": [ { "type": "asset_id", "asset_id": "<b-roll asset_id>" } ] }'
```

- **`--mode chat`** makes the agent stop at a storyboard so we can check it before it renders. Read it with
  `heygen video-agent get <session_id>`, then answer with
  `heygen video-agent send <session_id> --message "Looks right. Generate it."` Any reply resumes it, so a
  correction and an approval are both just messages. `generate` mode runs straight through.
- **Keep the `session_id`** from the first response. `https://app.heygen.com/video-agent/<session_id>` opens
  the session in the app for edits.
- **It takes a while.** HeyGen quotes 5 to 10 times the video's length; their skill sees 20 to 45 minutes.
  Poll `heygen video-agent get` until a `video_id` appears, then `heygen video get <video_id>` every 10 to 30
  seconds, or pass `--callback-url` and let HeyGen call back (see [Webhooks](#webhooks)).
- **Orientation** is `landscape` or `portrait` only. For 1:1, see
  [direct renders](#direct-renders-without-the-agent).
- **Memory.** The Video Agent remembers across sessions unless `--incognito-mode` is set. We use incognito
  when moving between brands, so one brand's direction doesn't carry into another's. (Our call, not
  HeyGen's advice.)
- **Visibility.** Sessions default to `space`: everyone in our HeyGen workspace can open them.
- **Styles.** `heygen video-agent styles list --tag cinematic` lists HeyGen's ready-made looks, each with a
  preview video. Pass one as `--style-id`.

## Fix one scene, not the whole video

A scene edit changes only the scenes you name; the rest keep their words and visuals.

```bash
heygen video scenes get <video_id>          # each scene's id and script, plus one edit_version
heygen video-agent send <session_id> -d edit_plan.json
```

`edit_plan.json`, one item per scene to change:

```json
{
  "edit_plan": [
    {
      "scene_id": "<id from scenes get>",
      "text": "Make the background near-black and keep the narration the same.",
      "scene_snapshot_video_id": "<video_id>",
      "edit_version": "<edit_version from scenes get>"
    }
  ]
}
```

- Say "keep the narration" to change only the visuals; give new words to change both.
- The reply carries the new draft's `video_id`. Poll that one.
- `409 stale_edit_version` means it changed since you read it: read the scenes again and resend.
- Send one edit at a time per video. `edit_version` isn't a lock, so two edits from the same version can both
  be accepted.
- Up to 50 scenes in one plan. A bad `scene_id` rejects the whole plan before anything runs.

## Direct renders without the agent

When we want our exact cut, with no choices left to the agent, render it ourselves with `heygen video create`
(`POST /v3/videos`):

- **`type: "avatar"`**: Lee's look speaks an exact script (up to 5,000 characters) in his voice. Choose the
  renderer with `"engine": { "type": "avatar_v" }`.
- **`type: "studio"`**: joins whole-frame scenes in order (an avatar clip, a still image, a video clip), 1 to
  50 scenes, rendered all or nothing. Good for: title card, Lee, b-roll, end card.
- **Shapes:** `16:9`, `9:16`, `1:1`, `4:5`, `5:4` or `auto`. This is the route for square feed videos.
  `"resolution": "1080p"` is HeyGen's recommended default.
- **Templates:** a layout built once in HeyGen Studio with named slots (`heygen template list`, then
  `heygen template generate`) is the way to make a repeatable series.
- `brand_glossary_id` works here too; a brand kit doesn't.

## Download and hand over

```bash
heygen video download <video_id> --output-path ./draft.mp4
heygen video download <video_id> --asset captioned --output-path ./draft-captioned.mp4
```

- Download straight away: video links are presigned and expire.
- `heygen video get` also returns `subtitle_url` (SRT) and a thumbnail.
- Then the draft goes to the content desk with its caption and facts list. Nothing is posted from HeyGen.

## Webhooks

Two ways to hear when a render finishes instead of polling:

- **`--callback-url` and `--callback-id` on a create.** Simple, but these calls are not signed: only trust
  one whose `callback_id` matches a job we started.
- **A registered endpoint** (`heygen webhook endpoints create`). Its calls are signed. The signing secret is
  shown once: store it as a secret and use it to check that each call really comes from HeyGen.

Events include `avatar_video.success` and `avatar_video.fail`.

## Limits worth knowing

| Limit | Value |
|---|---|
| Video Agent brief | 1 to 10,000 characters, up to 20 files |
| Avatar script | 5,000 characters |
| Scenes | 50 a video, 30 minutes each |
| Files given to a render | Video MP4 or WebM up to 100 MB; images JPG or PNG up to 50 MB; both under 2K |
| Jobs running at once | 10 on pay-as-you-go (Video Agent sessions, renders and translations all count) |
| Requests | 300 reads a minute, 10 writes a second, 30 uploads or speech calls a minute, 500 status checks a minute |

Over a limit, HeyGen returns `429` with a `Retry-After` header: wait that long, then retry.

## When something fails

| You see | It means |
|---|---|
| `401` or CLI exit `3` | The key is missing, wrong or revoked |
| `400 invalid_parameter` on a brand kit or glossary ID | The ID belongs to another workspace or doesn't exist. Rejected before rendering, so no credits spent |
| `status: failed` with `failure_code: download_failed` | A file URL needed a login, or its extension didn't match the file |
| `409 resource_not_ready` reading scenes | The video is still rendering. Wait for `completed` |
| CLI exit `4` | `--wait` timed out but the job is still running. Poll it; don't resubmit |

Full list: https://developers.heygen.com/docs/error-codes.md
