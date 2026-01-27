"use client";
import React from 'react';
import { IProjects, projects } from '@/constants/projects';

const Projects: React.FC = () => {
  const handleCard = (project: IProjects) => {
    if(project.link){
      window.open(project.link, '_blank')
    }
  }

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Projetos Recentes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            title='Ver projeto'
            onClick={() => handleCard(project)}
            className="p-8 rounded-2xl bg-brand-navy/20 border transition-all duration-300 flex flex-col gap-6 cursor-pointer group hover:border-brand-coral/40 hover:glow-coral hover:bg-brand-navy/30"
          >
            <div className="p-3 bg-brand-navy/50 rounded-xl w-fit border border-white/5 group-hover:border-brand-coral/20 transition-colors">
              {project.icon}
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-brand-gray leading-relaxed">{project.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-brand-coral/10 text-brand-coral text-xs font-semibold rounded-full border border-brand-coral/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
