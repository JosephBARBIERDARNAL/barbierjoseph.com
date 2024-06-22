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
    title: "Open Source Data Visualization Library",
    description: "A powerful library for creating interactive data visualizations using React and D3.js.",
    tags: ["React", "D3.js", "Data Visualization"],
    url: "",
    image: "/img/douanier.png",
  },
  {
    id: 5,
    title: "Machine Learning Model for Predictive Analytics",
    description: "Developed a machine learning model to predict customer churn for a telecom company.",
    tags: ["Python", "Scikit-learn", "TensorFlow"],
    url: "",
    image: "/img/effisciences.png",
  },
  {
    id: 6,
    title: "RESTful API for Data Analysis Platform",
    description: "Built a scalable API using Node.js and Express to power a data analysis platform.",
    tags: ["Node.js", "Express", "MongoDB"],
    url: "",
    image: "/img/statisticaljourney.png",
  },
  {
    id: 7,
    title: "Machine Learning Model for Predictive Analytics",
    description: "Developed a machine learning model to predict customer churn for a telecom company.",
    tags: ["Python", "Scikit-learn", "TensorFlow"],
    url: "",
    image: "/img/effisciences.png",
  },
  {
    id: 8,
    title: "RESTful API for Data Analysis Platform",
    description: "Built a scalable API using Node.js and Express to power a data analysis platform.",
    tags: ["Node.js", "Express", "MongoDB"],
    url: "",
    image: "/img/statisticaljourney.png",
  },
];