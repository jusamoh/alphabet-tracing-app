const CACHE_NAME = 'alphabet-app-cache-v1';
const urlsToCache = [
  '/alphabet-tracing-app/',
  '/alphabet-tracing-app/index.html',
  '/alphabet-tracing-app/app.js',
  '/alphabet-tracing-app/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
