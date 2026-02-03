"use client";
import React from "react";
import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contacts } from "@/constants/contacts";

import { useClipboard } from "@/hooks/useClipboard";

import { Copy } from "lucide-react";
import {
  contactItem,
  emailItem,
  formAnimation,
  titleAnimation,
} from "@/animations/contact";
import { useContactForm } from "@/hooks/useContactForm";

const Contact: React.FC = () => {
  const { copyToClipboard } = useClipboard();
  const { form, handleSendWhatsApp } = useContactForm();

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <motion.h2
          variants={titleAnimation}
          initial="hidden"
          whileInView="show"
          className="text-5xl md:text-7xl font-bold"
        >
          Vamos conversar<span className="text-brand-coral">?</span>
        </motion.h2>

        <motion.div
          variants={emailItem}
          initial="hidden"
          whileInView="show"
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <p className="text-lg sm:text-xl font-medium">
              <span className="text-brand-gray mr-2">E-mail:</span>
              raijunior20@gmail.com
            </p>
            <Copy
              onClick={() => copyToClipboard("raijunior20@gmail.com")}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <p className="text-lg sm:text-xl font-medium">
            <span className="text-brand-gray mr-2">Localização:</span>
            Macapá, Amapá, Brasil.
          </p>
        </motion.div>

        <motion.div
          variants={contactItem}
          initial="hidden"
          whileInView="show"
          className="flex gap-10 pt-4"
        >
          {contacts.map(
            (contact, idx) =>
              contact.label !== "E-mail" && (
                <a
                  key={idx}
                  href={contact.link}
                  target="_blank"
                  className="text-brand-coral/80 hover:text-brand-coral transition-colors scale-150 transform hover:scale-175"
                >
                  {contact.icon}
                </a>
              ),
          )}
        </motion.div>
      </div>

      <motion.form
        variants={formAnimation}
        initial="hidden"
        whileInView="show"
        className="bg-brand-navy/30 p-4 sm:p-8 rounded-2xl border border-white/5 space-y-6"
      >
        <label className="text-xl font-medium text-gray-400">Formulário</label>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={(e) => form.setName(e.target.value)}
            className="bg-brand-dark/50 border-brand-coral/30 focus:border-brand-coral focus:ring-brand-coral/50 placeholder:text-brand-gray/50"
          />
        </div>
        <div className="space-y-2">
          <Textarea
            rows={4}
            placeholder="Digite sua mensagem"
            value={form.message}
            onChange={(e) => form.setMessage(e.target.value)}
            className="min-h-52 bg-brand-dark/50 border-brand-coral/30 focus:border-brand-coral focus:ring-brand-coral/50 placeholder:text-brand-gray/50 resize-none"
          />
        </div>

        <Button
          onClick={handleSendWhatsApp}
          className="w-full py-4 bg-brand-coral text-white font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all glow-coral shadow-lg hover:bg-brand-coral/90"
        >
          Enviar mensagem
        </Button>
      </motion.form>
    </div>
  );
};

export default Contact;
