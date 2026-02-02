import { Variants } from 'motion';

export const projectsContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

export const getProjectItem = (idx: number) => {
  const projectItem: Variants = {
    hidden: {
      opacity: 0,
      x: idx % 2 === 0 ? -100 : 100,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: idx * 0.2,
        ease: 'easeOut',
      },
    },
  };

  return projectItem;
};

export const iconVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, 15, 0],
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};
