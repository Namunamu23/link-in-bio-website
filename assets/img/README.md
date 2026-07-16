# /assets/img

Drop image files here.

- `og-cover.png` — 1200x630, used by Open Graph and Twitter cards. A placeholder is generated; replace with the real cover art.
- `ig-bridgeli.png` — square, ~200x200. Profile picture for the Main account (@bridgeli__), shown in its row inside the modal.
- `ig-anykk.png` — square, ~200x200. Profile picture for the Art account (@anykk_o), shown in its row inside the modal.
  The modal code already renders these automatically (see `data/content.js` → `socials.instagram[].avatar`). Until the files exist, each row falls back to the account's first initial, so nothing ever looks broken.
- Any other artwork or photography goes here. Prefer optimized `.webp` or `.png`.
