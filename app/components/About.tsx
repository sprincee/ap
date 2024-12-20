import React from 'react';
import Image from 'next/image';
import { Camera, Mic, Sliders, Bell, Share2, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Camera className="w-6 h-6 mb-3" />,
      title: "Smart Capture",
      description: "Advanced algorithms to enhance your photography process in real-time"
    },
    {
      icon: <Mic className="w-6 h-6 mb-3" />,
      title: "AI Enhancement",
      description: "Intelligent touch-up tools that preserve natural beauty"
    },
    {
      icon: <Sliders className="w-6 h-6 mb-3" />,
      title: "Custom Presets",
      description: "Create and save your signature editing styles for consistent results"
    },
    {
      icon: <Bell className="w-6 h-6 mb-3" />,
      title: "Feature Title",
      description: "[Feature description will go here - explain the benefit in 1-2 lines]"
    },
    {
      icon: <Share2 className="w-6 h-6 mb-3" />,
      title: "Feature Title",
      description: "[Feature description will go here - explain the benefit in 1-2 lines]"
    },
    {
      icon: <Shield className="w-6 h-6 mb-3" />,
      title: "Feature Title",
      description: "[Feature description will go here - explain the benefit in 1-2 lines]"
    }
  ];

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
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            First impressions matter. That's why our mission is to create clean, enduring editing suggestions, 
            tailored specifically to bring your photos to the next level.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/10
                         border border-purple-500/20 hover:border-purple-500/40 
                         transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;