import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal });
        setGames(res.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;
        if (err instanceof Error && err.message) {
          setError(err.message);
        } else {
          setError("Unknown error occured");
        }
      }
    };
    fetchGames();
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
