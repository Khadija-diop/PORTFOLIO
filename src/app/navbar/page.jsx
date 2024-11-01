"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-2 bg-[#D2D2EB] fixed w-full z-10 top-0 z-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-lg font-bold">
            {/* <Image src="/logo.png" width={89} height={89} className="" /> */}

            <h5 className="text-2xl font-bold text-indigo-700 drop-shadow-lg">
            Khady Diop <br/> 
            Programmeuse 
          </h5>

            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link href="/" className="text-indigo-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                Home
              </Link>
              <Link href="#about" className="text-indigo-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                About
              </Link>
              <Link href="#contact" className="text-indigo-700 hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <Link href="/" className="text-gray-950 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-950 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-950 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

