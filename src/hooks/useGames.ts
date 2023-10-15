import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface GamePlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: GamePlatform[];
  metacritic: number
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      setIsLoading(true);
      try {
        const res = await apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal });
        setGames(res.data.results);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        if (err instanceof Error && err.message) {
          setError(err.message);
        } else {
          setError("Unknown error occured");
        }
        setIsLoading(false);
      }
    };
    fetchGames();
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
