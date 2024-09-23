import Image from 'next/image';
import { FaSquareInstagram, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-6 bg-[#D2D2EB] shadow-lg">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" // Chemin vers ton fichier image dans le dossier public
            alt="Logo"
            width={60}  // Largeur de l'image
            height={60} // Hauteur de l'image
          />
          <span className="text-2xl font-semibold text-purple-400">Portfolio</span>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="https://instagram.com" className="text-purple-400 hover:text-purple-600">
            <FaSquareInstagram />
          </a>
          <a href="https://facebook.com" className="text-purple-400 hover:text-purple-600">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com" className="text-purple-400 hover:text-purple-600">
            <FaSquareTwitter />
          </a>
          <a href="https://linkedin.com" className="text-purple-400 hover:text-purple-600">
            <FaLinkedin />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-900 text-sm text-center md:text-right">
          copyright 2024 <span className="text-purple-600 font-semibold">KhadijaCode</span>. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
