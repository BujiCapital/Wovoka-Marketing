# HeyGen from Claude or another assistant (MCP)

HeyGen runs a remote MCP server, so an AI assistant can make and edit HeyGen videos on your behalf from a
chat. It signs in as your HeyGen account (OAuth, no API key) and uses your plan's credits.

HeyGen sizes this route for trying things: a few videos from a new user. For repeatable or batch work, use
the CLI with an API key ([api-and-cli.md](api-and-cli.md)); if `HEYGEN_API_KEY` is set, HeyGen's skills use
the CLI anyway.

## Connect it

The server address is:

```
https://mcp.heygen.com/mcp/v1/
```

- **Claude (web and desktop):** **+** → **Connectors** → **Manage connectors** → **Add custom connector**.
  Name it `HeyGen`, paste the address, press **Connect** and approve on HeyGen. Needs a paid Claude plan;
  HeyGen recommends its Creator plan or above.
- **Claude Code:** `claude mcp add --transport http -s user heygen https://mcp.heygen.com/mcp/v1/`, then
  `/mcp`, pick `heygen` and approve in the browser. Leave out `-s user` to add it to one project only.
- **Others** (Cursor, Gemini CLI, ChatGPT, Manus and more): setup pages are linked from
  https://developers.heygen.com/mcp/overview.md.
- To check it works, ask the assistant to call `get_current_user`.

Videos made this way also appear under **Projects** in the HeyGen app.

## What the assistant can do

The MCP tools mirror the v3 API. The ones we use most:

| Tool | Does |
|---|---|
| `create_video_agent`, `send_video_agent_message`, `get_video_agent_session` | Brief the Video Agent, answer its questions, approve its plan |
| `get_video_scenes`, then `send_video_agent_message` with an `edit_plan` | Fix only the scenes that are wrong |
| `create_video`, `get_video` | A direct avatar or studio render, and its status and download link |
| `list_avatar_groups`, `list_avatar_looks` | Find Lee's avatar and look |
| `create_brand_kit`, `list_brand_kits`, `create_brand_glossary` | Brand colours, fonts, logo; pronunciation |
| `create_asset_upload`, `complete_asset_upload` | Upload b-roll and logos |
| `search_audio_sounds` | Find background music or sound effects in HeyGen's catalogue by description |
| `create_video_translation` | Translate and lip-sync a finished video |
| `create_ai_clipping` | Cut short clips from a long video |
| `list_video_agent_styles` | HeyGen's ready-made visual styles |

## Working this way

- **Same rules, same brief.** The assistant should read the brand folder and write the brief from
  [prompting.md](prompting.md), with Lee's avatar and voice named.
- **Let it ask for the plan first** (`chat` mode), and approve before it renders.
- **Turn on "Always allow"** for the HeyGen connector only if you're happy for every call to run without a
  prompt. Each render spends credits.
- **No auto-posting.** Whatever the assistant makes is a draft for the content desk.
