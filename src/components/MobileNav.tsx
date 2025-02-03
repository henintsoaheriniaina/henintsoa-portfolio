import { FaBars } from "react-icons/fa";
type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
  active: string;
};
const MobileNav = ({ isMenuOpen, setIsMenuOpen, active }: Props) => {
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
          >
            Accueil
          </a>
          <a
            href="#skills"
            className={`nav-link-mobile ${active === "skills" && "active"} `}
          >
            Compétencs
          </a>
          <a
            href="#projects"
            className={`nav-link-mobile ${active === "projects" && "active"} `}
          >
            Projets
          </a>
          <a
            href="#about"
            className={`nav-link-mobile ${active === "about" && "active"} `}
          >
            à propos
          </a>
        </div>
      )}
    </div>
  );
};
export default MobileNav;
