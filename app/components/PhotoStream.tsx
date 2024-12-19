"use client";

import React from 'react';
import { useEffect, useState } from 'react';

const PhotoStream = () => {
  // Base set of photos
  const basePhotos = [
    '/photo1.jpg',
    '/photo2.jpg',
    '/photo3.jpg',
    '/photo4.jpg',
    '/photo5.jpg',
    '/photo6.jpg',
  ];
  
  // Create 4 sets of photos to ensure smooth infinite scroll
  const photos = [...basePhotos, ...basePhotos, ...basePhotos, ...basePhotos];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition((prev) => {
        // Reset position when we're one full width through, but only if we're not in view
        if (prev <= -100) {
          return -50; // Reset to middle of the sequence
        }
        return prev - 0.1; // Smooth, slow movement
      });
    }, 30);

    return () => clearInterval(animation);
  }, []);

  return (
    <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] overflow-hidden">
      <div 
        className="flex"
        style={{ 
          transform: `translateX(${position}%)`,
          width: 'fit-content',
          transition: 'transform 0.05s linear'
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={`${index}-${photo}`}
            className="w-[calc(100vw/6)] flex-shrink-0"
          >
            <img
              src={photo}
              alt={`Portfolio photo ${(index % basePhotos.length) + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoStream;