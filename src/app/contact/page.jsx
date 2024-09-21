export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contactez-moi</h1>
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Votre email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  }
  