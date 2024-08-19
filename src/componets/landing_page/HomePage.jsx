// src/components/landing_page/HomePage.jsx

import React from 'react';
import Slider from './slider/slider';
import TextImageSection from './text_image_section/Text_Image_Section';
import Features from './fields/Fields';
import TittleHeader from './TittleHeader/TittleHeader';
import ImageTextComponent from './ImageTextComponent/ImageTextComponent';
import DeliverableSection from './DeliverableSection/DeliverableSection';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';

const HomePage = () => {
  return (
    <>
      <Slider />
      <TextImageSection />
      <Features />
      <TittleHeader />
      <ImageTextComponent />
      <DeliverableSection />
      <UpcomingEvents />
    </>
  );
};

export default HomePage;
