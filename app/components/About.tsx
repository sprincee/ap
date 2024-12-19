import React from 'react';
import Image from 'next/image';
import PhotoStream from './PhotoStream';

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start pt-24">
      <div className="max-w-4xl w-full text-center space-y-16 px-4">
        {/* Hero image container */}
        <div className="relative w-full md:w-4/5 mx-auto aspect-[16/9] rounded-lg overflow-hidden mb-16 shadow-[0_0_50px_rgba(147,51,234,0.3)] bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20">
          <Image
            src="/stock-ap.jpg"
            alt="Photography demonstration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">
            Welcome to the future of Photography.
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
            First impressions matter. That's why our mission is to create clean, enduring editing suggestions, 
            tailored specifically to bring your photos to the next level.
          </p>
        </div>

        {/* Photo Stream */}
        <PhotoStream />
      </div>
    </section>
  );
};

export default About;