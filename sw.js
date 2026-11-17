// Verhoog VERSION bij elke nieuwe upload, dan pakken de telefoons de nieuwe versie op.
const VERSION = 'pjb-1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
const IMG = 'pjb-img';
const FONTS = 'pjb-fonts';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => ![VERSION, IMG, FONTS].includes(k)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function trimImages() {
  const c = await caches.open(IMG), keys = await c.keys();
  for (const k of keys.slice(0, Math.max(0, keys.length - 600))) await c.delete(k);
}

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.hostname === 'api.discogs.com') return;

  // Hoesfoto's: eerst uit de cache, zodat ze ook offline zichtbaar zijn.
  if (req.destination === 'image' && url.hostname.endsWith('discogs.com')) {
    e.respondWith(caches.open(IMG).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === 'opaque') { c.put(req, res.clone()); trimImages(); }
      return res;
    }));
    return;
  }

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(res => { c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }

  // De app zelf: eerst het netwerk (voor updates), anders de cache.
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
  }
});
