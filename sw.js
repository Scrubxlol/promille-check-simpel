const CACHE = 'promille-overview-v3-' + (self.registration?.scope || ''); // unique per scope
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(CORE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// Network-first, fallback to cache
self.addEventListener('fetch', (event) => {
  const req = event.request;
  event.respondWith((async () => {
    try {
      const net = await fetch(req, { cache: 'no-store' });
      // put a copy in cache (only for GET)
      if (req.method === 'GET' && net && net.ok) {
        const cache = await caches.open(CACHE);
        cache.put(req, net.clone());
      }
      return net;
    } catch (e) {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      return cached || Response.error();
    }
  })());
});
