'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const headerOffset = 80; // Adjust this value based on your navbar height
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main content container */}
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Beta Badge */}
        <div className="bg-[#8B5CF6] text-white text-sm px-4 py-1 rounded-lg font-medium">
          BETA 1.5 AVAILABLE NOW!
        </div>

        {/* Title */}
        <h1 className="text-white text-9xl font-medium tracking-wider">
          Aperture
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-xl">
          From raw moments to masterpieces, elevate your work.
          <br />
        </p>

        {/* Buttons container */}
        <div className="flex gap-4 mt-4">
          {/* View plans button - solid background */}
          <button 
            onClick={scrollToPricing}
            className="bg-[#8B5CF6] hover:bg-[#7C3AED]/90 text-white px-6 py-3 rounded-xl transition-colors"
          >
            View plans
          </button>

          {/* Learn more button - outlined style */}
          <Link 
            href="/features" 
            className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;