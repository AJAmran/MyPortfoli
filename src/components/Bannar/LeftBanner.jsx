import React from 'react';
import resumePDF from '../../assets/resume.pdf';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Expert Full Stack Developer",
      "Cutting-Edge Web Solutions",
      "Innovative Digital Creator",
      "Proficient Software Architect",
    ],    
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h4 className="text-sm md:text-base font-light uppercase tracking-wider text-gray-400">
          Welcome to My World
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">MD Amran Hossen</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          A <span className="text-designColor">{text}</span>
          <Cursor />
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          I'm a MERN stack web developer specializing in creating stunning web
          experiences. With expertise in MongoDB, Express.js, React.js, Redux, Next.js, TypeScript and
          Node.js, I develop captivating websites and applications. Let's bring
          your web projects to life!
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/amran666"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-designColor transition duration-300 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/MdAmran29290306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-designColor transition duration-300 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/md-amran-hossen-713574206/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-designColor transition duration-300 text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/AJAmran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-designColor transition duration-300 text-xl"
            >
              <FaGithub />
            </a>
          </div>
          <div>
            <a href={resumePDF} download="resume.pdf">
              <button className="bg-designColor text-white px-6 py-3 rounded-md font-semibold tracking-wide transition transform hover:scale-105 hover:bg-opacity-90 duration-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
