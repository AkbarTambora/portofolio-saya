// src/app/components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        <a href="#hero" className="text-xl font-bold hover:text-gray-300 transition-colors">
          Akbar K.
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pt-2 pb-4 space-y-2 border-t border-gray-800 transition-all duration-300">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-gray-300 hover:text-white transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;