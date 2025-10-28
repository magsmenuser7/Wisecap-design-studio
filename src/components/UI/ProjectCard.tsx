import React, { useState } from 'react';
import { Project } from '../../types/cms';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={`/work/${project.slug}`}>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-sm animate-card-hover">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-380 group-hover:scale-105"
            />
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-wc-primary-deep leading-tight">
                {project.title}
              </h3>
              <span className="text-sm text-wc-slate ml-4">
                {project.year}
              </span>
            </div>
            
            <p className="text-wc-charcoal mb-4 leading-relaxed">
              {project.shortBlurb}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-wc-slate uppercase tracking-wide">
                {project.clientName}
              </span>
              
              {/* Animated outcome reveal */}
              <div className={`transition-all duration-200 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
                {project.outcomes[0] && (
                  <span className="text-sm text-wc-primary-teal font-medium">
                    {project.outcomes[0].value} {project.outcomes[0].metric}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;