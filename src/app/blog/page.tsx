"use client"
import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import ArticleComponent from "./article";
import { articles } from "./listOfPosts";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blog: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />

      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 md:mb-10 text-center bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Blog
        </motion.h1>
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I already write articles about statistics on <a href="https://statisticaljourney.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Statistical Journey</a>, but you can find here less specialized articles. I write more about how I understand data analysis and how we use those tools.
        </motion.p>
        <Spacing size={5}/>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-6 sm:space-y-8 md:space-y-10"
        >
          {articles.map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ArticleComponent {...article} />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;