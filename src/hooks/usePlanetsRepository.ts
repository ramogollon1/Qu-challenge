import { useContext } from "react";
import { DependencyContainerContext } from "../DependencyContainer/DependencyContainerContext";

export const usePlanetsRepository = () => {
  const dependencies = useContext(DependencyContainerContext);

  if (!dependencies) {
    throw new Error(
      "usePlanetsRepository must be used within an DependencyContainerContext"
    );
  }

  return { planetsRepository: dependencies.planetsRepository };
};
