import { useEffect, useState } from "react";
import { Planet } from "../models/Planets";
import axios from "axios";
import { PLANETS_URL } from "../constants/api";

const useGetPlanets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(PLANETS_URL);
        setPlanets(response.data.results);
      } catch (error: any) {
        setError(
          `Error fetching planets: ${error.response?.data || error.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return { planets, loading, error };
};

export default useGetPlanets;
