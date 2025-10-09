// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveLink: string;
  codeLink: string;
  tags: string[];
}

export const projectData: Project[] = [
  {
    slug: "web-aplikasi-panduan-karier-sma-z",
    title: "Web Aplikasi Panduan Karier Siswa SMA-Z",
    description: "Web Aplikasi untuk melakukan tes minat dan bakat untuk siswa SMA Z berbasis RIASEC dengan Next.js dan MongoDB.",
    longDescription: "Proyek ini adalah sistem informasi yang dirancang untuk membantu siswa SMA menemukan jalur karier (kuliah/kerja) yang paling sesuai dengan minat dan bakat mereka. Sistem ini mengimplementasikan tes kepribadian RIASEC (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) untuk memberikan rekomendasi yang akurat. Dibangun dengan stack modern, aplikasi ini menawarkan antarmuka yang intuitif dan pengalaman pengguna yang lancar.",
    image: "/project1.png",
    liveLink: "https://panduan-karier-sma-z.vercel.app/",
    codeLink: "https://github.com/AkbarTambora/panduan-karier-sma-z",
    tags: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS']
  },
];