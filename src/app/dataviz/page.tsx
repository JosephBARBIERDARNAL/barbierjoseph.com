"use client"
import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import VisualizationCard from "../components/visualizationCard"
import { visualizations } from "./listOfViz";
import { motion } from 'framer-motion';

const DataViz: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={3}/>
      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8 md:mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Data Visualization
        </motion.h1>
        <motion.div 
          className="text-left mb-8 md:mb-12 font-light text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p>
            I've been extensively working on visualization with the <a href="https://python-graph-gallery.com/" target="_blank" rel="noopener noreferrer" className="clickable">Python Graph Gallery</a>, particularly using matplotlib.
          </p>
          <br/>
          <p>
            I'm passionate about transforming raw data into comprehensible visualizations, and below are my favorite visualizations, both images and videos. <b>Click on each</b> for more details and the associated code.
          </p>
          <br/>
        </motion.div>
        <Spacing size={5}/>
        <div className="space-y-24 sm:space-y-32 md:space-y-40">
          {visualizations.map((viz, index) => (
            <motion.div
              key={viz.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: scrollY > index * 300 ? 1 : 0, 
                y: scrollY > index * 300 ? 0 : 50 
              }}
              transition={{ duration: 0.8 }}
            >
              <VisualizationCard viz={viz} />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataViz;