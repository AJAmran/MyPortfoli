import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import { navLinksdata } from '../../Constant/NavData';

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex flex-wrap md:flex-no-wrap justify-between items-center font-titleFont">
      <div>
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <div className="md:flex hidden">
        <ul className="flex space-x-4">
          {navLinksdata.map((navlink) => (
            <li key={navlink._id}>
              <a href={navlink.link} className='text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                <Link 
                activeClass='active'
                to={navlink.link}
                spy={true}
                offset={-70}
                duration={500}
                >{navlink.title}</Link>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <FaBars className="text-white text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
