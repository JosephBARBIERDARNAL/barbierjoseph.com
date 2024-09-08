import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Spacing from "../components/spacing";
import ArticleComponent from "./article";
import { articles } from "./listOfPosts";

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <Spacing size={3}/>

      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-white-800">Blog</h1>
        <p className="text-sm sm:text-base md:text-lg text-center sm:text-left max-w-2xl mx-auto">
          I already write articles about statistics on <a href="https://statisticaljourney.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Statistical Journey</a>, but you can find here less specialized articles. I write more about how I understand data analysis and how we use those tools.
        </p>
        <Spacing size={3}/>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
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