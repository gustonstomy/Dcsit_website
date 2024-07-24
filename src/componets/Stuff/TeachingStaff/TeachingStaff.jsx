// TeachingStaff.jsx
import React from 'react';
import './TeachingStaff.css';

const TeachingStaff = () => {
  const staffMembers = [
    {
      name: 'Dr. Abdul-Lateef Yussif',
      title: 'Head Of Department',
      imgSrc: '/src/assets/images/hodd.jpg', // Replace with the actual image path
    },
    {
      name: 'Dr. Charles Roland Haruna',
      title: 'Departmental Registration & Examination Officer',
      imgSrc: '/src/assets/images/haruna.jpg', // Replace with the actual image path
    },
  ];

  return (
    <div className="teaching-staff-container-9">
      <h2>Our Teaching Staff</h2>
      <div className="staff-list">
        {staffMembers.map((staff, index) => (
          <div className="staff-card" key={index}>
            <img src={staff.imgSrc} alt={staff.name} className="staff-image1" />
            <h3>{staff.name}</h3>
            <p>{staff.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachingStaff;
