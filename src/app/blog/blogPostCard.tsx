import React from "react";

interface Article {
  title: string;
  tags: string[];
  description: string;
  url: string;
}

const ArticleComponent: React.FC<Article> = ({
  title,
  tags,
  description,
  url,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-2 sm:mb-6 overflow-hidden border border-gray-700 mx-auto w-11/12 sm:w-auto">
      <a
        href={url}
        className="article-card block text-white transition-colors duration-300"
      >
        <div className="p-2 sm:p-6">
          <h2 className="text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-100">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-4 font-light">
            {description}
          </p>
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="m-1 p-2 bg-gray-700 text-white text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArticleComponent;
