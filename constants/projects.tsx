import { Code, FileLock, Smartphone } from "lucide-react";
import { JSX } from "react";

export interface IProjects {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  icon: JSX.Element;
}

export const projects: IProjects[] = [
  {
    title: "Landing Page Starnet",
    desc: "Site de apresentação da empresa Starnet.",
    tags: ["React JS", "ShadCn UI", "Motion", "Tailwind CSS"],
    link: "https://github.com/Raineriojr/starnet-landing-page",
    icon: <Code className="w-6 h-6 text-brand-coral" />,
  },
  {
    title: "LAB - Aplicativo de Receitas",
    desc: "Aplicativo para verificar receitas possíveis de serem feitas a partir da sua lista de ingredientes.",
    tags: ["React Native", "Expo", "Node.js", "Fastify"],
    link: "https://github.com/Raineriojr/development-challenge-three/tree/master/mobile",
    icon: <Smartphone className="w-6 h-6 text-brand-coral" />,
  },
  {
    title: "Portal da Transparência - Privado 🔒",
    desc: "Sistema Web de portal da transparência, customizável e responsivo.",
    tags: ["Next.js", "Tailwind CSS", "React Query", "ShadCn UI"],
    icon: <FileLock className="w-6 h-6 text-brand-coral" />,
  },
  {
    title: "Portal Projeto Potigás - Privado 🔒",
    desc: "Sistema Web (área do cliente) da empresa de gás Potigás.",
    tags: ["Next.js", "Tailwind CSS", "React Query", "ShadCn UI"],
    icon: <FileLock className="w-6 h-6 text-brand-coral" />,
  },
  {
    title: "Projeto DocWeb - Privado 🔒",
    desc: "Sistema de versionamento de fontes, documentação técnica e manuais.",
    tags: ["Next.js", "Tailwind CSS", "React Query", "ShadCn UI"],
    icon: <FileLock className="w-6 h-6 text-brand-coral" />,
  },
];
