import { Planet } from "../../models/Planets";
import { mockPlanets } from "../../test/fixtures/planets";
import { PlanetsRepository } from "./PlanetsRepository";

export class PlanetsRepositoryFake implements PlanetsRepository {
  constructor() {}

  async fetchPlanets() {
    return [];
  }

  async fetchPlanetById(): Promise<Planet> {
    return mockPlanets[0];
  }
}
