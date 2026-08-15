// src/app/components/Guestbook.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaUserCircle, FaComments, FaClock } from 'react-icons/fa';

interface Entry {
  _id?: string;
  id?: string;
  name: string;
  role?: string;
  message: string;
  createdAt: string | Date;
}

const defaultEntries: Entry[] = [
  // {
  //   id: "entry-1",
  //   name: "Rian Pratama",
  //   role: "Product Owner",
  //   message: "Analisis RCA untuk sinkronisasi data transaksi Koperasi sangat membantu tim developer dalam perbaikan Stored Procedure. Sukses terus, Akbar!",
  //   createdAt: new Date("2026-08-10T14:35:00").toISOString()
  // },
  // {
  //   id: "entry-2",
  //   name: "Dian Permata",
  //   role: "Quality Assurance (QA)",
  //   message: "Komunikasi dan penelusuran tiket insidennya sangat terstruktur dan cepat dipahami. Portofolionya keren!",
  //   createdAt: new Date("2026-07-28T09:20:00").toISOString()
  // }
];

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>(defaultEntries);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch entries from Cloud DB on mount
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch('/api/guestbook');
        const json = await res.json();

        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setEntries(json.data);
        } else {
          // Fallback to localStorage if DB is empty or unconfigured
          const saved = localStorage.getItem('portfolio_guestbook_entries');
          if (saved) {
            setEntries(JSON.parse(saved));
          }
        }
      } catch (err) {
        console.error('Fetch guestbook error:', err);
        const saved = localStorage.getItem('portfolio_guestbook_entries');
        if (saved) {
          setEntries(JSON.parse(saved));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const payload = {
      name: name.trim(),
      role: role.trim() || 'Pengunjung',
      message: message.trim(),
    };

    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success && json.data) {
        setEntries([json.data, ...entries]);
      } else {
        // Fallback save to localStorage if MongoDB URI is not yet connected
        const localEntry: Entry = {
          id: `local-${Date.now()}`,
          ...payload,
          createdAt: new Date().toISOString(),
        };
        const updated = [localEntry, ...entries];
        setEntries(updated);
        localStorage.setItem('portfolio_guestbook_entries', JSON.stringify(updated));
      }

      setName('');
      setRole('');
      setMessage('');
      setSuccessNotice(true);

      setTimeout(() => {
        setSuccessNotice(false);
      }, 5000);
    } catch (err) {
      console.error('Submit error:', err);
      // Fallback save to localStorage
      const localEntry: Entry = {
        id: `local-${Date.now()}`,
        ...payload,
        createdAt: new Date().toISOString(),
      };
      const updated = [localEntry, ...entries];
      setEntries(updated);
      localStorage.setItem('portfolio_guestbook_entries', JSON.stringify(updated));

      setName('');
      setRole('');
      setMessage('');
      setSuccessNotice(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDateTime = (dateVal: string | Date) => {
    try {
      const d = new Date(dateVal);
      const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
      const timeStr = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':');
      return `${dateStr} • ${timeStr} WIB`;
    } catch {
      return String(dateVal);
    }
  };

  return (
    <section id="guestbook" className="py-24 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <FaComments size={13} /> Cloud Persistent Guestbook
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Buku Tamu & Pesan Pengunjung</h2>
          <p className="text-gray-400 text-sm">
            Tinggalkan pesan, saran, atau sekadar menyapa. Pesan tersimpan di basis data cloud secara permanen.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Form Kirim Pesan */}
          <div className="md:col-span-5 bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4">Tulis Pesan / Feedback</h3>

            {successNotice && (
              <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs">
                Pesan Anda berhasil terkirim dan tersimpan secara permanen!
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
                {errorMessage}
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
                <FaPaperPlane size={14} /> {isSubmitting ? 'Mengirim...' : 'Kirim ke Buku Tamu'}
              </button>
            </form>
          </div>

          {/* List Pesan Pengunjung */}
          <div className="md:col-span-7 space-y-4 max-h-[480px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Pesan Terbaru ({entries.length})</h3>
              {isLoading && <span className="text-xs text-blue-400 animate-pulse">Memuat data cloud...</span>}
            </div>

            {entries.length === 0 ? (
              <p className="text-gray-400 text-sm italic">Belum ada pesan. Jadilah yang pertama menulis!</p>
            ) : (
              entries.map((entry, idx) => (
                <div 
                  key={entry._id || entry.id || idx}
                  className="p-4 bg-gray-900/60 border border-gray-800/80 rounded-xl hover:border-gray-700 transition-colors space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <FaUserCircle size={24} className="text-gray-400" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{entry.name}</h4>
                        {entry.role && <p className="text-xs text-blue-400 font-medium">{entry.role}</p>}
                      </div>
                    </div>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1 font-mono shrink-0">
                      <FaClock size={10} className="text-gray-500" />
                      {formatDateTime(entry.createdAt)}
                    </span>
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
