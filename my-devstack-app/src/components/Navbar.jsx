import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 w-[90%] max-w-6xl items-center justify-between">

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <img
            src={hamburger}
            alt="Menu"
            className="h-6 w-6"
          />
        </button>

        
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img
            src={logo}
            alt="Dev Stack"
            className="w-28"
          />
        </div>

        
        <div
          className={`absolute left-0 right-0 top-16 flex flex-col items-center gap-6 border-b border-gray-200 bg-white py-6 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:py-0 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-500 hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-500 hover:text-pink-600"
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-500 hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-gray-500 hover:text-pink-600"
          >
            Contact
          </a>
        </div>

       
        <div className="flex items-center gap-2">
          <button className="hidden text-sm text-gray-600 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet px-4 py-2 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;