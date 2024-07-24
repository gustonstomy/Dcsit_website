// src/components/Features.jsx
import React from 'react';
import FeatureCard from './fieldsCard';
import './fields.css';

const Features = () => {
  const features = [
    {
      title: 'Global Competition',
      description: 'Our students are in the \nglobal competition.',
      imgSrc: '/src/assets/images/globe.png', 
    },
    {
      title: 'Online Tuition',
      description: 'We facilitate Online Tuition',
      imgSrc: '/src/assets/images/globe.png', 
    },
    {
      title: 'Best Institution',
       description: 'Overall Best University in \nWest Africa', 
      imgSrc: '/src/assets/images/globe.png', 
    },
  ];

  return (
    <div className="features-container">
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
