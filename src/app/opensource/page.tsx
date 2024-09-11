"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import { openSourceProjects, Repo } from "./listOfProjects";
import { motion } from "framer-motion";

const OpenSourceProject: React.FC<{ repo: Repo; isEven: boolean }> = ({ repo, isEven }) => {
  return (
    <motion.div 
      className={`flex flex-col md:flex-row items-center md:items-start mb-16 ${isEven ? "md:flex-row-reverse" : ""} border-b border-gray-700 pb-8`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-full md:w-1/3 px-4 flex justify-center mb-4 md:mb-0`}>
        <motion.a 
          href={repo.link} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
            src={repo.imageUrl} 
            alt={repo.name} 
            width={repo.imageWidth} 
            height={repo.imageHeight} 
            className="rounded-lg shadow-lg"
            style={{ minWidth: '100px', width: '100%', height: 'auto' }}
          />
        </motion.a>
      </div>
      <div className={`w-full md:w-2/3 px-4 text-center md:text-left ${isEven ? "md:text-right" : ""}`}>
        <h2 className="text-2xl md:text-3xl font-light mb-3 text-white">{repo.name}</h2>
        <p className="mb-4 font-light text-gray-300">{repo.description}</p>
        <motion.a 
          href={repo.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex font-light items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className={`mr-2`} />
          View on GitHub
        </motion.a>
      </div>
    </motion.div>
  );
};

const OpenSource: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <Header />

      <Spacing size={3} />

      <main className="container mx-auto flex-grow p-4 md:p-8 animate-fadeIn">
        <motion.h1 
          className="text-5xl md:text-5xl mb-6 md:mb-10 text-center font-light"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Open Source Contributions
        </motion.h1>
        <motion.p 
          className="text-left mb-8 md:mb-12 font-light text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          In all of the following projects, I am either a <span className="font-semibold">contributor</span> or a <span className="font-semibold">maintainer</span>. I have not included my contributions to certain projects where they are not significant/relevant.
        </motion.p>

        <Spacing size={5} />

        <div className="relative space-y-24">
          {openSourceProjects.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: scrollY > index * 300 ? 1 : 0, 
                y: scrollY > index * 300 ? 0 : 50 
              }}
              transition={{ duration: 0.8 }}
            >
              <OpenSourceProject repo={repo} isEven={index % 2 === 0} />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OpenSource;
