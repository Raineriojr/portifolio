"use client";

import React from "react";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { contacts } from "@/constants/contacts";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-brand-coral/20 bg-brand-dark py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-brand-gray/60 text-sm">
          &copy; {new Date().getFullYear()} Rainério Costa. Todos os direitos
          reservados.
        </p>

        <div className="flex gap-8">
          {["Início", "Sobre", "Projetos", "Contato"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-brand-gray hover:text-brand-coral transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          {contacts.map((contact, idx) => (
            contact.label !== "E-mail" && (
              <Button
              key={idx}
              variant="ghost"
              size="icon"
              onClick={() => window.open(contact.link, '_blank')}
              className="p-2 bg-brand-navy rounded-lg hover:text-brand-coral transition-colors border border-white/5 glow-coral-hover"
            >
              {contact.icon}
            </Button>
            )
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
