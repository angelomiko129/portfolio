import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@assets/logo.svg";
import { TbArrowDownDashed } from "react-icons/tb";
import {
  parentAnimation,
  slideLeftAnimation,
  slideRightAnimation,
} from "@constants/variants.ts";
import { pop } from "@constants/animation.ts";
import { StartAnimationProp } from "@/types/animation.ts";

const words = ["FRONTEND", "BACKEND"];

const Hero = ({ startAnimation }: StartAnimationProp) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="font-geist relative flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-16 sm:flex-row">
        <motion.div
          className="text-center leading-none tracking-normal sm:text-start"
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
          className="z-10 size-64 sm:size-80"
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
          <motion.div className="relative flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                className="text-cPink/90 flex text-5xl font-bold sm:text-6xl"
              >
                {words[index].split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.1, delay: i * 0.1 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      <TbArrowDownDashed size={50} className="absolute bottom-10" />
    </section>
  );
};

export default Hero;
