import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectsMap";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-24">
      {/*container*/}
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        {/*text*/}
        <p className="uppercase text-xl tracking-widest">Projects</p>
        {/*header*/}
        <h2 className="py-4">What I've Built</h2>
        {/*grid container*/}
        <div className="grid md:grid-cols-3 gap-24">
          {/*projects placement, cycle through array, pass to ProjectCard component*/}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tech={project.tech}
              img={project.img}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
