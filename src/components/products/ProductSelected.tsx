import Link from "next/link";

import {
  Flex,
  Grid,
  Container,
  Box,
  Text,
  GridItem,
  Button,
} from "@chakra-ui/react";

import { initialData } from "../../database/products";

const product = initialData.products[0];

export default function ProductSelected() {
  return (
    <Container maxW="80rem" marginTop={8}>
      <Grid gridTemplateColumns={"repeat(2, 1fr)"}>
        <GridItem>
          <Flex flexDirection="column">
            <Text fontSize="xl" fontFamily="Less" fontWeight="bold">
              {product.title}
            </Text>
            <br />
            <Text as="sub" fontSize="lg">
              {`$${product.price}`}
            </Text>
          </Flex>

          {/*quantity */}
          <Flex sx={{ my: 7 }}>
            <Text fontSize="lg" fontFamily="Less">
              quantity
            </Text>
            {/*Item Counter*/}
          </Flex>

          <Flex>
            <Link href="/cart" passHref>
              <Button
                variant={"solid"}
                bg="gray.500"
                my={5}
                size="md"
                fontFamily="Less"
                fontWeight="light"
                fontSize="xl"
                colorScheme="facebook"
                color="white"
                minW="80%"
              >
                Add to cart
              </Button>
            </Link>
          </Flex>

          <Flex flexDirection="column">
            <Text as={"h2"} fontFamily="Less" fontWeight="light" fontSize="lg">
              Description
            </Text>
            <Text
              fontFamily="Less"
              fontWeight="semi-bold"
              sx={{ mt: "3" }}
              fontSize="md"
            >
              {product.description}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}
