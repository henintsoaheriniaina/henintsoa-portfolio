import { motion } from "framer-motion";
import { FaArrowUp, FaGithub } from "react-icons/fa";
import default_img from "../assets/default.jpg";
import { Project } from "../constants/Projects";
import ProjectLink from "./ProjectLink";
import Stack from "./Stack";
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div className=" text-neutral-800  dark:text-neutral-50  flex flex-col justify-between gap-12 max-w-md mx-auto relative h-[540px] group cursor-pointer w-full rounded-xl overflow-hidden ">
      <div className="flex gap-2 flex-wrap items-center absolute -top-full left-0 right-0 p-4 group-hover:top-0 transition-all duration-400 ease-in-out">
        {project.stack.map((s) => (
          <Stack key={s} stack={s} />
        ))}
      </div>
      <div className="w-full h-full  overflow-hidden mb-4">
        <img
          className="object-cover object-center w-full h-full"
          src={project.image_url ? project.image_url : default_img}
          alt={`${project.name} image`}
        />
      </div>
      <div className="absolute bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-50 h-fit bottom-0 left-0 right-0 flex flex-col gap-2 p-4  rounded-t-2xl ">
        <h2 className="text-2xl font-semibold leading-tight">{project.name}</h2>
        <p className="text-base mb-2">{project.description}</p>
        <div className="flex items-center gap-4">
          {project.preview_link && (
            <ProjectLink link={project.preview_link} title="Voir">
              <FaArrowUp className="text-neutral-800 dark:text-neutral-600 text-sm rotate-45" />
            </ProjectLink>
          )}
          <ProjectLink link={project.github_link} title="Github">
            <FaGithub className="text-neutral-800 dark:text-neutral-600 " />
          </ProjectLink>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
