import useSWR, { mutate } from 'swr'
import { api } from "services/api";
interface iParams {
  errorRetryCount?: number;
  errorRetryInterval?: number;
  shouldRetryOnError?: boolean;
}

export function useFetch<Data = any>(url: string, params?: iParams) {
  const { data, error, isValidating } = useSWR<Data>(
    url,
    async (url) => {
      const { data } = await api.get(url);
      return data;
    },
    {
      errorRetryCount: params?.errorRetryCount || 0,
      errorRetryInterval: params?.errorRetryInterval || 5000,
      shouldRetryOnError: params?.shouldRetryOnError,
    },
  );

  return { data, error, mutate, isValidating };
}
