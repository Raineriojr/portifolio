"use client";
import React from "react";
import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { contacts } from "@/constants/contacts";
import { footerContainer } from "@/animations/footer";
import { contactContainer, contactItem } from "@/animations/contact";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-brand-coral/20 bg-brand-dark py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <motion.p
          variants={contactItem}
          initial="hidden"
          whileInView="show"
          className="text-brand-gray/60 text-sm"
        >
          &copy; {new Date().getFullYear()} Rainério Costa. Todos os direitos
          reservados.
        </motion.p>

        <motion.div
          variants={contactContainer}
          initial="hidden"
          whileInView="show"
          className="flex gap-8"
        >
          {["Início", "Sobre", "Projetos", "Contato"].map((item) => (
            <motion.div key={item} variants={contactItem}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-brand-gray hover:text-brand-coral transition-colors"
              >
                {item}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={contactContainer}
          initial="hidden"
          whileInView="show"
          className="flex gap-4"
        >
          {contacts.map(
            (contact, idx) =>
              contact.label !== "E-mail" && (
                <motion.div key={idx} variants={contactItem}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(contact.link, "_blank")}
                    className="p-2 bg-brand-navy rounded-lg hover:text-brand-coral transition-colors border border-white/5 glow-coral-hover hover:scale-110"
                  >
                    {contact.icon}
                  </Button>
                </motion.div>
              ),
          )}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
