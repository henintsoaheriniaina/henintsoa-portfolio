import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
export type Nav = "hero" | "about" | "skills" | "projects";
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleIsDark = () => {
    setIsDark((p) => !p);
  };

  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.9 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div
      className={`${
        isDark && "dark"
      } dark:bg-neutral-800 dark:text-neutral-50 bg-neutral-50 min-h-screen w-full  space-y-4`}
    >
      <Navbar
        isDark={isDark}
        toggleIsDark={toggleIsDark}
        activeSection={activeSection}
      />
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
