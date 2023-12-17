export type Planet = {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type FetchPlanetsParams = {
  page: number;
  filter?: string;
};

export enum SortingMethod {
  ASC = "ASC",
  DESC = "DESC",
}

export type PlanetSearchableProperties = "name" | "climate" | "terrain";
