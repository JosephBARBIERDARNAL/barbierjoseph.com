import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Spacing from '../components/Spacing';
import {Project, projects } from './listOfProjects';

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
        <Spacing size={5}/>
        <h1 className="text-3xl font-bold mb-10 text-center text-white-800">Projects</h1>
        <p className="text-center text-white-600 mb-12">
          I've worked on various projects, from talks to web development and data analysis. Here are the most interesting ones.
        </p>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-2/6 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-2xl font-bold mb-4 text-white-800">{project.title}</h2>
                <p className="text-white-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.url} 
                  className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
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