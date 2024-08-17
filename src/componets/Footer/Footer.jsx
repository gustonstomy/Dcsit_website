import React from 'react';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-8 md:py-16 px-6 lg:px-20 xl:px-44 bg-gray-900 text-white font-sans h-[60vh]">
      <div className="flex flex-wrap justify-between mb-12">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-medium mb-8">Menus</h4>
          <a href="/UnderGraduate" className="block text-lg mb-4 hover:text-orange-500">Undergraduate</a>
          <a href="/PostGraduate" className="block text-lg mb-4 hover:text-orange-500">Postgraduate</a>
          <a href="/Teaching-Staff" className="block text-lg mb-4 hover:text-orange-500">Teaching-Staff</a>
          <a href="/non-teaching-staff" className="block text-lg mb-4 hover:text-orange-500">Non Teaching-Staff</a>
        </div>

        <div className="mb-6 md:mb-0 flex flex-col">
          <h4 className="text-xl font-medium mb-8">Contact Us</h4>
          <a href="/" className="flex items-center mb-8 text-lg hover:text-orange-500">
            <FaPhoneAlt className="w-4 h-4 mr-2" />
            +233 000 000 000
          </a>
          <a href="/" className="flex items-center mb-8 text-lg hover:text-orange-500">
            <FaEnvelope className="w-4 h-4 mr-2" />
            dcsit@ucc.edu.gh
          </a>
          <p className="flex items-center text-lg">
            <FaClock className="w-4 h-4 mr-2" />
            Monday to Friday: 7:30AM - 4:30PM
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-medium mb-8">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="/" className="text-xl hover:text-orange-500"><FaInstagram /></a>
            <a href="/" className="text-xl hover:text-orange-500"><IoLogoTwitter /></a>
            <a href="/" className="text-xl hover:text-orange-500"><FaFacebook /></a>
            <a href="/" className="text-xl hover:text-orange-500"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-6">
        <p className="text-lg">Copyright &copy; 2024 Department Of Computer Science & Info. Tech</p>
        <div className="flex flex-wrap space-x-4">
          <a href="/" className="text-lg hover:text-orange-500">Home</a>
          <a href="/about" className="text-lg hover:text-orange-500">About</a>
          <a href="/contact" className="text-lg hover:text-orange-500">Contact</a>
          <a href="/events" className="text-lg hover:text-orange-500">Events</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
