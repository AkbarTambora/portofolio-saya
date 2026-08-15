// src/app/components/Experience.tsx
import React from 'react';

const experiences = [
  {
    role: "IT Support Helpdesk",
    company: "PT TOP",
    period: "November 2025 - Sekarang",
    tasks: [
      "Penanganan Insiden Multi-Peran: Menjadi garda terdepan untuk menerima dan mengelola keluhan dari cabang klien Koperasi & BPR (aplikasi mobile, backoffice, dan core system) dengan performa penyelesaian 50 hingga 200 tiket per minggu.",
      "Root Cause Analysis (RCA): Menganalisis akar masalah secara mandiri dengan menelusuri log aplikasi, relasi database, dan eksekusi query pada MongoDB Compass (sisi aplikasi mobile: data nasabah, pengajuan, pencairan, account officer, angsuran) serta MySQL (sisi core system).",
      "Mitigasi Basis Data & Logika Sistem: Melakukan pemeliharaan dan mitigasi inkonsistensi data pada database produksi (dengan persetujuan) menggunakan MySQL. Berpengalaman membedah Stored Procedure kompleks dan menganalisis tabel transaksi.",
      "Kolaborasi Lintas Divisi & Eskalasi: Berkolaborasi aktif dengan QA, pengembang, Product Owner, hingga jajaran Direktur IT dan Direktur Utama untuk merumuskan solusi definitif agar insiden logika bisnis pada aplikasi tidak terulang.",
      "Standarisasi Keamanan (ISO 27001): Berperan langsung dalam menyusun Standard Operating Procedure (SOP) Pelayanan dan Pengaduan Pengguna untuk pemenuhan sertifikasi standar keamanan informasi ISO 27001."
    ]
  },
  {
    role: "DevOps Engineer (Intern)",
    company: "Cakap",
    period: "Januari 2025 - April 2025",
    tasks: [
      "Mempelajari konsep dasar containerization dan orkestrasi menggunakan Docker & Kubernetes untuk memahami siklus hidup deployment aplikasi.",
      "Berperan sebagai pengembang frontend dalam tim mini-project, membangun antarmuka sistem e-learning menggunakan framework Angular.",
      "Berkolaborasi dalam tim lintas fungsi menggunakan kerangka kerja Agile Scrum dengan rapat harian dan koordinasi berkala."
    ]
  },
  {
    role: "Telemarketing",
    company: "STMIK Indo Daya Suvana",
    period: "November 2022 - Maret 2023",
    tasks: [
      "Melakukan kualifikasi dan filtering data calon mahasiswa potensial untuk promosi institusi.",
      "Menawarkan program kuliah tingkat sarjana (S1) secara langsung via telepon secara persuasif.",
      "Membantu mengoordinasikan jalannya seminar dan acara promosi eksternal untuk branding kampus."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Work Experience</h2>
        
        <div className="relative border-l border-gray-700 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Dot indicator */}
              <span className="absolute -left-[9px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-blue-500 ring-4 ring-gray-900">
                <span className="h-2 w-2 rounded-full bg-white"></span>
              </span>
              
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/30 p-6 rounded-xl hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-400 bg-gray-900 px-3 py-1 rounded-full border border-gray-800/80 self-start md:self-center">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="list-disc list-outside text-gray-300 text-sm space-y-2.5 ml-4">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="leading-relaxed">{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;