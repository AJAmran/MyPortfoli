import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import contactImg from '../assets/projexts/amranhossen.jpg';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="w-60 h-60 overflow-hidden mb-4 mx-auto">
        <img className="w-full h-full object-fill rounded-full" src={contactImg} alt="contactImg" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">MD Amran Hossen</h3>
        <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Passionate MERN stack developer dedicated to crafting high-quality web solutions. Expertise in building dynamic websites and applications using the latest technologies to deliver engaging user experiences and drive business growth.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1857692587</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mdamranhossen77@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/amran666" target="_blank" rel="noopener noreferrer" className="text-lightText hover:text-designColor transition-colors duration-300">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="https://twitter.com/MdAmran29290306" target="_blank" rel="noopener noreferrer" className="text-lightText hover:text-designColor transition-colors duration-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/md-amran-hossen-713574206/" target="_blank" rel="noopener noreferrer" className="text-lightText hover:text-designColor transition-colors duration-300">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
