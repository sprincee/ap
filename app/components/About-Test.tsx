'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const About2 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate the image
          const image = entry.target.querySelector('[data-animate="image"]');
          if (image) {
            image.classList.add('opacity-100', 'translate-y-0');
          }

          // Animate the text content
          const text = entry.target.querySelector('[data-animate="text"]');
          if (text) {
            text.classList.add('opacity-100', 'translate-y-0');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="w-full min-h-screen flex flex-col items-center justify-start pt-16" ref={sectionRef}>
      <div className="max-w-6xl w-full text-center space-y-20 px-4">
        {/* Hero image container with hover effect */}
        <div 
          className="relative w-full mx-auto aspect-[16/7] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 group opacity-0 translate-y-4 transition-all duration-700 ease-out"
          data-animate="image"
        >
          <Image
            src="/stock-ap.jpg"
            alt="Photography demonstration"
            fill
            className="object-cover transition-all duration-500 ease-in-out filter saturate-75 contrast-100 group-hover:saturate-150 group-hover:contrast-125"
            priority
          />
        </div>

        {/* Text content - matching Pricing.tsx typography */}
        <div 
          className="space-y-8 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          style={{ transitionDelay: '200ms' }}
          data-animate="text"
        >
          <h2 className="text-6xl font-bold text-white">
            Transform your vision into reality.
          </h2>
          
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            First impressions matter. That's why our mission is to create clean, enduring editing suggestions, 
            tailored specifically to bring your photos to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About2;