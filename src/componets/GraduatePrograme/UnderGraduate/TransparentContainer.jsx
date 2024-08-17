import React from 'react';

const TransparentContainer = () => {
  return (
    <div className="bg-black bg-opacity-70 text-white  w-full text-center flex flex-col justify-center md:h-[20vh]  xl:h-[30vh] font-sans">
      <p className="text-[1.1rem] md:text-[1.5rem] mb-4 font-bold">
        Insights Into Undergraduate Programmes
      </p>
      <p className="text-[1.1rem] md:text-[1.5rem] mb-4 font-bold">
        BSc. Computer Science
      </p>
      <p className="text-[1.1rem] md:text-[1.5rem] mb-4 font-bold">
        BSc. Information Technology
      </p>
    </div>
  );
};

export default TransparentContainer;
