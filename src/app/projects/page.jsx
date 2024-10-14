"use client";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio",
    description:
      "Un portfolio personnel construit avec Next.js et Tailwind CSS.",
    link: "https://monprojet1.com",
    github: "https://github.com/Khadijac-glitch/PORTFOLIO",
    image: "iabac.png",
    skills: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "E-commerce",
    description: "Une reproduction d'un site e-commerce de mode.",
    link: "https://khadijac-glitch.github.io/FAYNARA/",
    github: "https://github.com/Khadijac-glitch/FAYNARA",
    image: "sitebootrap.png",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Keur Yaye Soda",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "https://projet-final-three.vercel.app/",
    github: "https://github.com/sodagueye/Projet-final",
    image: "keur-yaye.png",
    skills: ["Bootstrap", "React", "Node.js"],
  },
  {
    title: "FadjMa",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "",
    github: "https://github.com/Khadijac-glitch/FADJ-MA",
    image: "fadjMa.png",
    skills: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "API",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "",
    github: "",
    image: "pays.png",
    skills: ["React", "Bootstrap"],
  },
  {
    title: "Todo",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "https://khadijac-glitch.github.io/NoteHack/",
    github: "https://github.com/Khadijac-glitch/NoteHack",
    image: "Hack.png",
    skills: ["React"],
  },
  {
    title: "Sneakers",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "https://khadijac-glitch.github.io/E-commerce-product-page/",
    github: "https://github.com/Khadijac-glitch/E-commerce-product-page",
    image: "sneakers.png",
    skills: ["JavaScript"],
  },
  {
    title: "CoinAfrique",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "https://khadijac-glitch.github.io/AFRIQUE/",
    github: "https://github.com/Khadijac-glitch/AFRIQUE",
    image: "afrique.png",
    skills: ["HTML", "CSS"],
  },
  {
    title: "E-commerce",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "https://khadijac-glitch.github.io/BOOTSTRAP7/",
    github: "https://github.com/Khadijac-glitch/BOOTSTRAP7",
    image: "Cerise.png",
    skills: ["Bootstrap"],
  },
  {
    title: "Calculatrice",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "https://khadijac-glitch.github.io/CALCULATOR/",
    github: "https://github.com/Khadijac-glitch/CALCULATOR",
    image: "calcul.png",
    skills: ["React"],
  },
  {
    title: "Portfolio en Bootstraap",
    description: "Un portfolio personnel construit avec Next.js.",
    link: "https://khadijac-glitch.github.io/CALCULATOR/",
    github: "https://github.com/Khadijac-glitch/CALCULATOR",
    image: "folio.png",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
];

function Modal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full transform transition-transform duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {project.title}
        </h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a
          href={project.link}
          className="text-indigo-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le projet
        </a>
        <br />
        <a
          href={project.github}
          className="text-gray-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le code sur GitHub
        </a>
        <br />
        <button
          onClick={onClose}
          className="mt-6 bg-red-600 text-white py-2 px-6 rounded-md shadow hover:bg-red-700 transition-colors duration-300"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Bootstrap",
    "Tailwind CSS",
    "Styled Components",
    "Game Design",
  ];

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skills.includes(selectedSkill))
    : projects;

  return (
    <div
      id="projects"
      className="max-w-5xl min-h-screen mx-auto my-10 p-8 bg-gradient-to-r from-indigo-50 to-white shadow-xl rounded-xl p-8"
    >
      <h1 className="text-5xl text-center font-extrabold text-indigo-600 mb-10">
        Mes Projets
      </h1>

      <div className="flex space-x-2 mb-4">
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => setSelectedSkill(skill)}
            className={`py-1 px-2 rounded-md transition-colors duration-300 text-xs ${
              selectedSkill === skill
                ? "bg-indigo-600 text-white"
                : "bg-purple-500 text-white hover:bg-purple-600 hover:text-white"
            }`}
          >
            {skill}
          </button>
        ))}
        <button
          onClick={() => setSelectedSkill(null)}
          className="py-1 px-2 bg-purple-400 rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-300 text-xs"
        >
          Tout Afficher
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-4 md:px-16">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-4 border-[#D2D2EB] cursor-pointer w-full sm:w-5/6 lg:w-4/5 mx-auto"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              {project.title}
            </h2>
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
