import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-16 lg:px-32 text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-teal-600"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="profile.png"
              alt="Usama Zahoor"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm Usama Zahoor 👋</h3>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              I’m a passionate <span className="font-semibold text-teal-600">MERN Stack Developer</span> focused on crafting clean and user-friendly web experiences.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed">
              I love solving real-world problems through code and I’m always eager to learn new technologies. Currently open to full-time or freelance opportunities.
            </p>
            <a
              href="/UsamaZahoorResume.pdf"
              download
              aria-label="Download Usama Zahoor's CV"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition"
            >
              <FaDownload /> Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
