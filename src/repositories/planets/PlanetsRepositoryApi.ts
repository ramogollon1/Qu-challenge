import axios, { AxiosInstance, AxiosResponse } from "axios";
import { FetchPlanetsParams, Planet } from "../../models/Planets";

export class PlanetsRepositoryApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://swapi.dev/api",
    });
  }

  async fetchPlanets({ page, filter }: FetchPlanetsParams): Promise<Planet[]> {
    try {
      const response: AxiosResponse = await this.axiosInstance.get("/planets", {
        params: { page, search: filter },
      });

      if ("results" in response.data) {
        return response.data.results as Planet[];
      } else {
        throw new Error("Invalid response format: missing 'results' property");
      }
    } catch (error: any) {
      throw `Error fetching planets: ${error.response?.data || error.message}`;
    }
  }

  async fetchPlanetById(id: string): Promise<Planet> {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(
        `/planets/${id}/`
      );

      return response.data as Planet;
    } catch (error: any) {
      throw `Error fetching planet by ID: ${
        error.response?.data || error.message
      }`;
    }
  }
}
