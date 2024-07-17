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
      <main className="container mx-auto flex-grow p-4 animate-fadeIn">
        <h1 className="text-4xl text-white mb-8">Data Visualization & Information design</h1>
        <div className="font-light">
          <p>Since the summer of 2023, when I started working for the Python Graph Gallery, I've started doing a lot of visualisation, particularly with matplotlib. I've discovered that you can do literally anything with it: any shape, any colour, any format.</p>
          <p>What's more, I love turning raw data into easy-to-understand visualisations. Whether it's for the #TidyTuesday challenge or searching through Kaggle datasets, I always find something worth spending time on.</p>
          <br/>
          <p>So I'm listing my favourite visualisations here, whether they're in image or video format. Don't forget to <b>click on them</b> for more information and the associated code.</p>
        </div>
        <Spacing size={3}/>
        <div className="space-y-12">
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