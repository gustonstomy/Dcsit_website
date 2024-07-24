// StaffMember.jsx
import React from 'react';
import './NonStaffMember.css';

const StaffMember = ({ image, name, title }) => {
  return (
    <div className="staff-member">
      <img src={image} alt={name} className="staff-image" />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default StaffMember;
