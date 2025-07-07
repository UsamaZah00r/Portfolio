import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const timeline = [
    {
      title: 'Frontend Developer – Freelancer',
      date: '2023 – Present',
      description:
        'Delivered responsive websites using HTML, CSS, JavaScript, and React. Focused on mobile-first UX and SEO optimization.',
    },
    {
      title: 'Web Development Intern – Rhombix Technologies',
      date: 'May 2025 – Present (Remote)',
      description:
        'Built full-stack applications using MongoDB, Express.js, React.js, and Node.js. Designed responsive frontends with React and Tailwind CSS, integrated RESTful APIs, and collaborated with senior developers to deliver production-ready modules.',
    },
    {
      title: 'WordPress Development Intern – Digital Professor (Software House)',
      date: 'Jan 2025 – Mar 2025',
      description:
        'Developed SEO-friendly websites using WordPress, HTML, CSS, and Elementor. Customized themes and plugins, optimized performance, and worked closely with design/content teams to deliver high-quality client solutions.',
    },
  ];

  return (
    <section
      id="experience"
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
          className="text-3xl font-bold mb-12 text-center text-teal-600"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-teal-500 ml-4 space-y-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="pl-6 relative"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-3 top-2 w-4 h-4 bg-teal-500 rounded-full"></span>
              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
              <span className="text-sm text-gray-500">{item.date}</span>
              <p className="mt-2 text-slate-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
