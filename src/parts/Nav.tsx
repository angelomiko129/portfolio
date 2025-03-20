import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import logo from "../assets/icon.svg";
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
      <motion.nav
        className={`font-gabarito text-fluid-md fixed top-0 left-0 z-20 flex w-screen items-center justify-between px-10 py-6 transition-all sm:px-20 ${
          isScrolled ? "bg-dark/5 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <motion.img src={logo} alt="logo" className="size-14 rounded-md" />
        <motion.p
          className="font-geist text-fluid-md inline-flex items-center gap-2 font-semibold"
          initial="hidden"
          animate={startAnimation && "show"}
          variants={slideUpAnimation}
        >
          <MdOutlineComputer size={24} />
          {startAnimation && <TypingText text="y6miko.dev" speed={150} />}
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
          className="bg-dark fixed top-0 left-0 z-20 flex h-screen w-screen flex-col items-center justify-center text-white sm:hidden"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FiX
            size={30}
            className="absolute top-10 right-10 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className="flex flex-col items-center gap-8">
            {["Home", "About", "Works"].map((item, index) => (
              <motion.li
                key={index}
                className="text-fluid-lg cursor-pointer"
                onClick={() => {
                  if (item === "Home") scrollToSection(homeRef);
                  if (item === "About") scrollToSection(aboutRef);
                  if (item === "Works") scrollToSection(worksRef);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.3,
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
