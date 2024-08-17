import React from 'react';

const featuresData = [
  {
    title: 'Social Events',
    description: 'On-campus events shape the social and intellectual character of students.',
    imgSrc: '/src/assets/images/Frame-f.jpg', 
  },
  {
    title: 'Certified Lecturers',
    description: 'Teachers with extensive experience and certification at the highest level.',
    imgSrc: '/src/assets/images/Frame-s.png',
  },
  {
    title: 'Internship Opportunities',
    description: 'Our students can participate in the internships program with the leading companies.',
    imgSrc: '/src/assets/images/Frame-t.png',
  },
  {
    title: 'Global Community',
    description: 'We provide education to students from all around the world.',
    imgSrc: '/src/assets/images/Frame-ff.jpg',
  },
  {
    title: 'Practical Education',
    description: 'Get theoretical education as well as practical understandings.',
    imgSrc: '/src/assets/images/Frame-f.jpg',
  },
  {
    title: 'Extra Activities',
    description: 'Our students can participate in various extra-curricular activities.',
    imgSrc: '/src/assets/images/Frame-l.jpg',
  },
];

const DeliverableSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center bg-blue-900 p-8 md:pl-5 md:pr-5 lg:p-8  md:px-40 mb-8">
      <h2 className="w-full text-center text-white text-2xl md:text-[2.5rem] leading-relaxed mb-8 lg:mb-12">Delivering the World Class Education</h2>
      {featuresData.map((feature, index) => (
        <div className="bg-white w-full md:w-[80%] lg:w-[45%] xl:w-[25%] h-[30vh] md:h-[40vh]  lg:h-[30vh] xl:h-[40vh] p-5 rounded-lg text-left flex flex-col items-start mb-7 lg:mx-3" key={index}>
          <img src={feature.imgSrc} alt={feature.title} className="w-[80px] h-[80px] mb-3 mt-2  md:w-[120px] md:h-[120px] lg:w-[100px] lg:h-[100px] xl:w-[60px] xl:h-[60px]" />
          <h3 className="text-2xl  md:text-[3rem] lg:text-[2.2rem] xl:text-[1.8rem] text-black leading-relaxed md:mt-8 xl:mt-0 mb-4 xl:mb-2">{feature.title}</h3>
          <p className="text-xl md:text-[2rem] lg:text-[1.3rem] xl:text-[1rem] text-gray-600 leading-relaxed md:leading-normal">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DeliverableSection;
