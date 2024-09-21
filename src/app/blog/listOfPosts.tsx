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
  {
    title: "Statistics in our daily life",
    tags: ["statistics", "epistemology", "bayesianism"],
    description:
      "How statistics can be applied in daily life and why adopting a statistical mindset.",
    url: "/blog/statistics-in-our-daily-life",
  },
  {
    title: "Be careful when making statistics",
    tags: ["statistics", "methodology"],
    description:
      "Why every statistical calculation should be done for specific, well-defined reasons.",
    url: "/blog/be-careful-when-making-statistics",
  },
  {
    title:
      "Statistics are basically about finding out what is random and what is not",
    tags: ["statistics", "epistemology", "randomness"],
    description:
      "Statistics are helping us to determine what's random and what's not. But what do we mean by 'random'? How does that work?",
    url: "/blog/statistics-is-finding-whats-random",
  },
  {
    title: "ChatGPT's metric is not truthfulness",
    tags: ["chatgpt", "llm", "transformers"],
    description: "The problem of large language models (LLMs).",
    url: "/blog/chatgpt-metric-is-not-truthfulness",
  },
];
