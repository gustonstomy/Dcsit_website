import React from 'react';

// Define the FeatureCard component
const FeatureCard = ({ title, description, imgSrc }) => {
  return (
    <div className="flex flex-col xl:flex-row items-center mb-8 w-full lg:w-1/3 border border-transparent">
      <img src={imgSrc} alt="icon" className="mb-4 w-24 h-24 object-cover" />
      <div className="flex flex-col text-center">
        <h3 className="text-blue-900 text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-md break-words">{description}</p>
      </div>
    </div>
  );
};

// Define the Features component
const Features = () => {
  const features = [
    {
      title: 'Global Competition',
      description: 'Our students are in the global competition.',
      imgSrc: '/src/assets/images/globe.png',
    },
    {
      title: 'Online Tuition',
      description: 'We facilitate Online Tuition',
      imgSrc: '/src/assets/images/globe.png',
    },
    {
      title: 'Best Institution',
      description: 'Overall Best University in West Africa',
      imgSrc: '/src/assets/images/globe.png',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row xl:flex-row items-center gap-8 lg:gap-12 xl:pl-40 xl:pr-40">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imgSrc={feature.imgSrc}
        />
      ))}
    </div>
  );
};

export default Features;
