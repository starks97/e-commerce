import { ChakraProvider, LightMode } from "@chakra-ui/react";

import { theme } from "../themes";

import type { AppProps } from "next/app";

import { SWRConfig } from "swr";
import styles from "../styles/global.module.css";
import { AuthProvider, CartProvider } from "../context";

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
        <CartProvider>
          <ChakraProvider resetCSS theme={theme}>
            <LightMode>
              <Component {...pageProps} />
            </LightMode>
          </ChakraProvider>
        </CartProvider>
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp;
