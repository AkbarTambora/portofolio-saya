// src/app/components/About.tsx
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">About Me</h2>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Kolom Gambar & Info Singkat */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-2xl mb-6 border border-gray-800">
              <Image
                src="/profile.jpeg"
                alt="Akbar Khaerullah"
                fill 
                className="object-cover" 
              />
            </div>
            <div className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Pendidikan:</span>
                <span className="text-white font-medium text-right">S1 Sistem Informasi (Lulus Agt 2025)</span>
              </div>
              <div className="flex justify-between text-sm border-t border-gray-800 pt-3">
                <span className="text-gray-400">Fokus:</span>
                <span className="text-white font-medium text-right">Product Development & System Analysis</span>
              </div>
              <div className="flex justify-between text-sm border-t border-gray-800 pt-3">
                <span className="text-gray-400">Filosofi:</span>
                <span className="text-white font-medium text-right italic">Process over output</span>
              </div>
            </div>
          </div>

          {/* Kolom Teks Ringkasan Profesional */}
          <div className="md:col-span-7 text-left space-y-6">
            <h3 className="text-2xl font-bold text-blue-400">Profil Profesional</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Saya adalah lulusan S1 Sistem Informasi dan seorang <b>lifelong learner</b> dengan minat mendalam pada pengembangan produk perangkat lunak dan analisis sistem. 
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              Memiliki pengalaman intensif sebagai <b>IT Support Helpdesk</b> di industri <b>software house</b> (BPR & Koperasi), menjalankan peran ganda yang mencakup penanganan keluhan klien (<b>Customer Service</b>), analisis akar masalah (<b>Root Cause Analysis</b>), hingga mitigasi langsung di tingkat database.
            </p>
            <p className="text-gray-300 leading-relaxed text-base font-medium border-l-4 border-blue-500 pl-4 py-1 bg-blue-500/5 rounded-r">
              Saya memiliki pemahaman <b>end-to-end</b> yang sangat kuat terhadap alur bisnis (<b>business logic</b>) Koperasi—mulai dari akuisisi nasabah, proses survei, penagihan (<b>collection</b>), hingga siklus transaksi dan penjurnalan keuangan.
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              Saya sangat berorientasi pada kerja sama tim (<b>teamwork</b>). Saya mengombinasikan kemampuan teknis basis data dengan komunikasi lintas-divisi guna memastikan seluruh sistem pendukung bisnis berjalan optimal demi kepuasan klien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;