// visualizations.ts

export interface Visualization {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  gif: string;
}

export const visualizations: Visualization[] = [
  {
    id: '1',
    title: 'CO2 consumption per capita in Europe',
    description: "Only two European countries are complying with the Paris Agreement: Moldova and Albania.<br/><br/>As a reminder, the objective is to be below 2 tonnes per capita by 2050. In other words, only 0.7% of Europe's population is complying with the Paris Agreement.<br/><br/>I wanted to make this graph to get an overview of current CO2 consumption in European countries, and above all to compare France (the country I come from) with its neighbours.",
    url: 'https://python-graph-gallery.com/web-map-with-custom-legend/',
    image: '/img/viz/co2Capita.png',
    gif: '/img/viz/co2Capita.gif',
  },
  {
    id: '2',
    title: 'Trends in unemployment rates',
    description: 'This is a description of the second data visualization.',
    url: 'https://python-graph-gallery.com/web-small-multiple-with-highlights/',
    image: '/img/viz/unemployment_linecharts.png',
    gif: '/img/viz/unemployment_linecharts.gif',
  },
  // {
  //   id: '3',
  //   title: 'Objects launched in outer space',
  //   description: "Outer space has evolved enormously since the 1960s, and has completely boomed since the 2010s.<br/><br/>This animation was actually the first one I made, and I was very happy with it. Today, I find many problems with it (font, speed, colours), but I think the message is still interesting.",
  //   url: 'https://python-graph-gallery.com/web-animated-line-chart-with-annotation/',
  //   image: '/img/viz/outer-space.gif',
  //   gif: '/img/viz/outer-space.gif',
  // },
  // {
  //   id: '4',
  //   title: 'Evolution of plastic production',
  //   description: "It's time to rethink our use of plastic. Since the 1950s, global plastic production has only increased and is expected to reach 1 billion tonnes per year by 2050 if we continue on the same path.<br/><br/>I find it very interesting to see how, with the right tools, you can transform very basic information (a list of numerical values) in a video containing real content on a given subject.",
  //   url: 'https://python-graph-gallery.com/web-animated-line-chart-with-text/',
  //   image: '/img/viz/plastic-production.gif',
  //   gif: '/img/viz/plastic-production.gif',
  // },
  {
    id: '5',
    title: 'Earthquake position',
    description: "Earthquakes occur due to the sudden release of energy in the Earth's crust, primarily caused by tectonic plate movements.<br/><br/>The Earth's crust is divided into several plates that float on the semi-fluid asthenosphere. When these plates move, they can collide, pull apart, or slide past each other.",
    url: 'https://python-graph-gallery.com/web-animated-line-chart-with-text/',
    image: '/img/viz/earthquakes.png',
    gif: '/img/viz/earthquakes.gif',
  },
  {
    id: '6',
    title: 'Evolution of movie popularity',
    description: "Evolution of the average rating of different movies since the 1960, with the title of the movies in the background for the wordcloud.<br/><br/>The combination of the text in the background and the addition of a small image in the graphic was a real challenge at first, but in the end it turned out to be relatively straightforward.",
    url: 'https://python-graph-gallery.com/web-stacked-charts/',
    image: '/img/viz/wordcloud_linechart.png',
    gif: '/img/viz/wordcloud_linechart.png',
  },
  {
    id: '7',
    title: 'Evolution of movie popularity',
    description: "Earthquakes occur due to the sudden release of energy in the Earth's crust, primarily caused by tectonic plate movements.<br/><br/>The Earth's crust is divided into several plates that float on the semi-fluid asthenosphere. When these plates move, they can collide, pull apart, or slide past each other.",
    url: 'https://python-graph-gallery.com/web-animated-line-chart-with-text/',
    image: '/img/viz/footprint.png',
    gif: '/img/viz/footprint.png',
  },
  {
    id: '8',
    title: 'ChatGPT and fake news detection',
    description: "Earthquakes occur due to the sudden release of energy in the Earth's crust, primarily caused by tectonic plate movements.<br/><br/>The Earth's crust is divided into several plates that float on the semi-fluid asthenosphere. When these plates move, they can collide, pull apart, or slide past each other.",
    url: 'https://python-graph-gallery.com/web-animated-line-chart-with-text/',
    image: '/img/viz/fake-news-chatgpt.png',
    gif: '/img/viz/fake-news-chatgpt.png',
  },
  {
    id: '9',
    title: 'Evolution of movie popularity',
    description: "Earthquakes occur due to the sudden release of energy in the Earth's crust, primarily caused by tectonic plate movements.<br/><br/>The Earth's crust is divided into several plates that float on the semi-fluid asthenosphere. When these plates move, they can collide, pull apart, or slide past each other.",
    url: 'https://python-graph-gallery.com/web-animated-line-chart-with-text/',
    image: '/img/viz/music-ranking.png',
    gif: '/img/viz/music-ranking.png',
  },
];