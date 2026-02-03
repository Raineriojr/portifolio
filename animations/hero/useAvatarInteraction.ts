import { useMotionValue, useSpring, useTransform } from 'motion/react';

export const useAvatarInteraction = () => {
  const handleOpenFile = () => {
    window.open('/rainerio-curriculo.pdf', '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);

  const x = useSpring(xRaw, {
    stiffness: 120,
    damping: 25,
    mass: 0.8,
  });

  const y = useSpring(yRaw, {
    stiffness: 120,
    damping: 25,
    mass: 0.8,
  });

  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  const shadowX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const shadowY = useTransform(y, [-0.5, 0.5], [-20, 20]);

  const dropShadow = useTransform<[number, number], string>(
    [shadowX, shadowY],
    ([sx, sy]) => `drop-shadow(${-sx}px ${-sy}px 20px rgba(255, 127, 80, 0.3))`,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const posX = (e.clientX - rect.left) / rect.width - 0.5;
    const posY = (e.clientY - rect.top) / rect.height - 0.5;

    xRaw.set(posX);
    yRaw.set(posY);
  };

  const handleMouseLeave = () => {
    xRaw.set(0);
    yRaw.set(0);
  };

  return {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
    dropShadow,
    scrollToContact,
    handleOpenFile,
  };
};
