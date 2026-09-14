# Faq Portfolio - AI Engineer & Researcher

Website portfolio modern berstandar editorial & AI Lab yang diadaptasi dari blueprint layout [heroprototype.png](file:///E:/Portfolio%20Website/heroprototype.png).

---

## 🌟 Fitur & Keunggulan Utama

### 1. Geometri Tab dengan Sudut Dalam Melengkung (*Concave Inner Fillet*)
- Diterapkan pada kartu **`About Me`** dan **`Tools & Stack`**.
- Menggunakan kalkulasi kurva `radial-gradient(circle at top right, transparent R, var(--bg-card) R)` yang menyambungkan dinding vertikal tab dengan tepi horizontal kartu tanpa sudut patah 90°.

### 2. Sistem 3 Bahasa (ID / ENG / JP)
- Dilengkapi tombol bendera vektor SVG presisi:
  - 🇮🇩 **ID** (Bahasa Indonesia)
  - 🇬🇧 **EN** (English)
  - 🇯🇵 **JP** (日本語 dengan dukungan tipografi `Noto Sans JP`)
- Seluruh teks antarmuka (navigasi, deskripsi LLM, judul kartu, dan detail proyek) berubah seketika tanpa *page reload*, dan pilihan bahasa otomatis tersimpan di memori browser (`localStorage`).

### 3. Solusi 1: Responsive "Seamless Docking"
- **Tampilan Desktop (≥ 1024px)**: Kapsul 3 bendera mengunci pas (*docked*) di sudut kanan atas kartu **`Tools & Stack`** persis seperti di prototype.
- **Tampilan Smartphone (< 768px)**: Kapsul 3 bendera secara otomatis **berpindah ke mini header fixed paling atas layar**, sehingga pengunjung internasional langsung melihat tombol bahasa di detik pertama tanpa perlu *scroll*.

### 4. Sliding Banner Project (Interactive Carousel)
- Menampilkan karya nyata di bidang AI & LLM:
  1. **Enterprise Knowledge RAG Agent** (Hybrid Retrieval & Cross-Encoder Reranker)
  2. **Domain-Adapted Instruction LLM** (4-bit AWQ / vLLM 4.2x Throughput)
  3. **Vision-Language Automation Agent** (Multimodal UI & Extraction Pipeline)
- Mendukung navigasi panah, dot indicators, auto-play 6.5 detik (pause saat mouse hover), dan **gesture swipe sentuh jari (*touch swipe*)** di smartphone.

### 5. Tombol Kontak Resmi
Tautan kontak resmi di kartu kanan bawah sudah aktif:
- **GitHub**: [https://github.com/mxfaqih](https://github.com/mxfaqih)
- **WhatsApp**: [+62 857-3240-6997](https://wa.me/6285732406997)
- **LinkedIn**: [https://www.linkedin.com/in/mxfaqih](https://www.linkedin.com/in/mxfaqih)

---

## 📂 Struktur File

```
E:/Portfolio Website/
├── index.html          # Struktur HTML Hero Section
├── style.css           # Desain UI/UX Clean Modern Tech & breakpoint responsif
├── script.js           # Sistem multi-bahasa, seamless docking, & sliding banner
├── heroprototype.png   # Gambar cetak biru susunan dari Anda
├── image.png           # Gambar inspirasi awal
└── README.md           # Dokumentasi proyek
```

---

## 💡 Cara Menjalankan

Cukup buka file [`index.html`](file:///E:/Portfolio%20Website/index.html) langsung di browser favorit Anda (Chrome, Edge, Safari, Firefox).
