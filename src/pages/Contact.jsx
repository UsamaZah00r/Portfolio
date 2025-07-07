import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_6noe5if',
      'template_sf3az0j',
      formRef.current,
      '3jHozHv90zD9TKFQa'
    )
    .then(() => {
      setIsSent(true);
      formRef.current.reset();
      alert("Email Send Successfully!")
    })
    .catch((error) => {
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-16 lg:px-32 text-gray-800">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{ hidden: {}, visible: {} }}
      >
        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-teal-600 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            I'm always open to discussing new opportunities, projects, or collaborations.
            Feel free to drop me a message and I’ll get back to you as soon as possible.
          </p>
          <img
            src="contact.png"
            alt="Contact Us"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 bg-gray-100 p-8 rounded-xl shadow-lg space-y-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition"
          >
            {isSent ? 'Message Sent!' : 'Send Message'}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
