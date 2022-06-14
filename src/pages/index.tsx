import type { NextPage } from "next";
import Image from "next/image";

import { Flex, Grid, Text, Container, GridItem, Box } from "@chakra-ui/react";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";
import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout title="Teslo | Shop" pageDescription="Welcome our shop">
      <Navbar />

      <Container maxW="90rem">
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
          {initialData.products.map((product, index) => (
            <GridItem key={product.slug}>
              <Box
                display="flex"
                justifyContent="center"
                alignContent="center"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                w="full"
              >
                <Image
                  src={`/products/${product.images[0]}`}
                  width="300"
                  height="300"
                  alt={product.title}
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </ShopLayout>
  );
};

export default Home;
