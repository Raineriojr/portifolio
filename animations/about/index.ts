import { Variants } from 'motion';

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
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};
