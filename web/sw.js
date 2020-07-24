var cacheName = 'v1';
var contentToCache = [
    "/",
    "/public/bundle.js",
    "/public/bundle.js.map",
    "/public/global.css",
    "/public/manifest.json",
    "/public/img/down.svg",
    "/public/img/favicon.ico",
    "/public/img/icon.png",
    "/public/img/loader.gif",
    "/public/img/trash.svg",
    "/public/img/up.svg",
    "/public/img/icons/icon-72x72.png",
    "/public/img/icons/icon-96x96.png",
    "/public/img/icons/icon-128x128.png",
    "/public/img/icons/icon-144x144.png",
    "/public/img/icons/icon-152x152.png",
    "/public/img/icons/icon-192x192.png",
    "/public/img/icons/icon-384x384.png",
    "/public/img/icons/icon-512x512.png"
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation');

    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Mise en cache globale');
            return cache.addAll(contentToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => {
            //console.log('[Service Worker] Récupération de la ressource: '+e.request.url);
            return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
                    //console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});