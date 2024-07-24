// src/components/FeatureCard.jsx
import React from 'react';
import './fields.css';

const FieldsCard = ({ title, description, imgSrc }) => {
  return (
    <div className="feature-card">
      <img src={imgSrc} alt="icon" />
      <div className='flex-col'>
        <h3>{title}</h3>
      <p>{description}</p>
      </div>
    </div>
  );
};

export default FieldsCard;
