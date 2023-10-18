import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?:unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setData([]);
        const res = await apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig });
        setData(res.data.results);
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
    fetchData();
    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;
