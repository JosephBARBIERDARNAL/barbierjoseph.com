export interface Repo {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  imageWidth: number;
  imageHeight: number;
}

export const openSourceProjects: Repo[] = [
  {
    name: "PyPalettes",
    description: "A Python library that provides a large number (+2500) of colour palettes for data visualisation. It is based on the Paletteer package from R and comes with a web application for browsing all the palettes.",
    imageUrl: "/img/pypalettes.png",
    link: "https://github.com/JosephBARBIERDARNAL/pypalettes",
    imageWidth: 150,
    imageHeight: 100,
  },
  {
    name: "Python Graph Gallery",
    description: "Website with a collection of hundreds of graphs made with Python. I'm one of the main contributors, with over a hundred pull requests merged and currently active.",
    imageUrl: "/img/pythongallery.png",
    link: "https://github.com/holtzy/The-Python-Graph-Gallery",
    imageWidth: 150,
    imageHeight: 100,
  },
  {
    name: "R Graph Gallery",
    description: "A collection of hundreds of graphs made with R, of which I am one of the core contributors and currently active.",
    imageUrl: "/img/rgallery.png",
    link: "https://github.com/holtzy/R-Graph-Gallery",
    imageWidth: 110,
    imageHeight: 100,
  },
  {
    name: "Lifelihood",
    description: "An R package for ecological modeling offering multi-event modeling to compute the joint likelihood of all events in an individual's life history. In this project, I'm helping 2 French researchers in evolutionary biology to build the software for the mathematical tools they have developed. This is currently a work in progress and is not yet available.",
    imageUrl: "/img/nologo.png",
    link: "https://github.com/nrode/Lifelihood",
    imageWidth: 100,
    imageHeight: 100,
  },
  {
    name: "From Data to Viz",
    description: "Website designed to assist in chart selection, classifying chart types based on input data format. It uses a decision tree to guide users.",
    imageUrl: "/img/datatoviz.png",
    link: "https://github.com/holtzy/data_to_viz",
    imageWidth: 150,
    imageHeight: 100,
  },
  {
    name: "DrawArrow",
    description: "A Python library that makes drawing arrows for matplotlib easy and way more intuitive.",
    imageUrl: "/img/drawarrow.png",
    link: "https://github.com/JosephBARBIERDARNAL/drawarrow",
    imageWidth: 150,
    imageHeight: 100,
  },
  {
    name: "PyFonts",
    description: "A Python library that makes (down-)loading fonts in matplotlib genuinely simple.",
    imageUrl: "/img/pyfonts.png",
    link: "https://github.com/JosephBARBIERDARNAL/pyfonts",
    imageWidth: 150,
    imageHeight: 100,
  },
];