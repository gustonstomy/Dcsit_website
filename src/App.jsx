// import { useState } from 'react'
// import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarUpperSection from './componets/landing_page/landing__page/landing_page'
import Navbar from './componets/navbar/landing_page_navbar'
import Slider from './componets/landing_page/slider/slider'
import TextImageSection from './componets/landing_page/text_image_section/Text_Image_Section'
import Footer from './componets/Footer/Footer'
import Footerheader from './componets/Footerheader/Footerheader'
import Features from './componets/landing_page/fields/Fields'
import TittleHeader from './componets/landing_page/TittleHeader/TittleHeader'
import ImageTextComponent from './componets/landing_page/ImageTextComponent/ImageTextComponent'
import DeliverableSection from './componets/landing_page/DeliverableSection/DeliverableSection'
import UpcomingEvents from './componets/landing_page/UpcomingEvents/UpcomingEvents'
import TransparentContainer from './componets/GraduatePrograme/UnderGraduate/TransparentContainer';
import Programs from './componets/GraduatePrograme/UnderGraduate/Programs';
import PostPrograms from './componets/GraduatePrograme/PostGraduate/PostPrograms';
import TransparentContainerPost from './componets/GraduatePrograme/PostGraduate/TransparentContainerPost';
import StaffGrid from './componets/Stuff/TeachingStaff/StaffGrid';
// import TeachingStaff from './componets/Stuff/TeachingStaff/TeachingStaff';
import NonStaffGrid from './componets/Stuff/NonTeachingStaff/NonStaffGrid';
// import NonTeachingStaff from './componets/Stuff/NonTeachingStaff/NonTeachingStaff';
import TImageSlider from './componets/Stuff/TeachingStaff/Tslider';
import NImageSlider from './componets/Stuff/NonTeachingStaff/Nslider';
import AboutPage from './componets/About/AboutPage';
import About from './componets/About/About';
import MissViss from './componets/About/MissViss';
import EventHeader from './componets/Event/EventHeader';
import Events from './componets/Event/Event';
import ContactHeader from './componets/Contact/ContactHeader';
import Contact from './componets/Contact/Contact';
import LeaveMessage from './componets/Contact/LeaveAMessage';


function App() {
   return (
    <Router>
      <div className="Navbar_forter">
        <NavbarUpperSection />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <TextImageSection />
              <Features />
              <TittleHeader />
              <ImageTextComponent />
              <DeliverableSection />
              <UpcomingEvents />
             
            </>
          } />
          <Route path="/UnderGraduate" element={<>
            <TransparentContainer/>
            <Programs/>
           </>} />
          <Route path="/PostGraduate" element={<>
            <TransparentContainerPost/>
            <PostPrograms/>
           </>} />
          <Route path="/Teaching-Staff" element={
            <>
            <TImageSlider/>
            {/* <TeachingStaff/> */}
            <StaffGrid/>
           </>} />
          <Route path="/non-teaching-staff" element={
            <>
            <NImageSlider/>
            {/* <NonTeachingStaff/> */}
           <NonStaffGrid/>
           </>} />
          <Route path="/about" element={
            <>
            <About/>
            <MissViss/>
            <AboutPage/>
           </>} />
          <Route path="/events" element={
            <>
            <EventHeader/>
            <Events/>
           </>} />
          <Route path="/contact" element={
            <>
            <ContactHeader/>
            <Contact/>
            <LeaveMessage/>
           </>} />
        </Routes>
        <Footerheader />
        <Footer />
      </div>
    </Router>
  );
}

export default App
