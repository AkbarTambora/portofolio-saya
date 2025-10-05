// src/app/components/About.tsx
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Kolom Gambar */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Akbar Khaerullah"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Kolom Teks */}
          <div className="text-center md:text-left max-w-lg">
            <p className="text-lg text-gray-300 leading-relaxed">
              Saya seorang mahasiswa yang berorientasi pada target dan seorang pembelajar seumur hidup (long-life learner). Saya memiliki ketertarikan mendalam di bidang Teknologi, khususnya pada Web dan Mobile Development, serta Edukasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;