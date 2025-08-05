# Learn Next.JS

From Youtube:

- Channel: **Codevolution**
- Link Video: https://youtube.com/playlist?list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&si=Nt8uuWxJZmnra9aC

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
16. [Multiple Root Layouts](#multiple-root-layouts)
17. [Title Metadata](#title-metadata)
18. [Link Component Navigation](#link-component-navigation)
19. [Active Link](#active-link)
20. [`params` & `searchParams`](#params--searchparams)
21. [Navigating Programmatically](#navigating-programmatically)

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

# Nested Layout

Nested Layouts di Next.js memungkinkan Anda memiliki _layout_ khusus untuk bagian-bagian berbeda dari aplikasi Anda, selain dari _root layout_ utama.

### Konsep Nested Layouts

Anda dapat membuat _layout_ yang spesifik untuk bagian-bagian tertentu dari aplikasi Anda. Misalnya, halaman detail produk mungkin memiliki _layout_ yang berbeda dari halaman _dashboard_ atau halaman otentikasi.

### Cara Membuat Nested Layout

Untuk membuat _nested layout_, Anda menambahkan _file_ `layout.tsx` di dalam _folder_ spesifik tempat Anda menginginkan _layout_ tersebut.

**Contoh Struktur Folder:**
Jika Anda ingin _layout_ khusus untuk semua halaman produk, Anda bisa membuatnya di dalam _folder_ `products`:

```
src/
└── app/
    ├── layout.tsx         <- Root Layout
    └── products/
        ├── layout.tsx     <- Nested Layout untuk /products dan sub-jalurnya
        ├── page.tsx       <- Halaman daftar produk (/products)
        └── [productId]/
            └── page.tsx   <- Halaman detail produk (/products/[productId])
```

Komponen _layout_ ini juga akan menerima _prop_ `children`, yang akan merepresentasikan konten halaman di dalam _nested layout_ tersebut. Anda bisa menambahkan elemen UI spesifik ke _nested layout_ ini, seperti bagian "Produk Unggulan" atau navigasi khusus produk.

### Cara Nested Layouts Dirender

Ketika Anda menavigasi ke rute yang memiliki _nested layout_, Next.js akan merender secara berurutan:

1.  **Root Layout** dirender terlebih dahulu.
2.  Konten dari **Nested Layout** kemudian menggantikan _prop_ `children` dari _root layout_.
3.  Terakhir, konten halaman yang sebenarnya (dari `page.tsx` di dalam _folder_ bersarang) mengisi _prop_ `children` dari **Nested Layout**.

**Contoh Alur Render:**
Untuk URL `/products/1`:

- _Root layout_ (dengan _header_ dan _footer_ aplikasi) dirender.
- Kemudian, `layout.tsx` di dalam _folder_ `products` (misalnya, dengan bagian "Produk Unggulan") dirender di dalam _root layout_.
- Terakhir, konten untuk produk "1" (dari `app/products/[productId]/page.tsx`) dirender di dalam _layout_ `products`.

### Manfaat

Ini memungkinkan Anda membuat _layout_ khusus untuk bagian-bagian berbeda dari aplikasi Anda, memberikan fleksibilitas dalam desain UI dan pengalaman pengguna yang lebih terfokus untuk setiap bagian.

**Contoh Kode Sederhana untuk `products/layout.tsx`:**

```typescript
// src/app/products/layout.tsx

import React from "react";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid blue", padding: "15px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>Navigasi Produk</h2>
      <nav>
        <a href="/products">Semua Produk</a> |{" "}
        <a href="/products/1">Produk 1</a> | <a href="/products/2">Produk 2</a>
      </nav>
      <hr />
      {children} {/* Di sinilah konten page.tsx di dalam folder products akan dirender */}
      <hr />
      <p style={{ fontStyle: "italic" }}>Lihat juga Produk Unggulan Kami!</p>
    </div>
  );
}
```

Dalam contoh ini, setiap halaman di bawah `/products` (termasuk `/products` itu sendiri dan `/products/[productId]`) akan memiliki _border_ biru, judul "Navigasi Produk", dan teks "Lihat juga Produk Unggulan Kami\!", di samping _header_ dan _footer_ dari _root layout_.

# Multiple Root Layouts

Anda bisa menggunakan beberapa _root layout_ di aplikasi Next.js untuk menerapkan _layout_ yang berbeda ke bagian-bagian aplikasi yang berbeda.

### Tantangan Awal

Secara _default_, _header_ dan _footer_ yang ditambahkan ke _file_ `layout.tsx` di _root_ (`app/layout.tsx`) akan diterapkan ke setiap halaman di aplikasi. Namun, seringkali ada kebutuhan untuk memiliki _layout_ yang berbeda untuk bagian-bagian tertentu, misalnya halaman _login_ atau registrasi yang tidak memiliki _header_ dan _footer_ utama.

### Solusi: Route Groups

_Route Groups_ adalah solusi yang elegan untuk masalah ini. Mereka memungkinkan Anda mengatur struktur proyek dan menerapkan _layout_ secara selektif tanpa memengaruhi URL.

**Langkah-langkah Implementasi:**

1.  **Buat _Route Groups_**: Di _folder_ `app`, buat _route groups_ dengan membungkus nama _folder_ dalam tanda kurung, misalnya:

    - `(marketing)`: Untuk halaman seperti _homepage_, halaman fitur, atau halaman pelanggan.
    - `(auth)`: Untuk halaman seperti _login_ dan registrasi.

    **Contoh Struktur Folder:**

    ```
    src/
    └── app/
        ├── (marketing)/
        │   ├── page.tsx       <- Homepage
        │   └── customers/
        │       └── page.tsx
        ├── (auth)/
        │   ├── login/
        │   │   └── page.tsx
        │   └── register/
        │       └── page.tsx
        └── layout.tsx         <- Root Layout Awal (akan dipindahkan)
    ```

2.  **Pindahkan Halaman ke Grup yang Sesuai**: Pindahkan _folder_ halaman yang relevan ke dalam _route group_ masing-masing.

3.  **Pindahkan _Root Layout_ Asli**: Pindahkan _file_ `layout.tsx` _root_ yang asli dari _folder_ `app` langsung ke dalam salah satu _route group_ (misalnya, `(marketing)`). Sangat penting bahwa _root layout_ tidak lagi ada langsung di _folder_ `app`. Anda juga bisa mengganti nama _file layout_ ini (misalnya, menjadi `marketing-layout.tsx` meskipun tetap berfungsi sebagai `layout.tsx`).

    **Struktur Setelah Pemindahan:**

    ```
    src/
    └── app/
        ├── (marketing)/
        │   ├── layout.tsx     <- Layout untuk grup (marketing)
        │   ├── page.tsx
        │   └── customers/
        │       └── page.tsx
        └── (auth)/
            ├── login/
            │   └── page.tsx
            └── register/
                └── page.tsx
    ```

    *Catatan: Jika ada `page.tsx` langsung di `app/`, ia juga harus dipindahkan ke salah satu *route group* agar memiliki *layout* induk.*

4.  **Buat _Layout_ Baru untuk Grup Lain**: Buat _file_ `layout.tsx` baru di _route group_ lainnya (misalnya, `(auth)`) dan sesuaikan sesuai kebutuhan. Misalnya, Anda bisa menghilangkan _header_ dan hanya menyisakan _footer_ untuk halaman _login_ dan registrasi.

    **Contoh `src/app/(auth)/layout.tsx`:**

    ```typescript
    // src/app/(auth)/layout.tsx

    import React from "react";

    export default function AuthLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body>
            <main
              style={{
                padding: "20px",
                maxWidth: "400px",
                margin: "50px auto",
                border: "1px solid #eee",
                borderRadius: "8px",
              }}
            >
              {children} {/* Konten halaman login/register */}
            </main>
            <footer
              style={{ textAlign: "center", marginTop: "30px", color: "#888" }}
            >
              <p>&copy; 2025 GadgetX. All rights reserved.</p>
            </footer>
          </body>
        </html>
      );
    }
    ```

### Hasil Akhir

URL akan tetap tidak berubah (misalnya, `/login`, `/register`, `/customers`), tetapi bagian-bagian aplikasi yang berbeda kini akan memiliki _layout_ yang berbeda. Halaman _login_ dan registrasi mungkin hanya memiliki _footer_, sementara halaman pelanggan memiliki _header_ dan _footer_ lengkap.

### Manfaat

Pendekatan ini memberikan fleksibilitas luar biasa untuk menciptakan antarmuka pengguna yang berbeda untuk berbagai bagian aplikasi sambil menjaga kode tetap terorganisir dan mudah dipelihara.

# Title Metadata

Manajemen `title` (judul) di Next.js sangat penting untuk SEO (Search Engine Optimization) dan pengalaman pengguna, karena ini adalah teks yang muncul di bilah judul _browser_ atau tab. Next.js menyediakan cara yang fleksibel untuk mengaturnya melalui _metadata_.

### Mengatur Judul (`title`)

Anda dapat mengatur judul dengan dua cara utama:

1.  **Nilai _String_ Langsung:** Ini adalah cara paling sederhana, di mana Anda langsung memberikan _string_ sebagai judul. Anda bisa melakukannya di _file_ `layout.tsx` atau `page.tsx`.

    **Contoh di `page.tsx`:**

    ```typescript
    // src/app/about/page.tsx
    export const metadata = {
      title: "Tentang Kami", // Judul halaman ini akan menjadi "Tentang Kami"
    };

    export default function AboutPage() {
      return <h1>Halaman Tentang Kami</h1>;
    }
    ```

2.  **Nilai Objek:** Pendekatan ini memberikan kontrol lebih besar dan tiga opsi penting: `default`, `template`, dan `absolute`. Disarankan untuk mengimpor dan menggunakan tipe `Metadata` dari `next` untuk dukungan TypeScript yang lebih baik saat menggunakan pendekatan objek.

    **Contoh Import:**

    ```typescript
    import type { Metadata } from "next";
    ```

### Opsi Objek untuk Judul

- **`default`**: Properti ini berfungsi sebagai judul _fallback_ (cadangan) untuk rute anak yang tidak memiliki judul sendiri. Jika diatur di _root layout_, halaman anak tanpa judul spesifik akan menggunakan judul _default_ ini.

  **Contoh di `layout.tsx` (Root Layout):**

  ```typescript
  // src/app/layout.tsx
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: {
      default: "Aplikasi Next.js Saya", // Judul default jika tidak ada judul spesifik
      template: "%s | Aplikasi Next.js", // Akan dijelaskan di bawah
    },
    description: "Deskripsi umum aplikasi saya.",
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  ```

  Jika ada `page.tsx` tanpa `metadata.title` sendiri, judulnya akan menjadi "Aplikasi Next.js Saya".

- **`template`**: Opsi ini sangat berguna untuk menambahkan awalan atau akhiran yang konsisten pada judul di seluruh rute anak. Anda bisa menggunakan `%s` sebagai _placeholder_ yang akan diganti dengan judul halaman anak.

  **Contoh Penggunaan `template` (di `layout.tsx`):**

  ```typescript
  // src/app/layout.tsx
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: {
      default: "Halaman Utama",
      template: "%s | Toko GadgetX", // %s akan diganti dengan judul dari page.tsx
    },
    description: "Toko online terbaik untuk gadget.",
  };

  // ... RootLayout komponen
  ```

  **Contoh Penggunaan di `page.tsx`:**

  ```typescript
  // src/app/products/page.tsx
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Daftar Produk", // Ini akan menggantikan %s di template
  };

  export default function ProductsPage() {
    return <h1>Semua Produk Kami</h1>;
  }
  ```

  Dengan setup ini, judul di _browser_ untuk `/products` akan menjadi: **"Daftar Produk | Toko GadgetX"**.

- **`absolute`**: Opsi ini memungkinkan halaman spesifik untuk sepenuhnya mengesampingkan _template_ judul apa pun yang diatur oleh segmen induk (misalnya, dari `layout.tsx` di atasnya). Jika Anda mengatur `title.absolute` pada suatu halaman, judul tersebut akan ditampilkan persis seperti itu, mengabaikan semua _template_ dari _layout_ induk.

  **Contoh Penggunaan `absolute`:**

  ```typescript
  // src/app/login/page.tsx
  import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: {
      absolute: "Login ke Akun Anda", // Ini akan mengabaikan template dari layout induk
    },
  };

  export default function LoginPage() {
    return <h1>Masuk</h1>;
  }
  ```

  Dengan setup ini, judul di _browser_ untuk `/login` akan menjadi: **"Login ke Akun Anda"**, tanpa tambahan " | Toko GadgetX" atau apapun dari _template_ induk.

Dengan menggunakan kombinasi opsi ini, Anda dapat memiliki kontrol yang sangat granular atas judul halaman di seluruh aplikasi Next.js Anda, yang sangat membantu untuk SEO dan konsistensi merek.

# Link Component Navigation

### Navigasi di Next.js dengan `Link` Component

Di Next.js, cara utama untuk berpindah antar halaman (atau _route_) adalah dengan menggunakan `Link` component dari `next/link`. Ini adalah pengganti elemen `<a>` HTML biasa yang lebih pintar karena memungkinkan navigasi sisi _client_ (tanpa _full page reload_), membuat aplikasi terasa lebih cepat dan mulus.

**Cara Penggunaan Dasar:**

Anda cukup mengimpor `Link` dan menggunakannya seperti ini:

```jsx
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">Beranda</Link> {/* Link ke halaman utama */}
      <Link href="/produk">Daftar Produk</Link> {/* Link ke halaman produk */}
      <Link href="/blog/artikel-pertama">Baca Artikel</Link>{" "}
      {/* Link ke halaman dinamis */}
    </nav>
  );
}
```

Ketika pengguna mengklik `Link`, Next.js akan secara otomatis melakukan navigasi tanpa memuat ulang seluruh halaman, yang memberikan pengalaman pengguna yang lebih baik.

---

### Memahami _Prop_ `replace`

Sekarang, mari kita fokus pada _prop_ `replace`, karena ini yang seringkali membingungkan.

Secara default, setiap kali Anda mengklik `Link`, Next.js akan **menambahkan entri baru** ke riwayat _browser_. Ini seperti Anda membuka halaman baru di buku catatan Anda. Jadi, jika Anda menekan tombol "Kembali" di _browser_, Anda akan kembali ke halaman sebelumnya.

**Fungsi `replace`:**

Ketika Anda menambahkan _prop_ `replace` pada `Link` component, Anda memberi tahu Next.js untuk **mengganti entri riwayat saat ini** dengan URL baru, alih-alih menambahkan entri baru. Ini seperti Anda **menghapus halaman saat ini** di buku catatan Anda dan **menuliskan halaman baru di tempat yang sama**.

**Contoh Kasus Nyata:**

Bayangkan alur navigasi ini di aplikasi Anda:

1.  Anda berada di halaman **Beranda (`/`)**.
2.  Anda mengklik `Link` ke halaman **Daftar Produk (`/products`)**.
3.  Dari halaman Daftar Produk, Anda mengklik `Link` ke halaman **Detail Produk (`/products/123`)**.

**Skenario 1: Tanpa `replace` (Perilaku Default)**

- Riwayat _browser_ Anda akan terlihat seperti ini:
  `Beranda` -\> `Daftar Produk` -\> `Detail Produk (ID 123)`

- Jika Anda menekan tombol "Kembali" dari halaman **Detail Produk**:
  Anda akan kembali ke halaman **Daftar Produk**.

**Skenario 2: Menggunakan `replace` pada `Link` dari Daftar Produk ke Detail Produk**

```jsx
// Di halaman Daftar Produk
import Link from "next/link";

function ProductList() {
  return (
    <div>
      <h1>Daftar Produk</h1>
      {/* ... daftar produk */}
      <Link href="/products/123" replace>
        Lihat Detail Produk 123
      </Link>{" "}
      {/* Perhatikan 'replace' di sini */}
    </div>
  );
}
```

- Riwayat _browser_ Anda akan terlihat seperti ini:
  `Beranda` -\> `Detail Produk (ID 123)` (Halaman `Daftar Produk` **diganti** di riwayat)

- Jika Anda menekan tombol "Kembali" dari halaman **Detail Produk**:
  Anda akan **langsung kembali ke halaman Beranda**, melewati halaman Daftar Produk.

**Kapan Menggunakan `replace`?**

`replace` sangat berguna dalam skenario di mana Anda tidak ingin pengguna dapat kembali ke halaman sebelumnya setelah tindakan tertentu. Contoh umum meliputi:

- **Setelah Login/Register:** Setelah pengguna berhasil login atau register, Anda mungkin ingin mengarahkan mereka ke _dashboard_. Jika mereka menekan tombol "Kembali", Anda tidak ingin mereka kembali ke halaman login/register yang sudah tidak relevan.
- **Formulir Multi-Langkah:** Setelah menyelesaikan satu langkah formulir dan beralih ke langkah berikutnya, Anda mungkin ingin mencegah pengguna kembali ke langkah sebelumnya melalui tombol "Kembali" _browser_ (jika data langkah sebelumnya sudah tidak relevan atau sudah disimpan).
- **Halaman Konfirmasi/Terima Kasih:** Setelah pengguna menyelesaikan pembelian atau mengirimkan formulir, Anda mengarahkan mereka ke halaman konfirmasi. Anda tidak ingin mereka bisa "kembali" ke halaman keranjang belanja atau formulir yang sudah selesai.

---

Jadi, `replace` tidak berarti "kembali dua kali". Sebaliknya, itu berarti **mengganti entri riwayat saat ini**, sehingga ketika tombol "Kembali" ditekan, _browser_ akan melompati halaman yang baru saja diganti.

# Active Link

Bagian ini menjelaskan cara memberikan gaya (styling) pada _link_ navigasi yang sedang aktif di aplikasi Next.js Anda. Ini penting untuk membantu pengguna memahami di mana mereka berada dalam struktur aplikasi.

### Mengidentifikasi _Link_ Aktif

Untuk mengetahui _link_ mana yang sedang aktif, kita perlu membandingkan jalur URL saat ini dengan `href` dari setiap _link_ navigasi.

1.  **Mendapatkan Jalur URL Saat Ini:**
    Kita menggunakan _hook_ `usePathname` dari `next/navigation`. _Hook_ ini akan mengembalikan _string_ yang merepresentasikan jalur URL saat ini (misalnya, `/login`, `/dashboard/settings`).

    ```typescript
    import { usePathname } from "next/navigation";

    // ... di dalam komponen React Anda
    const pathname = usePathname();
    ```

2.  **Menandai Komponen sebagai _Client Component_:**
    Karena `usePathname` adalah _hook_ React, komponen yang menggunakannya harus dijalankan di sisi _client_. Oleh karena itu, Anda perlu menambahkan direktif `"use client"` di bagian paling atas _file_ komponen Anda.

    ```typescript
    "use client"; // Tambahkan ini di baris pertama file

    import { usePathname } from "next/navigation";
    import Link from "next/link";
    // ...
    ```

3.  **Logika Penentuan Aktif:**
    Saat Anda merender daftar _link_ navigasi (misalnya, dengan memetakan sebuah _array_), Anda bisa membuat variabel boolean `isActive` untuk setiap _link_. Variabel ini akan bernilai `true` jika _link_ tersebut adalah _link_ yang sedang aktif.

    ```typescript
    "use client";

    import { usePathname } from "next/navigation";
    import Link from "next/link";

    const navLinks = [
      { name: "Register", href: "/register" },
      { name: "Login", href: "/login" },
      { name: "Forgot Password", href: "/forgot-password" },
    ];

    export default function AuthLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      const pathname = usePathname();

      return (
        <div>
          <nav>
            {navLinks.map((link) => {
              // Logika untuk menentukan apakah link aktif
              // Ini akan true jika pathname saat ini sama persis dengan href link
              // Atau jika pathname saat ini dimulai dengan href link (untuk nested routes),
              // tapi hati-hati untuk link root (misalnya '/')
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");

              return (
                <Link
                  href={link.href}
                  key={link.name}
                  // Menerapkan gaya secara kondisional
                  className={
                    isActive
                      ? "font-bold text-red-500 mr-4"
                      : "text-blue-500 mr-4"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <main>{children}</main>
        </div>
      );
    }
    ```

### Menerapkan Gaya (Styling)

Setelah Anda memiliki variabel `isActive`, Anda bisa menerapkan gaya CSS secara kondisional pada komponen `Link` atau elemen pembungkusnya.

Dalam contoh di atas, kelas Tailwind CSS digunakan:

- Jika `isActive` adalah `true`, maka `font-bold` (teks tebal) dan `text-red-500` (warna merah) akan diterapkan.
- Jika `isActive` adalah `false`, maka `text-blue-500` (warna biru) akan diterapkan.

Pastikan _file_ CSS yang berisi definisi kelas-kelas ini (misalnya, _file_ CSS global atau _file_ CSS khusus _layout_ tersebut) diimpor ke dalam komponen _layout_ Anda agar gaya dapat terlihat.

Dengan langkah-langkah ini, _link_ navigasi yang sedang aktif akan memiliki gaya yang berbeda, membantu pengguna memahami posisi mereka dalam aplikasi.

# `params` & `searchParams`

Dalam Next.js, ada dua jenis parameter utama yang bisa Anda gunakan untuk navigasi dan mengambil data: `params` dan `searchParams`. Keduanya memungkinkan Anda membuat URL yang dinamis dan mengambil informasi dari URL tersebut.

### 1\. `params` (Parameter Rute Dinamis)

`params` digunakan untuk mengambil nilai dari segmen rute dinamis yang Anda definisikan di nama _folder_. Misalnya, jika Anda memiliki rute `/articles/[articleId]`, maka `articleId` adalah parameter rute.

- **Akses di Server Components (`page.tsx` atau `layout.tsx`):**
  Di Next.js App Router saat ini, `params` tersedia langsung sebagai objek di _props_ komponen Anda. Anda tidak perlu `await` mereka. Fungsi komponen Anda bisa `async` jika Anda perlu mengambil data lain secara asinkron menggunakan nilai `params`.

  ```typescript
  // app/articles/[articleId]/page.tsx
  interface ArticlePageProps {
    params: Promise<{
      articleId: string; // articleId akan langsung tersedia sebagai string
    }>;
  }

  export default async function ArticlePage({ params }: ArticlePageProps) {
    const { articleId } = await params; // Langsung destructure

    // Contoh: Mengambil data artikel berdasarkan articleId
    // const articleData = await fetch(`https://api.example.com/articles/${articleId}`);
    // const article = await articleData.json();

    return (
      <div>
        <h1>Detail Artikel: {articleId}</h1>
        {/* <p>{article.title}</p> */}
      </div>
    );
  }
  ```

- **Akses di Client Components:**
  Di Client Components, Anda menggunakan _hook_ `useParams` dari `next/navigation` untuk mengakses `params`.

  ```typescript
  // components/ArticleDetailsClient.tsx
  "use client";

  import { useParams } from "next/navigation";
  import { useEffect, useState } from "react";

  export default function ArticleDetailsClient() {
    const params = useParams();
    const articleId = params.articleId as string; // Langsung tersedia

    // ... (logika data fetching di useEffect jika diperlukan)

    return <p>ID Artikel dari Client Component: {articleId}</p>;
  }
  ```

### 2\. `searchParams` (Parameter Kueri/Query Parameters)

`searchParams` digunakan untuk mengambil nilai dari parameter kueri di URL, yaitu bagian setelah tanda tanya (`?`). Ini sering digunakan untuk filter, opsi pengurutan, atau data opsional lainnya.

- **Akses di Server Components (`page.tsx`):**
  Sama seperti `params`, `searchParams` juga tersedia langsung sebagai objek di _props_ komponen `page.tsx`.

  ```typescript
  // app/articles/[articleId]/page.tsx (lanjutan dari contoh di atas)
  interface ArticlePageProps {
    params: Promise<{
      articleId: string;
    }>;
    searchParams: Promise<{
      language?: string; // searchParams akan langsung tersedia sebagai objek
      sort?: string;
    }>;
  }

  export default async function ArticlePage({
    params,
    searchParams,
  }: ArticlePageProps) {
    const { articleId } = await params;
    const { language, sort } = await searchParams; // Langsung destructure

    return (
      <div>
        <h1>Detail Artikel: {articleId}</h1>
        {language && <p>Bahasa: {language}</p>}
        {sort && <p>Urutkan berdasarkan: {sort}</p>}
      </div>
    );
  }
  ```

  **Contoh URL:** `/articles/breaking-news-123?language=English&sort=newest`

- **Akses di Client Components:**
  Di Client Components, Anda menggunakan _hook_ `useSearchParams` dari `next/navigation` untuk mengakses `searchParams`.

  ```typescript
  // components/LanguageSwitcher.tsx
  "use client";

  import { useSearchParams, useRouter } from "next/navigation";
  import Link from "next/link";

  export default function LanguageSwitcher() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentLanguage = searchParams.get("language") || "default";

    const handleLanguageChange = (newLang: string) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set("language", newLang);
      router.push(`?${newSearchParams.toString()}`);
    };

    return (
      <div>
        <p>Bahasa Saat Ini: {currentLanguage}</p>
        <button onClick={() => handleLanguageChange("English")}>English</button>
        <button onClick={() => handleLanguageChange("Indonesian")}>
          Indonesian
        </button>
      </div>
    );
  }
  ```

### Perbedaan Penting dan Catatan

- **`page.tsx` vs `layout.tsx`:**

  - _File_ `page.tsx` memiliki akses ke `params` dan `searchParams`.
  - _File_ `layout.tsx` **hanya memiliki akses ke `params`**. `searchParams` tidak tersedia di komponen _layout_. Ini karena _layout_ di-_render_ di tingkat yang lebih tinggi dan mungkin tidak selalu memerlukan informasi kueri spesifik halaman.

- **Tentang `Promise` dan _Hook_ `use`:**
  Ada beberapa kebingungan yang sering muncul terkait `params` dan `searchParams` sebagai `Promise` atau penggunaan _hook_ `use` dari React.

  - Di Next.js App Router yang modern, `params` dan `searchParams` yang diterima sebagai _props_ di **Server Components** (`page.tsx`) **bukanlah `Promise`**. Mereka sudah berupa objek yang siap digunakan.
  - Demikian pula, di **Client Components**, _hook_ `useParams()` dan `useSearchParams()` langsung mengembalikan objek yang siap digunakan.
  - _Hook_ `use()` dari React digunakan untuk **membaca nilai dari `Promise`** atau **konteks** di Client Components. Jika Anda melihat contoh yang menggunakan `use(params)` atau `use(searchParams)`, itu mungkin merujuk pada pola yang lebih lama atau skenario yang sangat spesifik di mana _params_ atau _searchParams_ itu sendiri berasal dari sumber asinkron yang perlu di-_resolve_ dengan _hook_ `use`. Namun, untuk kasus standar pengambilan _route_ dan _query parameters_, `useParams()` dan `useSearchParams()` adalah cara yang benar dan langsung.

Dengan memahami `params` dan `searchParams`, Anda dapat membangun aplikasi Next.js yang sangat dinamis dan responsif terhadap URL.

# Navigating Programmatically

Navigasi programatik di Next.js merujuk pada perpindahan antar halaman yang dipicu oleh kode, bukan oleh klik _link_ tradisional. Ini sangat berguna untuk skenario seperti pengalihan setelah pengiriman formulir (misalnya, halaman konfirmasi pesanan).

Next.js menyediakan beberapa cara untuk melakukan navigasi programatik:

### 1\. _Hook_ `useRouter` (Untuk Client Components)

_Hook_ `useRouter` dari `next/navigation` adalah inti dari navigasi programatik di Client Components.

- **Penggunaan:** Anda perlu mengimpornya dan menginisialisasinya di dalam komponen Anda: `const router = useRouter();`.
- **`"use client"`:** Karena ini adalah _hook_ React, komponen yang menggunakannya harus ditandai dengan direktif `"use client"` di bagian atas _file_.

Berikut adalah metode-metode utama yang disediakan oleh `router` objek:

- **`router.push(path)`:**

  - Ini adalah metode yang paling umum digunakan.
  - Navigasi ke jalur yang ditentukan (misalnya, `router.push('/')` untuk ke halaman utama).
  - **Menambahkan entri baru** ke tumpukan riwayat _browser_. Artinya, jika pengguna menekan tombol "Kembali", mereka akan kembali ke halaman sebelumnya.

  **Contoh:**

  ```typescript
  "use client";

  import { useRouter } from "next/navigation";

  export default function OrderProduct() {
    const router = useRouter();

    const handlePlaceOrder = () => {
      // Logika untuk memproses pesanan...
      alert("Pesanan berhasil ditempatkan!");
      router.push("/"); // Navigasi ke halaman utama setelah pesanan
    };

    return (
      <div>
        <h1>Halaman Pesanan Produk</h1>
        <button onClick={handlePlaceOrder}>Tempatkan Pesanan</button>
      </div>
    );
  }
  ```

- **`router.replace(path)`:**

  - Mirip dengan `push`, tetapi ini **mengganti entri saat ini** di tumpukan riwayat _browser_ alih-alih menambahkan yang baru.
  - Ini analog dengan _prop_ `replace` pada komponen `<Link>`.
  - Berguna ketika Anda tidak ingin pengguna dapat kembali ke halaman sebelumnya (misalnya, setelah halaman _login_ atau halaman konfirmasi).

  **Contoh:**

  ```typescript
  "use client";

  import { useRouter } from "next/navigation";

  export default function LoginPage() {
    const router = useRouter();

    const handleLogin = () => {
      // Logika autentikasi...
      if (loginSuccess) {
        router.replace("/dashboard"); // Ganti halaman login dengan dashboard di riwayat
      }
    };

    return (
      <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Masuk</button>
      </div>
    );
  }
  ```

- **`router.back()`:**

  - Navigasi ke halaman sebelumnya dalam riwayat _browser_. Mirip dengan menekan tombol "Kembali" di _browser_.

- **`router.forward()`:**

  - Navigasi ke halaman berikutnya dalam riwayat _browser_. Mirip dengan menekan tombol "Maju" di _browser_.

### 2\. Fungsi `redirect` (Untuk Server Components)

Fungsi `redirect` dari `next/navigation` adalah cara lain untuk menangani navigasi programatik, tetapi ini **dirancang untuk digunakan di Server Components** (atau di _server actions_/API routes).

- **Penggunaan:** Anda mengimpornya dan memanggilnya dengan jalur tujuan: `redirect('/products')`.
- **Perilaku:** Ketika `redirect` dipanggil, ia akan menghentikan _rendering_ komponen saat ini dan langsung mengalihkan _request_ ke URL yang ditentukan.

**Contoh:**
Misalkan Anda memiliki halaman detail ulasan (`/reviews/[reviewId]`), dan Anda ingin mengalihkan pengguna ke halaman produk jika ID ulasan tidak valid.

```typescript
// app/reviews/[reviewId]/page.tsx
import { redirect } from "next/navigation";

interface ReviewPageProps {
  params: {
    reviewId: string;
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { reviewId } = params;

  // Logika untuk memvalidasi reviewId
  const isValidReviewId = parseInt(reviewId) < 100; // Contoh validasi sederhana

  if (!isValidReviewId) {
    // Jika ID tidak valid, alihkan ke halaman produk
    redirect("/products");
  }

  return (
    <div>
      <h1>Detail Ulasan untuk ID: {reviewId}</h1>
      <p>Konten ulasan di sini...</p>
    </div>
  );
}
```

Dalam contoh ini, jika `reviewId` tidak valid, pengguna akan langsung dialihkan ke halaman `/products` di sisi _server_, sebelum halaman ulasan sempat dirender.

Dengan kombinasi `useRouter` di Client Components dan `redirect` di Server Components, Anda memiliki kontrol penuh atas alur navigasi aplikasi Next.js Anda.

---

# ─> Click [Continue](https://github.com/IhzhaNB/next-be-routehandler) to Route Handler
