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
    description: "A Python library that provides a large number of color palettes for data visualization. It comes with a web app to browse all the palettes.",
    imageUrl: "/img/pypalettes.png",
    link: "https://github.com/JosephBARBIERDARNAL/pypalettes",
    imageWidth: 150,
    imageHeight: 100,
  },
  {
    name: "Python Graph Gallery",
    description: "A collection of hundreds of graphs made with Python, of which I am one of the core contributors and currently active.",
    imageUrl: "/img/gallery.png",
    link: "https://github.com/holtzy/The-Python-Graph-Gallery",
    imageWidth: 150,
    imageHeight: 100,
  },
  {
    name: "Lifelihood",
    description: "An R package for ecological modeling offering multi-event modeling to compute the joint likelihood of all events in an individual's life history.",
    imageUrl: "/img/gallery.png",
    link: "https://github.com/nrode/Lifelihood",
    imageWidth: 100,
    imageHeight: 100,
  },
  {
    name: "Data to Viz",
    description: "Website designed to assist in chart selection, classifying chart types based on input data format. It uses a decision tree to guide users.",
    imageUrl: "/img/datatoviz.png",
    link: "https://github.com/holtzy/data_to_viz",
    imageWidth: 150,
    imageHeight: 100,
  },
  {
    name: "LazyFont",
    description: "A Python library that makes loading fonts in matplotlib genuinely simple.",
    imageUrl: "/img/gallery.png",
    link: "https://github.com/JosephBARBIERDARNAL/lazyfont",
    imageWidth: 100,
    imageHeight: 100,
  },
  {
    name: "Arcplot",
    description: "Library built on top of matplotlib for seamless creation of custom arc diagrams.",
    imageUrl: "/img/gallery.png",
    link: "https://github.com/szkics/arcplot",
    imageWidth: 100,
    imageHeight: 100,
  },
];