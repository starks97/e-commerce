import { Product } from "@prisma/client";
import useSWR, { SWRConfiguration } from "swr";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

export function useProducts<F = string>(url: F, config: SWRConfiguration = {}) {
  const { data, error } = useSWR<Product[]>(`/api${url}`, fetcher, config);
  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
}
