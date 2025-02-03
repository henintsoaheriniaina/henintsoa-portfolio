import SkillSection from "./SkillSection";

const Skills = () => {
  return (
    <section className="section space-y-12" id="skills">
      <div className="flex items-center justify-center gap-12">
        <div className="hidden sm:block h-1 w-full bg-neutral-800 dark:bg-neutral-50 rounded-full"></div>
        <h2 className="font-black min-w-fit text-3xl text-center w-full ">
          Mes compétences
        </h2>
        <div className="hidden sm:block h-1 w-full bg-neutral-800 dark:bg-neutral-50 rounded-full"></div>
      </div>
      <SkillSection title="backend" />
      <SkillSection title="frontend" />
    </section>
  );
};
export default Skills;
