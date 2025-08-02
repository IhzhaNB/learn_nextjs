# Learn Next.JS

## Table Content

1. [Introduction Next.js](#introduction-nextjs)
2. [Hello World!](#hello-world)
3. [Project Structure](#project-structure)
4. [About Server Component & Client Component](#about-server-component--client-component)
5. [File System-Based Routing](#file-system-based-routing)
6. [Nested Routes](#nested-routes)
7. [Dynamic Routes](#dynamic-routes)
8. [Nested Dynamic Routes](#nested-dynamic-routes)
9. [Catch-all Segments in Routing](#catch-all-segments-in-routing)
10. [Customizing Not Found Pages](#customizing-not-found-pages)
11. [File Organization and Routing](#file-organization-and-routing)
12. [Private Folder](#private-folder)
13. [Route Groups](#route-groups)
14. [Layout](#layout)
15. [Nested Layout](#nested-layout)

# Introduction Next.js

### Apa Itu Next.js?

- **Next.js** adalah **framework React** untuk membangun aplikasi web _full-stack_.
- Meskipun React adalah _library_ untuk membangun antarmuka pengguna (lapisan tampilan), Next.js menyediakan fitur tambahan untuk membuat aplikasi siap produksi.
- Fitur-fitur ini mencakup **routing**, **rendering yang dioptimalkan**, **pengambilan data**, **bundling**, **kompilasi**, dan banyak lagi, menghilangkan kebutuhan untuk menginstal banyak paket tambahan.
- Next.js memiliki konvensinya sendiri yang harus diikuti.

### Mengapa Belajar Next.js?

Next.js menyederhanakan pembangunan aplikasi web siap produksi. Fitur-fitur utamanya meliputi:

- **Routing berbasis file**: Buat file, dan rute akan secara otomatis dihasilkan.
- **Rute API**: Bangun komponen React _frontend_ dan API _backend_ dalam aplikasi yang sama.
- **Fleksibilitas rendering**: Mendukung _server-side_ dan _client-side rendering_ untuk peningkatan kinerja dan SEO.
- **Pengambilan data yang efisien**: Dukungan `async/await` bawaan dalam komponen React.
- **Gaya yang fleksibel**: Mendukung **modul CSS**, **Tailwind CSS**, dan **CSS-in-JS**.
- **Pengoptimalan**: Pengoptimalan langsung untuk gambar, font, dan skrip.
- **Sistem build yang dioptimalkan**: Fokus pada kode daripada konfigurasi yang kompleks.

### Prasyarat

- Diperlukan pengetahuan tentang **HTML**, **CSS**, dan **JavaScript modern**.
- Pemahaman yang baik tentang dasar-dasar React sangat penting, termasuk komponen fungsi, _props_, _state_, JSX, dan _hooks_.

# Hello World!

### Setting up the Development Environment

Untuk memulai, Anda memerlukan dua hal:

- **Node.js**: Unduh dan instal rilis stabil terbaru dari nodejs.org. Pastikan versinya 18.17 atau yang lebih baru.
- **Text Editor**: direkomendasikan **VS Code**, yang dapat diunduh dari code.visualstudio.com.

### Creating a New Next.js Project

Video ini menggunakan folder bernama "nextjs-tutorials" sebagai _workspace_.

- Buka terminal (pintasan Ctrl + Backtick).
- Jalankan perintah: `npx create-next-app@latest`.
- Anda akan diminta untuk memasukkan nama proyek.
- Selanjutnya, akan ada beberapa pertanyaan konfigurasi. Video ini memilih:
  - Menggunakan TypeScript: Ya
  - Menggunakan ESLint: Ya
  - Menggunakan Tailwind CSS: Ya
  - Menggunakan direktori `src/`: Ya
  - Menggunakan App Router: Ya
  - Menggunakan Turbopack: Tidak (untuk saat ini)
  - Import Alias: Default
  - Catatan dari pertanyaan diatas adalah opsional

### Running the Application

- Setelah proyek selesai dibuat, masuk ke folder proyek: `cd {nama-file}`.
- Jalankan _development server_: `npm run dev`.
- Aplikasi akan tersedia di `http://localhost:3000`.
- Buka tautan ini di _browser_ Anda untuk melihat halaman sambutan Next.js.

### Making Your First Change

- Halaman sambutan menyarankan untuk mengedit `src/app/page.tsx`.
- Di VS Code, buka file ini.
- Video ini menunjukkan cara mengganti teks pada _list item_ kedua dengan "Hello World".
- Simpan file, dan _browser_ akan secara otomatis me-_refresh_ untuk menampilkan perubahan.

# Project Structure

### Root Level Files

- `package.json`: Mengelola dependensi proyek (seperti Next.js, React, React DOM, dan mungkin TypeScript, Tailwind CSS, ESLint) serta _script_ (seperti `dev`, `build`, `start`, `lint`).
- **Configuration Files**: Termasuk `next.config.js` (untuk pengaturan Next.js), `tsconfig.json` (untuk TypeScript), `eslint.config.js` (untuk ESLint), dan `postcss.config.js` (untuk Tailwind CSS).
- **Other Files**: `package-lock.json` (memastikan instalasi dependensi yang konsisten), `.gitignore` (untuk kontrol versi), `README.md` (instruksi proyek), dan `next-env.d.ts` (deklarasi TypeScript untuk Next.js).

### Root Level Folders

- `.next` folder: Dibuat saat menjalankan _script_ `dev` atau `build`. Dari sinilah aplikasi Next.js sebenarnya disajikan. Biasanya diabaikan oleh Git.
- `node_modules`: Berisi semua dependensi proyek yang terinstal. Dibuat oleh `npm install` atau secara otomatis oleh _script_ `dev`. Juga biasanya diabaikan oleh Git.
- `public` folder: Digunakan untuk aset statis seperti gambar dan SVG.
- `src` folder: Ini adalah area fokus utama.
  - `app` folder (App Router): Di sinilah sebagian besar pekerjaan pengembangan dilakukan.
    - `favicon.ico`: Ikon yang ditampilkan di _tab browser_.
    - `globals.css`: Untuk gaya di seluruh aplikasi.
    - `layout.tsx`: Mendefinisikan elemen UI yang dibagikan di berbagai halaman.
    - `page.tsx`: Membuat konten untuk rute tertentu (misalnya, apa yang terlihat di `localhost:3000`). Komponen yang didefinisikan di sini (misalnya, komponen `Home`) dimasukkan ke dalam `layout.tsx` sebagai _prop_ `children`.

### Execution Flow (npm run dev)

1.  Perintah memulai eksekusi dari `package.json`.
2.  Kemudian beralih ke `layout.tsx` untuk merender _root layout_.
3.  Untuk URL `localhost:3000`, ia mencari `page.tsx` di dalam folder `app`.
4.  Komponen dari `page.tsx` (misalnya, komponen `Home`) dirender di dalam _root layout_.

# About Server Component & Client Component

### React Server Components

Kenalan dulu konsep React Server Components (RSC) sebagai konsep fundamental untuk memahami _routing_ di Next.js. Berikut adalah penjelasannya:

- **React Server Components (RSC):** Sebuah arsitektur baru di React, yang diadopsi oleh Next.js, yang membagi komponen menjadi dua jenis: _Server Components_ dan _Client Components_.

- **Server Components:**

  - Secara _default_, Next.js memperlakukan semua komponen sebagai _server components_.
  - Mereka dapat melakukan tugas-tugas _server-side_ seperti membaca _file_ atau mengambil data langsung dari _database_.
  - Kelemahannya adalah mereka tidak dapat menggunakan _React hooks_ atau menangani interaksi pengguna.

- **Client Components:**
  - Untuk membuat _client component_, Anda perlu menambahkan direktif `"use client"` di bagian atas _file_ komponen.
  - Mereka tidak dapat melakukan tugas-tugas _server-side_ seperti membaca _file_.
  - Mereka dapat menggunakan _hooks_ dan menangani interaksi pengguna, mirip dengan komponen React tradisional.

# File System-Based Routing

Sekarang menjelaskan _routing_ berbasis sistem _file_ di Next.js. Berikut adalah penjelasan konsep-konsep utamanya:

- **Ide Inti:** Di Next.js, URL yang dapat Anda akses di _browser_ ditentukan oleh bagaimana Anda mengatur _file_ dan _folder_ dalam proyek Anda.
- **Konvensi Utama untuk _Routing_:**
  - Semua rute harus berada di dalam _folder_ `app`.
  - _File_ rute harus diberi nama `page.js` atau `page.tsx` (jika menggunakan TypeScript).
  - Setiap _folder_ di dalam _folder_ `app` merepresentasikan segmen dari jalur URL.
- **Membuat Halaman Utama (_Homepage_):**
  - Untuk membuat halaman utama (dapat diakses di `localhost:3000`), Anda membuat _file_ `page.tsx` langsung di dalam _folder_ `app`.
  - _File_ ini harus mengekspor komponen React _default_.
- **Membuat Rute Lain:**
  - Untuk membuat rute seperti `/about`, Anda membuat _folder_ `about` di dalam _folder_ `app`.
  - Di dalam _folder_ `about` ini, Anda membuat _file_ `page.tsx` yang mengekspor komponen React.
  - Demikian pula, untuk rute `/profile`, Anda membuat _folder_ `profile` dengan _file_ `page.tsx` di dalamnya.
- **_File_ `layout.tsx`:**
  - Meskipun Anda menghapus _file_ `layout.tsx`, Next.js akan secara otomatis membuat dan mengaturnya saat Anda pertama kali mengakses rute _root_. _File_ ini akan dijelajahi lebih detail nanti dalam seri ini.
- **Menangani Rute yang Tidak Ada:**
  - Jika pengguna mencoba mengakses URL yang tidak sesuai dengan rute yang ditentukan, Next.js akan secara otomatis menyajikan halaman 404 Not Found. Anda tidak perlu menulis kode khusus untuk ini.
- **Manfaat _Routing_ Berbasis _File_:**
  - Ini menyederhanakan _routing_ karena Anda tidak perlu menginstal atau mengkonfigurasi _router_ terpisah. Struktur _file_ dan _folder_ Anda menangani logika _routing_.
  - Ini sejalan dengan filosofi Next.js yang mendukung konvensi daripada konfigurasi.

# Nested Routes

Cara membuat _nested routes_ (rute bersarang) dalam aplikasi Next.js menggunakan App Router. Berikut adalah penjelasannya:

- **Nested Route Dasar:**
  - Untuk membuat rute seperti `/blog`, Anda membuat _folder_ `blog` di dalam direktori `app`.
  - Di dalam _folder_ `blog` ini, Anda menambahkan _file_ `page.tsx` yang akan merender konten untuk jalur `/blog`.
- **Nested Lebih Dalam:**
  - Untuk membuat rute seperti `/blog/first` dan `/blog/second`, Anda membuat _subfolder_ bernama `first` dan `second` secara berurutan, di dalam _folder_ `blog`.
  - Setiap _subfolder_ ini (`first` dan `second`) juga akan berisi _file_ `page.tsx` sendiri untuk mendefinisikan konten untuk rute bersarang spesifik tersebut.
- **Poin Penting:** Next.js secara otomatis memetakan struktur _folder_ Anda di dalam direktori `app` ke jalur URL.

# Dynamic Routes

Pengimplementasian _dynamic routes_ di Next.js, yang berguna untuk aplikasi dengan banyak halaman yang memiliki struktur serupa, seperti halaman detail produk atau _postingan blog_.

Berikut adalah penjelasan konsep-konsep utamanya:

- **Masalah dengan Rute Bersarang Statis:** Membuat _folder_ individual untuk setiap produk atau _postingan blog_ (misalnya, `/products/1`, `/products/2`) menjadi tidak praktis untuk jumlah item yang banyak.
- **Segmen Rute Dinamis:** Next.js memungkinkan Anda membuat _dynamic routes_ dengan menamai _folder_ menggunakan tanda kurung siku (misalnya, `[productID]`). _Folder_ ini kemudian akan menangani permintaan untuk nilai apa pun di segmen URL tersebut.
- **Contoh Implementasi:**
  - _Folder_ `products` dibuat di direktori `app`.
  - Di dalam `products`, _file_ `page.tsx` menampilkan daftar produk.
  - _Folder_ dinamis bernama `[productID]` dibuat di dalam _folder_ `products`.
  - Di dalam `[productID]`, _file_ `page.tsx` lain dibuat untuk menampilkan detail produk tertentu.
- **Mengakses Parameter Rute:**
  - Komponen halaman di dalam _folder_ rute dinamis menerima _prop_ `params`.
  - _Prop_ `params` ini adalah objek yang berisi segmen dinamis sebagai pasangan _key-value_ (misalnya, `{ productID: '1' }`).
  - Anda dapat menggunakan `async/await` dengan _server components_ untuk mengakses nilai segmen dinamis dari objek `params`.
- **Manfaat:** Pendekatan ini membuat aplikasi lebih fleksibel dan _scalable_, karena Anda tidak perlu membuat _file_ terpisah untuk setiap kemungkinan ID produk atau _slug postingan blog_.
- **Fleksibilitas:** Segmen dinamis tidak harus berupa angka; bisa juga berupa _string_ (misalnya, `/products/iphone`).
- **Visualisasi:**
  - `app/page.tsx` -> `/`
  - `app/products/page.tsx` -> `/products`
  - `app/products/[productID]/page.tsx` -> `/products/1`, `/products/2`, `/products/any-string`, dll.

# Nested Dynamic Routes

Cara membuat _nested dynamic routes_ (rute dinamis bersarang) di Next.js. Berikut adalah penjelasannya:

- **Skenario:** Contoh menampilkan detail produk dan ulasan spesifik untuk produk tersebut. Misalnya, `/products/1` menampilkan detail produk, dan `/products/1/reviews/1` menampilkan ulasan pertama untuk produk 1.
- **Struktur _File_ untuk Rute Bersarang:** Untuk mencapai hal ini, Anda membuat struktur _folder_ bersarang yang mencerminkan jalur URL.
  - Di dalam _folder_ `[productID]` (yang menangani `/products/:productID`), Anda membuat _folder_ `reviews`.
  - Di dalam _folder_ `reviews`, Anda membuat _folder_ dinamis lain, `[reviewID]`.
  - Terakhir, di dalam _folder_ `[reviewID]`, Anda membuat _file_ `page.tsx`.
- **Mengakses Parameter Rute:** Komponen `page.tsx` di dalam rute dinamis bersarang dapat mengakses `productID` dan `reviewID` dari _prop_ `params`.
- **Demonstrasi:** Video ini menunjukkan bagaimana menavigasi ke `/products/1/reviews/1` menampilkan "Review 1 for product 1", dan mengubah URL menjadi `/products/100/reviews/5` memperbarui konten menjadi "Review 5 for product 100".
- **Poin Penting:** Rute dinamis bersarang dibuat dengan menggunakan segmen dinamis (_folder_ dengan tanda kurung siku) di dalam nama _folder_ bersarang.

# Catch-all Segments in Routing

Cara menggunakan _catch-all segments_ dalam _routing_ Next.js, yang merupakan fitur canggih untuk menangani _dynamic routes_ dengan banyak segmen. Berikut adalah penjelasan konsep-konsep utamanya:

- **Masalah:** Saat membangun situs dokumentasi dengan banyak fitur dan konsep, membuat rute individual untuk setiap kombinasi (misalnya, `/docs/feature1/concept1`, `/docs/feature2/concept1`) dapat menghasilkan banyak _file_ (misalnya, 400 _file_ untuk 20 fitur dengan masing-masing 20 konsep).
- **Routing Dinamis sebagai Solusi Parsial:** Menggunakan _folder_ rute dinamis (misalnya, `[featureId]`, `[conceptId]`) dapat mengurangi jumlah _file_ secara signifikan. Namun, menambahkan lebih banyak segmen jalur (misalnya, `/docs/feature1/concept1/example1`) masih memerlukan _folder_ bersarang tambahan.
- **_Catch-all Segments_ sebagai Penyelamat:** _Catch-all segments_ memungkinkan Anda menangani semua segmen rute dengan satu _file_.
  - **Pengaturan:**
    - Buat _folder_ `docs` di _folder_ `app` Anda.
    - Di dalam `docs`, buat _folder_ bernama `[...slug]` (tiga titik menunjukkan _catch-all segment_).
    - Di dalam _folder_ `[...slug]`, buat _file_ `page.tsx`.
  - **Fungsionalitas:** _File_ `page.tsx` ini sekarang akan menangani URL apa pun yang dimulai dengan `/docs/`, terlepas dari segmen berikutnya (misalnya, `/docs/feature1/concept1`, `/docs/feature1/concept1/example1`).
- **Mengakses Segmen URL:**
  - Objek `params`, yang didekonstruksi dari _props_ di komponen halaman Anda, akan berisi properti `slug`.
  - `slug` adalah _array_ _string_, di mana setiap _string_ adalah segmen dari URL.
  - Anda dapat menggunakan _array_ `slug` ini untuk merender konten secara kondisional atau mengambil data berdasarkan segmen URL.
- **Catch-all Segments Opsional:**
  - Jika Anda ingin rute _catch-all_ juga menangani jalur dasar (misalnya, `/docs` itu sendiri, bukan hanya `/docs/something`), Anda dapat membuat _catch-all segment_ opsional.
  - Untuk melakukan ini, ganti nama _folder_ dari `[...slug]` menjadi `[[...slug]]` (bungkus dengan sepasang tanda kurung siku tambahan).
  - Sekarang, `/docs` juga akan merender halaman yang sama.
- **Kapan Menggunakan _Optional Catch-all_ vs. `page.tsx` Sederhana:**
  - Jika UI untuk `/docs` selalu sama, terlepas dari segmen selanjutnya, gunakan `page.tsx` sederhana langsung di _folder_ `docs`.
  - Jika UI untuk `/docs` (dan sub-jalurnya) berubah berdasarkan segmen URL (seperti pada contoh video), gunakan rute _optional catch-all_ (`[[...slug]]/page.tsx`).

Pada intinya, _catch-all segments_ menyediakan cara yang fleksibel dan efisien untuk mengelola skenario _routing_ yang kompleks, terutama untuk situs yang padat konten seperti dokumentasi, dengan menangkap beberapa segmen URL dalam satu _file_.

# Customizing Not Found Pages

Cara membuat dan menyesuaikan halaman 404 "Not Found" dalam aplikasi Next.js menggunakan App Router.

Berikut adalah poin-poin pentingnya:

- **Halaman 404 _Default_:** Secara _default_, Next.js menampilkan halaman 404 dasar untuk rute yang tidak ada.
- **Halaman 404 Global Kustom:** Anda dapat membuat halaman 404 kustom dengan menambahkan _file_ `not-found.tsx` (atau `.js`) di _folder_ `app` Anda. _File_ ini harus mengekspor komponen React.
- **Pemicu 404 Secara Programatik:** Anda dapat memicu halaman 404 secara programatik menggunakan fungsi `notFound` yang diimpor dari `next/navigation`. Ini berguna untuk skenario seperti menampilkan 404 jika kondisi tertentu tidak terpenuhi (misalnya, ID ulasan melebihi batas tertentu).
- **Halaman _Not Found_ Spesifik:** Anda dapat membuat _file_ `not-found.tsx` yang lebih spesifik di dalam _folder_ rute bersarang (misalnya, `app/reviews/[reviewId]/not-found.tsx`). Next.js akan menggunakan halaman `not-found` yang paling spesifik yang tersedia untuk rute tertentu.
- **Tidak Ada _Props_ untuk Komponen `notFound`:** Komponen `notFound` itu sendiri tidak menerima _props_.
- **Mengakses Parameter Rute:** Untuk menampilkan informasi dinamis (seperti parameter rute) pada halaman `not-found`, Anda perlu:
  - Mengimpor dan menggunakan _hook_ `usePathname` dari `next/navigation`.
  - Karena `usePathname` adalah _hook_ sisi _client_, Anda harus menandai _file_ `not-found.tsx` dengan direktif `"use client"` di bagian atas.
  - Anda kemudian dapat mengurai _string_ `pathname` untuk mengekstrak parameter rute yang diperlukan dan menampilkannya di komponen Anda.

# File Organization and Routing

Cara Next.js menangani organisasi _file_ dan _routing_:

- **Routing Berbasis Sistem _File_:** Next.js menggunakan _router_ berbasis sistem _file_ di mana setiap _folder_ di direktori `app` merepresentasikan segmen rute yang memetakan ke jalur URL.
- **Rute yang Dapat Diakses Publik:** Sebuah rute hanya menjadi dapat diakses publik ketika Anda menambahkan _file_ `page.js` atau `page.tsx` ke _folder_ yang sesuai.
  - Misalnya, membuat _folder_ `dashboard` dan komponen `line-chart.tsx` di dalamnya tidak akan membuat `/dashboard` dapat diakses. Anda akan mendapatkan kesalahan 404.
- **Persyaratan `page.tsx`:**
  - _File_ `page.tsx` harus mengekspor komponen React _default_.
  - Jika Anda tidak memiliki ekspor _default_, atau jika ekspor _default_ bukan komponen React, Anda akan mengalami kesalahan.
  - Hanya konten yang dikembalikan oleh komponen yang diekspor _default_ di `page.tsx` yang akan dirender di _browser_. Komponen lain di dalam _file_ `page.tsx` yang sama (seperti komponen `barChart` dalam contoh) tidak akan muncul kecuali secara eksplisit disertakan dalam ekspor _default_.
- **Kolokasi _File_:** Anda dapat dengan aman menempatkan _file_ proyek lain (seperti komponen individual, fungsi utilitas, dll.) di dalam _folder_ segmen rute di dalam direktori `app`. _File-file_ ini tidak akan secara tidak sengaja menjadi rute sendiri selama tidak ada _file_ `page.tsx` yang membuat _folder_ tersebut publik.
- **Struktur _File_ Alternatif:** Meskipun Anda dapat menyimpan _file_ di dalam direktori `app`, Next.js itu fleksibel. Beberapa _developer_ lebih suka menyimpan _file_ di luar direktori `app`, misalnya, di _folder_ `src` dengan _folder_ `components` terpisah.

# Private Folder

Private Folder di Next.js adalah fitur yang dirancang untuk membantu Anda mengatur proyek dengan lebih baik. Konsep utamanya adalah folder ini **tidak akan menjadi bagian dari sistem _routing_ Next.js**, artinya tidak bisa diakses langsung melalui URL di _browser_.

### Cara Membuat Folder Privat

Untuk membuat folder menjadi privat, Anda hanya perlu menambahkan garis bawah (`_`) di awal nama folder tersebut.

**Contoh:**
Jika Anda membuat folder bernama `_lib` di dalam direktori `app` Anda:

```
src/
└── app/
    └── _lib/         <- Ini adalah folder privat
        └── utils.ts
        └── components/
            └── MyHelperComponent.tsx
```

### Bagaimana Cara Kerjanya?

Meskipun `_lib` berada di dalam `app` folder, Next.js akan mengabaikannya saat membangun _route_. Jadi, jika Anda mencoba mengakses `http://localhost:3000/_lib` di _browser_, Anda akan mendapatkan halaman 404 "Not Found".

Folder privat ini berfungsi sebagai tempat penyimpanan untuk file-file internal proyek Anda, seperti:

- Fungsi-fungsi pembantu (utility functions)
- Komponen React yang hanya digunakan secara internal dan tidak perlu memiliki _route_ sendiri
- Konfigurasi atau data yang tidak langsung terkait dengan _routing_

### Manfaat Menggunakan Folder Privat

1.  **Organisasi Kode yang Lebih Baik:** Memisahkan logika UI yang terkait dengan _routing_ dari logika internal atau komponen yang digunakan di berbagai tempat. Ini membuat struktur proyek lebih bersih dan mudah dipahami.
2.  **Menghindari Konflik _Routing_:** Next.js memiliki konvensi penamaan file dan folder tertentu untuk _routing_ (misalnya `page.tsx`, `layout.tsx`). Dengan menggunakan folder privat, Anda menghindari potensi konflik penamaan di masa depan jika Next.js memperkenalkan konvensi baru yang kebetulan sama dengan nama folder internal Anda.
3.  **Konsistensi:** Memberikan cara yang konsisten untuk mengelompokkan file-file terkait dalam editor kode Anda.

### Catatan Tambahan

- Jika Anda benar-benar perlu memiliki garis bawah (`_`) di URL Anda (misalnya `/produk_baru`), Anda bisa menggunakan versi URL _encoded_-nya, yaitu `%5f`.
- Sebagai alternatif dari folder privat, Anda juga bisa mengandalkan _file collocation_ (menempatkan file-file terkait di folder _route_ yang sama tanpa garis bawah) atau menyimpan file-file internal di luar folder `app` sama sekali (misalnya di folder `src/components` atau `src/utils`).

Intinya, folder privat adalah alat yang rapi untuk menjaga proyek Next.js Anda tetap terorganisir dan memastikan hanya file yang dimaksudkan untuk _routing_ yang benar-benar menjadi _route_.

# Route Groups

Route Groups adalah fitur di Next.js yang memungkinkan Anda mengatur _file_ dan rute proyek secara logis tanpa memengaruhi struktur URL.

### Masalah yang Diselesaikan Route Groups

Ketika Anda memiliki beberapa rute terkait (misalnya, rute otentikasi seperti registrasi, _login_, lupa _password_), mereka bisa tersebar di _folder_ `app`, sehingga sulit dikelola, terutama dalam lingkungan tim. Jika Anda hanya membuat _folder_ biasa (misalnya `auth`) untuk mengelompokkannya, Next.js akan secara otomatis memetakan _folder_ bersarang ke jalur URL, sehingga URL akan berubah (misalnya, menjadi `/auth/register` alih-alih `/register`).

### Solusi Route Groups

Untuk menghindari perubahan URL, Anda dapat membuat **Route Group** dengan membungkus nama _folder_ dalam tanda kurung (misalnya, `(auth)`). Ini memberi tahu Next.js untuk menggunakan _folder_ tersebut hanya untuk tujuan organisasi dan mengecualikannya dari jalur URL.

**Contoh Struktur Folder:**

```
src/
└── app/
    ├── (auth)/             <- Ini adalah Route Group
    │   ├── register/
    │   │   └── page.tsx
    │   ├── login/
    │   │   └── page.tsx
    │   └── forgot-password/
    │       └── page.tsx
    └── dashboard/
        └── page.tsx
```

### Manfaat Menggunakan Route Groups

- **Organisasi Logis:** Mengelompokkan rute dan _file_ proyek secara logis, meningkatkan pengalaman _developer_, terutama dalam tim.
- **URL Bersih:** Mempertahankan struktur URL yang bersih (misalnya, `/register` alih-alih `/auth/register`).
- **Berbagi _Layout_:** Memungkinkan Anda berbagi _layout_ di antara rute-rute dalam grup tanpa memengaruhi URL. Misalnya, Anda bisa memiliki `layout.tsx` di dalam `(auth)` _folder_ yang akan diterapkan ke semua rute otentikasi.
- **Grup Rute Bersarang:** Anda juga dapat membuat grup rute bersarang untuk organisasi yang lebih lanjut.

Dengan Route Groups, Anda mendapatkan fleksibilitas dalam mengatur kode Anda sesuai dengan kebutuhan proyek, tanpa harus mengorbankan struktur URL yang diinginkan.

# Layout

Layouts di Next.js adalah komponen UI yang digunakan bersama oleh beberapa halaman dalam sebuah aplikasi, berfungsi untuk menyediakan struktur yang konsisten, seperti _header_ dan _footer_.

### Cara Membuat Layout

Anda membuat _layout_ dengan mengekspor komponen React secara _default_ dari _file_ `layout.js` atau `layout.tsx`. Komponen ini harus menerima _prop_ `children`, yang akan diisi oleh Next.js dengan konten halaman Anda.

### Root Layout

- Next.js menyediakan _root layout_ _default_ di _folder_ `app` (`layout.tsx`).
- _Root layout_ ini wajib ada untuk setiap aplikasi Next.js. Jika Anda menghapusnya, Next.js akan secara otomatis membuatnya kembali.
- _Prop_ `children` di _root layout_ adalah tempat konten halaman individual Anda (misalnya, `page.tsx` di _folder_ `app`) akan dirender.

### Cara Kerjanya (Visualisasi)

Ketika Anda mengunjungi sebuah URL (misalnya, `localhost:3000`), _root layout_ akan dirender. _Prop_ `children` di dalam _root layout_ akan diganti dengan konten dari _file_ `page.tsx` yang sesuai dengan rute spesifik tersebut (misalnya, `app/page.tsx` untuk halaman utama, `app/about/page.tsx` untuk halaman _about_).

**Contoh Kode Sederhana untuk `layout.tsx`:**

```typescript
// src/app/layout.tsx

import "./globals.css"; // Import gaya global Anda

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "#f0f0f0",
            padding: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <h1>Header Aplikasi Saya</h1>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> |{" "}
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children} {/* Di sinilah konten dari page.tsx akan dirender */}
        </main>

        <footer
          style={{
            background: "#f0f0f0",
            padding: "10px",
            borderTop: "1px solid #ccc",
            marginTop: "20px",
          }}
        >
          <p>&copy; 2025 Aplikasi Next.js Saya</p>
        </footer>
      </body>
    </html>
  );
}
```

Dalam contoh di atas, `Header Aplikasi Saya` dan `Footer Aplikasi Saya` akan muncul di setiap halaman, sementara konten di dalam `<main>{children}</main>` akan berubah sesuai dengan halaman yang sedang diakses (`page.tsx` mana pun).
