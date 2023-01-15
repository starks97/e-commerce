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
import ProductSlideShow from "./ProductSlideShow";

const product = initialData.products[0];

export default function ProductSelected() {
  return (
    <Container maxW="80rem" marginTop={8}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat (1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={5}
      >
        <GridItem minW="20rem">
          <ProductSlideShow images={product.images} />
        </GridItem>

        <GridItem justifyContent="center" alignItems="center">
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
                minW={{ sm: "100%", xl: "80%" }}
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
