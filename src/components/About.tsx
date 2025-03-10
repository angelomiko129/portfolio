import { motion } from "motion/react";
import { popParent, popAnimation } from "@constants/variants.ts";
import profile from "@assets/profile.jpg";

const About = () => {
  const images: Record<string, object> = import.meta.glob(
    "/src/assets/stacks/*.svg",
    { eager: true },
  );

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-24 py-16 sm:px-40">
        <h1 className="text-cPink">About Me</h1>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-36">
          <div>
            <img
              src={profile}
              alt="profile picture"
              className="size-56 rounded-full sm:size-full"
            />
          </div>
          <p className="text-fluid-xl! text-center sm:text-start">
            I'm a full-stack developer & UI & UX designer with a passion for
            blending technical expertise with creative edge. Driven by
            curiosity, I always try to explore and learn new skills.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-around gap-14 sm:flex-row sm:gap-24">
          <h1>Tech Stack</h1>
          <motion.div
            className="grid grid-cols-3 gap-8"
            variants={popParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {Object.values(images).map((img: any, index) => (
              <motion.img
                key={index}
                src={img.default}
                alt={`Image ${index + 1}`}
                className="h-24 w-full sm:h-28"
                variants={popAnimation}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
