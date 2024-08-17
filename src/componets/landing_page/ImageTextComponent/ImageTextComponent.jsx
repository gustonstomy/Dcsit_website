import React from 'react';

const ImageTextComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-center  h-[80vh] mb-8  sm:pl-0 sm:h-[95vh]  md:h-[120vh] lg:h-[50vh] xl:h-[80vh] lg:gap-8 xl:gap-14 sm:justify-start  ">
       <div className="flex flex-col items-center text-center p-2 xl:p-0 w-[25rem] h-[65vh] sm:w-auto sm:h-[65vh] md:w-[40rem] lg:w-[32rem] lg:h-[45vh] xl:w-[35rem] xl:h-[70vh] lg:ml-2 xl:ml-40 ">
        <img
          src="/src/assets/images/comput-SC.png"
          alt="Undergraduate"
          className="h-[15rem] w-[25rem] rounded-xl mb-2 sm:h-[20rem] sm:w-[40rem] md:h-[30rem] md:w-[40rem]  lg:w-[60rem] xl:w-[35rem] xl:h-[70vh] "
        />
        <h3 className="text-[1.8rem] text-paletteColor2 mb-2">Undergraduate</h3>
        <p className="text-[1.1rem] text-gray-600 mb-5">
          A Computer Science or Information Technology degree teaches fundamentals of computing and prepares for tech careers
        </p>
        <a href="/UnderGraduate" className="text-[1.2em] text-blue-800 font-bold hover:text-paletteColor3">
          Read More
        </a>
      </div>
      <div className="flex flex-col items-center text-center p-2 xl:p-0 w-[25rem] h-[65vh] sm:w-auto sm:h-[65vh] md:w-[40rem] lg:w-[32rem] lg:h-[45vh] xl:w-[35rem] xl:h-[70vh] ">
        <img
          src="/src/assets/images/R&H.png"
          alt="Postgraduate"
         className="h-[15rem] w-[25rem] rounded-xl mb-2 sm:h-[20rem] sm:w-[40rem] md:h-[30rem] md:w-[40rem] md:mb-8 lg:w-[60rem] xl:w-[35rem] xl:h-[70vh]"
        />
        <h3 className="text-[1.8rem] text-paletteColor2 mb-2">Postgraduate</h3>
        <p className="text-[1.1rem] text-gray-600 mb-5">
          Advanced Computer Science or Information Technology degree for tech careers and research
        </p>
        <a href="/PostGraduate" className="text-[1.2em] text-blue-800 font-bold hover:text-paletteColor3">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ImageTextComponent;
