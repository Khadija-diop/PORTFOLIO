"use client";
import Image from "next/image";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaSquareTwitter,
} from "react-icons/fa6";
import { FaItchIo } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-6 bg-[#D2D2EB] shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center space-x-2">

          {/* <Image src="/logo.png"
            width={60} 
            height={60}
             alt="logo" 
             /> */}

          <span className="text-2xl font-semibold text-purple-400">
            Portfolio
          </span>
        </div>

        <div className="flex space-x-4 my-4 md:my-0">
          <a
            href="https://www.instagram.com/khadij_nour"
            className="text-purple-400 hover:text-purple-600"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://khadijad.itch.io/"
            className="text-purple-400 hover:text-purple-600"
          >
            <FaItchIo />
          </a>
          {/* <a
            href="https://twitter.com"
            className="text-purple-400 hover:text-purple-600"
          >
            <FaSquareTwitter />
          </a> */}
          <a
            href="https://www.linkedin.com/in/khadydiop04/"
            className="text-purple-400 hover:text-purple-600"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-gray-900 text-sm text-center md:text-right">
          copyright 2024{" "}
          <span className="text-purple-600 font-semibold">KhadijaCode</span>.
          Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
