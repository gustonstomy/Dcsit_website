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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-blue-900 items-center justify-center p-8 md:px-40 mb-8 h-auto md:h-[120vh]">
      <h2 className="col-span-3 text-center text-white text-2xl md:text-[2.7rem] mb-8">Delivering the World Class Education</h2>
      {featuresData.map((feature, index) => (
        <div className="bg-white w-full md:w-[24rem] h-[30vh] md:h-[40vh] p-5 rounded-lg text-left flex flex-col items-start mb-7 md:mb-[1.8rem]" key={index}>
          <img src={feature.imgSrc} alt={feature.title} className="w-[40px] h-[40px] mb-3 mt-2 md:w-[80px] md:h-[80px]" />
          <h3 className="text-lg md:text-[1.8rem] text-black mb-4">{feature.title}</h3>
          <p className="text-lg md:text-[1.1rem] text-gray-600 leading-relaxed md:leading-normal">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DeliverableSection;
