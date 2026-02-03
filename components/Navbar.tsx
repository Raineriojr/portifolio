"use client";

import React from "react";
import * as motion from "motion/react-client";
import { logoAnimations, navBarAnimations } from "@/animations/navbar";
import { useNavBar } from "@/hooks/useNavBar";

const Navbar: React.FC = () => {
  const { controls, onMouseEnter, scrollToSection, scrolled } = useNavBar();

  return (
    <motion.nav
      variants={navBarAnimations}
      initial="hidden"
      animate="show"
      className={`flex justify-between items-center px-6 w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-dark/80 backdrop-blur-sm py-4" : "bg-transparent py-6"}`}
    >
      <div
        className="hidden sm:flex gap-1.5 text-2xl font-bold tracking-tight cursor-pointer"
        onClick={() => scrollToSection("início")}
      >
        Rainério{" "}
        <motion.div
          variants={logoAnimations}
          initial="idle"
          animate={controls}
          onMouseEnter={onMouseEnter}
          style={{ perspective: 1000 }}
          className="text-brand-coral"
        >
          Costa
        </motion.div>
      </div>
      <div
        className="flex sm:hidden text-2xl font-bold tracking-tight cursor-pointer"
        onClick={() => scrollToSection("início")}
      >
        R<div className="text-brand-coral">C</div>{" "}
      </div>
      <div className="flex items-center space-x-7 sm:space-x-8">
        {["Início", "Sobre", "Projetos", "Contato"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-sm sm:text-base font-medium hover:text-brand-coral transition-colors"
          >
            {item}
          </button>
        ))}{" "}
      </div>{" "}
    </motion.nav>
  );
};
export default Navbar;
