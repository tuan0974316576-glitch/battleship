self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 呢度暫時留空，等佢直接行網絡，但有呢個檔先可以安裝
  e.respondWith(fetch(e.request));
});
