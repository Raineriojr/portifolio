import { Variants } from 'framer-motion';

export const avatarVariants: Variants = {
  hidden: {
    rotateY: -45,
    scale: 0.9,
    opacity: 0,
  },
  show: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      scale: { duration: 0.9 },
      opacity: { duration: 0.9 },
    },
  },
  loop: {
    rotateY: [-10, 10, -10],
    transition: {
      delay: 1,
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export const wordsContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export const wordItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const buttonsAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1.2,
      ease: 'easeOut',
    },
  },
};

export const helloAnimation: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const descriptionAnimation: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.9,
      ease: 'easeOut',
    },
  },
};
