import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaRegPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export default function Skill() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-4xl text-amber-700" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-4xl text-gray-800" /> },
    { name: 'Postman', icon: <FaRegPaperPlane className="text-4xl text-red-500" /> },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-600">Skills</h2>

        <Marquee gradient={false} speed={60} pauseOnHover>
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 mx-6 min-w-[150px] text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {skill.icon}
              <p className="mt-2 font-semibold text-gray-700 text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </Marquee>

      </div>
    </section>
  );
}
