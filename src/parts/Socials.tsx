import { motion } from "motion/react";
import { parentAnimation, slideUpAnimation } from "@constants/variants.ts";
import { StartAnimationProp } from "@/types/animation.ts";
import socialLinks from "@constants/socials.ts";

const Socials = ({ startAnimation }: StartAnimationProp) => {
  return (
    <>
      <motion.div
        className="fixed bottom-6 left-20 z-10 hidden sm:block"
        initial="hidden"
        animate={startAnimation && "show"}
      >
        <motion.ul
          variants={parentAnimation}
          className="inline-flex flex-col gap-8 rounded-full border-2 px-2 py-4"
        >
          {socialLinks.map((social, index) => (
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
