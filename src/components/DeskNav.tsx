type Props = {
  active: string;
};
const DeskNav = ({ active }: Props) => {
  return (
    <div className="hidden md:flex gap-4 bg-neutral-800 dark:bg-neutral-50  p-2 rounded-md mr-4 ">
      <a href="#hero" className={`nav-link ${active === "hero" && "active"} `}>
        Accueil
      </a>
      <a
        href="#about"
        className={`nav-link ${active === "about" && "active"} `}
      >
        à propos
      </a>
      <a
        href="#skills"
        className={`nav-link ${active === "skills" && "active"} `}
      >
        Compétences
      </a>
      <a
        href="#projects"
        className={`nav-link ${active === "projects" && "active"} `}
      >
        Projets
      </a>
    </div>
  );
};
export default DeskNav;
