// src/app/components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        <a href="#hero" className="text-xl font-bold">
          Akbar K.
        </a>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;