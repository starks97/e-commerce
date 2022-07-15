import { Product } from "@prisma/client";
import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

export function useProducts<F = string>(url: F, config: SWRConfiguration = {}) {
  const { data, error } = useSWR<IProduct[]>(`/api${url}`, fetcher, config);
  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
}
