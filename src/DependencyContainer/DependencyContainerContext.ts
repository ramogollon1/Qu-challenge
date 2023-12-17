import { createContext } from "react";
import { PlanetsRepository } from "../repositories/planets/PlanetsRepository";

export interface DependencyContainer {
  planetsRepository: PlanetsRepository;
}

export const DependencyContainerContext =
  createContext<DependencyContainer | null>(null);
