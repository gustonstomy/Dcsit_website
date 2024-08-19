import React from 'react';

const MissViss = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[60vh] md:h-[40vh] lg:h-[28vh] xl:h-[50vh]">
      <div className="bg-[var(--paletteColor4)] flex flex-col justify-center w-full lg:w-1/2 p-5 md:px-10 lg:h-[20em] ">
        <h1 className="text-white text-[1.5em] md:text-3xl mb-4  justify-center text-center">Our Vision</h1>
        <p className="text-[var(--paletteColor5)] leading-[2rem] text-[1.2em] md:text-xl mb-6">
          To produce the best trained Computer Science graduates and IT professionals through a well-equipped department with the finest researchers, qualified personnel, and state-of-the-art facilities.
        </p>
      </div>
      <div className="bg-[var(--paletteColor3)] flex flex-col justify-center w-full lg:w-1/2 p-5 md:px-10 lg:h-[20em] ">
        <h1 className="text-white text-[1.5em] md:text-3xl mb-4  justify-center text-center">Our Mission</h1>
        <p className="text-[var(--paletteColor5)] leading-[2rem] text-[1.2em] md:text-xl mb-6">
          Providing quality Computer Science and Information Technology education using the finest researchers, qualified personnel, and state-of-the-art facilities.
        </p>
      </div>
    </div>
  );
};

export default MissViss;
