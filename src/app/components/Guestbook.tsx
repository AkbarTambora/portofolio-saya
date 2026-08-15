// src/app/components/Guestbook.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaUserCircle, FaComments } from 'react-icons/fa';

interface Entry {
  id: string;
  name: string;
  role?: string;
  message: string;
  date: string;
}

const initialEntries: Entry[] = [
  {
    id: "entry-1",
    name: "Rian Pratama",
    role: "Product Owner",
    message: "Analisis RCA untuk sinkronisasi data transaksi Koperasi sangat membantu tim developer dalam perbaikan Stored Procedure. Keep it up!",
    date: "10 Agustus 2026"
  },
  {
    id: "entry-2",
    name: "Dian Permata",
    role: "Quality Assurance (QA)",
    message: "Komunikasi dan penelusuran tiket insidennya sangat terstruktur dan cepat dipahami. Portofolionya keren, Akbar!",
    date: "28 Juli 2026"
  }
];

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_guestbook_entries');
      if (saved) {
        setEntries(JSON.parse(saved));
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newEntry: Entry = {
      id: `entry-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Pengunjung',
      message: message.trim(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);

    try {
      localStorage.setItem('portfolio_guestbook_entries', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setName('');
    setRole('');
    setMessage('');
    setIsSubmitting(false);
    setSuccessNotice(true);

    setTimeout(() => {
      setSuccessNotice(false);
    }, 4000);
  };

  return (
    <section id="guestbook" className="py-24 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <FaComments size={13} /> Interactive Guestbook
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Buku Tamu & Pesan Pengunjung</h2>
          <p className="text-gray-400 text-sm">
            Tinggalkan pesan, saran, atau sekadar menyapa dan berjejaring bersama saya.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Form Kirim Pesan */}
          <div className="md:col-span-5 bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4">Tulis Pesan / Feedback</h3>

            {successNotice && (
              <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs">
                Pesan Anda berhasil dipublikasikan di buku tamu!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Nama Lengkap *</label>
                <input
                  type="text"
                  required
                  placeholder="cth. Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Profesi / Instansi (Opsional)</label>
                <input
                  type="text"
                  placeholder="cth. Recruiter / Software Engineer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Pesan Anda *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm shadow-md disabled:opacity-50"
              >
                <FaPaperPlane size={14} /> Kirim ke Buku Tamu
              </button>
            </form>
          </div>

          {/* List Pesan Pengunjung */}
          <div className="md:col-span-7 space-y-4 max-h-[480px] overflow-y-auto pr-1">
            <h3 className="text-lg font-bold text-white mb-4">Pesan Terbaru ({entries.length})</h3>

            {entries.length === 0 ? (
              <p className="text-gray-400 text-sm italic">Belum ada pesan. Jadilah yang pertama menulis!</p>
            ) : (
              entries.map((entry) => (
                <div 
                  key={entry.id}
                  className="p-4 bg-gray-900/60 border border-gray-800/80 rounded-xl hover:border-gray-700 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FaUserCircle size={24} className="text-gray-400" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{entry.name}</h4>
                        {entry.role && <p className="text-xs text-blue-400">{entry.role}</p>}
                      </div>
                    </div>
                    <span className="text-[11px] text-gray-400">{entry.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-8">
                    {entry.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
