"use client"
import React from 'react';
import { FaHtml5, FaBootstrap, FaJs, FaReact, FaNodeJs, FaGithub, FaUnity  } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiStyledcomponents,SiAdobephotoshop  } from 'react-icons/si';

// Composant pour l'icône C++
const CppIcon = () => (
  <svg
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.207 16.278C11.1241 17.343 9.63879 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C9.67492 6 11.1896 6.6863 12.278 7.79303L13.6923 6.37878C12.2418 4.91014 10.2272 4 8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20C10.1911 20 12.1764 19.1192 13.6212 17.6923L12.207 16.278Z"
      fill="currentColor"
    />
    <path d="M15 9H13V11H11V13H13V15H15V13H17V11H15V9Z" fill="currentColor" />
    <path d="M20 9H22V11H24V13H22V15H20V13H18V11H20V9Z" fill="currentColor" />
  </svg>
);

// Composant pour l'icône C
const CIcon = () => (
  <svg
    fill="none"
    height="25"
    viewBox="0 0 15 15"
    width="25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M7.5 0.421143L14 4.21281V10.7872L7.5 14.5788L1 10.7872V4.21281L7.5 0.421143ZM7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11H7.68198C8.6585 11 9.59503 10.6121 10.2855 9.92157L10.3536 9.85355L9.64645 9.14645L9.57843 9.21447C9.07546 9.71744 8.39329 10 7.68198 10H7.5C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5H7.68198C8.39329 5 9.07546 5.28257 9.57843 5.78553L9.64645 5.85355L10.3536 5.14645L10.2855 5.07843C9.59503 4.38792 8.6585 4 7.68198 4H7.5Z"
      fill="black"
      fillRule="evenodd"
    />
  </svg>
);

const About = ({ onSkillSelect }) => {
  const skills = [
    { name: 'Langage C', icon: <CIcon className="text-black-600"/> },
    { name: 'Langage C++ ', icon: <CppIcon className="text-blue-600" /> },
    { name: 'Unity', icon: <FaUnity className="text-black-600" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-600" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black" /> }, // Remplacement de l'icône CSS par GitHub
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Styled Components', icon: <SiStyledcomponents className="text-pink-500" /> },
    
  ];

  return (
    <div id='about' className="max-w-6xl min-h-screen mx-auto my-10 p-8 bg-gradient-to-r from-indigo-50 to-white shadow-xl rounded-xl">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-700 animate-fade-in">À propos</h1>
      
      <section className="mb-12 animate-fade-in">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">Parcours</h2>
        <p className="text-lg leading-relaxed text-blue-800 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
          Je suis une passionnée de technologie, j&apos;ai fait une licence en développement web mobile, 
          avec des compétences solides dans divers langages et frameworks.
          Mon parcours m&apos;a permis de réaliser plusieurs projets enrichissants qui ont renforcé ma
          maîtrise de ces technologies. J&apos;ai également eu l&apos;opportunité de faire un stage en développement web,
          une expérience qui a consolidé mes compétences et mon expertise. Actuellement, je me tourne vers le game design,
          un domaine qui me fascine profondément, et j&apos;ai hâte d&apos;apprendre et de développer de nouvelles compétences dans
        </p>
      </section>
      
      <section className="animate-fade-in">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-700">Compétences</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
              onClick={() => onSkillSelect(skill.name)}
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-xl font-bold text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;