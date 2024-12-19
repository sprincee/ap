import React from 'react';

const LogoBrackets = () => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Bracket */}
        <div className="absolute top-[37%] left-[36%] pointer-events-none">
          <svg
            className="w-20 h-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 160"  // This matches our drawing space
            preserveAspectRatio="none"
          >
            <g stroke="rgba(255,255,255,1.0)" strokeWidth="1">
              <line x1="0" y1="0" x2="0" y2="160" />
              <line x1="0" y1="0" x2="20" y2="0" />
              <line x1="0" y1="160" x2="20" y2="160" />
            </g>
          </svg>
        </div>
  
        {/* Right Bracket */}
        <div className="absolute top-[37%] right-[37%] pointer-events-none">
          <svg
            className="w-20 h-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 160"  // This matches our drawing space
            preserveAspectRatio="none"
          >
            <g stroke="rgba(255,255,255,1.0)" strokeWidth="1">
              <line x1="20" y1="0" x2="20" y2="160" />
              <line x1="0" y1="0" x2="20" y2="0" />
              <line x1="0" y1="160" x2="20" y2="160" />
            </g>
          </svg>
        </div>
      </div>
    );
  };

export default LogoBrackets;