"use client";

import React, { useState, useEffect } from 'react';

const MilitaryTimeClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      
      // Format hours, minutes, seconds to always be 2 digits
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    // Update immediately
    updateClock();
    
    // Update every second
    const interval = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-[8.5%] left-1/2 -translate-x-1/2 font-mono text-white/30 text-xl tracking-wider">
      {time}
    </div>
  );
};

export default MilitaryTimeClock;