import React from 'react';
import './Event.css';
import locationIcon from '/src/assets/images/lo.png'; // Assuming you saved the icon as location-icon.png

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
    <div className="events-section-1">
      <div className="events-container-1">
        {eventsData.map((event, index) => (
          <div className="event-card-1" key={index}>
            <div className="event-date-1">
              <span>{event.date}</span>
            </div>
            <h3 className="event-title-1">{event.title}</h3>
            <div className="event-details-1">
              <div className="event-time-1">
                <span className="arrow-circle-1">➜</span>
                {event.time}
              </div>
              <div className="event-location-1">
                <img src={locationIcon} alt="Location Icon" className="location-icon-1" />
                {event.location}
              </div>
            </div>
            <p className="event-description-1">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
