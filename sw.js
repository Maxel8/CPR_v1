// sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cpr-taktgeber-v1').then(cache => {
      return cache.addAll([
        './',
        './hlw.html',
        './timer_beep.mp3',
        './manifest.json',
        './img.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
