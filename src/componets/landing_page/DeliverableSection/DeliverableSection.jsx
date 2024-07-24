import React from 'react';
import './DeliverableSection.css';

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
    <div className="features-container2">
      <h2 className="section-title">Delivering the World Class Education</h2>
      {featuresData.map((feature, index) => (
        <div className="feature-card2" key={index}>
          <img src={feature.imgSrc} alt={feature.title} className="feature-icon" />
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DeliverableSection;
