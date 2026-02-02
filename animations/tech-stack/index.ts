import { Variants } from 'motion';

export const techStackContainer: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
};

export const techStackAnimations: Variants = {
  hidden: {
    background:
      'linear-gradient(115deg, transparent 30%, rgba(255, 122, 90, 0.20) 50%, transparent 70%)',
    backgroundSize: '200% 100%',
    backgroundPositionX: '200%',
  },
  show: {
    backgroundPositionX: '-200%',
    transition: {
      duration: 9,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};
