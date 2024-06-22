export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Reviving Henri Rousseau",
    description: "Building an interface to speak with the late Henri Rousseau, as part of an exhibition in Berlin.",
    tags: ["Artificial Intelligence", "UX", "Photography"],
    url: "",
    image: "/img/douanier.png",
  },
  {
    id: 2,
    title: "AI safety talks",
    description: "Conferences on safety issues related to large language models at Ecole 42 and Bordeaux University.",
    tags: ["Talks", "AI safety", "LLM"],
    url: "",
    image: "/img/effisciences.png",
  },
  {
    id: 3,
    title: "Statistical Journey",
    description: "A website to learn about statistics with non-technical and narrative style.",
    tags: ["Statistics", "Epistemology"],
    url: "",
    image: "/img/statisticaljourney.png",
  },
  {
    id: 4,
    title: "Open Source Python Color Library",
    description: "A powerful library for creating interactive data visualizations using React and D3.js.",
    tags: ["React", "D3.js", "Data Visualization"],
    url: "",
    image: "/img/douanier.png",
  },
];