"use client"
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { text: "Open Source", slug: "opensource" },
  { text: "Visualization", slug: "dataviz" },
  { text: "Blog", slug: "blog" },
  { text: "About", slug: "about" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="other bg-black-600 text-white py-4">
      <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="text-sm sm:text-base md:text-lg font-light z-30 flex items-center">
          Joseph - Data Science Developer
        </Link>
        
        {/* Hamburger menu for mobile */}
        <button 
          className="lg:hidden mt-5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation items */}
        <ul className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} lg:max-h-96 lg:opacity-100 overflow-hidden transition-all duration-300 ease-in-out lg:flex w-full lg:w-auto mt-4 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-4`}>
          {navItems.map((item) => (
            <li key={item.text}>
              <Link href={`/${item.slug}`}>
                <span className="block px-4 py-2 text-sm md:text-base rounded-lg border border-transparent transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;