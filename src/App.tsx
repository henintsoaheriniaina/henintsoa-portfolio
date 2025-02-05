import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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

      const scrollDown = window.scrollY;
      const sectionsWithId = document.querySelectorAll("section[id]");

      sectionsWithId.forEach((current) => {
        const section = current as HTMLElement;
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute("id");
        const sectionsClass = document.querySelector(
          "a[href*=" + sectionId + "]"
        );

        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionsClass!.classList.add("active");
        } else {
          sectionsClass!.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <div
      className={`${isDark && "dark"} min-h-screen w-full space-y-4 relative
    bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50
    bg-[radial-gradient(circle,rgba(0,0,0,0.3)1.5px,transparent_1.5px)] 
    dark:bg-[radial-gradient(circle,rgba(255,255,255,0.3)1.5px,transparent_1.5px)] 
    bg-[size:2rem_2rem]  
    bg-fixed`}
    >
      <div className="bg-radial-[at_20%_0%]  from-neutral-50 dark:from-neutral-800 from-30% to-transparent  bg-fixed ">
        <Navbar
          isDark={isDark}
          toggleIsDark={toggleIsDark}
          activeSection={activeSection}
        />
        <HeroSection />
        <section className="section  " id="about">
          <h2>À propos</h2>
        </section>
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;
