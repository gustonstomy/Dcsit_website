import React from 'react';
import phoneIcon from '/src/assets/images/Frame-52-2-1.jpg'; // replace with the path to your phone icon image
import emailIcon from '/src/assets/images/Frame-52-3-1.jpg'; // replace with the path to your email icon image
import locationIcon from '/src/assets/images/Frame-52-4.jpg'; // replace with the path to your location icon image

const ContactInfo = ({ icon, title, text }) => {
  return (
    <div className="flex items-center mb-5 last:mb-0 md:mb-5 md:last:mb-0 xl:my-16">
      <img src={icon} alt={`${title} icon`} className="w-14 h-14 mr-4 md:w-20 md:h-20" />
      <div className="contact-details">
        <h3 className="text-xl font-bold mb-2 md:text-2xl"> {title} </h3>
        <p className="text-base text-gray-600 md:text-lg"> {text} </p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-wrap justify-around p-5 md:p-10 h-[30vh] md:flex-col lg:flex-row md:items-start md:h-auto">
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
