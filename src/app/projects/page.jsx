"use client";
import { useState } from "react";
import Image from "next/image";
const projects = [
  {
    title: "Portfolio",
    description:"Un portfolio personnel construit avec Next.js et Tailwind CSS.",
    link: "https://khadija-pearl.vercel.app/",
    github: "https://github.com/Khadijac-glitch/PORTFOLIO",
    image: "iabac.png",
    skills: ["Web"],
  },
  {
    title: "Unijam 2024",
    description:"Le Meilleur Reste À Venir est le résultat du travail de notre équipe à l'Unijam 2024 du 29 novembre au 1er décembre, dont le thème était Avenir. Incarnez une machine de divination qui prédit l'avenir de ses clients à l'aide de cartes de tarot.  Ce qui change ici, c'est que c'est vous qui choisissez les cartes. Influez sur le futur des différents personnages et observez la situation évoluer pour le meilleur ou pour le pire.",
    link: "https://helloss.itch.io/le-meilleur-reste-a-venir",
    github: "https://github.com/Spouirk/MeilleurAVenir",
    image: "MeilleurA.jpg " ,
    // video: "/MeilleurAvenir.mp4",
    skills: ["Game"]
  },

  {
    title: "Conception d'un jeu de société au Ludomaker",
    description: "J'ai participé à la création d'un jeu de société original lors de la Game Jam 2024 au Ludomaker de Paris-Sorbonne à Saint-Denis. En collaboration avec deux autres personnes, nous avons conçu un jeu d'enquête immersif se déroulant dans la ville fictive de ClockTown. Les joueurs incarnent des enquêteurs chargés de résoudre des meurtres en moins de 24 heures, en relevant des énigmes et en utilisant leur logique pour déjouer les mystères.Le thème imposé de la jam était The clock is ticking, ce qui nous a inspiré l'idée de la contrainte de temps dans le gameplay. Cette expérience m'a permis de développer mes compétences en game design narratif, création d'énigmes et gestion du temps en équipe. J'ai activement contribué à la conception des énigmes, au développement des mécaniques de jeu et à la mise en place de l'ambiance narrative, tout en collaborant avec mes coéquipiers pour finaliser le projet dans les délais impartis",
    link: "",
    github: "",
    image: "clock4.jpg",
    skills: ["Game"],
  },
  {
    title: "Crossy Road",
    description:"Jeu de société fait en une semaine pour un Game Jam 2024.",
    link: "https://drive.google.com/drive/folders/1znB9G0mLQKTdYqLlX0Qy8611p7zI908x?usp=sharing",
    github: "https://github.com/Khadija-diop/Maquetage",
    image: "Crossy.png",
    video: "/CrossyRoad.mp4",
    skills: ["Game"],
  },
  {
    title: "E-commerce",
    description: "Un site e-commerce de mode.",
    link: "https://khadijac-glitch.github.io/FAYNARA/",
    github: "https://github.com/Khadijac-glitch/FAYNARA",
    image: "sitebootrap.png",
    skills: ["Web"],
  },
   {
        title: "Keur Yaye Soda",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://projet-final-three.vercel.app/",
        github: "https://github.com/sodagueye/Projet-final",
        image: "keur-yaye.png",
        skills: ["Web"],
      },
      {
        title: "FadjMa",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "",
        github: "https://github.com/Khadijac-glitch/FADJ-MA",
        image: "fadjMa.png",
        skills: ["Web"],
      },
      {
        title: "API",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "",
        github: "",
        image: "pays.png",
        skills: ["Web"],
      },
      {
        title: "Todo",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/NoteHack/",
        github: "https://github.com/Khadijac-glitch/NoteHack",
        image: "Hack.png",
        skills: ["Web"],
      },
      {
        title: "Sneakers",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/E-commerce-product-page/",
        github: "https://github.com/Khadijac-glitch/E-commerce-product-page",
        image: "sneakers.png",
        skills: ["Web"],
      },
      {
        title: "CoinAfrique",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/AFRIQUE/",
        github: "https://github.com/Khadijac-glitch/AFRIQUE",
        image: "afrique.png",
        skills: ["Web"],
      },
      {
        title: "E-commerce",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/BOOTSTRAP7/",
        github: "https://github.com/Khadijac-glitch/BOOTSTRAP7",
        image: "Cerise.png",
        skills: ["Web"],
      },
      {
        title: "Calculatrice",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/CALCULATOR/",
        github: "https://github.com/Khadijac-glitch/CALCULATOR",
        image: "calcul.png",
        skills: ["Web"],
      },

      {
        title: "Portfolio en Bootstraap",
        description: "Un portfolio personnel construit avec Next.js.",
        link: "https://khadijac-glitch.github.io/CALCULATOR/",
        github: "https://github.com/Khadijac-glitch/CALCULATOR",
        image: "folio.png",
        skills: ["Web"],
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
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-2xl w-full m-4 max-h-screen overflow-y-auto"
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


// function Modal({ project, isOpen, onClose }) {
//   if (!isOpen) return null;

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) => 
//       prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => 
//       prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div 
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-2xl w-full m-4 max-h-screen overflow-y-auto"
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="relative">
//           <div className="relative h-64 w-full mb-6">
//             <img
//               src={`/${project.image[currentImageIndex]}`}
//               alt={project.title}
//               className="object-cover rounded-xl w-full h-full"
//             />
//           </div>
          
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
//           <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
          
//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.skills.map((skill) => (
//               <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
//                 {skill}
//               </span>
//             ))}
//           </div>

//           <div className="flex gap-4 mb-6">
//             {project.link && (
//               <a
//                 href={project.link}
//                 className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-xl text-center hover:bg-purple-700 transition-all duration-300 hover:scale-105"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Voir le projet
//               </a>
//             )}
//             {project.github && (
//               <a
//                 href={project.github}
//                 className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-xl text-center hover:bg-gray-900 transition-all duration-300 hover:scale-105"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Code GitHub
//               </a>
//             )}
//           </div>

//           {/* Navigation pour les images */}
//           <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black cursor-pointer" onClick={handlePrev}>
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </div>
//           <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black cursor-pointer" onClick={handleNext}>
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </div>
          
//           <button
//             onClick={onClose}
//             className="absolute top-2 right-2 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-all duration-300"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    "Web", 
    "Game",
  ];

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skills.includes(selectedSkill))
    : projects;

  return (
    <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
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

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
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
      </div> */}


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {filteredProjects.map((project) => (
    <div
      key={project.title}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-48">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        ) : (
          <Image
            src={`/${project.image}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        )}
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
