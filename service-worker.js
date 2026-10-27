const CACHE_NAME = 'gatosudokuai-pwa-v1.17';
const APP_SHELL = [
  './', './index.html', './manifest.webmanifest', './browserconfig.xml',
  './icons/favicon.ico', './icons/favicon-16x16.png', './icons/favicon-32x32.png', './icons/favicon-48x48.png',
  './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png',
  './icons/icon-192-maskable.png', './icons/icon-512-maskable.png',
  './icons/android-chrome-192x192.png', './icons/android-chrome-512x512.png', './icons/mstile-150x150.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('gatosudokuai-pwa-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)).catch(() => {});
      }
      return response;
    }).catch(() => caches.match('./index.html').then(cached => cached || caches.match('./'))));
    return;
  }
  event.respondWith(caches.match(req).then(cached => {
    if (cached) return cached;
    return fetch(req).then(response => {
      if (response && response.ok && response.type === 'basic') {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
      }
      return response;
    });
  }));
});
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
