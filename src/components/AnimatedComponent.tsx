import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-4 bg-blue-500 text-white rounded-md shadow-md"
    >
      Je sors du néant !
    </motion.div>
  );
};

export default AnimatedComponent;
