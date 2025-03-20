import { Variants } from "motion/react";

export const popAnimation: Variants = {
  initial: { opacity: 0, scale: 0, rotateZ: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    rotateZ: [0, 0, 12],
    transition: {
      duration: 0.5,
      ease: "easeOut",
      scale: { type: "spring", stiffness: 180, damping: 12 },
      rotateZ: {
        times: [0, 0.8, 1],
        duration: 0.3,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  },
};

export const pop = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.4,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
  },
};
