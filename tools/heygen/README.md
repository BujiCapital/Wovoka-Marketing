# HeyGen: how we use it

HeyGen makes our presenter videos: Lee Pearson's avatar speaking a script over screen recordings, data and
landscapes. This folder records how to drive it well, whether you type a brief into the HeyGen app, ask an AI
assistant to do it, or run it from the command line.

Checked against HeyGen's developer documentation on 13 Oct 2026. HeyGen ships changes most weeks, so before
relying on a detail, re-check it in their docs index: https://developers.heygen.com/llms.txt (an AI
assistant should read that file first).

## Pick a route

| Route | What it is | Sign-in and billing | Use it for |
|---|---|---|---|
| **HeyGen app** (Video Agent chat) | Type a brief at app.heygen.com and attach files | Your HeyGen login; plan credits | One-off videos, trying a script, reviewing and fixing a render |
| **MCP** | HeyGen as a connector inside Claude or another assistant | OAuth to your HeyGen account; plan credits | Quick tries from an assistant, small numbers |
| **CLI** (`heygen`) | HeyGen's command-line tool, a wrapper for the v3 API | API key in `HEYGEN_API_KEY`; API billing | Repeatable work: uploading a brand's files, rendering scripts, batches |
| **API** (v3) | HTTPS calls to `api.heygen.com` | API key; API billing | Pipelines, webhooks, anything the CLI doesn't cover |

HeyGen's own advice is "API key first": the CLI or API for anything repeatable or at scale, and MCP for a new
user's first few test videos. Our default follows it: the CLI with an API key for brand work, and the app for
reviewing and editing what it made.

## Our rules, applied to HeyGen

The rules in the [top-level README](../../README.md) apply to every video. In HeyGen they mean:

1. **Only Lee's avatar and voice.** Lee's avatar is a digital twin trained from his own footage, and HeyGen
   clones his voice from the same recording. HeyGen won't render a digital twin until the person in it has
   recorded their consent. Always name his avatar and voice in the request. If you leave them out, the Video
   Agent chooses for you, and it may pick a stock presenter. Never make a photo avatar or a prompt-generated
   avatar of anyone.
2. **Only sourced numbers.** The Video Agent writes and illustrates on its own. Give it the brand's numbers word
   for word from `messages.md` and tell it to use only those. Check every number in the render.
3. **No identifiable people in the visuals.** The agent adds stock footage and AI-generated scenes unless you
   direct it. Ask for motion graphics, our own screen recordings and landscapes, then check every frame.
4. **Licensed music only.** HeyGen's own music catalogue is fine. Note the track with the draft.
5. **A render is a draft.** Download it and put it on the content desk with its caption and the list of facts
   used. Nothing posts from HeyGen directly; approved posts go out through Postiz.
6. **The API key never goes in this repo, a prompt, a chat or a file.** This repo is public. The key lives only
   in the environment as `HEYGEN_API_KEY`. If it leaks, rotate it on HeyGen's API dashboard.

## How a video gets made

1. **Read the brand folder:** its `README.md`, `messages.md`, `guardrails.md` and `video/scripts.md`.
2. **Write the brief** from the template in [prompting.md](prompting.md).
3. **Render** it in the app ([app-chat.md](app-chat.md)) or with the CLI ([api-and-cli.md](api-and-cli.md)),
   with Lee's avatar, the brand kit, the pronunciation glossary and the b-roll.
4. **Review** it against the checklist in [prompting.md](prompting.md#review-before-the-content-desk).
5. **Fix only the scenes that are wrong.** HeyGen can edit named scenes and leave the rest alone, which is
   faster and cheaper than a new render.
6. **Hand it over:** put the video, caption and facts list on the content desk.

## In this folder

| File | What it covers |
|---|---|
| [app-chat.md](app-chat.md) | Working in the HeyGen app's chat, and what it can and can't read (learned 13 Oct 2026) |
| [prompting.md](prompting.md) | Writing a Video Agent brief that lands first time; our prompt template; the review checklist |
| [api-and-cli.md](api-and-cli.md) | The API and CLI: setup, brand kit, glossary, uploads, rendering, scene edits, limits, errors |
| [mcp.md](mcp.md) | Using HeyGen from Claude or another assistant over MCP |
| [avatar.md](avatar.md) | Lee's avatar: testing it, recording a better one, the voice, and the render settings that suit it |
| [capabilities.md](capabilities.md) | Everything HeyGen can do (all 96 MCP tools), and which ones we use, avoid or ask Lee about |
| [recipes.md](recipes.md) | Marketing workflows: a brand video, a batch of shorts, a page or newsletter into video, translation, clips |

## Worked example

[`carbon-supply/`](../../carbon-supply/) is the first brand made with HeyGen. Its
[scripts](../../carbon-supply/video/scripts.md), [b-roll](../../carbon-supply/b-roll/) and
[brand rules](../../carbon-supply/brand.md) show what a brand folder needs before HeyGen can use it.

## HeyGen pages this guide is based on

All read 13 Oct 2026:

- For AI agents: https://developers.heygen.com/docs/for-ai-agents.md
- Prompting guide: https://developers.heygen.com/docs/prompting-guide.md
- Writing effective video prompts: https://developers.heygen.com/writing-effective-video-prompts.md
- Video Agent: https://developers.heygen.com/docs/video-agent.md
- Interactive sessions: https://developers.heygen.com/docs/interactive-sessions.md
- Edit scenes: https://developers.heygen.com/docs/edit-scenes.md
- Brand kits and glossary: https://developers.heygen.com/docs/on-brand.md
- Avatars and consent: https://developers.heygen.com/docs/avatar-from-video.md and https://developers.heygen.com/docs/avatar-consent.md
- Models (Avatar III, IV, V): https://developers.heygen.com/models.md
- CLI: https://developers.heygen.com/cli.md and https://developers.heygen.com/commands.md
- MCP, including the full tool list: https://developers.heygen.com/mcp/overview.md
- Skills for AI assistants: https://developers.heygen.com/skills/overview.md
- Usage limits: https://developers.heygen.com/docs/usage-limits.md
- Version timeline (v1 and v2 retire 31 Oct 2026): https://developers.heygen.com/endpoint-version-comparison.md
- Cookbook: https://developers.heygen.com/overview.md
- Changelog: https://developers.heygen.com/changelog.md
