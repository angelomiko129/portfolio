import React from "react";
import { motion } from "framer-motion";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <motion.button
      className="hover:bg-cPink m-4 cursor-pointer rounded-sm border px-4 py-3"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.15, backgroundColor: "#d84040" }}
    >
      {label}
    </motion.button>
  );
};

interface TagsProps {
  techStack: string[];
}

const Tags: React.FC<TagsProps> = ({ techStack }) => {
  return (
    <div>
      {techStack.map((tech) => (
        <Tag key={tech} label={tech} />
      ))}
    </div>
  );
};

export default Tags;
