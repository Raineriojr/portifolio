import { useAnimationControls } from 'motion/react';
import { useEffect, useState } from 'react';

export const useNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const controls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onMouseEnter = () => {
    controls.start('spin').then(() => {
      controls.set('idle');
    });
  };

  return {
    scrolled,
    controls,
    onMouseEnter,
    scrollToSection,
  };
};
