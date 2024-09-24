"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D2D2EB] to-white flex items-center justify-center rounded-l-full rounded-r-full">
    <div className="flex items-center justify-between w-full max-w-6xl p-8 ">
      <div className="flex-2 animate-fade-in">
        <h1 className="text-5xl font-bold text-blue-900 mb-4 drop-shadow-lg">
          Bienvenue sur mon portfolio
        </h1>
        <p className="text-lg text-blue-800 mt-4 mb-4 max-w-2xl text-center">
        Je m'appelle Khady Diop, étudiante en Licence Professionnelle Métiers du jeu vidéo:
          Level design et Game design. Passionnée par les nouvelles 
         technologies, j'ai également fait une licence en développement web mobile.
          Grâce à ce parcours, je veux développé une double compétence dans la création d'expériences
           interactives immersives et d'applications performantes. Mon objectif est de combiner
          ces deux univers pour concevoir des produits innovants qui enrichissent l'expérience utilisateur,
           que ce soit dans le domaine du jeu vidéo ou du développement d'applications. <br /> <br />

           <Link href="#projects">
          <p className="bg-purple-500 text-white py-4 px-6 rounded-full text-md font-medium shadow-lg hover:bg-purple-600
                         hover:text-white transition duration-300 inline-block">
            Voir mes projets
          </p>
        </Link>
        </p>
        
      </div>

      <div className="flex-1 flex justify-end animate-slide-up">
        <Image
          src="/iabac.png"
          width={350}
          height={250}
          className="rounded-md transform hover:scale-105 transition duration-500"
          alt="Portfolio logo"
        />
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
  )
}
