// Nama cache yang digunakan (bisa diganti jika ingin memperbarui versi cache)
const CACHE_NAME = "wisata-app-cache-v1";

// Daftar file yang akan disimpan di cache
const urlsToCache = [
    "/", // halaman utama
    "/index.html",
    "/wisata.html",
    "/mitra.html",
    "sw.js", // file service worker itu sendiri
    "/css/style.css",
    "/css/responsive.css",
    "/css/css/bootstrap.min.css", 
    "/css/js/s/bootstrap.bundle.min.js", 
"css/fontawesome/css/fontawesome.min.css",
"css/fontawesome/css/all.min.css",

    "/css/css/bootstrap-grid.min.css", 
    "/app.js", // file JS utama yang mendaftarkan service worker

    // Daftar gambar yang digunakan dalam aplikasi
    "/images/101.jpg",
    "/images/about-img.png",
    "/images/banner-img.png",
    "/images/boncafe.jpg",
    "/images/borobudur.jpg",
    "/images/client-img.png",
    "/images/cndi.jpg",
    "/images/galeria.jpg",
    "/images/icon-1.png",
    "/images/icon-2.png",
    "/images/icon-3.png",
    "/images/icon-4.png",
    "/images/img-1.png",
    "/images/img-2.png",
    "/images/img-3.png",
    "/images/img-4.png",
    "/images/img-5.png",
    "/images/jogja_sunrise.jpg",
    "/images/kano.jpg",
    "/images/kebondalem.jpg",
    "/images/logo.png",
    "/images/malioboro.jpg",
    "/images/nol_kilometer.png",
    "/images/padang.jpg",
    "/images/pindul.jpg",
    "/images/quick-icon.png",
    "/images/sateklatak.jpg",
    "/images/silil.jpg",
    "/images/sundek.jpg",
    "/images/tugu_jogja.jpg",
    "/images/Tugu.jpg"
];

// EVENT: Saat service worker diinstal
// Menyimpan seluruh file dalam urlsToCache ke cache browser
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache); // Menyimpan semua URL yang sudah ditentukan
      })
  );
});

// EVENT: Saat browser melakukan request (fetch)
// Mengecek apakah ada file yang tersimpan di cache, jika tidak maka ambil dari jaringan
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request) // Coba cocokkan request dengan yang ada di cache
      .then(response => {
        return response || fetch(event.request); // Jika tidak ditemukan di cache, ambil dari internet
      })
  );
});

// EVENT: Saat service worker diaktifkan
// Menghapus cache lama jika nama cachenya tidak cocok
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name); // Hapus cache yang lama
          }
        })
      );
    })
  );
});
