// Mengecek apakah browser mendukung fitur Service Worker
if ('serviceWorker' in navigator) {

    // Menunggu sampai seluruh halaman dimuat (termasuk semua resource seperti gambar dan CSS)
    window.addEventListener('load', function () {

        // Mendaftarkan service worker dari file 'sw.js'
        navigator.serviceWorker.register('sw.js')

            // Jika berhasil, fungsi ini akan dipanggil
            .then(function (registration) {
                // Menampilkan pesan di console bahwa service worker berhasil terdaftar
                console.log('✅ Service Worker terdaftar:', registration.scope);
            })

            // Jika gagal mendaftar (misalnya file tidak ditemukan atau error lainnya), fungsi ini akan dipanggil
            .catch(function (err) {
                // Menampilkan pesan error di console
                console.log('❌ Service Worker gagal:', err);
            });
    });

}
