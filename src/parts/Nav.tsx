import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import logo from "../assets/icon.svg";
import { MdOutlineComputer } from "react-icons/md";
import { popAnimation } from "@constants/animation.ts";
import { parentAnimation, slideUpAnimation } from "@constants/variants.ts";
import { StartAnimationProp } from "@/types/animation.ts";
import TypingText from "@components/TypingText.tsx";
import { FiMenu, FiX } from "react-icons/fi";

interface NavProps extends StartAnimationProp {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  worksRef: React.RefObject<HTMLDivElement>;
}

const Nav = ({ startAnimation, homeRef, aboutRef, worksRef }: NavProps) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after navigation
  };

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`font-gabarito text-fluid-md fixed top-0 left-0 z-20 flex w-screen items-center justify-between px-10 py-8 transition-all sm:px-20 ${
          isScrolled ? "bg-dark/5 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <motion.img
          src={logo}
          alt="logo"
          className="size-16 sm:size-20"
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
        <div className="sm:hidden">
          <FiMenu
            size={30}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        <motion.ul
          className="hidden items-center gap-10 sm:flex"
          variants={parentAnimation}
          initial="hidden"
          animate={startAnimation && "show"}
        >
          {["Home", "About", "Works"].map((item, index) => (
            <motion.li
              key={index}
              variants={slideUpAnimation}
              className="cursor-pointer no-underline! hover:underline!"
              onClick={() => {
                if (item === "Home") scrollToSection(homeRef);
                if (item === "About") scrollToSection(aboutRef);
                if (item === "Works") scrollToSection(worksRef);
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
      {isMenuOpen && (
        <motion.div
          className="bg-dark/90 fixed top-0 left-0 z-20 flex h-screen w-screen flex-col items-center justify-center text-white sm:hidden"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
        >
          <FiX
            size={30}
            className="absolute top-10 right-10 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className="flex flex-col items-center gap-8">
            {["Home", "About", "Works"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-xl"
                onClick={() => {
                  if (item === "Home") scrollToSection(homeRef);
                  if (item === "About") scrollToSection(aboutRef);
                  if (item === "Works") scrollToSection(worksRef);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Nav;
