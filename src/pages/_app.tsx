import { ChakraProvider, LightMode } from "@chakra-ui/react";
<<<<<<< HEAD

import { theme } from "../themes";

import type { AppProps } from "next/app";

import { SWRConfig } from "swr";
import styles from "../styles/global.module.css";
import { AuthProvider, CartProvider, DataProvider } from "../context";
import { useContext, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        //refreshInterval: 1000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <AuthProvider>
        <DataProvider>
          <CartProvider>
            <ChakraProvider resetCSS theme={theme}>
              <LightMode>
                <Component {...pageProps} />
              </LightMode>
            </ChakraProvider>
          </CartProvider>
        </DataProvider>
      </AuthProvider>
    </SWRConfig>
=======
import { theme } from "../themes";
import type { AppProps } from "next/app";
import styles from "../styles/global.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <LightMode>
        <Component {...pageProps} />
      </LightMode>
    </ChakraProvider>
>>>>>>> 779b262 (merge)
  );
}

export default MyApp;
