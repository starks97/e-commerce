import { useToast } from "@chakra-ui/react";

import { ErrorMessage } from "../components/ui";

export type SwitchedMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "ANY";

export interface IData {
  url: string;
  method: SwitchedMethod;
  body?: RequestInit["body"] | any;
  headers?: RequestInit["headers"];
}

export function useAdvancedDataFetcher<R>({
  url,
  method,
  body,
  headers,
}: IData): () => Promise<R> {
  const toast = useToast();

  return () => {
    return fetch(url, {
      method,
    })
      .then((res) => {
        return res.json().then((data) => {
          if (!data.ok) {
            return Promise.reject(data);
          }
          return data;
        });
      })
      .catch((error) => {
        toast({
          position: "top-right",
          render: () => {
            return (
              <ErrorMessage>
                {`title: ${error.name}`}
                <br />
                {`description: ${error.message}`}
              </ErrorMessage>
            );
          },
        });
      });
  };
}
