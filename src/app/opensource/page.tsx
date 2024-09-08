import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import { openSourceProjects, Repo } from "./listOfProjects";

const OpenSourceProject: React.FC<{ repo: Repo; isEven: boolean }> = ({ repo, isEven }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start mb-16 ${isEven ? "md:flex-row-reverse" : ""} border-b border-gray-200 pb-8`}>
      <div className={`w-full md:w-1/4 px-4 flex justify-center mb-4 md:mb-0`}>
        <a 
          href={repo.link} 
          target="_blank" 
          rel="noopener noreferrer">
            <Image 
            src={repo.imageUrl} 
            alt={repo.name} 
            width={repo.imageWidth} 
            height={repo.imageHeight} 
            className="rounded-lg shadow-lg"
            style={{ minWidth: '150px', width: '100%', height: 'auto' }}
          />
        </a>
      </div>
      <div className={`w-full md:w-3/4 px-4 text-center md:text-left ${isEven ? "md:text-right" : ""}`}>
        <h2 className="text-xl md:text-2xl font-light mb-2">{repo.name}</h2>
        <p className="mb-4 font-light">{repo.description}</p>
        <a 
          href={repo.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex font-light items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors`}
        >
          <FaGithub className={`mr-2`} />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

const OpenSource: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black-100">
      <Header />

      <Spacing size={3} />

      <main className="container mx-auto flex-grow p-4 md:p-8 animate-fadeIn">
        <h1 className="text-xl md:text-2xl mb-4 md:mb-8 text-center">Open Source Contributions</h1>
        <p className="text-left mb-4 md:mb-8 font-light">
          In all of the following projects, I am either a <b>contributor</b> or a <b>project owner</b>. I have not included my contributions to certain projects where they are not significant/relevant.
        </p>

        <Spacing size={3} />

        <div className="relative">
          {openSourceProjects.map((repo, index) => (
            <OpenSourceProject key={repo.name} repo={repo} isEven={index % 2 === 0} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OpenSource;
