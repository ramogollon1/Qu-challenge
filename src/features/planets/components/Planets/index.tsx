import { useCallback, useEffect, useMemo, useState } from "react";
import GenericButton from "../../../../components/Button";
import {
  PlanetSearchableProperties,
  SortingMethod,
} from "../../../../models/Planets";
import { sortPlanetsByName } from "../../../../utils/sort";
import PlanetItem from "../PlanetItem";
import { useFetchPlanets } from "../../../../repositories/planets/PlanetsRepositoryHooks";
import SearchInput from "../../../../components/SearchInput";
import { filterPlanets } from "../../../../utils/filterPlanets";

const Planets = () => {
  const [searchText, setSearchText] = useState("");
  const { planets, isLoading, refetch } = useFetchPlanets();
  const [sortOrder, setSortOrder] = useState<SortingMethod>(SortingMethod.ASC);

  const sortedPlanets = useMemo(
    () => sortPlanetsByName(planets, sortOrder),
    [planets, sortOrder]
  );

  const handleSortByName = useCallback(() => {
    setSortOrder((prevOrder) =>
      prevOrder === SortingMethod.ASC ? SortingMethod.DESC : SortingMethod.ASC
    );
  }, []);

  useEffect(() => {
    if (!isLoading) {
      refetch();
    }
  }, [refetch, isLoading]);

  const propertiesToSearch: PlanetSearchableProperties[] = [
    "name",
    "climate",
    "terrain",
  ];

  const sortedPlanetsToDisplay = useMemo(
    () => filterPlanets(searchText, sortedPlanets, propertiesToSearch),
    [searchText, sortedPlanets, propertiesToSearch]
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-semibold mb-5">Star Wars Planets</h1>
      <div className="py-2 flex space-x-2">
        <GenericButton
          title={`Sort by ${
            sortOrder === SortingMethod.ASC ? "Ascendent" : "Descendent"
          }`}
          handleOnClick={handleSortByName}
        />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Climate</th>
            <th className="p-2 border">Terrain</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={3} className="p-2 border text-center">
                Loading...
              </td>
            </tr>
          ) : sortedPlanetsToDisplay.length > 0 ? (
            sortedPlanetsToDisplay.map((planet) => (
              <PlanetItem key={planet.name} planet={planet} />
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-2 border text-center">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Planets;
