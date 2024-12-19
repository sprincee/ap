import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center space-y-16">
        {/* Image container first */}
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-16">
          <Image
            src="/stock-ap.jpg"
            alt="Photography demonstration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text content below */}
        <div>
          <h2 className="text-5xl font-normal mb-6 text-white">
            Welcome to the future of Photography.
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            First impressions matter. That's why our mission is to create clean, enduring editing suggestions, 
            tailored specifically to bring your photos to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;