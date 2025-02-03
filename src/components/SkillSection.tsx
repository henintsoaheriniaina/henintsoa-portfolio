import Skills from "../constants/Skills";
import SkillCard from "./SkillCard";
type Props = {
  title: string;
};
const SkillSection = ({ title }: Props) => {
  const filteredSkills = Skills.filter((s) => s.type === title);
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl text-center capitalize my-8">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:px-12 md:px-0">
        {filteredSkills.map((s) => (
          <SkillCard key={s.title} skill={s} />
        ))}
      </div>
    </div>
  );
};
export default SkillSection;
