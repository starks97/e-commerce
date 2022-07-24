import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { Product } from "@prisma/client";

import { IProduct } from "../../interfaces";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  children: React.ReactNode;
}

export type Pages =
  | "All Products"
  | "Kids Products"
  | "Men Products"
  | "Women Products"
  | "Unisex Products";

export default function ProductList({ products, children }: Props) {
  return (
    <Container maxW="90rem">
      <Box marginTop="5" marginBottom="10">
        <Text fontSize="4xl" fontFamily="Less" fontWeight="semi-bold">
          {children}
        </Text>
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gridGap={{ base: "1rem", md: "2rem" }}
      >
        {products.map((item) => (
          <ProductCard key={item.slug} product={item} />
        ))}
      </Grid>
    </Container>
  );
}
