import React from 'react';
// Assuming 'projects' is correctly imported from your content file
import { projects } from '../../data/content'; 
import AnimatedText from '../UI/AnimatedText';
// Removed the unused worksimage1 import

// Define the Project type based on your data structure
interface Project {
  id: string;
  title: string;
  slug: string;
  heroImage: string; // The URL for the project image
  clientName: string;
  industry: string;
  year: number;
  shortBlurb: string;
}

// Custom Card for the Staggered Layout
const StaggeredWorkCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  // Determine height based on the index to create the staggered effect:
  // Left column (index 0, 2, 4, ...): Taller images (aspect-[3/4])
  // Right column (index 1, 3, 5, ...): Shorter images (aspect-[3/3.5])
  const isLeftColumn = index % 2 === 0;

  // Determine relative height on large screens
  let heightClass = isLeftColumn 
    ? 'lg:aspect-[3/3]' // Taller card for the left column (e.g., Image 1, 3)
    : 'lg:aspect-[3/3]'; // Shorter card for the right column (e.g., Image 2, 4)
  
  // Ensure a consistent look on mobile
  const mobileHeightClass = 'aspect-[4/4]'; 

  return (
    <a 
      href={`/works/`}
      // href={`/works/${project.slug}`}
      className={`group block w-full relative overflow-hidden transition-all duration-300 shadow-lg sm:overflow-hidden 
                  bg-gray-100 ${mobileHeightClass} ${heightClass}
                  `}
    >
      {/* Project Image */}
      <img
        src={project.heroImage} 
        alt={project.title}
        // object-cover ensures the image fills the container but doesn't overlap
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Text Overlay Box (Mimics the white box from the image) */}
      <div 
        className="absolute -bottom-10 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[85%] bg-white p-4 py-4 backdrop-blur-sm 
                   shadow-xl text-center border-b-2 border-black border-opacity-0 
                   transition-all duration-300 group-hover:shadow-2xl hover:border-black hover:border-opacity-10"
      >
        <h3 className="text-xl  font-bold text-black leading-none uppercase">
          {project.title.toUpperCase()}
        </h3>
        <p className="text-xs text-gray-600 mt-1 uppercase tracking-widest">
          {/* {project.industry || 'Design'} */}
        </p>
      </div>
    </a>
  );
};


const FeaturedWork: React.FC = () => {
  // Use a reasonable number of projects for the featured section
  const workItems = projects.slice(0, 6); 
  
  // Grouping projects into left/right columns for the staggered layout
  const leftColumnProjects = workItems.filter((_, index) => index % 2 === 0);
  const rightColumnProjects = workItems.filter((_, index) => index % 2 !== 0);

  return (
    <section className="py-24 bg-white sm:overflow-hidden overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Global Header --- */}
        <div className="text-center mb-20">
          <AnimatedText
            text="Latest Works" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-wc-primary-deep mb-4 md:font-extralight mb-8"
          />
          <AnimatedText
            text="Stories told through design. Outcomes measured in perception."
            className="text-base sm:text-lg md:text-xl font-serif text-wc-charcoal leading-relaxed md:font-light"
            delay={200}
          />
        </div>

        {/* ======================================================= */}
        {/* 1. Stable Staggered Portfolio Grid (Responsive)        */}
        {/* ======================================================= */}
        
        {/* The main container uses 1 column on mobile and 2 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          
          {/* LEFT COLUMN (Image 1, 3, 5, ...) */}
          <div className="flex flex-col gap-0 lg:gap-0">
            {leftColumnProjects.map((project, index) => (
              <div 
                key={project.id}
                className="opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 200}ms`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <StaggeredWorkCard project={project} index={index * 2} /> 
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (Image 2, 4, 6, ...) */}
          {/* Removed lg:mt-16 to prevent potential visual breaks, keeping the columns aligned at the top */}
          <div className="flex flex-col gap-0 lg:gap-0"> 
            {rightColumnProjects.map((project, index) => (
              <div 
                key={project.id}
                className="opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 200 + 100}ms`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <StaggeredWorkCard project={project} index={index * 2 + 1} /> 
              </div>
            ))}
          </div>

        </div>


        {/* --- See All Work CTA (Bottom) --- */}
        <div className="text-center mt-20">
          <a
            href="/works"
            className="inline-block px-8 py-4 text-lg md:px-12 md:py-5 md:text-xl font-semibold bg-wc-primary-teal text-white rounded-full shadow-lg hover:bg-wc-primary-deep transition-colors duration-300 transform hover:scale-[1.03]"
          >
            See All Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;



