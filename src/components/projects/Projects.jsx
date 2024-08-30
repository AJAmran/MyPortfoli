import React from "react";
import Title from "../Layout/Title";
import projectsData from "../../Data/ProjectData";
import ProjectsCard from "./ProjectCard"

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-14">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            des={project.description}
            src={project.image}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
