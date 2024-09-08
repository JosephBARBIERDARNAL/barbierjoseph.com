// pages/dataviz.tsx

import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import VisualizationCard from "../components/visualizationCard"
import { visualizations } from "./listOfViz";

const DataViz: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Spacing size={3}/>
      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 md:mb-8">Data Visualization & Information design</h1>
        <div className="font-light text-sm sm:text-base space-y-4">
          <p>Since summer 2023, I've been extensively working on visualization with the Python Graph Gallery, particularly using matplotlib. I've discovered its versatility in creating any shape, color, or format.</p>
          <p>I'm passionate about transforming raw data into comprehensible visualizations, whether it's for #TidyTuesday challenges or exploring Kaggle datasets.</p>
          <p>Below are my favorite visualizations, both images and videos. <b>Click on each</b> for more details and the associated code.</p>
        </div>
        <Spacing size={3}/>
        <div className="grid gap-8 sm:gap-12 md:gap-16">
          {visualizations.map((viz) => (
            <VisualizationCard key={viz.id} viz={viz} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataViz;