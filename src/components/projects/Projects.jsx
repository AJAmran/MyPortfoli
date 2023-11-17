import React from "react";
import Title from "../Layout/Title";
import projectOne from "../../assets/projexts/frist.png";
import projectTwo from "../../assets/projexts/second.png";
import projectThree from "../../assets/projexts/third.png";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-14">
        <ProjectsCard
          title="TrendHaven"
          des="Created a fully functional e-commerce website called TrendHaven to provide users with a seamless online
          shopping experience, backend repo: https://github.com/AJAmran/mern-e-commerce-server.git"
          src={projectOne}
          websiteUrl="https://trendhaven.netlify.app/"
          githubUrl="https://github.com/AJAmran/mern-e-commerce-client.git"
        />
        <ProjectsCard
          title="EduToysHub"
          des="The EdutoysHub is a web-based platform that serves as a marketplace for educational toys, catering to parents, educators, and toy sellers. This platform provides a seamless and user-
          friendly experience for sellers to create accounts, list their education toys, and connect with
          
          a wide customer base."
          src={projectTwo}
          websiteUrl="https://edu-toys-house.web.app/"
          githubUrl="https://github.com/AJAmran/project2.0-client"
        />
        <ProjectsCard
          title="Cooks-Cantina"
          des="The Cooks-Cantina is a web-based platform designed to provide users with a seamless and interactive experience in exploring and sharing culinary creations."
          src={projectThree}
          websiteUrl="https://cooks-cantina-client.web.app/"
          githubUrl="https://github.com/AJAmran/project1.0-client"
        />
      </div>
    </section>
  );
};

export default Projects;
