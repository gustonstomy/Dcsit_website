// StaffGrid.jsx
import React from 'react';
import StaffMember from './StaffMember';
// import './StaffMember.css';

const staffData = [
  {
    image: '/src/assets/images/ppp.jpg',
    name: 'Prof. Nii Narku Quaynor',
    title: 'Associate Professor',
  },
  {
    image: '/src/assets/images/george.jpg',
    name: 'Prof. George Aggrey',
    title: 'Associate Professor',
  },
  {
    image: '/src/assets/images/MrsAlimatu.png',
    name: 'Dr. Mrs. Alimatu Saadia Yussiff',
    title: 'Senior Lecturer',
  },
  {
    image: '/src/assets/images/Regina.jpg',
    name: 'Dr. Regina Esi Turkson',
    title: 'Lecturer',
  },
  {
    image: '/src/assets/images/welborn.jpg',
    name: 'Mr. Welborn Amoako Marful',
    title: 'Lecturer',
  },
  {
    image: '/src/assets/images/Akotoye.jpg',
    name: 'Mr. Xavier Kofi Akotoye',
    title: 'Lecturer',
  },
  {
    image: '/src/assets/images/Isaac.jpg',
    name: 'Mr. Isaac Armah',
    title: 'Lecturer',
  },
  {
    image: '/src/assets/images/Elliot.jpg',
    name: 'Mr. Elliot Kojo Attipoe',
    title: 'Lecturer',
  },
  {
    image: '/src/assets/images/paul-arhin.jpg',
    name: 'Mr. Paul Kobina Arhin Jnr.',
    title: 'Asistant Lecturer',
  },
  {
    image: '/src/assets/images/Mr_Frank.png',
    name: 'Mr. Franklin Kome Amoo',
    title: 'Assistant Lecturer',
  },
  {
    image: '/src/assets/images/Twum.jpg',
    name: 'Mr. Francis Oppong Twum',
    title: 'Asistant Lecturer',
  },
  {
    image: '/src/assets/images/linda.png',
    name: 'Miss Linda Otoo',
    title: 'Asistant Lecturer',
  },
  {
    image: '/src/assets/images/EDT.jpg',
    name: 'Dr. Emmanuel Dortey Tetteh',
    title: 'Lecturer',
  },
  {
    image: '/src/assets/images/mr-obuobi.jpg',
    name: 'Dr. Daniel Obuobi',
    title: 'Lecturer',
  },
  {
    image: '/src/assets/images/Akua.jpg',
    name: 'Mrs. Akua Gyanba Morgan Acquah',
    title: 'Principal Research Assistant (Teaching Associate)',
  },
];

const StaffGrid = () => {
  return (
    <div className="staff-grid-20">
      {staffData.map((staff, index) => (
        <StaffMember
          key={index}
          image={staff.image}
          name={staff.name}
          title={staff.title}
        />
      ))}
    </div>
  );
};

export default StaffGrid;
