import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiStyledcomponents } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Styled Components', icon: <SiStyledcomponents className="text-pink-500" /> },
  ];

  return (
    <div className="max-w-4xl min-h-screen mx-auto m-5 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">À propos</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-500">Parcours</h2>
        <p className='text-center leading-loose text-lg text-gray-700'>
          Je suis une étudiante passionnée de technologie, spécialisée dans le développement web mobile. 
          J'ai acquis des compétences solides dans divers langages et frameworks, notamment HTML, CSS, 
          Bootstrap, GitHub, JavaScript, React, Next.js, Node.js, Tailwind CSS et Styled Components. 
          Mon parcours m'a permis de réaliser plusieurs projets enrichissants qui ont renforcé ma maîtrise 
          de ces technologies. Actuellement, je me tourne vers le game design, un domaine qui me fascine 
          profondément, et j'ai hâte d'apprendre et de développer de nouvelles compétences dans ce domaine.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Compétences</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-xl font-medium text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
