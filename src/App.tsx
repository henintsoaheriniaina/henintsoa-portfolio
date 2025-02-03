import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleIsDark = () => {
    setIsDark((p) => !p);
  };
  return (
    <div
      className={`${
        isDark && "dark"
      } dark:bg-neutral-800 dark:text-neutral-50 bg-neutral-50 min-h-screen w-full  space-y-4`}
    >
      <Navbar isDark={isDark} toggleIsDark={toggleIsDark} />
      <HeroSection />
      <section className="section" id="skills">
        Compétence
      </section>
      <section className="section" id="projects">
        Projets
      </section>
      <section className="section" id="about">
        A propos
      </section>
    </div>
  );
};
export default App;
