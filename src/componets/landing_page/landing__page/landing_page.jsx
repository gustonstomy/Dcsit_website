import React from 'react';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';


const NavbarUpperSection = () => {
    return (

        <div className="hidden w-full h-14  items-center justify-between bg-blue-900 lg:px-10 xl:px-40 lg:flex">
            <div className="flex items-center space-x-8 ml-12 ">
                <a href="https://www.instagram.com/citsaucc?igsh=MWN1Nmd4amVmNWNwOA==" className="text-white hover:text-[#ff6b42]  text-[1.35rem]">
                    <FaInstagram />
                </a>
                <a href="https://x.com/citsa_ucc?s=11" className="text-white hover:text-[#ff6b42] text-[1.35rem] ">
                    <IoLogoTwitter />
                </a>

                <a href="https://www.facebook.com/dcsitcitsa?mibextid=LQQJ4d" className="text-white hover:text-[#ff6b42]  text-[1.35rem]">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/company/computer-science-and-information-technology-student-association-ucc/"
                    className="text-white hover:text-[#ff6b42]  text-[1.35rem]">
                    <FaLinkedinIn />
                </a>
            </div>
            <div className="flex items-center justify-center text-lg space-x-8">
                <div className="flex items-center space-x-2 group hover:text-[#ff6b42] ">
                    < FaPhoneAlt className="fas fa-phone text-white group-hover:text-[#ff6b42] " />
                    <a href="tel:+233 (03321) 30096" className="text-white no-underline group-hover:text-[#ff6b42] ">+233 (03321) 30096</a>
                </div>
                <div className="flex items-center space-x-2 group hover:text-[#ff6b42] ">
                    < FaEnvelope className="fas fa-phone text-white group-hover:text-[#ff6b42] " />
                    <a href="mailto:dcsit@ucc.edu.gh" className="text-white no-underline group-hover:text-[#ff6b42] ">dcsit@ucc.edu.gh</a>
                </div>
            </div>

        </div>

    )
}

export default NavbarUpperSection;

