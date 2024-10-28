"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import { visualizations } from "./listOfViz";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ImagePopup = ({ image, title, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        className="relative w-[90vw] h-[90vh] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-contain"
          sizes="90vw"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

const DataViz: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Disable scroll when popup is open
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <Spacing size={3} />
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
            I spend quite a bit of time making data visualizations, either for
            my clients, for a viz challenge, or just for fun. You can find the
            source code and a bit more info at:
          </p>
          <Spacing size={1} />
          <li>
            the{" "}
            <a
              href="https://python-graph-gallery.com/best-python-chart-examples/"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
            >
              Python Graph Gallery
            </a>
          </li>
          <li>
            my{" "}
            <a
              href="https://github.com/JosephBARBIERDARNAL/misc-dataviz"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
            >
              miscellaneous dataviz repo
            </a>
          </li>
          <li>
            my{" "}
            <a
              href="https://github.com/JosephBARBIERDARNAL/30DayMapChallenge"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable"
            >
              #30daymapchallenge repo
            </a>
          </li>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {visualizations.map((viz) => (
            <motion.div
              key={viz.id}
              variants={item}
              className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(viz)}
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={viz.image}
                  alt={viz.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-lg font-semibold">
                    {viz.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />

      <AnimatePresence>
        {selectedImage && (
          <ImagePopup
            image={selectedImage.image}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DataViz;
