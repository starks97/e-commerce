<<<<<<< HEAD
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript, theme } from "@chakra-ui/react";
=======
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
>>>>>>> 779b262 (merge)

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap"
          />
        </Head>
        <body>
<<<<<<< HEAD
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
=======
          <ColorModeScript />
>>>>>>> 779b262 (merge)
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 779b262 (merge)
