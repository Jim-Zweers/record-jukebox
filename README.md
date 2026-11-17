# Platenjukebox

A web app you add to your phone's home screen. It fetches your record collection straight from Discogs. The app itself is in Dutch.

## Installing on your phone

- **iPhone:** open the site in Safari → Share button → **Add to Home Screen**.
- **Android:** open the site in Chrome → menu (⋮) → **Install app** or **Add to Home screen**.

Then open the app from the home screen and connect your Discogs account there. On iPhone, the home screen app has its own storage, separate from Safari.

## Connecting Discogs

- **Username:** your Discogs username.
- **Personal token:** needed for cover art and for a private collection. Create one at discogs.com → Settings → Developers → **Generate new token**.

The token stays on your own device only, so everyone connects their own account.

## Releasing a new version

Bump `VERSION` at the top of `sw.js` with every release (for example from `pjb-1` to `pjb-2`), so phones pick up the update.
