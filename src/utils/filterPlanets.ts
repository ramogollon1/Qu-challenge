import { Planet, PlanetSearchableProperties } from "../models/Planets";

export const filterPlanets = (
  searchText: string,
  sortedPlanets: Planet[],
  propertiesToSearch: PlanetSearchableProperties[]
) => {
  const trimmedSearchText = searchText.trim().toLowerCase();
  return trimmedSearchText
    ? sortedPlanets.filter((planet) =>
        propertiesToSearch.some((property) =>
          planet[property].toLowerCase().includes(trimmedSearchText)
        )
      )
    : sortedPlanets;
};
