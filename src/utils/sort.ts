import { Planet } from "../models/Planets";

export const sortPlanetsByName = (planets: Planet[]) => {
  return [...planets].sort((a, b) => a.name.localeCompare(b.name));
};
