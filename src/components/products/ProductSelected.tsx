<<<<<<< HEAD
import { useContext, useState } from "react";

import { useRouter } from "next/router";
=======
import Link from "next/link";
>>>>>>> 779b262 (merge)

import {
  Flex,
  Grid,
  Container,
<<<<<<< HEAD
  Text,
  GridItem,
  Button,
  Tag,
  Alert,
  AlertIcon,
  Stack,
} from "@chakra-ui/react";

import ProductSlideShow from "./ProductSlideShow";
import { ItemCounter } from "../ui";
import SizeSelector from "./SizeSelector";

import { Product, ValidSizes } from "@prisma/client";
import { ICart } from "../../interfaces";

import { CartContext } from "../../context";

interface Props {
  product: Product;
}

export default function ProductSelected({ product }: Props) {
  //useContext
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICart>(
    GetProduct.format(product)
  );

  const router = useRouter();

  const chooseSize = (sizes: ValidSizes) => {
    setTempCartProduct((currentProduct) => ({ ...currentProduct, sizes }));
  };

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct((currentProduct) => ({ ...currentProduct, quantity }));
  };

  const onAddToCart = () => {
    if (!tempCartProduct.sizes) {
      return (
        <Stack spacing={3}>
          <Alert status="warning">
            <AlertIcon />
            Please select your size
          </Alert>
        </Stack>
      );
    }

    router.push("/cart");
    addProductToCart(tempCartProduct);
  };

=======
  Box,
  Text,
  GridItem,
  Button,
} from "@chakra-ui/react";

import { initialData } from "../../database/products";
import ProductSlideShow from "./ProductSlideShow";

const product = initialData.products[0];

export default function ProductSelected() {
>>>>>>> 779b262 (merge)
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
<<<<<<< HEAD
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

            <ItemCounter
              currentValue={tempCartProduct.quantity}
              maxValue={product.inStock > 10 ? 10 : product.inStock}
              updateQuantity={onUpdateQuantity}
            />
          </Flex>

          <Flex>
            {product.inStock > 0 ? (
              <Button
                variant={"selectBtn"}
                minW={{ sm: "100%", xl: "80%" }}
                onClick={onAddToCart}
              >
                {tempCartProduct.sizes ? "Add to Cart" : "Select Size"}
              </Button>
            ) : (
              <Button variant={"dontAllowBtn"} minW={{ sm: "100%", xl: "80%" }}>
                Not available
              </Button>
            )}
=======
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
>>>>>>> 779b262 (merge)
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
<<<<<<< HEAD

class GetProduct {
  static format(product: Product): ICart {
    return {
      _id: product.id,
      images: product.images[0],
      price: product.price,
      slug: product.slug,
      title: product.title,
      //gender: product.gender,
      quantity: 1,
      sizes: null,
    };
  }
}
=======
>>>>>>> 779b262 (merge)
