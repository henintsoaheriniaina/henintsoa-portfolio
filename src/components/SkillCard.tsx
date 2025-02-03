import { motion } from "framer-motion";
import skillIcons from "../constants/SkillIcons";
import { Skill } from "../constants/Skills";
type Props = {
  skill: Skill;
};
const SkillCard = ({ skill }: Props) => {
  return (
    <motion.div className=" bg-neutral-200 text-neutral-800 dark:bg-neutral-700 px-8 py-12 dark:text-neutral-50 rounded-xl flex flex-col justify-between gap-12 max-w-md mx-auto">
      <div className="space-y-8">
        <div className="text-7xl w-fit p-4 rounded-lg bg-neutral-700 text-neutral-200  dark:bg-neutral-50 dark:text-neutral-600  ">
          {skillIcons[skill.title]}
        </div>
        <h2 className="text-2xl font-semibold">{skill.title}</h2>
        <p>{skill.description}</p>
      </div>
      <div className="w-20 h-1 dark:bg-neutral-50 bg-neutral-800 rounded-full "></div>
    </motion.div>
  );
};
export default SkillCard;
