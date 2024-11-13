"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";

const Services: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("joseph.barbierdarnal@gmail.com")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const demos = [
    {
      title: "Data Analysis",
      description:
        "I can help you understand your data through in-depth analysis that communicate insights effectively. I can also create static or animated visualizations for more specific needs, such as a research paper or report.",
      examples: [
        "Exploratory Data Analysis (EDA) reports",
        "Interactive dashboards",
        "Custom data visualizations",
      ],
    },
    {
      title: "Statistical Modeling & Gen AI",
      description:
        "I can make statistical analysis, from simple hypothesis testing and linear models to more advanced use cases such as machine learning training and prediction tasks. I can also implement various generative AI tools such as chatbot (GPT, Claude...)",
      examples: [
        "Modelling and interpreting results",
        "Implement Chatbot / Image generator",
      ],
    },
    {
      title: "Web Application Development",
      description:
        "I can build interactive web applications that bring your data to life, automate boring tasks, and much more!",
      examples: [
        "Dashboard with all the customisations you need",
        "Various automation: extract information from large documents, verify format of files/input, transform audio to text, etc",
        "Static website for your company or your project.",
      ],
    },
    {
      title: "Specific request",
      description:
        "If you have a more specific need, don't hesitate to contact me and we'll see if I can help you solve your problem.",
      examples: ["joseph.barbierdarnal@gmail.com"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <Header />

      <div className="container mx-auto px-4 py-4">
        <Link href="/services/fr">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-thin py-2 px-4 rounded transition duration-300 ease-in-out">
            🇫🇷 View in French
          </button>
        </Link>
      </div>

      <main className="container mx-auto font-light flex-grow p-4 sm:p-6 md:p-8 animate-fadeIn">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-center">
          Services
        </h1>

        <section className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300">
          <p className="text-md sm:text-lg mb-4">
            I offer data science <b>services</b>. I can help you to{" "}
            <b>understand your data</b>, create beautiful <b>visualizations</b>,
            implement <b>statistical models</b>, develop <b>web applications</b>{" "}
            and more.
          </p>
          <p>
            If that's something you're interested in, feel free to contact me
            at:
          </p>
          <br />
          <div className="relative p-4 bg-gray-800 rounded-lg flex justify-center items-center">
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors duration-300"
            >
              {copySuccess ? "Copied!" : "Copy"}
            </button>
            <p className="text-xl break-all">joseph.barbierdarnal@gmail.com</p>
          </div>
        </section>

        <Spacing size={3} />

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 text-center bg-clip-text">
            Expertise Showcase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demos.map((demo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl mb-3 text-blue-300">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div
                    className={`overflow-hidden transition-all duration-300  "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <h4 className="text-lg font-medium text-purple-400 mb-2">
                      Examples:
                    </h4>
                    <ul className="space-y-2">
                      {demo.examples.map((example, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 text-green-400">▹</span>
                          <span className="text-gray-200">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Spacing size={3} />

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center">
            Past experiences
          </h2>

          <Spacing size={1} />

          {[
            {
              title: "Data sciencist - Freelance",
              period: "Sep 2024 - Present",
              description:
                "I offer data science services: from data cleaning to data visualization, making predictive models and building web apps. Feel free to contact me if you're interested.",
            },
            {
              title:
                "Data scientist and open source developer intern - Dataviz Universe",
              period: "March 2024 - Aug 2024",
              description:
                "Dataviz Universe brings together sites created by Yan Holtz around data visualisation. I was working with Yan Holtz on a variety of projects, all data-related: an R package on ecology modeling, the Python/R Graph gallery sites and open source Python libraries.",
            },
            {
              title: "Data visualization developer - Freelance",
              period: "Aug 2023 - Jan 2024",
              description:
                "I worked as a freelancer alongside my studies on the development of the Python and R Graph Gallery websites. I mainly used Python and R, but also a little HTML/React for the web part, and Git for versioning.",
            },
            {
              title: "Data science intern - Wanteeed",
              period: "Apr 2023 - Aug 2023",
              description:
                "Wanteeed is a French start-up offering a free browser extension and mobile application that automatically applies discount codes and/or cashback offers to users. My job was to try and better understand the company's data, particularly from a marketing and financial point of view, as well as to make predictions. I mainly worked with SQL and Looker, but also used Python for more specific tasks.",
            },
            {
              title: "Tutoring teacher - Bordeaux University",
              period: "Sep 2022 - Nov 2022",
              description:
                "I have tutored students in their second year of a Bachelor's degree in Economics and Management at the University of Bordeaux. The classes were on microeconomics and the main concepts derived from it, such as general equilibrium, utility optimization with or without constraints, and Walrasian equilibrium.",
            },
            {
              title: "Data analyst / Research intern - CIERI",
              period: "Apr 2022 - Jul 2022",
              description:
                "I worked for the CIERI research center with Thomas Salanova on the relationship between socio-economic status and cancer. The work consisted mainly of a literature review, data cleaning and analysis with R. I used data from the SHARE study, Europe's largest social science study.I tried to determine the main social factors of cancer via logistic regressions, as well as to detect the presence of groups in individuals with unsupervised learning (k-prototypes algorithm).",
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer"
              onClick={() =>
                setActiveExperience(activeExperience === index ? null : index)
              }
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
                {experience.title}
              </h3>
              <p className="italic text-gray-400 text-sm sm:text-base">
                {experience.period}
              </p>
              <p
                className={`mt-2 overflow-hidden transition-all duration-300 text-sm sm:text-base ${
                  activeExperience === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
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

export default Services;
