"use client";
import React from "react";
import * as motion from "motion/react-client";

import { projects } from "@/constants/projects";

import { SplitText } from "./SplitText";

import { FolderCodeIcon } from "lucide-react";
import {
  getProjectItem,
  iconVariants,
  projectsContainer,
} from "@/animations/projects";
import { ProjectCard } from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen mt-auto py-24 px-6 max-w-7xl mx-auto space-y-16">
      <SplitText
        text="Projetos"
        className="text-3xl md:text-4xl font-bold text-center"
      />

      <motion.div
        variants={projectsContainer}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}

        <motion.div
          variants={getProjectItem(projects.length)}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: true }}
          onClick={() =>
            window.open(
              "https://github.com/Raineriojr?tab=repositories",
              "_blank",
            )
          }
          className="items-center justify-center p-8 rounded-2xl bg-brand-navy/20 border transition-all duration-300 flex flex-col gap-6 cursor-pointer group hover:border-brand-coral/40 hover:glow-coral hover:bg-brand-navy/30"
        >
          <div className="space-y-3 flex flex-col items-center">
            <motion.div
              variants={iconVariants}
              className="p-3 bg-brand-navy/50 rounded-xl w-fit border border-white/5 group-hover:border-brand-coral/20 transition-colors"
            >
              <FolderCodeIcon className="w-8 h-8 text-brand-coral" />
            </motion.div>
            <h3 className="text-xl font-bold">Ver mais projetos</h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
