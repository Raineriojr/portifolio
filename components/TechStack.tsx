import React from 'react';
import { techs } from '@/constants/techs';

const TechStack: React.FC = () => {
  return (
    <div className="w-full bg-brand-navy/30 border-y border-white/5 py-12 overflow-hidden group">
      <div className="flex space-x-12 md:space-x-24 animate-scroll whitespace-nowrap px-10">
        {[...techs, ...techs].map((tech, idx) => (
          <span 
            key={idx} 
            className="text-brand-gray/40 text-lg md:text-2xl font-medium tracking-widest hover:text-brand-coral/60 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
