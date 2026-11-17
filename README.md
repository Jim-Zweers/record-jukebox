# Platenjukebox

A web app you add to your phone's home screen. It fetches your record collection straight from Discogs. The app itself is in Dutch.

## Hosting (free, via Cloudflare Pages)

1. Create a free account at dash.cloudflare.com (no credit card needed).
2. Go to **Workers & Pages** → **Create** → **Pages** → **Upload assets** (Direct Upload).
3. Give the project a name, for example `platenjukebox`. Your address will then be `platenjukebox.pages.dev`.
4. Drag this folder in (with `index.html`, `sw.js`, `manifest.webmanifest` and the `icons` folder) and click **Deploy**.

To publish a new version, use **Create deployment** in the same project and drag the folder in again. First bump `VERSION` at the top of `sw.js` (for example from `pjb-1` to `pjb-2`), so phones pick up the update.

Alternative: GitHub Pages. Also free, but only with a public repository. That is fine, as there are no secrets in the code.

## Installing on your phone

- **iPhone:** open the address in Safari → Share button → **Add to Home Screen**.
- **Android:** open the address in Chrome → menu (⋮) → **Install app** or **Add to Home screen**.

Then open the app from the home screen and connect your Discogs account there. On iPhone, the home screen app has its own storage, separate from Safari.

## Connecting Discogs

- **Username:** your Discogs username.
- **Personal token:** needed for cover art and for a private collection. Create one at discogs.com → Settings → Developers → **Generate new token**.

The token stays on your own device only, so everyone connects their own account.
