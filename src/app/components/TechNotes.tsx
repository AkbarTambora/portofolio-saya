// src/app/components/TechNotes.tsx
"use client";

import React, { useState } from 'react';
import { FaCode, FaChevronDown, FaChevronUp, FaBookBookmark } from 'react-icons/fa6';

interface Note {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  codeSnippet?: string;
}

const notesData: Note[] = [
  {
    id: "note-1",
    title: "Metodologi Tracing Transaksi Angsuran Mobile App ke Core System",
    category: "Root Cause Analysis",
    date: "Agustus 2026",
    summary: "Alur sistematis penelusuran data saat terjadi selisih antara pencatatan transaksi di MongoDB (mobile) dan tabel jurnal MySQL.",
    content: "Ketika nasabah melaporkan pembayaran angsuran berhasil di aplikasi lapangan tetapi status di core system belum terupdate, langkah pertama adalah memeriksa payload di koleksi MongoDB Compass. Cari dokumen berdasarkan `nomor_rekening` dan `timestamp`. Cocokkan dengan tabel `log_params_sp` dan `kretrans` pada MySQL core system untuk memverifikasi apakah kegagalan terjadi pada eksekusi Stored Procedure atau timeout koneksi API.",
    codeSnippet: `-- Contoh Query Verifikasi Transaksi & Parameter SP
SELECT k.tgl_trans, k.pokok, k.bunga, k.kuitansi, l.status_eksekusi, l.error_msg
FROM kretrans k
LEFT JOIN log_params_sp l ON k.id_transaksi = l.id_transaksi
WHERE k.no_rekening = '01.02.2026.00192'
ORDER BY k.tgl_trans DESC LIMIT 5;`
  },
  {
    id: "note-2",
    title: "Best Practice Eksekusi Mitigasi Database pada Lingkungan Produksi",
    category: "Database Administration",
    date: "Juli 2026",
    summary: "Prosedur aman perbaikan inkonsistensi data transaksi tanpa mengganggu operasional sistem perbankan/koperasi.",
    content: "Setiap mitigasi data di database produksi wajib mematuhi 4 pilar keamanan: 1) Lakukan SELECT query terlebih dahulu untuk mengisolasi record terdampak; 2) Jalankan mitigasi di dalam transaksi (START TRANSACTION... COMMIT/ROLLBACK); 3) Selalu simpan backup nilai data lama (staging table); 4) Pastikan persetujuan tertulis (approval) dari atasan/tim terkait.",
    codeSnippet: `START TRANSACTION;
-- 1. Backup record terdampak
CREATE TABLE temp_mitigasi_20260815 AS 
SELECT * FROM abatrans WHERE id_trans = 48291;

-- 2. Update data terkoreksi
UPDATE abatrans 
SET status_verifikasi = 'VERIFIED', update_by = 'IT_SUPPORT_MITIGATION'
WHERE id_trans = 48291 AND status_verifikasi = 'PENDING';

-- 3. Verifikasi sebelum commit
SELECT id_trans, status_verifikasi FROM abatrans WHERE id_trans = 48291;
COMMIT;`
  },
  {
    id: "note-3",
    title: "Penerapan SOP Pengaduan Pengguna Selaras dengan ISO 27001",
    category: "SOP & Compliance",
    date: "Juni 2026",
    summary: "Pemisahan insiden keamanan informasi, manajemen log audit tiket, dan perlindungan privasi data nasabah.",
    content: "Dalam menyusun SOP layanan pengguna, seluruh tiket diklasifikasikan berdasarkan tingkat keparahan (P1 Critical hingga P4 Low). Akses ke data sensitif nasabah (seperti identitas pribadi dan mutasi rekening) dibatasi dengan prinsip least-privilege, dan seluruh intervensi database harus tercatat dalam log audit yang tidak dapat dimanipulasi (*tamper-proof log*).",
  }
];

export default function TechNotes() {
  const [expandedId, setExpandedId] = useState<string | null>("note-1");

  const toggleNote = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="notes" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <FaBookBookmark size={13} /> Knowledge Base & RCA Logs
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Catatan Teknis & Troubleshooting</h2>
          <p className="text-gray-400 text-sm">
            Kumpulan dokumentasi analisis masalah, query mitigasi basis data, dan praktik terbaik sistem informasi.
          </p>
        </div>

        <div className="space-y-4">
          {notesData.map((note) => {
            const isExpanded = expandedId === note.id;
            return (
              <div 
                key={note.id}
                className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-700"
              >
                <button
                  onClick={() => toggleNote(note.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                        {note.category}
                      </span>
                      <span className="text-xs text-gray-400">{note.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                      {note.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {note.summary}
                    </p>
                  </div>
                  <div className="text-gray-400 mt-1 shrink-0">
                    {isExpanded ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-800/80 space-y-4 text-gray-300 text-sm leading-relaxed">
                    <p>{note.content}</p>
                    
                    {note.codeSnippet && (
                      <div className="mt-4 rounded-lg bg-gray-900 border border-gray-800 p-4 font-mono text-xs overflow-x-auto text-gray-300">
                        <div className="flex items-center gap-2 text-gray-400 text-[11px] mb-2 pb-1 border-b border-gray-800">
                          <FaCode size={12} /> SQL Mitigation Snippet
                        </div>
                        <pre>
                          <code>{note.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
