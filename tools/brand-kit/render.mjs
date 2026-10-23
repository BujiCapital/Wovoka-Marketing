// Renders the social set of a brand kit from <brand>/brand-kit/kit.json.
// Usage: npm i playwright && node tools/brand-kit/render.mjs <brand-folder> [<brand-folder> ...]
// Writes <brand>/brand-kit/social/: profile-1024.png, profile-400.png, logo-on-dark.png,
// logo-on-light.png, cover-linkedin-1584x396.png, cover-linkedin-page-1128x191.png (drawn at 2x),
// cover-facebook-1640x624.png, palette.png.
// --only <prefix> renders just the files whose names start with <prefix>, e.g. --only cover-linkedin-page
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function dataUri(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const mime = { svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' }[ext];
  return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;
}

function page(kit, dir, { w, h, ground, body }) {
  const f = kit.fonts;
  const fams = [f.head, f.body, f.mono].filter(Boolean)
    .map(n => `family=${encodeURIComponent(n).replace(/%20/g, '+')}:wght@400;500;600;700`).join('&');
  const c = kit.colors;
  const bg = ground === 'light' ? c.light_bg : c.bg;
  const fg = ground === 'light' ? c.light_fg : c.fg;
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${fams}&display=block">
<style>
*{margin:0;box-sizing:border-box}
html,body{width:${w}px;height:${h}px;overflow:hidden}
body{background:${bg};color:${fg};font-family:'${f.body}',sans-serif;display:flex;align-items:center;justify-content:center}
.wm{font-family:'${f.head}',serif;font-weight:${f.head_weight ?? 700};letter-spacing:${kit.wordmark_tracking ?? '0'};line-height:1;white-space:nowrap}
.sub{font-family:'${f.mono || f.body}',monospace;letter-spacing:.14em;text-transform:uppercase;opacity:.75}
.acc{color:${c.accent}}
.mark{display:block;object-fit:contain}
.mono{font-family:'${f.head}',serif;font-weight:${f.head_weight ?? 700};color:${c.accent};line-height:1}
</style></head><body>${body}</body></html>`;
}

function markHtml(kit, dir, size, ground) {
  const file = ground === 'light' ? (kit.mark_light || kit.mark) : kit.mark;
  if (file) return `<img class="mark" src="${dataUri(path.join(dir, file))}" style="width:${size}px;height:${size}px">`;
  return `<div class="mono" style="font-size:${Math.round(size * 0.62)}px">${esc(kit.mark_text)}</div>`;
}

function lockup(kit, dir, ground, scale) {
  const logo = ground === 'light' ? kit.logo_light : kit.logo_dark;
  if (logo) return `<img src="${dataUri(path.join(dir, logo))}" style="max-width:${1300 * scale}px;max-height:${300 * scale}px">`;
  return `<div style="display:flex;align-items:center;gap:${40 * scale}px">
    ${kit.mark || kit.mark_text ? markHtml(kit, dir, 190 * scale, ground) : ''}
    <div><div class="wm" style="font-size:${110 * scale}px">${esc(kit.wordmark)}</div>
    ${kit.wordmark_sub ? `<div class="sub" style="font-size:${30 * scale}px;margin-top:${16 * scale}px">${esc(kit.wordmark_sub)}</div>` : ''}</div></div>`;
}

const jobs = kit => [
  ['profile-1024.png', 1024, 1024, 'dark', d => `<div style="width:1024px;height:1024px;display:flex;align-items:center;justify-content:center">${markHtml(kit, d, 600, 'dark')}</div>`],
  ['profile-400.png', 400, 400, 'dark', d => markHtml(kit, d, 235, 'dark')],
  ['logo-on-dark.png', 1600, 480, 'dark', d => lockup(kit, d, 'dark', 1)],
  ['logo-on-light.png', 1600, 480, 'light', d => lockup(kit, d, 'light', 1)],
  ['cover-linkedin-1584x396.png', 1584, 396, 'dark', d => `<div style="text-align:center;padding:0 380px 0 380px">
     <div class="wm" style="font-size:64px;white-space:normal">${esc(kit.tagline)}</div>
     <div class="sub" style="font-size:22px;margin-top:22px"><span class="acc">${esc(kit.url)}</span></div></div>`],
  ['cover-linkedin-page-1128x191.png', 1128, 191, 'dark', d => `<div style="text-align:center;padding:0 150px">
     <div class="wm" style="font-size:38px;white-space:normal">${esc(kit.tagline)}</div>
     <div class="sub" style="font-size:13px;margin-top:12px"><span class="acc">${esc(kit.url)}</span></div></div>`, 2],
  ['cover-facebook-1640x624.png', 1640, 624, 'dark', d => `<div style="text-align:center;padding:0 160px">
     <div class="wm" style="font-size:78px;white-space:normal">${esc(kit.tagline)}</div>
     <div class="sub" style="font-size:26px;margin-top:28px"><span class="acc">${esc(kit.url)}</span></div></div>`],
  ['palette.png', 1600, 900, 'light', d => `<div style="width:1600px;height:900px;padding:90px;display:flex;flex-direction:column;gap:40px">
     <div class="wm" style="font-size:56px">${esc(kit.name)} · colour and type</div>
     <div style="display:flex;gap:24px;flex:1">${kit.palette.map(p => `<div style="flex:1;display:flex;flex-direction:column">
       <div style="flex:1;background:${p.hex};border-radius:14px;border:1px solid rgba(0,0,0,.12)"></div>
       <div style="font-size:26px;font-weight:600;margin-top:16px">${esc(p.name)}</div>
       <div class="sub" style="font-size:20px;margin-top:6px;letter-spacing:.06em">${esc(p.hex)}</div>
       <div style="font-size:19px;margin-top:6px;opacity:.75">${esc(p.use)}</div></div>`).join('')}</div>
     <div style="display:flex;gap:60px;font-size:24px"><div><span class="wm" style="font-size:40px">Aa</span> &nbsp;${esc(kit.fonts.head)} (headlines)</div>
       <div><span style="font-size:40px">Aa</span> &nbsp;${esc(kit.fonts.body)} (text)</div>
       ${kit.fonts.mono ? `<div><span class="sub" style="font-size:34px;opacity:1">Aa</span> &nbsp;${esc(kit.fonts.mono)} (labels)</div>` : ''}</div></div>`],
];

const args = process.argv.slice(2);
const oi = args.indexOf('--only');
const only = oi >= 0 ? args.splice(oi, 2)[1] : '';
const browser = await chromium.launch();
for (const brand of args) {
  const dir = path.join(brand, 'brand-kit');
  const kit = JSON.parse(fs.readFileSync(path.join(dir, 'kit.json'), 'utf8'));
  const out = path.join(dir, 'social');
  fs.mkdirSync(out, { recursive: true });
  for (const [name, w, h, ground, body, scale = 1] of jobs(kit)) {
    if (only && !name.startsWith(only)) continue;
    const p = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
    await p.setContent(page(kit, dir, { w, h, ground, body: body(dir) }), { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(out, name) });
    await p.close();
  }
  console.log('rendered', out);
}
await browser.close();
