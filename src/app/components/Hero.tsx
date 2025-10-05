// src/app/components/Hero.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Akbar Khaerullah
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Full-Stack Developer & UI/UX Enthusiast
      </p>
      <div className="flex gap-4">
        <a 
          href="https://github.com/AkbarTambora" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
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
      </div>
    </section>
  );
};

export default Hero;