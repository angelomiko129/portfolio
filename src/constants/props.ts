export interface NavProps {
  startAnimation: boolean;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  worksRef: React.RefObject<HTMLDivElement>;
}

export interface TagProps {
  label: string;
}

export interface TagsProps {
  techStack: string[];
}

export interface TypingTextProps {
  text: string;
  speed?: number;
}

export interface Project {
  image: string;
  title: string;
  githubLink: string;
  liveLink?: string;
  techStack: string[];
}
