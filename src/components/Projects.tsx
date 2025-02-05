import projects from "../constants/Projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section className="section space-y-12" id="projects">
      <div className="flex items-center justify-center gap-12 mb-24">
        <div className="hidden sm:block h-1 w-full bg-neutral-800 dark:bg-neutral-50 rounded-full"></div>
        <h2 className="font-black min-w-fit text-3xl text-center w-full  ">
          Mes Projets
        </h2>
        <div className="hidden sm:block h-1 w-full bg-neutral-800 dark:bg-neutral-50 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:px-12 md:px-0">
        {projects.map((p) => (
          <ProjectCard key={p.github_link} project={p} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
