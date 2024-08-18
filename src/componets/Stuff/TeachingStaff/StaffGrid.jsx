import React from 'react';

const staffData = [
   {
      name: 'Dr. Abdul-Lateef Yussif',
      title: 'Head Of Department',
      image: '/src/assets/images/hodd.jpg', // Replace with the actual image path
      link: 'https://example.com/dr-charles-roland-haruna'
    },
    {
      name: 'Dr. Charles Roland Haruna',
      title: 'Departmental Registration & Examination Officer',
      image: '/src/assets/images/haruna.jpg', // Replace with the actual image path
      link: 'https://example.com/dr-charles-roland-haruna'
    },
  {
    image: '/src/assets/images/ppp.jpg',
    name: 'Prof. Nii Narku Quaynor',
    title: 'Associate Professor',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/george.jpg',
    name: 'Prof. George Aggrey',
    title: 'Associate Professor',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/MrsAlimatu.png',
    name: 'Dr. Mrs. Alimatu Saadia Yussiff',
    title: 'Senior Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/Regina.jpg',
    name: 'Dr. Regina Esi Turkson',
    title: 'Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/welborn.jpg',
    name: 'Mr. Welborn Amoako Marful',
    title: 'Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/Akotoye.jpg',
    name: 'Mr. Xavier Kofi Akotoye',
    title: 'Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/Isaac.jpg',
    name: 'Mr. Isaac Armah',
    title: 'Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/Elliot.jpg',
    name: 'Mr. Elliot Kojo Attipoe',
    title: 'Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/paul-arhin.jpg',
    name: 'Mr. Paul Kobina Arhin Jnr.',
    title: 'Assistant Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/Mr_Frank.png',
    name: 'Mr. Franklin Kome Amoo',
    title: 'Assistant Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/Twum.jpg',
    name: 'Mr. Francis Oppong Twum',
    title: 'Assistant Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/linda.png',
    name: 'Miss Linda Otoo',
    title: 'Assistant Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/EDT.jpg',
    name: 'Dr. Emmanuel Dortey Tetteh',
    title: 'Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/mr-obuobi.jpg',
    name: 'Dr. Daniel Obuobi',
    title: 'Lecturer',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
  {
    image: '/src/assets/images/Akua.jpg',
    name: 'Mrs. Akua Gyanba Morgan Acquah',
    title: 'Principal Research Assistant (Teaching Associate)',
    link: 'https://example.com/dr-charles-roland-haruna'
  },
];

const StaffGrid = () => {
  return (
    <div>
      <h2 className='text-center text-2xl underline font-bold mt-8'>Our Teaching Staff</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 md:px-16 lg:px-32 mt-8">
        {staffData.map((staff, index) => (
          <a 
            key={index} 
            href={staff.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-white p-4 rounded-lg text-center shadow-lg border border-gray-300"
          >
            <img 
              src={staff.image} 
              alt={staff.name} 
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
            <p className="text-gray-600">{staff.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StaffGrid;

