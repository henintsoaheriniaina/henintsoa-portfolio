import { useState } from "react";
import { FaBars } from "react-icons/fa";
type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
};
const MobileNav = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const [active, setActive] = useState<
    "hero" | "about" | "skills" | "projects"
  >("hero");
  return (
    <div className="relative md:hidden ">
      <div className="icon" onClick={setIsMenuOpen}>
        <FaBars />
      </div>
      {isMenuOpen && (
        <div className="absolute top-10 right-0 flex flex-col bg-neutral-800 text-neutral-50 dark:bg-neutral-50 gap-2 dark:text-neutral-800 origin-top-right p-4 rounded-md">
          <a
            href="#hero"
            className={`nav-link-mobile ${active === "hero" && "active"} `}
            onClick={() => setActive("hero")}
          >
            Accueil
          </a>
          <a
            href="#skills"
            className={`nav-link-mobile ${active === "skills" && "active"} `}
            onClick={() => setActive("skills")}
          >
            Compétencs
          </a>
          <a
            href="#projects"
            className={`nav-link-mobile ${active === "projects" && "active"} `}
            onClick={() => setActive("projects")}
          >
            Projets
          </a>
          <a
            href="#about"
            className={`nav-link-mobile ${active === "about" && "active"} `}
            onClick={() => setActive("about")}
          >
            à propos
          </a>
        </div>
      )}
    </div>
  );
};
export default MobileNav;
