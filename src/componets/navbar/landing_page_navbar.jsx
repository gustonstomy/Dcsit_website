import React, { useState } from 'react';
import './landing_page_navbar.css';
import logo from '../../assets/images/lg.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu open/close state
  const [subMenuOpen, setSubMenuOpen] = useState(null); // State to manage the sub-menu open/close state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
    setSubMenuOpen(null); // Close any open sub-menu when toggling the main menu
  };

  const toggleSubMenu = (menu) => {
    setSubMenuOpen(subMenuOpen === menu ? null : menu); // Toggle the sub-menu state
  };

  return (
    <div className="navbar-container">
      <div className="branding">
        <img src={logo} className="default-logo" alt="Department logo" />
        <div className="site-title-container">
          <span className="site-title" itemProp="name">
            DCSIT
          </span>
          <span className="site-subtitle">
            Department Of Computer Science &<br /> Information Technology
          </span>
        </div>
      </div>
      <div className={`hamburger-menu ${menuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <div className="close-btn">
            {menuOpen && <span className="close-icon" onClick={toggleMenu}>&times;</span>} {/* Close icon within the nav */}
          </div>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('programmes'); }}>
              Programmes <span className="dropdown-symbol">&#9662;</span>
            </a>
            <div className={`sub-menu1 ${subMenuOpen === 'programmes' ? 'open' : ''}`}>
              <a href="/UnderGraduate/">Undergraduate</a>
              <a href="/PostGraduate/">Postgraduate</a>
            </div>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('staff'); }}>
              Staff <span className="dropdown-symbol">&#9662;</span>
            </a>
            <div className={`sub-menu1 ${subMenuOpen === 'staff' ? 'open' : ''}`}>
              <a href="/Teaching-Staff/">Teaching Staff</a>
              <a href="/non-teaching-staff/">Non-Teaching Staff</a>
            </div>
          </li>
          <li>
            <a href="/events/">Events</a>
          </li>
          <li>
            <a href="/news-blog/">News</a>
          </li>
          <li>
            <a href="/about/">About</a>
          </li>
          <li>
            <a href="/contact/">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
