# Academic Support Center (ASC) Website

Website statis responsive untuk GitHub Pages.

## Fitur
- Responsive desktop, tablet, mobile
- Sticky navigation + mobile menu
- Hero slider otomatis
- Hover animation
- Font Open Sans
- Warna biru, putih, kuning
- Layanan, tentang, alur kerja
- Logo partner berjalan / marquee
- Form nama, nomor WA, pesan
- Submit form langsung membuka WhatsApp ASC
- Facebook, Instagram, WhatsApp
- Floating WhatsApp button
- Back to top
- Struktur file mudah diedit

## Cara Mengganti Gambar
Simpan gambar Anda di folder `assets/images/` lalu gunakan nama file berikut agar tidak perlu mengubah kode:

- `hero-1.jpg`
- `hero-2.jpg`
- `hero-3.jpg`
- `about.jpg`

Untuk partner, tersedia pemanggilan:
- `partner-1.png`
- `partner-2.png`
- `partner-3.png`
- `partner-4.png`
- `partner-5.png`
- `partner-6.png`

Anda juga boleh mengganti nama file langsung di `index.html`.

## Nomor WhatsApp
Nomor WhatsApp sudah diset ke:
`+62 895-3916-83301`

Format teknis di kode:
`62895391683301`

Jika nomor berubah, cari `62895391683301` di file `index.html` dan `assets/js/main.js`.

## Upload ke GitHub Pages
1. Buat repository baru di GitHub.
2. Upload seluruh isi folder ini ke repository tersebut.
3. Masuk ke **Settings > Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Klik Save.
7. Tunggu hingga GitHub memberikan URL website Anda.

## Edit Teks
Semua teks utama ada di `index.html`.

## Edit Warna
Semua warna utama ada di bagian `:root` file `assets/css/style.css`.
