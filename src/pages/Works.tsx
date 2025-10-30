import React from 'react';
import { projects } from '../data/content';
import AnimatedText from '../components/UI/AnimatedText';
import aboutwisecap from '../assets/images/logo/works/works-image-2.jpeg';
import servicebrandkitsdesign from "../assets/images/logo/servicces/services-banner.png";
import harmonybanner from '../assets/images/logo/banners/harmony-banner.jpeg';

// Define the Project type
interface Project {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  clientName: string;
  industry: string;
  year: number;
  shortBlurb: string;
}

// Custom Image Card
const DualImageCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a
    href='#'
      // href={`/works/`}
      // href={`/works/${project.slug}`}
      className="group block w-full aspect-[4/2] overflow-hidden relative bg-gray-100 shadow-xl 
                 hover:shadow-2xl transition-all duration-300"
    >
      {/* Project Image */}
      <img
        src={project.heroImage}
        alt={project.title}
        className="w-full h-full object-cover 
                   transform group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />

      {/* Hover Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-[60px] md:group-hover:h-[80px] 
                   bg-black bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-[3px] 
                   flex items-center transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div className="px-4 py-2 text-white w-full">
          <h3 className="text-lg md:text-xl font-Epilogue font-extralight line-clamp-1">{project.title}</h3>
          <p className="text-xs uppercase tracking-wider opacity-80 line-clamp-1">
            {/* {project.clientName} &bull; {project.year} */}
          </p>
        </div>
      </div>
    </a>
  );
};

const Works: React.FC = () => {
  // Group projects into pairs
  const pairedProjects: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <>
      {/* ===== Top Banner Section ===== */}
<section
  className="relative flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[100vh] bg-center bg-cover bg-no-repeat px-4 sm:px-6 md:px-10 text-center"
  style={{
    backgroundImage: `url(${harmonybanner})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1
      className="text-white leading-snug md:leading-tight mb-4 sm:mb-6 
                 text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wide font-Epilogue font-extralight"
    >
      Creative designs that blend imagination and precision.
    </h1>
  </div>
</section>


      {/* ===== Portfolio Section ===== */}
      <section className="relative w-full bg-[#F6F4F1] py-32 md:py-40">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
         
          {/* Projects Showcase */}
          <section className="flex flex-col gap-0 md:gap-0">
            {pairedProjects.map((pair, rowIndex) => (
              <section
                key={`row-${rowIndex}`}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0"
              >
                {pair.map((project, index) => (
                  <section
                    key={project.id}
                    className="opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: `${rowIndex * 300 + index * 150}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <DualImageCard project={project} />
                  </section>
                ))}
              </section>
            ))}
          </section>

          {/* Empty State */}
          {projects.length === 0 && (
            <section className="text-center py-16">
              <p className="text-[#7B8163] text-lg">No projects found.</p>
            </section>
          )}

          {/* CTA */}
          <section className="text-center mt-24 pt-12 border-t border-gray-300">
            <p className="text-[#7B8163] mb-6 text-xl md:text-2xl font-Epilogue font-extralight">
              Ready to elevate your brand's visual identity?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-lg md:px-12 md:py-5 md:text-xl font-Epilogue font-extralight bg-wc-primary-teal text-white rounded-full shadow-lg hover:bg-wc-primary-deep transition-colors duration-300 transform hover:scale-[1.03]"
            >
              Start a Project
            </a>
          </section>
        </section>
      </section>
    </>
  );
};

export default Works;
