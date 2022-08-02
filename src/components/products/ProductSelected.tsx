import Link from "next/link";

import {
  Flex,
  Grid,
  Container,
  Text,
  GridItem,
  Button,
  Tag,
} from "@chakra-ui/react";

import ProductSlideShow from "./ProductSlideShow";
import { ItemCounter } from "../ui";
import SizeSelector from "./SizeSelector";

import { Product, ValidSizes } from "@prisma/client";
import { ICart } from "../../interfaces";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductSelected({ product }: Props) {
  const [tempCartProduct, setTempCartProduct] = useState<ICart>(
    GetProduct.format(product)
  );

  const chooseSize = (sizes: ValidSizes) => {
    setTempCartProduct((currentProduct) => ({ ...currentProduct, sizes }));
  };
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
          {<ProductSlideShow images={product.images} />}
        </GridItem>

        <GridItem>
          <Flex flexDirection="column">
            <Text fontSize="2xl" fontFamily="Less" fontWeight="bold">
              {product.title}
            </Text>
            <br />
            <Text as="sub" fontSize="lg" marginTop="1rem">
              {`$${product.price}`}
            </Text>
          </Flex>
          <SizeSelector
            sizes={product.sizes}
            selectedSize={tempCartProduct.sizes}
            onSelectSize={chooseSize}
          />

          {/*quantity */}
          <Flex sx={{ my: 7 }} alignItems="center" gap={2}>
            <Text fontSize="xl" fontFamily="Less" fontWeight="light">
              Quantity
            </Text>
            <ItemCounter />
          </Flex>

          <Flex>
            {product.inStock > 0 ? (
              <Button variant={"selectBtn"} minW={{ sm: "100%", xl: "80%" }}>
                {tempCartProduct.sizes ? "Add to Cart" : "Select Size"}
              </Button>
            ) : (
              <Button variant={"dontAllowBtn"} minW={{ sm: "100%", xl: "80%" }}>
                Not available
              </Button>
            )}
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

class GetProduct {
  static format(product: Product): ICart {
    return {
      _id: product.id,
      images: product.images[0],
      price: product.price,
      slug: product.slug,
      title: product.title,
      gender: product.gender,
      quantity: 1,
      sizes: null,
    };
  }
}
