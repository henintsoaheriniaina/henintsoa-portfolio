import { useState } from "react";

const DeskNav = () => {
  const [active, setActive] = useState<
    "hero" | "about" | "skills" | "projects"
  >("hero");
  return (
    <div className="hidden md:flex gap-4 bg-neutral-800 dark:bg-neutral-50  p-2 rounded-md mr-4">
      <a
        href="#hero"
        className={`nav-link ${active === "hero" && "active"} `}
        onClick={() => setActive("hero")}
      >
        Accueil
      </a>
      <a
        href="#skills"
        className={`nav-link ${active === "skills" && "active"} `}
        onClick={() => setActive("skills")}
      >
        Compétencs
      </a>
      <a
        href="#projects"
        className={`nav-link ${active === "projects" && "active"} `}
        onClick={() => setActive("projects")}
      >
        Projets
      </a>
      <a
        href="#about"
        className={`nav-link ${active === "about" && "active"} `}
        onClick={() => setActive("about")}
      >
        à propos
      </a>
    </div>
  );
};
export default DeskNav;
