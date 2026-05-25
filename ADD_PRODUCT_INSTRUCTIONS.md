# Cara Menambah Produk Baru di Bazz Snack

Karena kita menggunakan arsitektur **Static File**, performa website akan sangat maksimal. Berikut adalah langkah-langkah untuk menambah produk baru ke dalam landing page:

## Langkah 1: Siapkan Foto
Pindahkan foto produk baru Anda ke dalam folder:
`public/gambar_produk/`

*(Sangat disarankan menggunakan format penamaan yang jelas, huruf kecil, tanpa spasi, misal: `risol_keju.jpg`)*

## Langkah 2: Kirim Instruksi (Format Chat)
Kirimkan detail produk ke AI/Chat dengan format persis seperti di bawah ini:

```text
Tambah produk:
Nama: [Nama Produk]
Harga: [Harga Angka]
Deskripsi: [Deskripsi Produk]
Gambar: [Nama File Gambar beserta ekstensinya]
Badge: [Opsional - misal: New / Bestseller]
```

**Contoh Penggunaan:**
```text
Tambah produk:
Nama: Risoles Keju
Harga: 8000
Deskripsi: Keju mozzarella meleleh di dalam kulit risoles renyah
Gambar: risol_keju.jpg
Badge: New
```

AI akan langsung memperbarui file `src/data/products.ts` dan produk akan otomatis muncul di website tanpa perlu pengaturan database yang rumit.
