import { BsGithub } from "react-icons/bs";
import Tags from "./Tags";

const Works = () => {
  const techStack = ["React", "TypeScript", "CSS", "HTML"];

  return (
    <>
      <section className="section">
        <h1>My Works</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <img src="https://placehold.co/1050x600" alt="works image" />
            <div className="bg-cPink flex items-center justify-between px-4 py-2">
              <h2>Title</h2>
              <div className="bg-darkBrown flex gap-4 rounded-4xl px-4 py-2">
                <p>Source Code:</p>
                <BsGithub size={30} />
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
