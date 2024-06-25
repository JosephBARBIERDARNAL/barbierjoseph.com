export interface Repo {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const openSourceProjects: Repo[] = [
  {
    name: "Python Graph Gallery",
    description: "A collection of hundreds of graphs made with Python, of which I am one of the main contributors and currently active.",
    imageUrl: "/img/gallery.png",
    link: "https://github.com/holtzy/The-Python-Graph-Gallery"
  },
  {
    name: "PyPalettes",
    description: "A Python library that provides a large number of color palettes for data visualization. It comes with a web app to browse all the palettes.",
    imageUrl: "/img/gallery.png",
    link: "https://github.com/JosephBARBIERDARNAL/pypalettes"
  },
];