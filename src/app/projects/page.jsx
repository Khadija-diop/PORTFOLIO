"use client"
import { useState } from 'react';

const projects = [
  {
    title: 'Projet 1',
    description: 'Une application React utilisant des API.',
    link: 'https://monprojet1.com',
    github: 'https://github.com/monprofil/projet1',
    image: 'iabac.png',
  },
  {
    title: 'Projet 2',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://monprojet2.com',
    github: 'https://khadijac-glitch.github.io/FAYNARA/',
    image: 'sitebootrap.png',
  },
  {
    title: 'Projet 3',
    description: 'Un portfolio personnel construit avec Next.js.',
    link: 'https://monprojet2.com',
    github: 'https://khadijac-glitch.github.io/TACHE-5/',
    image: 'https://via.placeholder.com/300',
  },
];

function Modal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.link}
          className="text-blue-600 hover:underline"
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
        </a> <br />
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl text-center font-bold text-gray-900 mb-6">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
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

