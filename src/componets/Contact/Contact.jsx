import React from 'react';
import './Contact.css';
import phoneIcon from '/src/assets/images/Frame-52-2-1.jpg'; // replace with the path to your phone icon image
import emailIcon from '/src/assets/images/Frame-52-3-1.jpg'; // replace with the path to your email icon image
import locationIcon from '/src/assets/images/Frame-52-4.jpg'; // replace with the path to your location icon image

const ContactInfo = ({ icon, title, text }) => {
  return (
    <div className="contact-info">
      <img src={icon} alt={`${title} icon`} className="contact-icon-5" />
      <div className="contact-details">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-info-container-8">
      <ContactInfo
        icon={phoneIcon}
        title="Phone"
        text="+01 2345 67890"
      />
      <ContactInfo
        icon={emailIcon}
        title="Email"
        text="dcsit@ucc.edu.gh"
      />
      <ContactInfo
        icon={locationIcon}
        title="Location"
        text="UCC, Cape Coast"
      />
    </div>
  );
};

export default Contact;
