"use client";
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      {/* Grid Layout */}
      <div className="grid grid-cols-12 w-full max-w-7xl mx-auto my-12 gap-4">
        
        <div className="col-span-0"></div>

        <div className="col-span-10 relative w-full mt-12 aspect-video overflow-hidden rounded-lg shadow-lg animate-slide-down"> {/* Animation de descente */}
          <video 
            src="/MeilleurAvenir.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-7xl h-full object-cover"
          />
        </div>
        <div className="col-span-0"></div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down {
          animation: slide-down 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
