import { Planet } from "../../models/Planets";

export type PlanetsParams = {
  page: number;
  filter?: string;
};

export interface PlanetsRepository {
  fetchPlanets(params: PlanetsParams): Promise<Planet[]>;
  fetchPlanetById(planetId: string): Promise<Planet>;
}
