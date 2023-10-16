import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchGenres = async () => {
      setIsLoading(true);
      try {
        const res = await apiClient.get<FetchGenreResponse>("/genres", { signal: controller.signal });
        setGenres(res.data.results);
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
    fetchGenres();
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
