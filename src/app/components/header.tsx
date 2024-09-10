"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Spacing from "./spacing";

const navItems = [
  { text: "Open Source", slug: "opensource" },
  { text: "Visualization", slug: "dataviz" },
  { text: "Blog", slug: "blog" },
  { text: "Services", slug: "services" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Head>
        <title>Joseph Barbier - Data Science Developer</title>
        <meta name="description" content="Portfolio of Joseph Barbier, a Data Science Developer specializing in open-source development, data analysis, and visualization." />
        <meta name="keywords" content="Data Science, Developer, Open Source, Data Visualization, Web Development, Portfolio" />
        <meta name="author" content="Joseph Barbier" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Joseph Barbier - Data Science Developer" />
        <meta property="og:description" content="Portfolio of Joseph Barbier, a Data Science Developer specializing in open-source development, data analysis, and visualization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbierjoseph.com" />
        <meta property="og:image" content="https://barbierjoseph.com/img/joseph.png" />
        <link rel="canonical" href="https://barbierjoseph.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`other text-white py-4 fixed top-0 left-0 right-0 transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
      <Spacing size={5}/>
    </>
  );
};

export default Header;