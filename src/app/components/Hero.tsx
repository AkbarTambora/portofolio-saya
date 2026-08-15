// src/app/components/Hero.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaTicketAlt, FaDatabase, FaShieldAlt, FaLayerGroup } from 'react-icons/fa'; 

const metrics = [
  {
    value: "50 - 200+",
    label: "Tiket Selesai / Minggu",
    desc: "Resolusi multi-peran (Helpdesk, CS & DB Admin)",
    icon: <FaTicketAlt className="text-blue-400" size={20} />
  },
  {
    value: "End-to-End",
    label: "Bisnis Proses Koperasi",
    desc: "Sales, Survey, Collection s.d. Jurnal Transaksi",
    icon: <FaLayerGroup className="text-emerald-400" size={20} />
  },
  {
    value: "MySQL & Mongo",
    label: "RCA & Mitigasi Database",
    desc: "Tracing alur data, query kompleks & Stored Procedure",
    icon: <FaDatabase className="text-cyan-400" size={20} />
  },
  {
    value: "ISO 27001",
    label: "Standar Keamanan SOP",
    desc: "Penyusunan SOP Pelayanan & Pengaduan Sistem",
    icon: <FaShieldAlt className="text-amber-400" size={20} />
  }
];

const Hero = () => {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-20 max-w-5xl mx-auto">
      
      {/* Live Availability Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gray-900/90 border border-gray-800 text-xs sm:text-sm text-gray-300 mb-8 shadow-sm">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="font-medium text-emerald-400">Tersedia untuk Peluang Baru:</span>
        <span className="text-gray-300">WFO / WFH / Hybrid • Lokal & Remote</span>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight text-white">
        Akbar Khaerullah
      </h1>
      <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-6">
        IT Support Helpdesk & Database Specialist
      </p>
      <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
        Lulusan Sistem Informasi dengan spesialisasi penanganan insiden, analisis akar masalah (RCA), dan mitigasi database. Berpengalaman menjaga stabilitas layanan aplikasi mobile & core system industri Koperasi & BPR.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3.5 mb-16">
        <a 
          href="https://www.linkedin.com/in/akbar-k-a08845125/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all shadow-md text-sm"
        >
          <FaLinkedin size={18} /> LinkedIn
        </a>
        <a 
          href="https://github.com/AkbarTambora" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all border border-gray-700 text-sm"
        >
          <FaGithub size={18} /> GitHub
        </a>
        <a 
          href="https://drive.google.com/file/d/1fBBWeZ4DIOLwzZ7JXbbEJbatSpM3eXUT/view?usp=sharing"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-blue-300 hover:text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all border border-gray-700 text-sm"
          title="Unduh Curriculum Vitae"
        >
          <FaFileDownload size={16} /> Unduh Resume (CV)
        </a>
        <a 
          href="#contact"
          className="bg-transparent hover:bg-gray-800/40 text-gray-300 hover:text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all border border-gray-800 text-sm"
        >
          <FaEnvelope size={16} /> Hubungi Saya
        </a>
      </div>

      {/* Impact Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
        {metrics.map((item, idx) => (
          <div 
            key={idx} 
            className="p-5 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-bold text-white">{item.value}</span>
              {item.icon}
            </div>
            <h4 className="text-sm font-semibold text-gray-200 mb-1">{item.label}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Hero;