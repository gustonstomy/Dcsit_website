// StaffMember.jsx
import React from 'react';
import './StaffMember.css';

const StaffMember = ({ image, name, title }) => {
  return (
    <div className="staff-member-20">
      <img src={image} alt={name} className="staff-image-20" />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default StaffMember;
