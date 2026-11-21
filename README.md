# Kasir UMKM: free cashier app

A cashier (POS) app for small businesses: coffee shops, food stalls, laundries, small shops, photocopy places.
**Runs in the browser on a phone, tablet or laptop. Works offline. No server, no sign-up, no monthly fee.**

**Live demo:** https://lolbryannn.github.io/kasir-umkm/ (with sample data, so try anything)

Made by **Bryan** · [Instagram @lolbryannn](https://www.instagram.com/lolbryannn/) · [TikTok @lolbryan6996](https://www.tiktok.com/@lolbryan6996)

---

## 🇮🇩 Fitur

- **Kasir cepat:** ketuk produk, atur jumlah, diskon Rp atau %, cari produk, filter kategori
- **Pembayaran:** Tunai (kembalian otomatis + tombol uang cepat), QRIS, Transfer
- **Struk:** cetak (ukuran printer thermal 58 mm) atau kirim lewat WhatsApp
- **Stok:** opsional per produk, berkurang otomatis, ada peringatan stok menipis/habis
- **Riwayat:** per tanggal, bisa batalkan transaksi (stok dikembalikan)
- **Laporan:** omzet, jumlah transaksi, rata-rata, laba kotor, grafik per hari/jam, produk terlaris, metode bayar, **ekspor CSV** (bisa dibuka di Excel)
- **Data aman di perangkatmu:** unduh cadangan (.json) dan pulihkan kapan saja
- **Offline:** setelah dibuka sekali, tetap jalan tanpa internet. Bisa dipasang di layar utama HP.
- Bahasa Indonesia & English

## 🇮🇩 Cara pakai

**Paling gampang:** buka link demo, lalu di menu browser pilih **"Tambahkan ke layar utama"**. Buka **Atur → Hapus semua data** (atau "Mulai dari nol"), isi nama toko, lalu tambahkan produkmu.

**Punya sendiri (link milikmu):**
1. Unduh ZIP-nya (tombol hijau **Code → Download ZIP**), lalu ekstrak.
2. Buka [app.netlify.com/drop](https://app.netlify.com/drop) dan seret folder ini ke sana. Selesai, kamu dapat link sendiri.
3. Buka link itu di HP kasir, lalu **Tambahkan ke layar utama**.

> Data tersimpan di browser perangkat yang dipakai. Beda HP berarti beda data.
> **Unduh cadangan secara rutin** (Atur → Unduh cadangan), terutama sebelum ganti HP atau hapus data browser.

## 🇬🇧 How to use

**Quickest:** open the demo link, then choose **"Add to Home screen"** in your browser menu. Go to **Settings → Delete all data** (or "Start fresh"), set your store name, and add your products.

**Your own copy (your own link):**
1. Download the ZIP (green **Code → Download ZIP** button) and extract it.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this folder onto the page.
3. Open your new link on the cashier phone and **Add to Home screen**.

Data is stored in the browser of the device you use; different devices have separate data.
**Download a backup regularly** (Settings → Download backup).

## Customise

- **Colours:** change `--brand` and `--brand-2` at the top of `style.css`.
- **Sample products:** edit `demoData()` in `app.js`.
- **After changing files:** bump `VERSION` in `sw.js` (and the `?v=` numbers in `index.html` and `sw.js`) so phones pick up the new version.

## Files

| File | What it is |
|---|---|
| `index.html` | Page layout |
| `style.css` | Look and feel (colours at the top) |
| `app.js` | All the app logic, plus Indonesian/English text |
| `sw.js` | Offline support |
| `manifest.webmanifest`, `icon.svg` | "Add to Home screen" support |

## Limits (honest)

- One device per store: no syncing between phones or a cloud account.
- No Bluetooth printer pairing built in. Printing uses the browser's print dialog (works with printers set up in Android/Windows).
- QRIS/Transfer only record the payment method; they don't connect to a bank.

## License

Free to use for your own business, and you can change anything.
**Please don't sell or re-upload this app as your own.** See `LICENSE.txt`.
