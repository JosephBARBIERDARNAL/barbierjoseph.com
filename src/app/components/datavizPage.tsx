export interface DataVizPageProps {
   path: string;
   name: string;
   description: string;
   datasource: string;
   url: string;
   width: number;
   height: number;
}

export const MyDataviz: DataVizPageProps[] = [
   {
      path: '/img/viz/co2Capita.png',
      url: '/url1',
      name: 'CO2 per Capita in Europe',
      description: 'Description 1',
      datasource: 'Datasource 1',
      width: 300,
      height: 200
   },
   {
      path: '/img/viz/co2Capita.png',
      url: '/url2',
      name: 'CO2 per Capita in Europe',
      description: 'Description 1',
      datasource: 'Datasource 1',
      width: 300,
      height: 200
   },
]
