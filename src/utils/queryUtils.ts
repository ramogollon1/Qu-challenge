import { UseQueryOptions, UseInfiniteQueryOptions } from "react-query";

export type QueryOptions<T> = Omit<
  UseQueryOptions<T, unknown, T, string[]>,
  "queryKey" | "queryFn"
>;

export type InfiniteQueryOptions<T> = Omit<
  UseInfiniteQueryOptions<T, unknown, T, T, string[]>,
  "queryKey" | "queryFn"
>;
