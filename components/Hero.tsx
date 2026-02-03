"use client";
import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { SplitText } from "./SplitText";

import {
  avatarVariants,
  buttonsAnimations,
  descriptionAnimation,
  helloAnimation,
} from "@/animations/hero/hero";
import { useAvatarInteraction } from "@/animations/hero/useAvatarInteraction";

const text = "Me chamo Rainério Costa";

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
    dropShadow,
    scrollToContact,
    handleOpenFile,
  } = useAvatarInteraction();

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-6 mt-auto space-y-8 md:space-y-4 select-none max-w-7xl md:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-2 sm:space-y-6">
        <motion.div className="overflow-hidden">
          <motion.p
            variants={helloAnimation}
            initial="hidden"
            animate="show"
            className="text-xl sm:text-2xl font-medium text-white"
          >
            Olá<span className="text-brand-coral">,</span>
          </motion.p>

          <SplitText
            text={text}
            className="text-4xl sm:text-7xl font-bold leading-tight"
          />

          <motion.p
            variants={descriptionAnimation}
            initial="hidden"
            animate="show"
            className="text-base md:text-2xl text-brand-gray font-medium"
          >
            Desenvolvedor de Software
          </motion.p>
        </motion.div>

        <motion.div
          variants={buttonsAnimations}
          initial="hidden"
          animate="show"
          className="flex gap-4 pt-4"
        >
          <Button
            onClick={scrollToContact}
            className="w-1/2 sm:w-fit py-3 bg-brand-coral text-white font-semibold rounded-lg hover:scale-105 transition-transform glow-coral active:scale-95 hover:bg-brand-coral/90"
          >
            Tem um projeto?
          </Button>
          <Button
            variant="outline"
            onClick={handleOpenFile}
            className="w-1/2 sm:w-fit py-3 border border-brand-coral/50 text-brand-coral font-semibold rounded-lg hover:bg-brand-coral/10 transition-colors active:scale-95"
          >
            Meu currículo
          </Button>
        </motion.div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div
          style={{ perspective: 1000 }}
          className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={avatarVariants}
            initial="hidden"
            animate={reduceMotion ? "show" : ["show", "loop"]}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              filter: dropShadow,
            }}
            className="relative w-full h-full"
          >
            {/* Background shapes */}
            <div className="absolute inset-0 bg-brand-coral/10 rounded-full blur-3xl -z-10"></div>

            {/* Decorative Ring */}
            <div className="absolute inset-0 border-2 border-brand-coral/40 rounded-full glow-coral"></div>

            {/* Profile Image */}
            <div className="w-full h-full rounded-full border-2 border-brand-coral overflow-hidden bg-brand-navy flex items-center justify-center glow-coral">
              <Image
                src="/profile.png"
                alt="Rainério Costa"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
