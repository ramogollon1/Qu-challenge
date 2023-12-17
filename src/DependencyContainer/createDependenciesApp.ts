import { PlanetsRepositoryApi } from "../repositories/planets/PlanetsRepositoryApi";
import { DependencyContainer } from "./DependencyContainerContext";

export function createDependenciesApp(): DependencyContainer {
  const planetsRepository = new PlanetsRepositoryApi();

  return {
    planetsRepository,
  };
}
