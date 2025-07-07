import React from 'react';
import Spline from '@splinetool/react-spline';
import HeroText from '../components/HeroText';

function Home() {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden text-white">
      <Spline scene="https://prod.spline.design/W4SYTYG6v97FLbrV/scene.splinecode" />

      <div className="absolute inset-0 flex items-center justify-start z-10 pointer-events-none">
        <HeroText />
      </div>
    </div>
  );
}

export default Home;
