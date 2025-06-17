import React from "react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

const AnimatedIcon = ({ name, size = 24, className = "", animateProps = {}, initialProps = {} }) => {
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in LucideIcons.`);
    return null;
  }

  return (
    <motion.div initial={initialProps} animate={animateProps} className={className}>
      <IconComponent size={size} />
    </motion.div>
  );
};

export default AnimatedIcon;