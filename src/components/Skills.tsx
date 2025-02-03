import SkillSection from "./SkillSection";

const Skills = () => {
  return (
    <section className="section space-y-12" id="skills">
      <h2 className="font-black text-3xl text-center ">Mes compétences</h2>
      <SkillSection title="backend" />
      <SkillSection title="frontend" />
    </section>
  );
};
export default Skills;
