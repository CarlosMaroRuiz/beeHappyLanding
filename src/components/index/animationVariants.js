import { motion } from 'framer-motion';

export const containerVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.97
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

export const headerVariants = {
  hidden: { 
    opacity: 0,
    y: -30,
    rotateX: 15
  },
  visible: { 
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.5
    }
  }
};

export const heroVariants = {
  hidden: { 
    opacity: 0,
    y: 40,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
      delay: 0.3
    }
  }
};