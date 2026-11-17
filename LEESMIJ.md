# Platenjukebox

Een web-app die je op je telefoon als app op het beginscherm zet. Hij haalt je collectie rechtstreeks bij Discogs op.

## Online zetten (gratis, via Cloudflare Pages)

1. Maak een gratis account op dash.cloudflare.com (een creditcard is niet nodig).
2. Ga naar **Workers & Pages** → **Create** → **Pages** → **Upload assets** (Direct Upload).
3. Geef het project een naam, bijvoorbeeld `platenjukebox`. Je adres wordt dan `platenjukebox.pages.dev`.
4. Sleep deze map erin (met `index.html`, `sw.js`, `manifest.webmanifest` en de map `icons`) en klik op **Deploy**.

Een nieuwe versie zet je online via **Create deployment** in hetzelfde project, en dan sleep je de map er opnieuw in. Verhoog dan eerst `VERSION` bovenaan `sw.js` (bijvoorbeeld van `pjb-1` naar `pjb-2`), zodat de telefoons de update oppakken.

Alternatief: GitHub Pages. Dat is ook gratis, maar alleen met een openbare repository. Dat is geen probleem, want er staan geen geheimen in de code.

## Installeren op je telefoon

- **iPhone:** open het adres in Safari → deelknop → **Zet op beginscherm**.
- **Android:** open het adres in Chrome → menu (⋮) → **App installeren** of **Toevoegen aan startscherm**.

Open daarna de app vanaf het beginscherm en koppel daar je Discogs. Op de iPhone heeft de app op het beginscherm een eigen geheugen, los van Safari.

## Discogs koppelen

- **Gebruikersnaam:** je Discogs-naam.
- **Persoonlijke token:** nodig voor de hoesfoto's en voor een privécollectie. Maak hem aan op discogs.com → Settings → Developers → **Generate new token**.

De token blijft alleen op het eigen apparaat. Iedereen koppelt dus zijn eigen account.
