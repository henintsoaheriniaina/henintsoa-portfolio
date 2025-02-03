import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  active: string;
};

const MobileNav = ({ isMenuOpen, setIsMenuOpen, active }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <div
        className="icon cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </div>
      {isMenuOpen && (
        <div className="absolute top-10 right-0 flex flex-col bg-neutral-800 text-neutral-50 dark:bg-neutral-50 gap-2 dark:text-neutral-800 origin-top-right p-4 rounded-md shadow-lg">
          <a
            href="#hero"
            className={`nav-link-mobile ${active === "hero" && "active"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#skills"
            className={`nav-link-mobile ${active === "skills" && "active"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Compétences
          </a>
          <a
            href="#projects"
            className={`nav-link-mobile ${active === "projects" && "active"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </a>
          <a
            href="#about"
            className={`nav-link-mobile ${active === "about" && "active"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
