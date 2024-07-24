// StaffGrid.jsx
import React from 'react';
import StaffMember from './NonStaffMember';
import './NonStaffMember.css';

const NonstaffData = [
  {
    image: '/src/assets/images/Afua.jpg',
    name: 'Mrs. Justina Afua Thompson',
    title: 'Chief Administrative Assistant',
  },
  {
    image: '/src/assets/images/Sarfo.jfif',
    name: 'Mrs. Benedicta Sarfo Arthur ',
    title: 'Senior Administrative Assistant',
  },
  {
    image: '/src/assets/images/Kwesi.jpg',
    name: 'Mr. Kwesi Duku Nkrumah',
    title: 'Senior Clerk',
  },
  {
    image: '/src/assets/images/Amiss.jpg',
    name: 'Mr. Isaac Amissah',
    title: 'Oversear (Cleaner)',
  },
  {
    image: '/src/assets/images/Ocran.jpg',
    name: 'Ebenezer Joojo Ocran',
    title: 'Oversear (Cleaner)',
  },
  {
    image: '/src/assets/images/Gyimah.jpg',
    name: 'Miss Georgina Gyimah',
    title: 'Senior Head Cleaner',
  },
  {
    image: '/src/assets/images/Eshun.jpg',
    name: 'Miss Hannah Eshun',
    title: 'Messenger / Cleaner',
  },
  {
    image: '/src/assets/images/Jerry.jpg',
    name: 'Mr. Jerry Tamakloe',
    title: 'Technician',
  },
];

const NonStaffGrid = () => {
  return (
    <div className="staff-grid1">
      {NonstaffData.map((staff, index) => (
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

export default NonStaffGrid;
