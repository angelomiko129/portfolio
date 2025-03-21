import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import icon from "../assets/icon.svg";
import { MdOutlineComputer } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { parentAnimation, slideUpAnimation } from "@constants/variants.ts";
import { NavProps } from "@/constants/props";
import TypingText from "@components/TypingText.tsx";

const Nav = ({ startAnimation, homeRef, aboutRef, worksRef }: NavProps) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offset = 50;
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Nav */}
      <nav
        className={`font-gabarito text-fluid-md fixed top-0 left-0 z-20 flex w-screen items-center justify-around py-6 transition-all ${
          isScrolled ? "bg-dark/5 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <img src={icon} alt="logo" className="size-11 rounded-md sm:size-14" />
        <motion.p
          className="inline-flex items-center gap-2"
          initial="hidden"
          animate={startAnimation && "show"}
          variants={slideUpAnimation}
        >
          <MdOutlineComputer size={24} />
          {startAnimation && <TypingText text="y6miko.dev" speed={100} />}
        </motion.p>
        <div className="sm:hidden">
          <FiMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        <motion.ul
          className="hidden items-center gap-12 sm:flex"
          variants={parentAnimation}
          initial="hidden"
          animate={startAnimation && "show"}
        >
          {["Home", "About", "Works"].map((item, index) => (
            <motion.li
              key={index}
              variants={slideUpAnimation}
              className="cursor-pointer hover:underline!"
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
      </nav>
      {isMenuOpen && (
        <motion.div
          className="bg-dark fixed top-0 left-0 z-20 flex min-h-screen w-screen flex-col p-10 sm:hidden"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FiX
            size={26}
            className="fixed top-10 right-10 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className="flex flex-col gap-6">
            {["home", "about", "works"].map((item, index) => (
              <motion.li
                key={index}
                className="text-fluid-xxl cursor-pointer"
                onClick={() => {
                  if (item === "home") scrollToSection(homeRef);
                  if (item === "about") scrollToSection(aboutRef);
                  if (item === "works") scrollToSection(worksRef);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Nav;
