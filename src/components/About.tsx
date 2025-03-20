import { motion } from "motion/react";
import profile from "@assets/profile.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { popParent, popAnimation } from "@constants/variants.ts";

const About = () => {
  const images: Record<string, object> = import.meta.glob(
    "/src/assets/stacks/*.svg",
    { eager: true },
  );

  return (
    <>
      <section className="section">
        <h1>About Me</h1>
        <div className="bg-cWhite text-darkBrown font-clashDisplay flex flex-col items-center gap-10 rounded-xl p-6 sm:size-1/2 mx-4">
          <img
            src={profile}
            alt="profile picture"
            className="size-96 rounded-lg"
            />
            <h2>Angelo Miko Botabara</h2>
          <p className="text-fluid-lg! text-center w-96">
            I'm a full-stack developer & UI & UX designer with a passion for
            blending technical expertise with creative edge. Driven by
            curiosity, I always try to explore and learn new skills.
          </p>
          <p className="flex gap-4">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaTiktok size={30} />
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
