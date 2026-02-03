"use client";
import React from "react";
import * as motion from "motion/react-client";

import { contacts } from "@/constants/contacts";
import { highlights } from "@/constants/highlights";

import { Button } from "@/components/ui/button";
import { SplitText } from "./SplitText";
import { descriptionAnimation } from "@/animations/about";
import {
  contactContainer,
  contactItem,
  highlightItem,
  highlightsContainer,
  timeline,
} from "@/animations/contact";

const About: React.FC = () => {
  return (
    <div className="select-none py-24 min-h-screen px-6 max-w-7xl mt-auto grid justify-items-center grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        variants={highlightsContainer}
        initial="hidden"
        whileInView="show"
        className="relative pl-12 space-y-20"
      >
        <motion.div
          variants={timeline}
          initial="hidden"
          whileInView="show"
          className="absolute left-7 top-12 -bottom-4 w-1 bg-brand-coral rounded-full"
        />

        {highlights.map((item, idx) => (
          <motion.div
            variants={highlightItem}
            key={idx}
            className="relative flex items-center gap-4 group"
          >
            <div className="absolute -left-[2.1rem] w-8 h-8 bg-brand-coral rounded-full border-4 border-brand-dark flex items-center justify-center glow-coral group-hover:scale-110 transition-transform"></div>
            <div className="p-4 bg-brand-navy/50 rounded-xl border border-white/10 group-hover:border-brand-coral/30 transition-colors">
              {item.icon}
            </div>
            <span className="text-xl font-semibold tracking-tight">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="space-y-8 mt-12">
        <SplitText
          text="Sobre mim"
          className="text-3xl md:text-4xl font-bold"
        />

        <motion.p
          variants={descriptionAnimation}
          initial="hidden"
          whileInView="show"
          className="text-brand-gray text-lg leading-relaxed"
        >
          Comecei minha jornada no desenvolvimento buscando transformar ideias
          em realidade através do código. Sou apaixonado pelo processo de criar
          soluções do zero e pela constante evolução tecnológica. Meu foco é
          construir sistemas escaláveis e interfaces intuitivas que entreguem
          valor real aos usuários.
        </motion.p>

        <motion.div
          variants={contactContainer}
          initial="hidden"
          whileInView="show"
          className="flex gap-6"
        >
          {contacts.map((contact, idx) => (
            <motion.div key={idx} variants={contactItem}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(contact.link, "_blank")}
                className="p-3 bg-brand-navy rounded-lg hover:text-brand-coral border border-white/5 hover:border-brand-coral/30 transition-all glow-coral-hover hover:scale-110"
              >
                {contact.icon}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
