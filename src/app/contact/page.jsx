// pages/engagez-moi.js
export default function EngagezMoi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 flex items-center justify-center py-12 rounded-l-full rounded-r-full">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        {/* Section gauche: Contact Info + Form */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Contactez-moi</h1>

          <div className="space-y-4">
            {/* Flex pour numéro de téléphone */}
            <div className="flex items-center">
              <p className="mr-4">Appelez directement :</p>
              <p className="text-xl font-bold">0760413503</p>
            </div>

            {/* Flex pour courriel */}
            <div className="flex items-center">
              <p className="mr-4">Courriel de contact :</p>
              <p className="text-xl font-bold">khady.diop0407@gmail.com</p>
            </div>
          </div>

          {/* Formulaire */}
          <form className="space-y-4 ">
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
              className="w-full p-3 bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-b from-[#D2D2EB] to-white text-gray-950 px-6 py-3 rounded-md w-full mt-4 hover:bg-indigo-700 transition"
            >
              Soumettre
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/iabac.png"
            alt="Engagez-moi"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
