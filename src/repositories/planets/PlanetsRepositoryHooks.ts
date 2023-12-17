import { useInfiniteQuery, useQuery } from "react-query";
import { Planet } from "../../models/Planets";
import { InfiniteQueryOptions, QueryOptions } from "../../utils/queryUtils";
import { usePlanetsRepository } from "../../hooks/usePlanetsRepository";

export type PlanetsQueryParams<T = Planet> = {
  skip: number;
  limit: number;
  planets: T[];
};

export const useFetchPlanets = (
  page?: number,
  options?: InfiniteQueryOptions<Planet[]>
) => {
  const { planetsRepository } = usePlanetsRepository();

  const { data, ...rest } = useInfiniteQuery(
    ["fetchPlanets"],
    ({ pageParam = page }) =>
      planetsRepository.fetchPlanets({ page: pageParam, filter: "" }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.length > 0 ? lastPage.length : undefined,
      ...options,
    }
  );

  return {
    planets: data?.pages.flatMap((page) => page) ?? [],
    ...rest,
  };
};

export const useFetchPlanetById = (
  planetId: string,
  options?: QueryOptions<Planet>
) => {
  const { planetsRepository } = usePlanetsRepository();

  const { data, ...rest } = useQuery(
    ["fetchPlanetById", planetId],
    () => planetsRepository.fetchPlanetById(planetId),
    options
  );

  return { ...rest, planet: data };
};
