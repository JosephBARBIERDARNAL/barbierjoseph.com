import React from "react";

interface Article {
  title: string;
  description: string;
  url: string;
}

const ArticleComponent: React.FC<Article> = ({ title, description, url }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-6 overflow-hidden border border-gray-700">
      <div className="p-6">
        <h2 className="text-2xl mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-300 mb-4 font-lights">{description}</p>
        <a 
          href={url} 
          className="read-button inline-block text-white px-4 py-2 rounded transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleComponent;