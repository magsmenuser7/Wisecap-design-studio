import React from 'react';
import { blogPosts } from '../data/content';
import AnimatedText from '../components/UI/AnimatedText';

const Insights: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Insights & Thinking"
            className="text-4xl md:text-6xl font-serif font-bold text-[#1E2A47] mb-6"
          />
          <AnimatedText
            text="Strategic perspectives on design, branding, and building lasting perception."
            className="text-xl text-[#7B8163] max-w-3xl mx-auto leading-relaxed"
            delay={200}
          />
        </div>

        {/* Featured Article */}
        {blogPosts[0] && (
          <article className="max-w-4xl mx-auto mb-20">
            <div className="bg-[#F6F4F1] rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={blogPosts[0].heroImage}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center text-sm text-[#7B8163] mb-4">
                  <img
                    src={blogPosts[0].author.photo}
                    alt={blogPosts[0].author.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span>{blogPosts[0].author.name}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(blogPosts[0].publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E2A47] mb-6">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-lg text-[#222427] leading-relaxed mb-8">
                  {blogPosts[0].summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-[#7B8163] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={`/insights/${blogPosts[0].slug}`}
                  className="inline-block bg-[#B85A3D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#A14A33] transition-colors duration-180"
                >
                  Read full article →
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Upcoming Articles Preview */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#1E2A47] text-center mb-12">
            More Insights Coming Soon
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#F6F4F1] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1E2A47] mb-3">
                Small design changes, big perception shifts
              </h3>
              <p className="text-[#7B8163] mb-4">
                How subtle adjustments in typography, color, and layout can dramatically impact brand perception and customer behavior.
              </p>
              <span className="text-sm text-[#B85A3D] font-medium">Coming next week</span>
            </div>

            <div className="bg-[#F6F4F1] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1E2A47] mb-3">
                Packaging that sells: a case study
              </h3>
              <p className="text-[#7B8163] mb-4">
                Deep dive into a packaging redesign that increased shelf visibility by 34% and conversion by 28%.
              </p>
              <span className="text-sm text-[#B85A3D] font-medium">Coming soon</span>
            </div>

            <div className="bg-[#F6F4F1] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1E2A47] mb-3">
                Why value-based pricing is the future
              </h3>
              <p className="text-[#7B8163] mb-4">
                Moving beyond hourly billing to outcomes-focused partnerships that align agency and client success.
              </p>
              <span className="text-sm text-[#B85A3D] font-medium">In development</span>
            </div>

            <div className="bg-[#F6F4F1] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1E2A47] mb-3">
                The Access Playbook: why exclusivity matters
              </h3>
              <p className="text-[#7B8163] mb-4">
                How limiting client intake creates better outcomes, stronger partnerships, and premium positioning.
              </p>
              <span className="text-sm text-[#B85A3D] font-medium">In development</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-[#1E2A47] text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Stay informed
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get our latest insights on strategic design, brand building, and industry perspectives delivered monthly.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-full text-[#222427] focus:outline-none focus:ring-2 focus:ring-[#B85A3D]"
                />
                <button
                  type="submit"
                  className="bg-[#B85A3D] text-white px-6 py-3 rounded-r-full font-medium hover:bg-[#A14A33] transition-colors duration-180"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-400 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;