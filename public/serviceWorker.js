const CACHE_NAME = "v2";

const self = this;

self.addEventListener("install", (e) => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");

  if (!(e.request.url.indexOf("http") === 0)) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });

        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((CACHE_NAMEs) => {
      return Promise.all(
        CACHE_NAMEs.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing Old Cache");

            return caches.delete(cache);
          }
        })
      );
    })
  );
});
