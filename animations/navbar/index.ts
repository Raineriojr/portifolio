import { Variants } from 'motion';

export const navBarAnimations: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const logoAnimations: Variants = {
  idle: {
    rotateX: 0,
  },
  spin: {
    rotateX: 360,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
