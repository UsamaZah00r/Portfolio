import React from 'react';
import Spline from '@splinetool/react-spline';
import HeroText from '../components/HeroText';

function Home() {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden text-white">

      {/* Spline visible on md and up */}
      <div className="hidden md:block w-full h-full">
        <Spline scene="https://prod.spline.design/W4SYTYG6v97FLbrV/scene.splinecode" />
      </div>

      {/* Fallback image for mobile */}
      <img
        src="/Home.jpg"
        alt="3D Visual"
        className="block md:hidden w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-start z-10 pointer-events-none">
        <HeroText />
      </div>
    </div>
  );
}

export default Home;
