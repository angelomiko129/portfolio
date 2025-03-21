import { motion } from "motion/react";
import { parentAnimation, slideUpAnimation } from "@constants/variants.ts";
import socials from "@constants/socials.ts";
import { StartAnimationProp } from "@/types/animation.ts";

const Socials = ({ startAnimation }: StartAnimationProp) => {
  return (
    <>
      <motion.div
        className="fixed bottom-8 left-20 z-10 hidden sm:block"
        initial="hidden"
        animate={startAnimation && "show"}
      >
        <motion.ul
          variants={parentAnimation}
          className="inline-flex flex-col gap-6 rounded-full"
        >
          {socials.map((social, index) => (
            <motion.li key={index} variants={slideUpAnimation}>
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="hover:bg-cPink rounded-full px-2 py-4 transition-colors duration-300"
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon size={30} />
                </a>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Socials;
