import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Spacing from '../components/spacing';
import ArticleComponent from './article';

interface Article {
  title: string;
  description: string;
  url: string;
}

const Blog: React.FC = () => {
  const articles: Article[] = [
    {
      title: "Don't try to reverse engineer the data",
      description: "A reflection on the importance of understanding the data before diving into analysis.",
      url: "dont-reverse-engineer-the-data"
    },
    {
      title: "My data analysis set up: IDE, tools, etc",
      description: "All the programming tools that I use to have the smoothest workflow possible.",
      url: "/blog/data-analysis-workflow"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <Spacing size={3}/>

      <main className="container mx-auto flex-grow p-8 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center text-white-800">Blog</h1>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <ArticleComponent key={index} {...article} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;