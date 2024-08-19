
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarUpperSection from './componets/landing_page/landing__page/landing_page'
import Navbar from './componets/navbar/landing_page_navbar'
import Footer from './componets/Footer/Footer'
import Footerheader from './componets/Footerheader/Footerheader'
import ContactPage from './componets/Contact/ContactPage';
import AboutPageRout from './componets/About/AboutPageRout';
import EventsPage from './componets/Event/EventsPage';
import TeachingStaffPage from './componets/Stuff/TeachingStaff/TeachingStaffPage';
import NonTeachingStaffPage from './componets/Stuff/NonTeachingStaff/NonTeachingStaffPage';
import PostGraduatePage from './componets/GraduatePrograme/PostGraduate/PostGraduatePage';
import UnderGraduatePage from './componets/GraduatePrograme/UnderGraduate/UnderGraduatePage';
import HomePage from './componets/landing_page/HomePage';


function App() {
   return (
    <Router>
      <div className="Navbar_forter">
        <NavbarUpperSection />
        <Navbar />
        <Routes>
         <Route path="/" element={<HomePage/>} />
          <Route path="/UnderGraduate" element={<UnderGraduatePage/>} />
          <Route path="/PostGraduate" element={<PostGraduatePage/>} />
          <Route path="/Teaching-Staff" element={<TeachingStaffPage />} />
          <Route path="/non-teaching-staff" element={<NonTeachingStaffPage />} />
          <Route path="/about" element={<AboutPageRout/>} />
          <Route path="/events" element={<EventsPage/>} />
           <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footerheader />
        <Footer />
      </div>
    </Router>
  );
}

export default App
