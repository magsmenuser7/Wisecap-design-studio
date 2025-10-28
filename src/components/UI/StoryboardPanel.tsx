import React, { useEffect, useRef, useState } from 'react';
import { StoryboardFrame } from '../../types/cms';

interface StoryboardPanelProps {
  frame: StoryboardFrame;
  index: number;
}

const StoryboardPanel: React.FC<StoryboardPanelProps> = ({ frame, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 80); // Staggered reveal
        }
      },
      { threshold: 0.2 }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      if (panelRef.current) {
        observer.unobserve(panelRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={panelRef}
      className={`transition-all duration-380 cubic-bezier(0.22, 0.9, 0.32, 1) ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="relative">
        {/* Hand-drawn frame border */}
        <div className="relative overflow-hidden rounded-lg border-2 border-[#222427] bg-white p-4">
          <div className="aspect-[3/2] overflow-hidden rounded">
            <img
              src={frame.image}
              alt={`Storyboard frame ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Caption */}
        <div className="mt-4">
          <p className="text-sm text-[#7B8163] leading-relaxed">
            {frame.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryboardPanel;