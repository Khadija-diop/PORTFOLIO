"use client";
import { useState } from 'react';

const projects = [
  {
    title: 'Porfolio',
    description: 'Un portfolio personnel construit avec Next.js et tailwindCss.',
    link: 'https://monprojet1.com',
    github: 'https://github.com/Khadijac-glitch/PORTFOLIO',
    image: 'iabac.png',
  },
  {
    title: 'Site e-commerce',
    description: 'Une reproduction d\'un site e-commerce de mode ,pour le codage j\'ai utiliser HTML,CSS et BOOTSTRAP',
    link: 'https://khadijac-glitch.github.io/FAYNARA/',
    github: 'https://github.com/Khadijac-glitch/FAYNARA',
    image: 'sitebootrap.png',
  },
  {
    title: 'Keur Yaye Soda',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://projet-final-three.vercel.app/',
    github: 'https://github.com/sodagueye/Projet-final',
    image: 'keur-yaye.png',
  },
  {
    title: 'FadjMa',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: '',
    github: 'https://github.com/Khadijac-glitch/FADJ-MA',
    image: 'fadjMa.png',
  },
  {
    title: 'FadjMa',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: '',
    github: '',
    image: 'pays.png',
  },
  {
    title: 'Todo',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://khadijac-glitch.github.io/NoteHack/',
    github: 'https://github.com/Khadijac-glitch/NoteHack',
    image: 'Hack.png',
  },
  {
    title: 'Todo',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://khadijac-glitch.github.io/E-commerce-product-page/',
    github: 'https://github.com/Khadijac-glitch/E-commerce-product-page',
    image: 'sneakers.png',
  },
  {
    title: 'CoinAfrique',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://khadijac-glitch.github.io/AFRIQUE/',
    github: 'https://github.com/Khadijac-glitch/AFRIQUE',
    image: 'afrique.png',
  },
  {
    title: 'CoinAfrique',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://khadijac-glitch.github.io/BOOTSTRAP7/',
    github: 'https://github.com/Khadijac-glitch/BOOTSTRAP7',
    image: 'Cerise.png',
  },
  {
    title: 'CoinAfrique',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://khadijac-glitch.github.io/CALCULATOR/',
    github: 'https://github.com/Khadijac-glitch/CALCULATOR',
    image: 'calcul.png',
  },
  {
    title: 'CoinAfrique',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://khadijac-glitch.github.io/CALCULATOR/',
    github: 'https://github.com/Khadijac-glitch/CALCULATOR',
    image: 'folio.png',
  },
];
function Modal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full transform transition-transform duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
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

  return (
    <div id='projects' className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <h1 className="text-5xl text-center font-extrabold  text-indigo-600 ">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-4 border-[#D2D2EB] cursor-pointer "
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
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

