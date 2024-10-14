"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStyledcomponents } from "react-icons/si";

const About = ({ onSkillSelect }) => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents className="text-pink-500" />,
    },
  ];

  return (
    <div
      id="about"
      className="max-w-5xl min-h-screen mx-auto my-10 p-8 bg-gradient-to-r from-indigo-50 to-white shadow-xl rounded-xl"
    >
      <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-700 animate-fade-in">
        À propos
      </h1>

      <section className="mb-12 animate-fade-in">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-600">
          Parcours
        </h2>
        <p className="text-lg text-center leading-relaxed text-gray-700">
          Je suis une étudiante passionnée de technologie, spécialisée dans le
          développement web mobile. J&#39;ai acquis des compétences solides dans
          divers langages et frameworks, notamment : <br />
          <strong className="text-indigo-600">
            {" "}
            HTML, CSS, Bootstrap, GitHub, JavaScript, React, Next.js, Node.js,
            Tailwind CSS et Styled Components
          </strong>
          . <br />
          Mon parcours m&#39;a permis de réaliser plusieurs projets
          enrichissants qui ont renforcé ma maîtrise de ces technologies.
          Actuellement, je me tourne vers le game design, un domaine qui me
          fascine profondément, et j&#39;ai hâte d&#39;apprendre et de
          développer de nouvelles compétences dans ce domaine.
        </p>
      </section>

      <section className="animate-fade-in">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-600">
          Compétences
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
              onClick={() => onSkillSelect(skill.name)}
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-xl font-bold text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
