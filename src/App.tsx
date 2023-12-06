import { useCallback, useEffect, useState } from "react";
import PlanetList from "./components/PlanetList/PlanetList";
import { sortPlanetsByName } from "./utils/sort";
import useGetPlanets from "./hooks/useGetPlanets";

const App = () => {
  const { planets, loading, error } = useGetPlanets();
  const [sortedPlanets, setSortedPlanets] = useState(planets);

  const handleSortByName = useCallback(() => {
    const sorted = sortPlanetsByName(sortedPlanets);
    setSortedPlanets(sorted);
  }, [sortedPlanets]);

  useEffect(() => {
    setSortedPlanets(planets);
  }, [planets]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-semibold mb-5">Star Wars Planets</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-3"
        onClick={handleSortByName}
      >
        Sort by Name
      </button>
      <PlanetList planets={sortedPlanets} />
    </div>
  );
};

export default App;
