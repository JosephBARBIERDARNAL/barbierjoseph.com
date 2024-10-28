export interface Visualization {
  id: string;
  title: string;
  image: string;
}

export const visualizations: Visualization[] = [
  {
    id: "1",
    title: "CO2 consumption per capita in Europe",
    image: "/img/viz/compressed_co2Capita.jpg",
  },
  {
    id: "2",
    title: "Trends in unemployment rates",
    image: "/img/viz/compressed_unemployment_linecharts.jpg",
  },
  {
    id: "16",
    title: "Plastic production",
    image: "/img/viz/plastic-production.gif",
  },
  {
    id: "3",
    title: "Earthquake position",
    image: "/img/viz/compressed_earthquakes.jpg",
  },
  {
    id: "7",
    title: "Natural disasters",
    image: "/img/viz/compressed_natural-disasters.jpg",
  },
  {
    id: "8",
    title: "Land & Ocean temperature",
    image: "/img/viz/compressed_temperature.jpg",
  },
  {
    id: "16",
    title: "The conquest of space",
    image: "/img/viz/outer-space.gif",
  },
  {
    id: "9",
    title: "Japan population variation",
    image: "/img/viz/compressed_japan-population.jpg",
  },
  {
    id: "10",
    title: "France with hexagonal shapes",
    image: "/img/viz/compressed_hexagons-france.jpg",
  },
  {
    id: "11",
    title: "Energy consumption in France",
    image: "/img/viz/compressed_heatmap-france.jpg",
  },
  {
    id: "12",
    title: "My daily university commute",
    image: "/img/viz/compressed_bordeaux-campus.jpg",
  },
  {
    id: "13",
    title: "A minimalist raster map",
    image: "/img/viz/compressed_raster-asia-oceania.jpg",
  },
  {
    id: "14",
    title: "Oregon trail",
    image: "/img/viz/compressed_oregon-trail.jpg",
  },
  {
    id: "4",
    title: "Evolution of movie popularity",
    image: "/img/viz/compressed_wordcloud_linechart.jpg",
  },
  {
    id: "6",
    title: "Changes in the ranking of musical genres",
    image: "/img/viz/compressed_music-ranking.jpg",
  },
  {
    id: "15",
    title: "Footprint per country",
    image: "/img/viz/compressed_footprint.jpg",
  },
];
