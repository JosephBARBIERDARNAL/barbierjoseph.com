

export interface Article {
  title: string;
  description: string;
  url: string;
}

export const articles: Article[] = [
   {
   title: "Don't try to reverse engineer the data",
   description: "A reflection on the importance of understanding the data before diving into analysis.",
   url: "/blog/dont-reverse-engineer-the-data"
   },
   {
   title: "My data analysis set up: IDE, tools, etc",
   description: "All the programming tools that I use to have the smoothest workflow possible.",
   url: "/blog/data-analysis-workflow"
   },
   {
   title: "Fake data science jobs",
   description: "An investigation into all those pseudo data scientist jobs you may have come across.",
   url: "/blog/fake-data-science-jobs"
   },
];