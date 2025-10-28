import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/content"; // adjust the path as needed

const WorkDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h2 className="text-3xl font-bold text-wc-primary-deep mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn’t find the project you’re looking for.
        </p>
        <Link
          to="/works"
          className="px-6 py-3 bg-wc-primary-deep text-white rounded-full hover:bg-wc-primary-teal transition"
        >
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#F9F8F6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 🖼️ Hero Section */}
        <div className="relative mb-12">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-[300px] sm:h-[450px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-3xl sm:text-5xl font-bold mb-3">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl">{project.shortBlurb}</p>
          </div>
        </div>

        {/* 📋 Project Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-16">
          <div>
            <p className="font-semibold text-wc-primary-deep">Client</p>
            <p className="text-gray-700">{project.clientName}</p>
          </div>
          <div>
            <p className="font-semibold text-wc-primary-deep">Industry</p>
            <p className="text-gray-700">{project.industry}</p>
          </div>
          <div>
            <p className="font-semibold text-wc-primary-deep">Year</p>
            <p className="text-gray-700">{project.year}</p>
          </div>
        </div>

        {/* 🧩 Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-wc-primary-deep mb-3">
              Problem
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-wc-primary-deep mb-3">
              Solution
            </h2>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* 🎞️ Storyboard */}
        {project.storyboard && project.storyboard.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-wc-primary-deep mb-6">
              Storyboard
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.storyboard.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden shadow-md bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-56 object-cover"
                  />
                  <p className="p-4 text-gray-700">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🖼️ Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-wc-primary-deep mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} gallery ${i}`}
                  className="rounded-2xl w-full h-64 object-cover shadow-md hover:shadow-xl transition-all duration-300"
                />
              ))}
            </div>
          </div>
        )}

        {/* 📊 Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-wc-primary-deep mb-6">
              Outcomes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.outcomes.map((o, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 text-center"
                >
                  <p className="text-3xl font-bold text-wc-primary-teal mb-2">
                    {o.value}
                  </p>
                  <p className="text-gray-800 font-medium">{o.metric}</p>
                  <p className="text-gray-600 text-sm">{o.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 💬 Testimonial */}
        {project.testimonial && (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <p className="text-xl italic text-gray-800 mb-4">
              “{project.testimonial.quote}”
            </p>
            <p className="text-wc-primary-deep font-semibold">
              — {project.testimonial.author},{" "}
              <span className="font-normal text-gray-700">
                {project.testimonial.role}, {project.testimonial.company}
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkDetails;
