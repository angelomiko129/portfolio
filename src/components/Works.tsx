import { BsGithub } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import recipeats from "@assets/sample/recipeats.png";
import Tags from "./Tags";

const Works = () => {
  const techStack = [
    "MongoDB",
    "Express",
    "Node",
    "React",
    "Javascript",
    "TailwindCSS",
  ];

  return (
    <>
      <section className="section font-clashDisplay">
        <h1>My Works</h1>
        <div className="grid grid-cols-1 gap-4 rounded-2xl sm:grid-cols-2 items-center">
          <div className="flex flex-col">
            <img src={recipeats} alt="works image" />
            <div className="bg-cPink flex items-center justify-between px-4 py-2">
              <h3>recipeats</h3>
              <div className="bg-darkBrown flex rounded-4xl p-2">
                <BsGithub size={30} />
                <GoArrowUpRight size={25} className="place-items-start" />
              </div>
            </div>
            <div className="bg-darkBrown flex flex-col justify-between p-4">
              <Tags techStack={techStack} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
