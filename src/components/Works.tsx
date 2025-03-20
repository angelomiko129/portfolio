import { BsGithub } from "react-icons/bs";
import recipeats from "@assets/sample/recipeats.png";
import { GoArrowUpRight } from "react-icons/go";
import { Project } from "@/constants/props";
import Tags from "./Tags";

const Works = () => {
  const projects: Project[] = [
    {
      image: recipeats,
      title: "recipeats",
      githubLink: "https://github.com/angelomiko129/recipeats",
      techStack: [
        "MongoDB",
        "Express",
        "Node",
        "React",
        "Javascript",
        "TailwindCSS",
      ],
    },
  ];

  return (
    <>
      <section className="section font-clashDisplay">
        <h1>My Works</h1>
        <div
          className={`grid items-center gap-4 rounded-2xl ${
            projects.length > 1 ? "sm:grid-cols-2" : "justify-center"
          }`}
        >
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
              <img src={project.image} alt={`${project.title} image`} />
              <div className="bg-cPink flex items-center justify-between px-4 py-2">
                <h3>{project.title}</h3>
                <div className="bg-darkBrown flex rounded-4xl p-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={30} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoArrowUpRight size={25} className="place-items-start" />
                  </a>
                </div>
              </div>
              <div className="bg-darkBrown flex flex-col justify-center p-4">
                <Tags techStack={project.techStack} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
