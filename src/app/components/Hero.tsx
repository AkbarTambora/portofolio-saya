// src/app/components/Hero.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white">
        Akbar Khaerullah
      </h1>
      <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">
        IT Support Helpdesk & Database Specialist
      </p>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Lulusan Sistem Informasi dengan spesialisasi penanganan insiden, analisis akar masalah (RCA), dan mitigasi database. Memiliki pemahaman end-to-end bisnis proses Koperasi & BPR.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="https://github.com/AkbarTambora" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors border border-gray-700/50"
        >
          <FaGithub /> GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/akbar-k-a08845125/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a 
          href="#contact"
          className="bg-transparent hover:bg-gray-800/30 text-gray-300 hover:text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all border border-gray-800"
        >
          <FaEnvelope /> Hubungi Saya
        </a>
      </div>
    </section>
  );
};

export default Hero;