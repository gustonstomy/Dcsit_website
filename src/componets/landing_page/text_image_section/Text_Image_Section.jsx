import React from 'react';
import logo from '../../../assets/images/hod.png';

const TextImageSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-5  mb-20 md:gap-8 gap-2 xl:gap-1">
      <div className="w-full xl:w-2/5 text-justify  text-gray-600 text-base lg:text-lg  mb-8 lg:ml-1 xl:ml-40 ">
        <p>The University of Cape Coast has established the Department of Computer Science and Information Technology to address the need for trained computer scientists and information technologists in Ghana’s rapidly growing economy.</p><br />
        <p>This move aims to overcome the shortage of qualified IT professionals worldwide that hinders socio-economic development.</p>
        <p>The department offers programs such as BSc Computer Science, BSc Information Technology, and a PhD in Computer Science and Application.</p><br />
        <p>These programs provide a comprehensive education covering various aspects of Computer Science and Information Technology, including software engineering, artificial intelligence, internet systems, computer security, and more.</p><br />
        <p>The department’s focus is to prepare qualified high school graduates for careers in computing through these programs.</p>
      </div>
      <div className="w-full xl:w-1/3 flex items-center justify-center  lg:ml-10 xl:mr-40">
        <div className="text-center lg:w-100 ">
          <img src={logo} alt="Person" className="object-cover w-full  xl:w-auto h-auto rounded-lg lg:h-[45vh] xl:h-[69vh]" />
          <div className="mt-4 text-gray-900 ">
            <h1 className="text-xl font-semibold">Dr. Abdul-Lateef Yussif</h1>
            <h4 className="text-lg">Head Of Department</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImageSection;
