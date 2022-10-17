import useSWR, { SWRConfiguration } from "swr";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

 export function useFetch<F = string | object | unknown>(url: string) {
   const { data, error } = useSWR(`${url}`, fetcher);

   return {
     data,
     isLoading: !error && !data,
     isError: error,
   };
 }
