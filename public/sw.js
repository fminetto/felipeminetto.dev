const CACHE_KEY = "assets";

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse=>{
            const networkResponse = fetch(event.request).then(response=>{
                caches.open(CACHE_KEY).then(cache=>{
                    cache.put(event.request, response.clone());
                })
            });
            return cachedResponse || networkResponse;
        })
    );
})