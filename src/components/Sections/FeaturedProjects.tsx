import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/content';
import AnimatedText from '../UI/AnimatedText';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-white sm:overflow-hidden overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Work that speaks"
            className="text-4xl md:text-5xl font-serif font-bold text-[#1E2A47] mb-6"
          />
          <AnimatedText
            text="Founder-led craft. Narrative-first thinking. Value-based outcomes."
            className="text-xl text-[#7B8163] max-w-2xl mx-auto leading-relaxed"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/works"
            className="inline-block bg-[#F6F4F1] text-[#1E2A47] border-2 border-[#1E2A47] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1E2A47] hover:text-white transition-all duration-180 hover:scale-105"
          >
            See all work
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;