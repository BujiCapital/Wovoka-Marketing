# wovoka.org films

No presenter and no voice. Each film is the live page recorded frame by frame in a headless browser, with
the page's own maps and captions, then encoded at 25 fps. 4:5 (1080×1350), silent, text burned in.

## 1. The buffalo map (21 s), `b-roll/buffalo-map-4x5.mp4`

| Time | On screen |
|---|---|
| 0–2 s | Title: the buffalo and the ration |
| 2–18 s | Hornaday's 1889 map plays year by year; the red dates are his, the year he gives for the end of the buffalo in each place |
| 18–21 s | 1 January 1889: 85 wild buffalo left in the United States. wovoka.org/buffalo |

Facts used: messages #3. Credit: "Map: Hornaday 1889, public domain. The shading between his dated places is ours."
Posted 21 Oct 2026.

## 2. The vanishing map (25 s), `b-roll/vanishing-map-4x5.mp4`

| Time | On screen |
|---|---|
| 0–3 s | The land each people held, as the Indian Claims Commission later found it (1978) |
| 3–22 s | The 1870, 1876, 1883, 1888 and 1892 maps cross-fade on top of it |
| 22–25 s | wovoka.org/map |

Facts used: messages #11. Credit: "Maps: Indian Claims Commission and USGS 1978; Walker 1874; Dodge 1877;
Office of Indian Affairs 1883, 1888 and 1892. All public domain." Posted 27 Oct 2026.

## Making another

Record a live page the same way: open it at 1080 wide, freeze the page clock, step it 40 ms per frame and
screenshot each frame, then `ffmpeg -framerate 25 -i f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 20`.
Use only what the page shows. Good next films: the silver infographic (/silver), the timeline's key moments.
