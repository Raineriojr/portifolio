"use client";

import React from "react";
import { contacts } from "@/constants/contacts";
import { Button } from "@/components/ui/button";
import { highlights } from "@/constants/highlights";

const About: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div className="relative pl-12 space-y-20">
        <div className="absolute left-7 top-12 -bottom-4 w-1 bg-brand-coral rounded-full"></div>

        {highlights.map((item, idx) => (
          <div key={idx} className="relative flex items-center gap-4 group">
            <div className="absolute -left-[2.1rem] w-8 h-8 bg-brand-coral rounded-full border-4 border-brand-dark flex items-center justify-center glow-coral group-hover:scale-110 transition-transform"></div>
            <div className="p-4 bg-brand-navy/50 rounded-xl border border-white/10 group-hover:border-brand-coral/30 transition-colors">
              {item.icon}
            </div>
            <span className="text-xl font-semibold tracking-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-8 mt-12">
        <h2 className="text-4xl md:text-5xl font-bold">Sobre mim</h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          Comecei minha jornada no desenvolvimento buscando transformar ideias
          em realidade através do código. Sou apaixonado pelo processo de criar
          soluções do zero e pela constante evolução tecnológica. Meu foco é
          construir sistemas escaláveis e interfaces intuitivas que entreguem
          valor real aos usuários.
        </p>

        <div className="flex gap-6">
          {contacts.map((contact, idx) => (
            <Button
              key={idx}
              variant="ghost"
              size="icon"
              onClick={() => window.open(contact.link, '_blank')}
              className="p-3 bg-brand-navy rounded-lg hover:text-brand-coral border border-white/5 hover:border-brand-coral/30 transition-all glow-coral-hover"
            >
              {contact.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
