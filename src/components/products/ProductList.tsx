import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { Product } from "@prisma/client";

import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  title: string;
}

export default function ProductList({ products, title }: Props) {
  return (
    <Container maxW="90rem" justifyContent="center">
      <Flex marginTop="5" marginBottom="10" marginLeft={"1rem"}>
        <Text
          fontSize="4xl"
          fontFamily="Less"
          fontWeight="semi-bold"
          textTransform="capitalize"
        >
          {title}
        </Text>
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gridGap={{ base: "1rem", md: "2rem" }}
        justifyItems="center"
        alignItems="center"
      >
        {products.map((item) => (
          <ProductCard key={item.slug} product={item} />
        ))}
      </Grid>
    </Container>
  );
}
