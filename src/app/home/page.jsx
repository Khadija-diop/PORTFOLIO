"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const buttonClasses = "bg-purple-500 text-white py-4 px-6 rounded-full text-md font-medium shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 inline-block";

export default function Home() {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-b from-[#D2D2EB] to-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Pempem.png"
          layout="fill"
          objectFit="cover"
          className=""
          alt="Portfolio logo"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-6xl p-8">
        <div className="flex justify-center mt-auto">
          {/* <Link href="#projects">
            <p className={buttonClasses}>
              Voir mes projets
            </p>
          </Link> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
