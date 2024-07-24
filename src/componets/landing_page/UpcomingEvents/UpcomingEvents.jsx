import React from 'react';
import './UpcomingEvents.css';
import locationIcon from '/src/assets/images/lo.png'; // Assuming you saved the icon as location-icon.png

const eventsData = [
  {
    date: '18 Feb',
    title: 'CITSA Week Celebration 2024',
    time: '01:00 PM - 03:00 PM',
    location: 'Main Auditorium',
    description: 'CITSA is excited to announce CITSA Week Celebration 2024! This year\'s celebration will be held from February 20-24, 2024, and will feature a variety of events and activities for students to enjoy.',
    link: '/events'
  },
  {
    date: '18 Feb',
    title: 'Women in Tech: A Panel Discussion',
    time: '01:00 PM - 03:00 PM',
    location: 'Huawei Lab',
    description: 'This panel discussion will feature a group of women working in the tech industry. The panelists will share their experiences and insights on a variety of topics.',
    link: '/events'
  },
];

const UpcomingEvents = () => {
  return (
    <div className="events-section">
      <h2 className="events-header"><a href="#">Upcoming Events</a></h2>
      <p className="events-description">Check out and participate in our upcoming events</p>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-date">
              <span>{event.date}</span>
            </div>
            <h3 className="event-title">{event.title}</h3>
            <div className="event-details">
              <div className="event-time">
                <span className="arrow-circle">➜</span>
                {event.time}
              </div>
              <div className="event-location">
                <img src={locationIcon} alt="Location Icon" className="location-icon" />
                {event.location}
              </div>
            </div>
            <p className="event-description">{event.description}</p>
            <a href={event.link} className="learn-more">Learn More ➜</a>
          </div>
        ))}
      </div>
      <a href="/events" className="view-all-events">View all Events</a>
    </div>
  );
};

export default UpcomingEvents;
