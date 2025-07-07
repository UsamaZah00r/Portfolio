import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name & Year */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Usama Zahoor</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/UsamaZah00r"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/usama-zahoor-861231306"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:usamazahoorchadhar54@example.com"
            className="hover:text-teal-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
