import React from 'react';

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
    <div>
    <h2 className='text-center text-2xl underline font-bold mt-8 '>Our Non-Teaching Staff</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 md:px-16 lg:px-32 mt-8">
      {NonstaffData.map((NonstaffData, index) => (
        <div key={index} className="bg-white p-4 rounded-lg text-center shadow-lg border border-gray-300">
          <img src={NonstaffData.image} alt={NonstaffData.name} className="w-48 h-48 object-cover rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{NonstaffData.name}</h3>
          <p className="text-gray-600">{NonstaffData.title}</p>
        </div>
      ))}
    </div>
      </div>
   
  );
};

export default NonStaffGrid;
