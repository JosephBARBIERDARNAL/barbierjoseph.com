"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import Link from "next/link";

const About: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <Spacing size={3}/>

      <main className="container mx-auto font-light flex-grow p-4 sm:p-6 md:p-8 animate-fadeIn">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-center font-bold">About Me</h1>
        
        <section className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300">
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">
            My current occupations include:
          </p>
          <ul className="list-disc list-inside mb-3 sm:mb-4 pl-2 sm:pl-4 text-sm sm:text-base">
            <li className="mb-2">Full-time intern working on open source (data visualization and software) with <Link className="linking break-words"
            href="https://www.yan-holtz.com/" target="_blank">Yan Holtz</Link></li>
            <li className="mb-2">Building various <Link className="linking break-words" href="https://github.com/JosephBARBIERDARNAL" target="_blank">open source tools</Link> related to data science</li>
            <li className="mb-2">Blogging about statistics in our everyday life at <Link className="linking break-words"
            href="https://www.statisticaljourney.com/" target="_blank">statisticaljourney.com</Link></li>
          </ul>
          <p className="text-sm sm:text-base">
            I offer data analysis and data visualization <b>services</b>. I can help you to understand your data, create beautiful visualizations, develop web applications and more. If that's something you're interested in, feel free to contact me at <b className="break-all">joseph.barbierdarnal@gmail.com</b>.
          </p>
        </section>

        <Spacing size={3}/>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 font-semibold text-center">Work Experience</h2>

          <Spacing size={1}/>
          
          {[
            {
              title: "Open source developer intern - Dataviz Universe",
              period: "March 2024 - Present",
              description: "I'm working with Yan Holtz on a variety of projects, all data-related: an R package on ecology modeling, the Python/R Graph gallery sites, and other projects under discussion."
            },
            {
              title: "Data visualization developer - Freelance",
              period: "Aug 2023 - Jan 2024",
              description: "I worked as a freelancer alongside my studies on the development of the Python and R Graph Gallery websites. I mainly used Python and R, but also a little HTML/React for the web part, and Git for versioning."
            },
            {
              title: "Data science intern - Wanteeed",
              period: "Apr 2023 - Aug 2023",
              description: "Wanteeed is a French start-up offering a free browser extension and mobile application that automatically applies discount codes and/or cashback offers to users. My job was to try and better understand the company's data, particularly from a marketing and financial point of view, as well as to make predictions. I mainly worked with SQL and Looker, but also used Python for more specific tasks."
            },
            {
              title: "Tutoring teacher - Bordeaux University",
              period: "Sep 2022 - Nov 2022",
              description: "I have tutored students in their second year of a Bachelor's degree in Economics and Management at the University of Bordeaux. The classes were on microeconomics and the main concepts derived from it, such as general equilibrium, utility optimization with or without constraints, and Walrasian equilibrium."
            },
            {
              title: "Data analyst / Research intern - CIERI",
              period: "Apr 2022 - Jul 2022",
              description: "I worked for the CIERI research center with Thomas Salanova on the relationship between socio-economic status and cancer. The work consisted mainly of a literature review, data cleaning and analysis with R. I used data from the SHARE study, Europe's largest social science study.I tried to determine the main social factors of cancer via logistic regressions, as well as to detect the presence of groups in individuals with unsupervised learning (k-prototypes algorithm)."
            }
          ].map((experience, index) => (
            <div 
              key={index}
              className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveExperience(activeExperience === index ? null : index)}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{experience.title}</h3>
              <p className="italic text-gray-400 text-sm sm:text-base">{experience.period}</p>
              <p className={`mt-2 overflow-hidden transition-all duration-300 text-sm sm:text-base ${activeExperience === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                {experience.description}
              </p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;