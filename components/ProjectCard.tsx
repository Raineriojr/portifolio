import * as motion from "motion/react-client";

import { getProjectItem, iconVariants } from "@/animations/projects";
import { IProjects } from "@/constants/projects";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";

interface ProjectCardProps {
  project: IProjects;
  idx: number;
}

export function ProjectCard({ project, idx }: ProjectCardProps) {
  const handleCard = (project: IProjects) => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <motion.div
      key={idx}
      variants={getProjectItem(idx)}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true }}
      className="p-8 rounded-2xl bg-brand-navy/20 border transition-all duration-300 flex flex-col justify-between gap-6 group hover:border-brand-coral/40 hover:glow-coral hover:bg-brand-navy/30"
    >
      <motion.div
        variants={iconVariants}
        className="p-3 bg-brand-navy/50 rounded-xl w-fit border border-white/5 group-hover:border-brand-coral/20 transition-colors"
      >
        {project.icon}
      </motion.div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-brand-gray leading-relaxed">{project.desc}</p>
      </div>

      <div className="flex items-center justify-between select-none">
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-brand-coral/10 text-brand-coral text-xs font-semibold rounded-full border border-brand-coral/20 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-white/10 text-xs text-white hover:text-brand-coral hover:border-brand-coral hover:bg-brand-coral/10 gap-2 cursor-pointer"
            onClick={() => handleCard(project)}
          >
            <EyeIcon className="w-4 h-4" />
            Ver projeto
          </Button>
        )}
      </div>
    </motion.div>
  );
}
