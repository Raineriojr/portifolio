"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { techs } from "@/constants/techs";
import {
  techStackAnimations,
  techStackContainer,
} from "@/animations/tech-stack";

const TechStack: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={techStackContainer}
      initial="hidden"
      animate={reduceMotion ? "show" : ["show", "loop"]}
      className="relative select-none w-full overflow-hidden border-y border-white/5 bg-brand-navy/30 py-6"
    >
      {/* Light sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={techStackAnimations}
        initial="hidden"
        animate="show"
      />

      {/* Content */}
      <div className="relative flex whitespace-nowrap space-x-12 md:space-x-24 px-10 animate-scroll">
        {[...techs, ...techs].map((tech, idx) => (
          <span
            key={idx}
            className="text-brand-gray/40 text-lg md:text-2xl font-medium tracking-widest transition-colors hover:text-brand-coral/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
