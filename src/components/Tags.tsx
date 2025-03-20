import React from "react";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <button className="border-cWhite m-4 cursor-pointer rounded-md border px-4 py-3">
      {label}
    </button>
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
