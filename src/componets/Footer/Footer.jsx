import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedinIn} from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';





const Footer= () => {
  return (
    <div className='footer'>

      <div className='footer-section'>

      <div className='Menus'>
          <h4>Menus</h4>
          <a href='/UnderGraduate'><p>Undergraduate</p></a> 
          <a href='/PostGraduate'><p>Postgraduate</p></a>
          <a href='/Teaching-Staff'><p>Teaching-Staff</p></a>
          <a href='/non-teaching-staff'><p>Non Teaching-Staff</p></a>
        </div>

        <div className='contact'>
      <h4>Contact Us</h4>
      <a href='/'>
        <FaPhoneAlt className='contact-icon' />
        <p>+233 000 000 000</p>
      </a>
      <a href='/'>
        <FaEnvelope className='contact-icon' />
        <p>dcsit@ucc.edu.gh</p>
      </a>
      <p className='working-hours'>
        <FaClock className='contact-icon' />
        Monday to Friday: 7:30AM - 4:30PM
      </p>
    </div>

        <div className='socials' >
          <h4>Follow Us</h4>
            <a href='/'>
              <FaInstagram/>
              <IoLogoTwitter/>
              
              <FaFacebook/>
              <FaLinkedinIn/>
            </a>
        </div>

      </div>

        <div className='Bottom' >
          <p>Copyright &copy; 2024 Department Of Computer Science & Info. Tech</p>
          <div className='footer-menu'> 
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
            <a href='/events'>Events</a>
          </div>
        </div>

    </div>
  )
}


export default Footer

