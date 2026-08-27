const CACHE_NAME = 'science-zero-v1';
const ASSETS = [
  './',
  './index.html'
];

// ติดตั้ง Service Worker และบันทึกไฟล์ลง Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// เรียกใช้งาน Cache เมื่อไม่มีอินเทอร์เน็ต
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
