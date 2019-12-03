console.log("Press f for respect")
console.log("Hello from your service worker!");
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/loadPosts.js",
  "/assets/images/Angular-icon.png",
  "/assets/images/React-icon.png",
  "/assets/images/Vue.js-icon.png",
  "/manifest.webmanifest",
  "/favicon.ico",
  "/assets/images/icons/icon_72x72.jpeg",
  "/assets/images/icons/icon_96x96.jpeg",
  "/assets/images/icons/icon_128x128.jpeg",
  "/assets/images/icons/icon_144x144.jpeg",
  "/assets/images/icons/icon_192x192.jpeg",
  "/assets/images/icons/icon_384x384.jpeg",
  "/assets/images/icons/icon_512x512.jpeg",
];

const CACHE_NAME = "static-cache-v2"
const DATA_CACHE_NAME = "data-cache-v1"

// install
self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});
self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then(cache => {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// fetch
self.addEventListener("fetch", function (evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);

          });
      }).catch(err => {
        console.log(err)
      })
    );

    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});