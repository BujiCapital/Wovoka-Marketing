# Everything HeyGen can do

The full list of what an assistant or script can ask HeyGen to do, taken from HeyGen's MCP overview
(https://developers.heygen.com/mcp/overview.md), checked 13 Oct 2026: 96 tools.

The names are the MCP tool names. Each one matches a v3 API endpoint, and most have a `heygen` CLI
command, so the same list serves an assistant, the CLI and the API. The CLI and API also do a few things MCP
doesn't list, such as background removal and proofreading a translation before it renders. HeyGen adds tools
often; re-check the page before relying on this list.

The **For us** column applies our rules from the [README](README.md#our-rules-applied-to-heygen):

- **Use**: part of normal work.
- **Ask first**: permanent, or spends noticeably more; get the go-ahead in the moment.
- **Lee only**: about Lee's avatar or voice; Lee does it, or says yes to it first.
- **Don't**: breaks one of our rules.

## Video Agent

The agent that writes, designs and renders a video from a brief. See [prompting.md](prompting.md).

| Tool | What it does | For us |
|---|---|---|
| `create_video_agent` | Starts a video from a brief. `generate` runs straight through; `chat` stops to ask questions and show a plan | Use, in `chat` mode, with Lee's avatar and voice named |
| `send_video_agent_message` | Replies to the agent: answers, approves the plan, or sends an `edit_plan` that changes named scenes | Use |
| `get_video_agent_session` | Status, progress, the `video_id` and recent messages | Use |
| `list_video_agent_sessions` | Past sessions, newest first | Use |
| `list_video_agent_session_videos` | Every draft a session has made, newest first | Use, to find an earlier draft |
| `get_video_agent_resource` | One item from a session: an image, a draft, an avatar, a voice | Use |
| `stop_video_agent_session` | Halts a run at its next checkpoint and keeps what's done | Use when the plan was wrong, before it spends more |
| `list_video_agent_styles` | HeyGen's ready-made visual styles, filtered by tag (for example `cinematic`) | Use |

## Videos

| Tool | What it does | For us |
|---|---|---|
| `create_video` | An avatar speaks an exact script or audio track, with lip-sync. Choose Avatar III, IV or V with `engine` | Use with Lee's look only. Never animate a photo of a person |
| `get_video` | Status, download link, thumbnail, and why it failed if it did | Use |
| `get_video_scenes` | A video's scenes and the `edit_version` needed to edit one | Use |
| `list_videos` | All videos, filtered by folder or title | Use |
| `delete_video` | Deletes a video and its files for good | Ask first |

## Templates

A template is a finished video with named slots (a script line, an image, a clip) that change from one
video to the next. This is how a repeatable weekly format would work. Not tried yet.

| Tool | What it does | For us |
|---|---|---|
| `create_template` | Turns one of our videos into a private template, copying its scenes, avatar, script and media | Use |
| `set_template_variables` | Declares which parts change. Replaces the full set: a slot you leave out is removed | Use |
| `get_template` | A template's slots with their current values, in the shape `generate_from_template` takes | Use |
| `generate_from_template` | Makes a video by filling the slots; can pick, reorder or repeat scenes | Use |
| `list_templates` | Templates ready for the API (only those with slots) | Use |
| `update_template` | Renames a template; layout changes happen in HeyGen's editor | Use |
| `delete_template` | Removes a template; videos already made from it stay | Ask first |

## Avatars

| Tool | What it does | For us |
|---|---|---|
| `list_avatar_groups` | Avatar characters, filtered by ownership (`private` shows ours) | Use, to find Lee's |
| `list_avatar_looks` | A character's looks (outfits, poses, settings). A look's id is the `avatar_id` a render takes | Use |
| `get_avatar_look` | One look: which engines it supports, its preferred orientation, previews, training status | Use |
| `get_avatar_group` | One character: its default voice, previews, training status | Use |
| `update_avatar_look` | Renames a look | Use |
| `update_avatar_group` | Sets the character's default voice | Lee only |
| `create_avatar_consent` | A link where the person in a private avatar records their consent (lasts 24 hours, one use) | Lee only, for his own avatar |
| `list_look_templates` | Look templates and Look Packs that can restyle an avatar | Lee only |
| `create_avatar_looks` | New looks for an existing avatar, billed per look. Not available on HeyGen's free tier over MCP | Lee only |
| `create_avatar` | A new avatar from a photo, from footage (a digital twin) or from a text prompt | Don't: Lee's twin already exists, and we never make photo or prompt avatars |
| `delete_avatar_look` | Deletes a look. Deleting a character's last look deletes the character | Don't |
| `delete_avatar_group` | Deletes a character and all its looks | Don't |

## Voices

| Tool | What it does | For us |
|---|---|---|
| `list_voices` | Voices, filtered by type, engine, language and gender | Use |
| `get_voice` | One voice, including a clone's training status | Use |
| `create_speech` | Text to an audio file in a chosen voice, with optional word timings | Lee's voice only |
| `design_voice` | Up to three stock voices that match a description | Don't: we use Lee's voice |
| `clone_voice` | Clones a voice from an audio file | Lee only, of his own voice |
| `delete_voice` | Deletes a voice clone | Don't |

## Audio

| Tool | What it does | For us |
|---|---|---|
| `search_audio_sounds` | Searches HeyGen's music (default) or sound effects by description; each result has a download link | Use. Note the track with the draft |

## Brand

See [api-and-cli.md](api-and-cli.md#brand-kit).

| Tool | What it does | For us |
|---|---|---|
| `create_brand_kit` | Builds a kit of logos, colours and fonts by reading a public website | Use, on our own sites only |
| `get_brand_kit` | One kit and the role each colour, logo and font plays. Poll until `completed` | Use |
| `update_brand_kit` | Renames a kit or reassigns roles. A role you send replaces that whole role; `{}` clears it | Use |
| `list_brand_kits` | All kits in the workspace | Use |
| `delete_brand_kit` | Deletes a kit; videos already made keep their look | Ask first |
| `create_brand_glossary` | A list of how to say our terms, and which words never to translate. Names must be unique | Use |
| `get_brand_glossary` | One glossary with all its terms | Use |
| `update_brand_glossary` | Changes a glossary. A list you send replaces the old one in full; an empty list clears it | Use. Read it, add to it, send it all back |
| `list_brand_glossaries` | All glossaries in the workspace | Use |
| `delete_brand_glossary` | Deletes a glossary | Ask first |

## Assets

The files a video uses: b-roll, logos, audio. Each upload gets a link anyone can open, so upload only
material that's already public.

| Tool | What it does | For us |
|---|---|---|
| `create_asset_upload` | Starts an upload and returns a link to send the file to | Use |
| `complete_asset_upload` | Finishes it; the file becomes a reusable `asset_id` | Use |
| `get_asset` | An asset's details and its public link | Use |
| `list_assets` | Uploaded files, newest first (beta: may change at short notice) | Use |
| `delete_asset` | Deletes an asset for good | Ask first |
| `create_asset_upload_batch` | Upload links for up to 100 files at once | Use, for a brand's whole b-roll folder |
| `complete_asset_batch` | Finishes every file in the batch | Use |
| `get_asset_batch` | The batch's progress, file by file | Use |
| `bulk_asset_statuses` | Status of up to 100 assets | Use |

## Folders

| Tool | What it does | For us |
|---|---|---|
| `create_folder` | A folder for finished videos and translations. Names needn't be unique, so keep the id | Use: one folder per brand keeps drafts apart (our convention) |
| `get_folder` | Checks a folder still exists | Use |

## Translation

See [recipes.md](recipes.md#5-translate-a-finished-video).

| Tool | What it does | For us |
|---|---|---|
| `create_video_translation` | Translates a video into one or more languages in the same voice, with lip-sync. `speed` is quicker, `precision` syncs better | Use, on approved videos, checked by a speaker of the language |
| `list_video_translation_languages` | The language names it accepts | Use |
| `get_video_translation` | Status, download link, and why it failed if it did | Use |
| `list_video_translations` | All translation jobs | Use |
| `update_video_translation` | Renames a translation | Use |
| `delete_video_translation` | Deletes a translation for good | Ask first |
| `create_video_translation_batch` | Up to 100 translations in one go; each language runs on its own | Use |
| `get_video_translation_batch` | The batch's progress, item by item | Use |
| `bulk_video_translation_statuses` | Status of up to 100 translations | Use |

## Lip-sync

Puts new audio on an existing video and redraws the mouth to match. No translation and no new voice: you
bring the audio.

| Tool | What it does | For us |
|---|---|---|
| `create_lipsync` | Replaces a video's audio and re-syncs the lips. `speed` or `precision` | Lee's voice only, saying words that are approved |
| `get_lipsync` | Status, download link and captions | Use |
| `list_lipsyncs` | All lip-sync jobs | Use |
| `update_lipsync` | Renames a job | Use |
| `delete_lipsync` | Deletes a job for good | Ask first |
| `create_lipsync_batch` | Up to 100 lip-sync jobs at once | Lee's voice only |
| `get_lipsync_batch` | The batch's progress, item by item | Use |
| `bulk_lipsync_statuses` | Status of up to 100 lip-sync jobs | Use |

## AI clipping

See [recipes.md](recipes.md#6-clips-from-a-long-video).

| Tool | What it does | For us |
|---|---|---|
| `create_ai_clipping` | Cuts short clips from a long video, by length and shape | Use, only on recordings where everyone on screen agreed to appear |
| `get_ai_clipping` | The clips, their status and download links | Use |
| `list_ai_clipping` | All clipping jobs, newest first | Use |
| `delete_ai_clipping` | Deletes a job and its clips | Ask first |

## Batches

| Tool | What it does | For us |
|---|---|---|
| `create_video_batch` | Up to 100 `create_video` requests in one call | Use |
| `get_video_batch` | The batch's progress, video by video | Use |
| `bulk_video_statuses` | Status of up to 100 videos or batches | Use |

## HeyGen's own models

| Tool | What it does | For us |
|---|---|---|
| `create_model_video` | Generates a 5 to 15 second scene with sound from a prompt, an image or references (HeyGen Video) | Use for landscapes or abstract shots only; check every frame for people |
| `get_model_video` | Its status and download link | Use |
| `generate_model_speech` | Speech in a HeyGen Voice clone, as a WAV file | Lee's voice only. Over MCP each request is rounded up to a whole billing unit, so it can cost more than with an API key |
| `list_model_audio_voices` | Our HeyGen Voice clones, instant and professional | Use |
| `get_model_audio_voice` | One clone's training status | Use |
| `create_model_audio_voice` | Trains an instant or professional voice clone | Lee only, of his own voice |
| `delete_model_audio_voice` | Deletes a clone | Don't |
| `create_image_generation` | Portraits that keep a person's face in a new pose, outfit or background | Don't: it makes images of people |
| `get_image_generation` | The portraits from that job | Don't |

## Filler words

| Tool | What it does | For us |
|---|---|---|
| `create_filler_word_removal` | Cuts "um", "uh" and long silences from a recording. Refunded if nothing changes | Use |
| `get_filler_word_removal` | The cleaned video and how much it cut | Use |

## Account

| Tool | What it does | For us |
|---|---|---|
| `get_current_user` | The signed-in account, credits left, and billing details | Use: check credits before a batch |
