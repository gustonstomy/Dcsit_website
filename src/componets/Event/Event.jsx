import React from 'react';
import locationIcon from '/src/assets/images/lo.png';

const eventsData = [
  {
    date: '18 Feb',
    title: 'CITSA Week Celebration 2024',
    time: '01:00 PM - 03:00 PM',
    location: 'Main Auditorium',
    description: 'CITSA is excited to announce CITSA Week Celebration 2024! This year\'s celebration will be held from February 20-24, 2024, and will feature a variety of events and activities for students to enjoy.',
    link: '#'
  },
  {
    date: '18 Feb',
    title: 'Women in Tech: A Panel Discussion',
    time: '01:00 PM - 03:00 PM',
    location: 'Huawei Lab',
    description: 'This panel discussion will feature a group of women working in the tech industry. The panelists will share their experiences and insights on a variety of topics.',
    link: '#'
  },
];

const Events = () => {
  return (
    <div className="flex flex-col items-center text-center py-8 mt-16 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {eventsData.map((event, index) => (
          <div className="bg-[#f2f8f7] p-6 rounded-lg w-80 md:w-[40rem] lg:w-[30rem] xl:w-[35rem] text-left shadow-md" key={index}>
            <div className="bg-[#ff6b42] text-white py-2 px-4 rounded-md text-sm inline-block">
              <span>{event.date}</span>
            </div>
            <h3 className="mt-4 text-xl text-black">{event.title}</h3>
            <div className="my-4 text-lg text-gray-600 flex flex-col items-start gap-2">
              <div className="flex items-center">
                <span className="border-2 border-gray-600 rounded-full w-6 h-6 text-center leading-5 mr-2">➜</span>
                {event.time}
              </div>
              <div className="flex items-center gap-2">
                <img src={locationIcon} alt="Location Icon" className="w-12 h-12" />
                {event.location}
              </div>
            </div>
            <p className="text-gray-600 mb-4">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
