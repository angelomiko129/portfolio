import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import logo from "../assets/icon.svg";
import { MdOutlineComputer } from "react-icons/md";
import { popAnimation } from "@constants/animation.ts";
import { parentAnimation, slideUpAnimation } from "@constants/variants.ts";
import { StartAnimationProp } from "@/types/animation.ts";
import TypingText from "../components/TypingText.tsx";

const Nav = ({ startAnimation }: StartAnimationProp) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  return (
    <>
      <motion.nav
        className={`font-gabarito text-fluid-md fixed top-0 left-0 z-20 flex w-screen items-center justify-between px-20 py-8 transition-all ${
          isScrolled ? "bg-dark/5 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <motion.img
          src={logo}
          alt="logo"
          className="size-20"
          {...(startAnimation ? popAnimation : {})}
        />
        <motion.p
          className="font-geist text-fluid-md inline-flex items-center gap-2 font-semibold"
          initial="hidden"
          animate={startAnimation && "show"}
          variants={slideUpAnimation}
        >
          <MdOutlineComputer size={24} />
          <TypingText text="y6miko.dev" speed={150} />
        </motion.p>
        <motion.ul
          className="flex items-center gap-10"
          variants={parentAnimation}
          initial="hidden"
          animate={startAnimation && "show"}
        >
          {["Home", "About", "Works"].map((item, index) => (
            <motion.li
              key={index}
              variants={slideUpAnimation}
              className="cursor-pointer no-underline! hover:underline!"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default Nav;
