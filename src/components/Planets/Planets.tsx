import { useCallback, useEffect, useState } from "react";
import PlanetList from "../PlanetList/PlanetList";
import { sortPlanetsByName } from "../../utils/sort";
import useGetPlanets from "../../hooks/useGetPlanets";

const Planets = () => {
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

export default Planets;

/*
  1. What's a closure? Where in the code is there a closure?

  A closure is a function that has access to variables from its lexical scope, even after that scope has finished executing. Closures allow a function to "remember" the environment in which it was created.

  In the given code, the handleSortByName function is a closure. It is defined within the lexical scope of the App component, and it captures the sortedPlanets variable from its outer scope.
  
  2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

  Potential side effects in functions usually involve modifying external state or interacting with external systems. In the provided code:

  The handleSortByName function modifies the state (sortedPlanets) using setSortedPlanets. This is a side effect as it changes the state outside the function scope.

  The useEffect hook in the App component has a side effect by updating the state (setSortedPlanets(planets)) when the planets prop changes.

  These side effects are expected in this context, as the code is dealing with asynchronous data fetching and state management. They are necessary for the functionality of the application.

  To avoid unexpected side effects, it's crucial to understand and manage state changes carefully. In this code, the use of React hooks (useState, useEffect, and useCallback) helps in organizing and controlling side effects in a predictable manner. However, as the application grows, it's essential to be mindful of potential side effects and manage state changes efficiently.
  */
