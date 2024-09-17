export interface Article {
  title: string;
  tags: string[];
  description: string;
  url: string;
}

export const articles: Article[] = [
  {
    title: "Fake data science jobs",
    tags: ["job", "data annotation", "AI training"],
    description:
      "An investigation into all those pseudo data scientist jobs you may have come across.",
    url: "/blog/fake-data-science-jobs",
  },
  {
    title: "Don't try to reverse engineer the data",
    tags: ["data analysis", "reverse engineering"],
    description:
      "A reflection on the importance of understanding the data before diving into analysis.",
    url: "/blog/dont-reverse-engineer-the-data",
  },
];
