import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function HeroText() {
  return (
    <div className="pointer-events-auto h-full flex items-center px-6">
      <div className="max-w-2xl text-left bg-white/60 backdrop-blur-[1px] rounded-xl p-8 shadow-lg">
        <p className="text-base md:text-lg text-slate-700 mb-2">Hi, my name is</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-4">
          Usama <span className='text-teal-500'>Zahoor</span><span className="text-black"></span>
        </h1>

        <TypeAnimation
          sequence={[
            "I'm a Software Engineer",
            2000,
            "I'm a MERN Developer",
            2000,
            "I'm a Web Developer",
            2000,
            "I'm a Frontend Engineer",
            2000,
            "I'm a JavaScript Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-500"
        />

        <p className="mt-6 text-sm sm:text-base text-slate-700 max-w-md">
          I'm a passionate developer focused on building exceptional digital experiences. Currently available for exciting projects.
        </p>
      </div>
    </div>
  );
}
