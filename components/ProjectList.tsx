import { projectdata } from "@/lib/Data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div>
      <h1 className="py-6 font-bold  text-lg">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-5 ">
        {projectdata.map((project) => (
          <ProjectCard
            color={project.color}
            icon={project.icon}
            link={project.link}
            name={project.name}
            techstack={project.techstack}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
