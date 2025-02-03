import { useState } from "react";
import { FaBolt } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
type Props = {
  isDark: boolean;
  toggleIsDark: () => void;
  activeSection: string;
};
const Navbar = ({ isDark, toggleIsDark, activeSection }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 right-0 z-10 border border-transparent ">
      <div className="max-w-7xl mx-auto  flex items-center justify-between left-0 py-4 px-4 md:mt-4 ">
        <div className=" icon ">
          <FaBolt className="text-xl" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <DeskNav active={activeSection} />
          <MobileNav
            active={activeSection}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={() => setIsMenuOpen((p) => !p)}
          />
          <div className="icon " onClick={toggleIsDark}>
            {isDark ? <FiMoon /> : <FiSun />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
