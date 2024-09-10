"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";

const ServicesFrench: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("joseph.barbierdarnal@gmail.com")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => console.error('Échec de la copie du texte : ', err));
  };

  const demos = [
    {
      title: "Analyse de données",
      description: "Je peux vous aider à comprendre vos données grâce à une analyse approfondie qui communique efficacement les insights. Je peux également créer des visualisations statiques ou animées pour des besoins plus spécifiques, comme un article de recherche ou un rapport.",
      examples: [
        "Rapports d'analyse exploratoire des données (EDA)",
        "Tableaux de bord interactifs",
        "Visualisations de données personnalisées"
      ]
    },
    {
      title: "Modélisation statistique & IA générative",
      description: "Je peux réaliser des analyses statistiques, allant des tests d'hypothèses simples et des modèles linéaires à des cas d'utilisation plus avancés tels que l'entraînement de modèles d'apprentissage automatique et les tâches de prédiction. Je peux également implémenter divers outils d'IA générative tels que des chatbots (GPT, Claude...)",
      examples: [
        "Modélisation et interprétation des résultats",
        "Implémentation de Chatbot / Générateur d'images"
      ]
    },
    {
      title: "Développement d'applications web",
      description: "Je peux construire des applications web interactives qui donnent vie à vos données, automatisent des tâches, et bien plus encore !",
      examples: [
        "Tableau de bord avec toutes les personnalisations dont vous avez besoin",
        "Diverses automatisations : extraire des informations de documents volumineux, vérifier le format des fichiers/entrées, transformer l'audio en texte, etc.",
        "Site web statique pour votre entreprise ou votre projet."
      ]
    },
    {
      title: "Demande spécifique",
      description: "Si vous avez un besoin plus spécifique, n'hésitez pas à me contacter et nous verrons si je peux vous aider à résoudre votre problème.",
      examples: [
        "joseph.barbierdarnal@gmail.com",
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <div className="container mx-auto px-4 py-4">
        <Link href="/services">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-thin py-2 px-4 rounded transition duration-300 ease-in-out">
            View in English
          </button>
        </Link>
      </div>

      <main className="container mx-auto font-light flex-grow p-4 sm:p-6 md:p-8 animate-fadeIn">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-center">Services</h1>
        
        <section className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300">
          <p className="text-md sm:text-lg mb-4">
            Je propose des <b>services</b> de data science. Je peux vous aider à <b>comprendre vos données</b>, créer de superbes <b>visualisations</b>, implémenter des <b>modèles statistiques</b>, développer des <b>applications web</b> et plus encore.
          </p>
          <p>
            Si cela vous intéresse, n'hésitez pas à me contacter à :
          </p>
          <br/>
          <div className="relative p-4 bg-gray-800 rounded-lg flex justify-center items-center">
            <button 
              onClick={copyToClipboard}
              className="absolute top-2 right-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors duration-300"
            >
              {copySuccess ? 'Copié !' : 'Copier'}
            </button>
            <p className="text-xl break-all">joseph.barbierdarnal@gmail.com</p>
          </div>
        </section>

        <Spacing size={3}/>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 text-center bg-clip-text">Vitrine d'expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demos.map((demo, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div 
                  className="p-6"
                >
                  <h3 className="text-xl sm:text-2xl mb-3 text-blue-300">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className={`overflow-hidden transition-all duration-300  "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <h4 className="text-lg font-medium text-purple-400 mb-2">Exemples :</h4>
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

        <Spacing size={3}/>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-center">Expériences passées</h2>

          <Spacing size={1}/>
          
          {[
            {
              title: "Développeur en data science - Freelance",
              period: "Sep 2024 - Présent",
              description: "Je propose des services de data science : du nettoyage des données à la visualisation des données, en passant par la création de modèles prédictifs et la construction d'applications web. N'hésitez pas à me contacter si cela vous intéresse."
            },
            {
              title: "Stagiaire data scientist et développeur open source - Dataviz Universe",
              period: "Mars 2024 - Août 2024",
              description: "Dataviz Universe regroupe les sites créés par Yan Holtz autour de la visualisation de données. J'ai travaillé avec Yan sur une variété de projets, tous liés aux données : un package R sur la modélisation écologique, les sites Python/R Graph Gallery, et des libraries Python open source."
            },
            {
              title: "Développeur de visualisation de données - Freelance",
              period: "Août 2023 - Jan 2024",
              description: "J'ai travaillé en tant que freelance parallèlement à mes études sur le développement des sites web Python et R Graph Gallery. J'ai principalement utilisé Python et R, mais aussi un peu de HTML/React pour la partie web, et Git pour le versionnage."
            },
            {
              title: "Stagiaire en data science - Wanteeed",
              period: "Avr 2023 - Août 2023",
              description: "Wanteeed est une start-up française qui propose une extension de navigateur et une application mobile gratuites qui appliquent automatiquement des codes de réduction et/ou des offres de cashback aux utilisateurs. Mon travail consistait à essayer de mieux comprendre les données de l'entreprise, notamment d'un point de vue marketing et financier, ainsi qu'à faire des prédictions. J'ai principalement travaillé avec SQL et Looker, mais j'ai également utilisé Python pour des tâches plus spécifiques."
            },
            {
              title: "Enseignant tuteur - Université de Bordeaux",
              period: "Sep 2022 - Nov 2022",
              description: "J'ai tutoré des étudiants en deuxième année de licence d'Économie et de Gestion à l'Université de Bordeaux. Les cours portaient sur la microéconomie et les principaux concepts qui en découlent, tels que l'équilibre général, l'optimisation de l'utilité avec ou sans contraintes, et l'équilibre walrasien."
            },
            {
              title: "Analyste de données / Stagiaire de recherche - CIERI",
              period: "Avr 2022 - Juil 2022",
              description: "J'ai travaillé pour le centre de recherche CIERI avec Thomas Salanova sur la relation entre le statut socio-économique et le cancer. Le travail consistait principalement en une revue de la littérature, un nettoyage et une analyse des données avec R. J'ai utilisé les données de l'étude SHARE, la plus grande étude en sciences sociales d'Europe. J'ai essayé de déterminer les principaux facteurs sociaux du cancer via des régressions logistiques, ainsi que de détecter la présence de groupes chez les individus avec de l'apprentissage non supervisé (algorithme k-prototypes)."
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

export default ServicesFrench;