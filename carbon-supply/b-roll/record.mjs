// Records the Carbon.Supply b-roll clips from the live site.
// Usage: npm i playwright && node record.mjs <out-dir> [shot,shot]
// Then convert, e.g.: ffmpeg -ss 1 -i in.webm -vf "fps=30,format=yuv420p" -c:v libx264 -crf 24 out.mp4
// (portrait: add scale=1080:1920:flags=lanczos). The site skips analytics for automated browsers.
import { chromium } from 'playwright';
import fs from 'fs';
const OUT = process.argv[2]; const only = process.argv[3];
const b = await chromium.launch(process.env.HTTPS_PROXY ? { proxy: { server: process.env.HTTPS_PROXY }, args:['--ignore-certificate-errors'] } : {});
const sleep = ms => new Promise(r=>setTimeout(r,ms));
async function smooth(p, px, ms){ await p.evaluate(async ([px,ms])=>{ const s=window.scrollY,t0=performance.now(); await new Promise(res=>{ function f(t){const k=Math.min(1,(t-t0)/ms); const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2; window.scrollTo(0,s+px*e); k<1?requestAnimationFrame(f):res();} requestAnimationFrame(f);}); },[px,ms]); }
async function toSel(p, sel, off=80){ const y = await p.evaluate(([s,o])=>{const el=document.querySelector(s); return el? el.getBoundingClientRect().top+window.scrollY-o : null},[sel,off]); return y; }
const shots = {
  'home-hero': async p => { await p.goto('https://carbon.supply/',{waitUntil:'networkidle'}); await sleep(3500); await smooth(p,700,5000); await sleep(2500); },
  'home-live-tape': async p => { await p.goto('https://carbon.supply/',{waitUntil:'networkidle'}); const y=await p.evaluate(()=>{const h=[...document.querySelectorAll('*')].find(e=>e.children.length<3&&/Live from the registries/.test(e.textContent)); return h? h.getBoundingClientRect().top+scrollY-100:600}); await p.evaluate(y=>scrollTo(0,y),y); await sleep(9000); },
  'search-project': async p => { await p.goto('https://carbon.supply/',{waitUntil:'networkidle'}); const inp=p.locator('input[placeholder^="Name, registry ID"]').first(); await inp.scrollIntoViewIfNeeded(); await p.evaluate(()=>scrollBy(0,-250)); await sleep(1200); await inp.click(); await inp.pressSequentially('VCS 5584',{delay:180}); await sleep(1500); await inp.press('Enter'); await p.waitForLoadState('networkidle').catch(()=>{}); await sleep(4000); },
  'latest-moves': async p => { await p.goto('https://carbon.supply/latest/',{waitUntil:'networkidle'}); await sleep(2500); await smooth(p,1400,9000); await sleep(1500); },
  'project-page': async p => { await p.goto('https://carbon.supply/p/verra/5584/',{waitUntil:'networkidle'}); await sleep(3000); await smooth(p,1100,8000); await sleep(1500); },
  'story-pipeline-chart': async p => { await p.goto('https://carbon.supply/analysis/pipeline-841-million-tonnes/',{waitUntil:'networkidle'}); await sleep(3000); await smooth(p,1600,10000); await sleep(1500); },
  'story-late-to-verify': async p => { await p.goto('https://carbon.supply/analysis/late-to-verify-worldwide/',{waitUntil:'networkidle'}); await sleep(3000); await smooth(p,1600,10000); await sleep(1500); },
  'editions': async p => { await p.goto('https://carbon.supply/why/',{waitUntil:'networkidle'}); await sleep(2500); await smooth(p,900,7000); await sleep(2000); },
  'country-guide': async p => { await p.goto('https://carbon.supply/guides/philippines/',{waitUntil:'networkidle'}); await sleep(3000); await smooth(p,1400,9000); await sleep(1500); },
};
const sizes = { landscape:{width:1920,height:1080,dpr:1}, portrait:{width:540,height:960,dpr:1} };
for (const [name,fn] of Object.entries(shots)) {
  if (only && !only.split(',').includes(name)) continue;
  for (const [o,s] of Object.entries(sizes)) {
    const dir=`${OUT}/raw/${name}-${o}`; fs.rmSync(dir,{recursive:true,force:true});
    const ctx = await b.newContext({ viewport:{width:s.width,height:s.height}, deviceScaleFactor:s.dpr, recordVideo:{dir, size:{width:s.width*s.dpr,height:s.height*s.dpr}}, colorScheme:'dark' });
    const p = await ctx.newPage();
    await p.addInitScript(()=>{ const hide=()=>{ document.querySelectorAll('button,a,div').forEach(e=>{ if(e.textContent.trim()==='Feedback' && getComputedStyle(e).position==='fixed') e.style.display='none'; }); }; document.addEventListener('DOMContentLoaded',()=>{hide(); setInterval(hide,300);}); });
    try { await fn(p); console.log('ok',name,o); } catch(e){ console.log('FAIL',name,o,e.message.split('\n')[0]); }
    await ctx.close();
  }
}
await b.close();
