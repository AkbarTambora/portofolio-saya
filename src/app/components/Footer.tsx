// src/app/components/Footer.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/AkbarTambora" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub size={28} /></a> 
          <a href="https://linkedin.com/in/akbar-k-a08845125" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={28} /></a> 
        </div>
        <a href="mailto:akbar.khaerullah.g@gmail.com" className="hover:text-white transition-colors">
          akbar.khaerullah.9@gmail.com
        </a> 
        <p className="mt-6 text-sm">
          &copy; {currentYear} Akbar Khaerullah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;