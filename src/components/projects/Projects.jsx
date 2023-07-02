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
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="SportsMastery"
          des=" SportMastery is a dynamic online platform where students can explore and purchase their
          preferred sports courses. Instructors have the opportunity to showcase their expertise by
          creating accounts and adding their captivating classes. Seamlessly integrated with Stripe, our
          website ensures smooth and secure payment transactions."
          src={projectOne}
          websiteUrl="https://sport-mastery.web.app/"
          githubUrl="https://github.com/AJAmran/sportMastey1.0"
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
