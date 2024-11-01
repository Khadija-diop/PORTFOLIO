"use client";
import { useState } from "react";
import Image from "next/image";
const projects = [
  {
    title: "Portfolio",
    description:"Un portfolio personnel construit avec Next.js et Tailwind CSS.",
    link: "https://sweet-fox-b2c816.netlify.app/",
    github: "https://github.com/Khadijac-glitch/PORTFOLIO",
    image: "iabac.png",
    skills: ["Programmation"],
  },
  {
    title: "E-commerce",
    description: "Un site e-commerce de mode.",
    link: "https://khadijac-glitch.github.io/FAYNARA/",
    github: "https://github.com/Khadijac-glitch/FAYNARA",
    image: "sitebootrap.png",
    skills: ["Programmation"],
  },
   {
        title: "Keur Yaye Soda",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://projet-final-three.vercel.app/",
        github: "https://github.com/sodagueye/Projet-final",
        image: "keur-yaye.png",
        skills: ["Programmation"],
      },
      {
        title: "FadjMa",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "",
        github: "https://github.com/Khadijac-glitch/FADJ-MA",
        image: "fadjMa.png",
        skills: ["Programmation"],
      },
      {
        title: "API",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "",
        github: "",
        image: "pays.png",
        skills: ["Programmation"],
      },
      {
        title: "Todo",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/NoteHack/",
        github: "https://github.com/Khadijac-glitch/NoteHack",
        image: "Hack.png",
        skills: ["Programmation"],
      },
      {
        title: "Sneakers",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/E-commerce-product-page/",
        github: "https://github.com/Khadijac-glitch/E-commerce-product-page",
        image: "sneakers.png",
        skills: ["Programmation"],
      },
      {
        title: "CoinAfrique",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/AFRIQUE/",
        github: "https://github.com/Khadijac-glitch/AFRIQUE",
        image: "afrique.png",
        skills: ["Programmation"],
      },
      {
        title: "E-commerce",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/BOOTSTRAP7/",
        github: "https://github.com/Khadijac-glitch/BOOTSTRAP7",
        image: "Cerise.png",
        skills: ["Programmation"],
      },
      {
        title: "Calculatrice",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/CALCULATOR/",
        github: "https://github.com/Khadijac-glitch/CALCULATOR",
        image: "calcul.png",
        skills: ["Programmation"],
      },

      {
        title: "Portfolio en Bootstraap",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/CALCULATOR/",
        github: "https://github.com/Khadijac-glitch/CALCULATOR",
        image: "folio.png",
        skills: ["Programmation"],
      },

       
      {
        title: "Game Jam",
        description: "Jeu de société fait en une semaine pour un Game Jam 2024.",
        link: "https://khadijac-glitch.github.io/CALCULATOR/",
        github: "https://github.com/Khadijac-glitch/CALCULATOR",
        image: "clock4.jpg",
        skills: ["Game"],
      },
      {
        title: "Game Jam",
        description: "Jeu de société fait en une semaine pour un Game Jam 2024.",
        link: "",
        github: "",
        image: "clock2.jpg",
        skills: ["Game"],
      },
      {
        title: "Level Design",
        description: "Un niveau de Mario.",
        link: "",
        github: "",
        image: "mario.png",
        skills: ["Game"],
      },
      {
        title: "Level Design",
        description: "Croquis de level design.",
        link: "",
        github: "",
        image: "level1.png",
        skills: ["Game"],
      },
  // ... le reste de vos projets ...
];
// ... votre array projects reste le même ...

function Modal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-2xl w-full m-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <div className="relative h-64 w-full mb-6">
            <Image
              src={`/${project.image}`}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-xl text-center hover:bg-purple-700 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-xl text-center hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code GitHub
              </a>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    "Programmation", 
    "Game",
  ];

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skills.includes(selectedSkill))
    : projects;

  return (
    <div className="max-w-7xl min-h-screen mx-auto py-20 px-4 sm:px-6 lg:px-8">
       <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-700 animate-fade-in">Mes projets</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => setSelectedSkill(skill)}
            className={`py-2 px-4 rounded-full transition-all duration-300 ${
              selectedSkill === skill
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-purple-100 text-purple-600 hover:bg-purple-200"
            }`}
          >
            {skill}
          </button>
        ))}
        <button
          onClick={() => setSelectedSkill(null)}
          className="py-2 px-4 bg-purple-100 rounded-full hover:bg-purple-300 text-purple-600 transition-all duration-300"
        >
          Tout Afficher
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48">
              <Image
                src={`/${project.image}`}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
