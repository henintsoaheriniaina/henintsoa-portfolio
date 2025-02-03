import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiLaravel, SiRedux, SiTypescript } from "react-icons/si";

const skillIcons: Record<string, React.ReactElement> = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Redux Toolkit": <SiRedux />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  Laravel: <SiLaravel />,
};

export default skillIcons;
