import React, { useState } from 'react';
import logo from '../../assets/images/lg.png';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSubMenuOpen(null);
  };

  const toggleSubMenu = (menu) => {
    setSubMenuOpen(subMenuOpen === menu ? null : menu);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 h-32 relative z-10">
      <div className="flex items-center space-x-2 xl:ml-20 w-45">
        <img src={logo} className="w-14 h-14 xl:w-16 xl:h-16" alt="Department logo" />
        <div className="flex flex-col">
          <span className="text-lg xl:text-xl font-bold">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DCSIT</span>
          <span className="text-sm ">
            Department Of Computer Science <br /> &nbsp; &nbsp;& Information Technology
          </span>
        </div>
      </div>
      <div className="block lg:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
        {menuOpen ? <IoClose /> : <IoMenu />}
      </div>
      <nav className={`lg:flex lg:items-center lg:space-x-2 xl:space-x-4  lg:bg-transparent lg:w-auto lg:h-auto lg:relative lg:top-auto lg:right-auto xl:mr-10 ${menuOpen ? 'fixed top-0 right-0 bg-gray-100 w-4/5 h-50 overflow-y-auto z-20' : 'hidden'}`}>
        <div className="flex items-center justify-end p-4 lg:hidden">
          {menuOpen && <IoClose className="text-4xl cursor-pointer" onClick={toggleMenu} />}
        </div>
        <ul className="flex flex-col lg:flex-row lg:space-x-2 xl:space-x-4 lg:mt-0 mt-4">
          <li><a href="/" className="block py-2 px-2 xl:px-4 text-lg hover:text-red-500">Home</a></li>
          <li className="relative">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('programmes'); }} className="block py-2 px-4 text-lg hover:text-red-500">
              Programmes <span className="ml-1 text-xl">&#9662;</span>
            </a>
            <div className={`absolute top-full left-0 bg-white shadow-lg z-30 ${subMenuOpen === 'programmes' ? 'block' : 'hidden'}`}>
              <a href="/UnderGraduate/" className="block py-2 px-4 text-lg hover:bg-gray-200">Undergraduate</a>
              <a href="/PostGraduate/" className="block py-2 px-4 text-lg hover:bg-gray-200">Postgraduate</a>
            </div>
          </li>
          <li className="relative">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleSubMenu('staff'); }} className="block py-2  px-4 text-lg hover:text-red-500">
              Staff <span className="ml-1 text-xl">&#9662;</span>
            </a>
            <div className={`absolute top-full left-0 bg-white shadow-lg z-30 w-80 ${subMenuOpen === 'staff' ? 'block' : 'hidden'}`}>
              <a href="/Teaching-Staff/" className="block py-2 px-4 text-lg hover:bg-gray-200">Teaching Staff</a>
              <a href="/non-teaching-staff/" className="block py-2 px-4 text-lg hover:bg-gray-200">Non-Teaching Staff</a>
            </div>
          </li>
          <li><a href="/events/" className="block py-2 px-1 xl:px-4 text-lg hover:text-red-500">Events</a></li>
          <li><a href="/about/" className="block py-2 px-1 xl:px-4  hover:text-red-500">About</a></li>
          <li><a href="/contact/" className="block py-2 px-1 xl:px-4  hover:text-red-500">Contact</a></li>
        </ul>
      </nav>
      {/* <div className="hidden xl:block mr-8">
        <input type="text" placeholder="Search..." className="w-40 h-10 px-4 text-lg border rounded-lg"/>
      </div> */}
    </div>
  );
};

export default Navbar;
