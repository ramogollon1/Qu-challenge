import { Planet, SortingMethod } from "../models/Planets";

export const sortPlanetsByName = (
  planets: Planet[],
  sortOrder: SortingMethod = SortingMethod.ASC
) => {
  const sortedPlanets = [...planets].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return sortOrder === SortingMethod.DESC
    ? sortedPlanets.reverse()
    : sortedPlanets;
};
