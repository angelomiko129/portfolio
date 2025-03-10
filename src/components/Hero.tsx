import { motion } from "motion/react";
import logo from "@assets/logo.svg";
import { TbArrowDownDashed } from "react-icons/tb";
import {
  parentAnimation,
  slideLeftAnimation,
  slideRightAnimation,
} from "@constants/variants.ts";
import { pop } from "@constants/animation.ts";
import { StartAnimationProp } from "@/types/animation.ts";
import { WordRotate } from "./magicui/word-rotate";

const Hero = ({ startAnimation }: StartAnimationProp) => {
  return (
    <section className="font-geist relative flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-16 sm:flex-row">
        <motion.div
          className="leading-none tracking-normal"
          initial="hidden"
          animate={startAnimation && "show"}
          variants={parentAnimation}
        >
          <motion.h2 className="text-cPink" variants={slideLeftAnimation}>
            Hello! I'm
          </motion.h2>
          <motion.h1 variants={slideLeftAnimation}>ANGELO</motion.h1>
          <motion.h1 variants={slideLeftAnimation}>MIKO</motion.h1>
        </motion.div>
        <motion.img
          src={logo}
          alt="logo"
          className="z-10 size-44"
          initial="hidden"
          animate={startAnimation && "show"}
          variants={{ pop }}
        />
        <motion.div
          className="font-clashDisplay relative mx-auto w-fit"
          initial="hidden"
          animate={startAnimation && "show"}
          variants={parentAnimation}
        >
          <motion.span
            className="text-cPink absolute bottom-10 left-1/2 -translate-x-1/2 text-8xl font-extrabold opacity-25"
            variants={slideRightAnimation}
          >
            A
          </motion.span>
          <motion.span
            className="text-cWhite absolute top-12 left-1/2 -translate-x-1/2 text-6xl font-extrabold opacity-25 sm:text-8xl"
            variants={slideRightAnimation}
          >
            DEVELOPER
          </motion.span>
          <motion.span
            className="relative text-8xl font-bold"
            variants={slideRightAnimation}
          >
            <WordRotate words={["FRONTEND", "BACKEND"]} duration={3000} />
          </motion.span>
        </motion.div>
      </div>
      <TbArrowDownDashed size={50} className="absolute bottom-10" />
    </section>
  );
};

export default Hero;
