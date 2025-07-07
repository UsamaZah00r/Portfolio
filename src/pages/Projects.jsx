import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ProPath AI',
    image: 'Propath.PNG',
    description:
      'An AI-powered mobile app for student career and scholarship guidance. Built with React Native, Mistral API, Node.js, and MongoDB.',
    code: 'https://github.com/UsamaZah00r/ProPath-AI.git',
  },
  {
    title: 'Job Finder App',
    image: 'Jobfinder.PNG',
    description:
      'A full-stack job platform connecting job seekers and employers. Created using React, Express.js, MongoDB, and EmailJS for notifications.',
    code: 'https://github.com/UsamaZah00r/Job-Finder.git',
  },
  {
    title: 'YouTube Clone',
    image: 'Youtube.PNG',
    description:
      'A responsive video streaming app mimicking core YouTube features. Built with React, RapidAPI, Material UI, and React Router.',
    code: 'https://github.com/UsamaZah00r/youtube.git',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-20 px-6 md:px-16 lg:px-32 text-gray-800"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-teal-600 mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group h-[380px] flex flex-col justify-end"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300"></div>
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md transition"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
