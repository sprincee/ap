import React from 'react';
import Image from 'next/image';

const About2 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start pt-16">
      <div className="max-w-6xl w-full text-center space-y-20 px-4">
        {/* Hero image container with hover effect */}
        <div className="relative w-full mx-auto aspect-[16/7] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 group">
          <Image
            src="/stock-ap.jpg"
            alt="Photography demonstration"
            fill
            className="object-cover transition-all duration-500 ease-in-out filter saturate-75 contrast-100 group-hover:saturate-150 group-hover:contrast-125"
            priority
          />
        </div>

        {/* Text content - matching Pricing.tsx typography */}
        <div className="space-y-8">
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