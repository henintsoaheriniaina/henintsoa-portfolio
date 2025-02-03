import { useState } from "react";
import { FaBolt } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
type Props = {
  isDark: boolean;
  toggleIsDark: () => void;
};
const Navbar = ({ isDark, toggleIsDark }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="backdrop-blur-2xl sticky top-0 right-0 ">
      <div className="container mx-auto  flex items-center justify-between left-0 py-4 px-4">
        <div className=" icon">
          <FaBolt className="text-xl" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <DeskNav />
          <MobileNav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={() => setIsMenuOpen((p) => !p)}
          />
          <div className="icon" onClick={toggleIsDark}>
            {isDark ? <FiMoon /> : <FiSun />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
