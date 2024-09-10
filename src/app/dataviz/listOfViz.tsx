export interface Visualization {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
}

export const visualizations: Visualization[] = [
  {
    id: '1',
    title: 'CO2 consumption per capita in Europe',
    description: "Only two European countries are complying with the Paris Agreement: Moldova and Albania.<br/><br/>As a reminder, the objective is to be below 2 tonnes per capita by 2050. In other words, only 0.7% of Europe's population is complying with the Paris Agreement.<br/><br/>I wanted to make this graph to get an overview of current CO2 consumption in European countries, and above all to compare France (the country I come from) with its neighbours.",
    url: 'https://python-graph-gallery.com/web-map-with-custom-legend/',
    image: '/img/viz/co2Capita.png',
  },
  {
    id: '2',
    title: 'Trends in unemployment rates',
    description: 'During COVID-19, countries experienced significantly different economic responses. One of the most interesting differences is that some countries saw drastic changes in unemployment rates, while others remained very stable.<br/><br/>This chart highlights this particular phenomenon across major countries/regions.',
    url: 'https://python-graph-gallery.com/web-small-multiple-with-highlights/',
    image: '/img/viz/unemployment_linecharts.png',
  },
  {
    id: '5',
    title: 'Earthquake position',
    description: "Earthquakes occur due to the sudden release of energy in the Earth's crust, primarily caused by tectonic plate movements.<br/><br/>The Earth's crust is divided into several plates that float on the semi-fluid asthenosphere. When these plates move, they can collide, pull apart, or slide past each other.",
    url: 'https://python-graph-gallery.com/web-animated-line-chart-with-text/',
    image: '/img/viz/earthquakes.png',
  },
  {
    id: '6',
    title: 'Evolution of movie popularity',
    description: "Evolution of the average rating of different movies since the 1960, with the title of the movies in the background for the wordcloud.<br/><br/>The combination of the text in the background and the addition of a small image in the graphic was a real challenge at first, but in the end it turned out to be relatively straightforward.",
    url: 'https://python-graph-gallery.com/web-stacked-charts/',
    image: '/img/viz/wordcloud_linechart.png',
  },
  {
    id: '7',
    title: 'ChatGPT and fake news detection',
    description: "I'm very curious about how large language models (LLMs) handle 'truth'. Using a simple fake news detection dataset and the OpenAI API, I asked ChatGPT to determine whether each news item was true or fake, and then compared the results to the actual values.<br/><br/>The main concern is that ChatGPT (3.5) is not very effective at classifying news, and most people should avoid using it for this purpose.",
    url: 'https://github.com/JosephBARBIERDARNAL/misc-dataviz/tree/main/fake-news',
    image: '/img/viz/fake-news-chatgpt.png',
  },
  {
    id: '9',
    title: 'Changes in the ranking of musical genres',
    description: 'Comparison of the rankings for each musical genre: Comparison between 2003 and 2020. Rap and hip-hop seem to be much more popular in 2020 than in 2003, when rock was the most popular musical genre.',
    url: 'https://python-graph-gallery.com/web-lollipop-with-background-image/',
    image: '/img/viz/music-ranking.png',
  },
];