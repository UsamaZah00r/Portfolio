import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skill from './pages/Skill';
import Experience from './pages/Experience';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="skills"><Skill /></div>
              <div id="experience"><Experience /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
