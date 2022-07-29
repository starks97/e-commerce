import Image from "next/image";

import { Flex, Text, Container } from "@chakra-ui/react";

import noResult from "../../assets/no-results.png";

interface Props {
  q: string;
}

export default function ProductCheck({ q }: Props) {
  return (
    <Container maxW="75rem" marginTop="5rem">
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height="calc(100vh - 700px)"
        sx={{ flexDirection: { base: "column", md: "row" } }}
      >
        <Text fontSize="3xl" fontFamily="Less">
          {`We couldn't find the product: `}
        </Text>
        <Text
          fontSize="3xl"
          fontFamily="Less"
          fontWeight="bold"
          textTransform="capitalize"
        >{`'${q}'`}</Text>
      </Flex>
      <Flex justifyContent={"center"} alignContent={"center"}>
        <Image src={noResult} width="200" height="200" />
      </Flex>
    </Container>
  );
}
