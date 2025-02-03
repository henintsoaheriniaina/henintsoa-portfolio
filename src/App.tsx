import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export type Nav = "hero" | "about" | "skills" | "projects";
const App = () => {
  const [isDark, setIsDark] = useState(true);
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
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${isDark && "dark"} min-h-screen w-full space-y-4 relative 
      bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50
      bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] 
      dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] 
      bg-[size:50px_50px] bg-fixed`}
    >
      <Navbar
        isDark={isDark}
        toggleIsDark={toggleIsDark}
        activeSection={activeSection}
      />

      <HeroSection />
      <Skills />
      <section className="section " id="projects">
        <h2>Projets</h2>
      </section>
      <section className="section  " id="about">
        <h2>À propos</h2>
      </section>
    </div>
  );
};

export default App;
