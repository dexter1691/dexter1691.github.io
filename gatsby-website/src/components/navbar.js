import React, { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-100 bg-slate-900 py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Brand/logo */}
            <a className="text-white text-xl font-semibold" href="#page-top">
              Harsh Agrawal
            </a>
  
            {/* Mobile menu toggle button */}
            <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
              <span className="sr-only">Toggle navigation</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              >
                <path
                  fillRule="evenodd"
                  d="M2.75 4.75a.75.75 0 011.5 0v10.5a.75.75 0 01-1.5 0V4.75zM5 4.75a.75.75 0 111.5 0v10.5a.75.75 0 01-1.5 0V4.75zm8.75 0a.75.75 0 10-1.5 0v10.5a.75.75 0 001.5 0V4.75zm2.25 0a.75.75 0 111.5 0v10.5a.75.75 0 11-1.5 0V4.75z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 4.293a1 1 0 011.414 0L10 9.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
  
            {/* Desktop menu items */}
            <div className="hidden lg:flex space-x-4">
              {/* <a href="#timeline" className="text-white">Timeline</a> */}
              <a href="#about" className="text-white">
                Publications
              </a>
              <a href="#projects" className="text-white">
                Projects
              </a>
              <a href="https://drive.google.com/open?id=1UzyjfWd0-lx62uz1L4xcwGVD7ZGTJK99" className="text-white">
                CV
              </a>
            </div>
          </div>
  
          {/* Mobile menu items */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-2`}>
            {/* <a href="#timeline" className="block py-2 px-4 text-white">Timeline</a> */}
            <a href="#about" className="block py-2 px-4 text-white">
              Publications
            </a>
            <a href="#projects" className="block py-2 px-4 text-white">
              Projects
            </a>
            <a
              href="https://drive.google.com/open?id=1UzyjfWd0-lx62uz1L4xcwGVD7ZGTJK99"
              className="block py-2 px-4 text-white"
            >
              CV
            </a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;