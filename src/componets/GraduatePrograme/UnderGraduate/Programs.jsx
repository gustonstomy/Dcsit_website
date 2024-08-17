import React from 'react';

const Programs = () => {
  return (
    <div className="flex flex-col mb-8 md:flex-row mx-5 md:mx-[3rem] lg:mx-[12rem] h-[60vh] md:h-[95vh] lg:h-[60vh] font-sans">
      <div className="w-full md:w-[37rem] bg-white rounded-lg p-5 md:p-8 text-center mb-10 md:mb-0 md:mr-8">
        <h2 className="text-2xl md:text-[1.8em] underline mb-5 font-sans">BSc. Computer Science</h2>
        <p className="flex justify-center text-lg md:text-[1.2em] text-paletteColor1 leading-[1.8rem] mb-6 font-sans">
          A BSc Computer Science degree program offers a comprehensive education in computer technology,
          software development, and computational problem-solving. Students learn programming, algorithms,
          software development, computer architecture, and more. Graduates are prepared for careers in
          software development, data analysis, cybersecurity, and research, with opportunities in various
          technology fields. This degree also serves as a foundation for advanced studies in computer science
          or entry into the tech industry.
        </p>
        <a href="/read-more" className="text-[1.2em] text-paletteColor2 font-bold underline hover:text-paletteColor8">
          Read More
        </a>
      </div>
      <div className="w-full md:w-[37rem] bg-white rounded-lg p-5 md:p-8 text-center">
        <h2 className="text-2xl md:text-[1.8em] underline mb-5 font-sans">BSc. Information Technology</h2>
        <p className="flex justify-evenly text-lg md:text-[1.2em] text-paletteColor1 leading-[1.8rem] mb-6 font-sans">
          A Bachelor of Science in Information Technology (BSc IT) undergraduate program is designed to equip
          students with the knowledge and skills needed to excel in the rapidly evolving world of technology.
          This program covers a wide range of topics, including software development, database management,
          network administration, cybersecurity, and IT project management. Graduates of the BSc IT program are
          well-prepared for careers in IT consulting, database administration, and other technology-related roles.
        </p>
        <a href="/read-more" className="text-[1.2em] text-paletteColor2 font-bold underline hover:text-paletteColor8">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Programs;
