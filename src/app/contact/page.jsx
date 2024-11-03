"use client"
import Image from "next/image"
export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 flex items-center justify-center py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        <div className="space-y-6">
          {/* Title with button */}
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-blue-900">Contactez-moi</h1>
            <a
              href="/CV-khady-diop.pdf" // Mettre le bon lien vers ton fichier CV
              download="CV-khady-diop.pdf"
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
            >
              Télécharger CV
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <p className="mr-4">Appelez directement :</p>
              <p className="text-xl font-bold text-blue-900">0760413503</p>
            </div>
            <div className="flex items-center">
              <p className="mr-4">Courriel de contact :</p>
              <p className="text-xl font-bold text-blue-900">khady.diop0407@gmail.com</p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom..."
              className="w-full p-3 bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Ton téléphone..."
              className="w-full p-3 bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Votre e-mail..."
              className="w-full p-3 bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Votre message..."
              className="w-full p-3 bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 px-6 py-3 rounded-md w-full mt-4 hover:bg-purple-600"
            >
              Soumettre
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/iabac.png"
            width={500}
            height={500}
            alt="Engagez-moi"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
