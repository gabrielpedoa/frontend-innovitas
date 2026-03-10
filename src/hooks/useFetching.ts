import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import type { IUseFetchingProps } from "../@types/useFetching";
import { Api } from "../services/api";
import { handleApiError } from "../utils/handleApiError";

export function useFetching<T>({
  dependeces = [],
  url,
  makeRequest = true,
}: IUseFetchingProps) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(makeRequest);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(() => true);
    setError(null);
    try {
      const response = await Api.get<T>(url);
      setData(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (makeRequest) fetchData();
  }, [fetchData, makeRequest, ...dependeces]);

  function updateData(newData: T) {
    setData(newData);
  }

  return {
    data,
    error,
    loading,
    refetch: fetchData,
    updateData,
  };
}
