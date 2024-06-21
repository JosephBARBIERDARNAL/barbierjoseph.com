import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url: string; // Add a URL for each project
}

const projects: Project[] = [
  {
    id: 1,
    title: "Open Source Data Visualization Library",
    description: "A powerful library for creating interactive data visualizations using React and D3.js.",
    tags: ["React", "D3.js", "Data Visualization"],
    url: ""
  },
  {
    id: 2,
    title: "Machine Learning Model for Predictive Analytics",
    description: "Developed a machine learning model to predict customer churn for a telecom company.",
    tags: ["Python", "Scikit-learn", "TensorFlow"],
    url: ""
  },
  {
    id: 3,
    title: "RESTful API for Data Analysis Platform",
    description: "Built a scalable API using Node.js and Express to power a data analysis platform.",
    tags: ["Node.js", "Express", "MongoDB"],
    url: ""
  },
  {
    id: 4,
    title: "Automated Data Pipeline for Social Media Analytics",
    description: "Created an ETL pipeline to collect, process, and analyze social media data in real-time.",
    tags: ["Apache Airflow", "Python", "AWS"],
    url: ""
  },
  {
    id: 5,
    title: "Blockchain-based Supply Chain Tracking System",
    description: "Developed a decentralized application for tracking products through the supply chain.",
    tags: ["Solidity", "Ethereum", "Web3.js"],
    url: ""
  },
  {
    id: 6,
    title: "Natural Language Processing Toolkit",
    description: "An open-source toolkit for processing and analyzing natural language data.",
    tags: ["Python", "NLTK", "SpaCy"],
    url: ""
  }
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black-100">
      <Head>
        <title>Projects | Joseph's Portfolio</title>
        <meta name="description" content="Open source and data analysis projects by Joseph" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto flex-grow p-8">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.url} 
                  className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  See Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;