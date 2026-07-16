# /assets/fonts

Self-hosted display fonts.

- `darumadrop-one.woff2` — **Darumadrop One** (Google Fonts, SIL Open Font License). The primary display face, subset to Latin so it stays small. Licence text is in `OFL.txt`.
- `gochi-hand.woff2` — Gochi Hand (SIL Open Font License). Kept as a hand-lettered fallback.

The site chooses its face in one place: the `--font-display` variable near the top of `styles/main.css`. To swap the primary font, drop a new `woff2` in here, add an `@font-face`, and change that one variable. (`DarumadropOne-Regular.ttf` is the original download kept for re-subsetting if needed.)

Do not hotlink Google Fonts — self-hosting keeps the site private-by-default and avoids third-party requests.
