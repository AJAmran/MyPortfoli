import React from 'react';
import resumePDF from '../../assets/resume.pdf';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Dynamic Web Solutions Expert",
      "Innovative Web Wizard",
      "Proficient Web Architect",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  });

  return (
    <div className="w-full md:w-1/2 flex flex-row md:flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h4 className="text-base md:text-lg font-normal uppercase">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">MD Amran Hossen</span>
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white">
          a <span>{text}</span>
        </h2>
        <p className="text-sm md:text-base">
          I'm a MERN stack web developer specializing in stunning web
          experiences. With expertise in MongoDB, Express.js, React.js, and
          Node.js, I create captivating websites and applications. Let's bring
          your web projects to life!
        </p>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:items-center">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/amran666" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/MdAmran29290306" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/md-amran-hossen-713574206/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/AJAmran" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaGithub />
              </a>
            </div>
            <div>
              <a href={resumePDF} download="resume.pdf" className="btn bg-red-700 px-3 py-4 rounded font-titleFont font-semibold">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
