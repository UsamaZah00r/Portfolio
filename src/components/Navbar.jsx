import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-wide text-gray-900 italic">
          Usama <span className="text-teal-500">Zahoor</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <HashLink smooth to="/#home" className="text-gray-800 hover:text-teal-600 transition">Home</HashLink>
          <HashLink smooth to="/#about" className="text-gray-800 hover:text-teal-600 transition">About</HashLink>
          <HashLink smooth to="/#skills" className="text-gray-800 hover:text-teal-600 transition">Skills</HashLink>
          <HashLink smooth to="/#experience" className="text-gray-800 hover:text-teal-600 transition">Experience</HashLink>
          <HashLink smooth to="/#projects" className="text-gray-800 hover:text-teal-600 transition">Projects</HashLink>
          <HashLink smooth to="/#contact" className="text-gray-800 hover:text-teal-600 transition">Contact</HashLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <XMarkIcon onClick={toggleMenu} className="h-6 w-6 text-gray-900 cursor-pointer" />
          ) : (
            <Bars3Icon onClick={toggleMenu} className="h-6 w-6 text-gray-900 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white/90 backdrop-blur-sm shadow-md">
          <HashLink smooth to="/#home" className="block text-gray-800 hover:text-teal-600 transition" onClick={toggleMenu}>Home</HashLink>
          <HashLink smooth to="/#about" className="block text-gray-800 hover:text-teal-600 transition" onClick={toggleMenu}>About</HashLink>
          <HashLink smooth to="/#skills" className="block text-gray-800 hover:text-teal-600 transition" onClick={toggleMenu}>Skills</HashLink>
          <HashLink smooth to="/#experience" className="block text-gray-800 hover:text-teal-600 transition" onClick={toggleMenu}>Experience</HashLink>
          <HashLink smooth to="/#projects" className="block text-gray-800 hover:text-teal-600 transition" onClick={toggleMenu}>Projects</HashLink>
          <HashLink smooth to="/#contact" className="block text-gray-800 hover:text-teal-600 transition" onClick={toggleMenu}>Contact</HashLink>
        </div>
      )}
    </nav>
  );
}
