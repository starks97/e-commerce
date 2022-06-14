import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";

type Props = {};

export default function Custom404({}: Props) {
  return (
    <ShopLayout
      title="Teslo | Page not Found"
      pageDescription={"we couldnt fin the information"}
    >
      <Navbar />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { base: "column", md: "row" } }}
      >
        <Text fontSize="5xl" fontFamily="Less">
          404 |{" "}
        </Text>
        <Text
          fontSize="2xl"
          fontFamily="Less"
        >{`We couldn't find the data`}</Text>
      </Flex>
    </ShopLayout>
  );
}
