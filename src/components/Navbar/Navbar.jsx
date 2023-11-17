import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn  } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../Constant/NavData';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 pe-4">
    <div>
      <img src={logo} className='w-24' alt="logo" />
    </div>
    <div>
      <ul className="items-center hidden gap-6 mdl:inline-flex lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="inline-flex items-center justify-center w-10 h-10 text-xl bg-black rounded-full cursor-pointer mdl:hidden text-designColor"
      >
        <FiMenu />
      </span>
      {showMenu && (
        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
          <div className="relative flex flex-col gap-8 py-2">
            <div>
              <img className="w-32" src={logo} alt="logo" />
              <p className="mt-2 text-sm text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Earum soluta perspiciatis molestias enim cum repellat, magnam
                exercitationem distinctio aliquid nam.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <h2 className="mb-4 text-base uppercase font-titleFont">
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaFacebookF />
                </span>
                <span className="bannerIcon">
                  <FaTwitter />
                </span>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute text-2xl text-gray-400 duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
            >
             {/* <Mdclose></Mdclose> */}
            </span>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Navbar;
