import { Text, Box, Flex, GridItem, Button } from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import { ItemCounter } from "../ui";
import { Product } from "@prisma/client";
import { CartContext } from "../../context";
import { MouseEventHandler, useContext } from "react";
import { ICart } from "../../interfaces";

interface Props {
  editable?: boolean;
  product: Product;
}

export default function CartList({ editable = false }: Props) {
  const { cart, updateQuantityProduct, deleteProduct } =
    useContext(CartContext);

  const newQuantity_of_Product = (product: ICart, newValue: number) => {
    product.quantity = newValue;
    updateQuantityProduct(product);
  };

  return (
    <GridItem gap={5} marginTop={5}>
      {cart.map((items) => (
        <Flex
          key={items.slug + items.sizes}
          alignContent="center"
          gap={5}
          marginBottom={5}
          sx={{ flexDirection: { base: "column", sm: "row" } }}
        >
          <Link href={`/product/${items.slug}`} passHref>
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              maxW="fit-content"
              cursor="pointer"
            >
              <Image
                src={`/products/${items.images}`}
                width="170"
                height="200"
                alt="product checkOut"
                objectFit="cover"
              />
            </Box>
          </Link>
          <Flex flexDirection="column" sx={{ my: 2 }}>
            <Text fontSize="md" fontWeight="bold">
              {items.title}
            </Text>
            <Text fontSize="sm" sx={{ my: 2 }}>{`$${items.price}`}</Text>
            <Text sx={{ my: 2 }}>Size: M</Text>
            <Flex sx={{ my: 2 }}>
              {editable ? (
                <ItemCounter
                  currentValue={items.quantity}
                  maxValue={10}
                  updateQuantity={(value) =>
                    newQuantity_of_Product(items, value)
                  }
                />
              ) : (
                "nones"
              )}
            </Flex>
            <Flex maxW="80%">
              <Button
                color="red.400"
                variant="ghost"
                onClick={() => deleteProduct(items)}
              >
                Remove
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </GridItem>
  );
}
