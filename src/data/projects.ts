// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  category?: string;
  description: string;
  longDescription: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  image: string;
  liveLink?: string;
  codeLink?: string;
  tags: string[];
}

export const projectData: Project[] = [
  {
    slug: "core-system-mitigation-rca",
    title: "Incident Mitigation & Database Tracing Core System Koperasi",
    category: "Database & System Support",
    description: "Studi kasus penanganan insiden transaksi gantung, Root Cause Analysis (RCA) Stored Procedure MySQL & sinkronisasi MongoDB pada sistem Koperasi & BPR.",
    longDescription: "Studi kasus komprehensif penanganan operasional sistem di industri Koperasi & BPR. Mengelola stabilitas layanan dengan peran ganda sebagai Helpdesk, Customer Service, dan Technical Support untuk menyelesaikan 50 - 200 tiket insiden per minggu. Berfokus pada penelusuran mandiri (tracing) inkonsistensi data transaksi dan eksekusi mitigasi database produksi.",
    challenge: "Inkonsistensi data transaksi antara aplikasi mobile lapangan (AO) dan core system backend akibat kegagalan jaringan atau human error saat pengajuan, pencairan, dan angsuran yang berisiko menyebabkan selisih jurnal keuangan cabang.",
    solution: "Melakukan tracing query end-to-end pada MongoDB Compass (sisi mobile) dan MySQL (sisi core system). Membedah parameter Stored Procedure dan tabel transaksi (kretrans, abatrans, transaksi_master/detail), lalu mengeksekusi skrip mitigasi SQL dengan persetujuan atasan serta merumuskan pencegahan bersama tim produk.",
    impact: "Mempertahankan SLA penyelesaian tiket 50-200/minggu, memulihkan keakuratan data pembukuan cabang secara real-time, dan menyusun SOP Pelayanan Pengguna sesuai standar keamanan informasi ISO 27001.",
    image: "/project2.jpg",
    liveLink: "",
    codeLink: "",
    tags: ['MySQL', 'MongoDB Compass', 'Stored Procedure', 'Root Cause Analysis', 'ISO 27001', 'Core System']
  },
  {
    slug: "web-aplikasi-panduan-karier-sma-z",
    title: "Web Aplikasi Panduan Karier Siswa SMA-Z",
    category: "Full-Stack Development",
    description: "Web Aplikasi untuk melakukan tes minat dan bakat untuk siswa SMA Z berbasis RIASEC dengan Next.js dan MongoDB.",
    longDescription: "Proyek ini adalah sistem informasi yang dirancang untuk membantu siswa SMA menemukan jalur karier (kuliah/kerja) yang paling sesuai dengan minat dan bakat mereka. Sistem ini mengimplementasikan tes kepribadian RIASEC (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) untuk memberikan rekomendasi yang akurat. Dibangun dengan stack modern, aplikasi ini menawarkan antarmuka yang intuitif dan pengalaman pengguna yang lancar.",
    challenge: "Siswa SMA kerap kesulitan menentukan program studi kuliah atau peminatan karier karena minimnya asesmen psikometri yang mudah diakses dan interaktif.",
    solution: "Membangun sistem asesmen RIASEC otomatis berbasis web menggunakan Next.js dan MongoDB dengan kalkulasi skor instan dan visualisasi rekomendasi jalur studi.",
    impact: "Membantu ratusan siswa mendapatkan rekomendasi peminatan secara objektif, cepat, dan terstruktur.",
    image: "/project1.png",
    liveLink: "https://panduan-karier-sma-z.vercel.app/",
    codeLink: "https://github.com/AkbarTambora/panduan-karier-sma-z",
    tags: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS']
  },
];