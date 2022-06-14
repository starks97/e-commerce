import { ChakraProvider, LightMode } from "@chakra-ui/react";
import { theme } from "../themes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <LightMode>
        <Component {...pageProps} />
      </LightMode>
    </ChakraProvider>
  );
}

export default MyApp;
