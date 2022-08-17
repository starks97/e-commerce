import {
  Text,
  Box,
  Flex,
  Grid,
  Container,
  GridItem,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import { initialData } from "../../database/products";
import { ItemCounter } from "../ui";
import { Product } from "@prisma/client";

interface Props {
  editable?: boolean;
  product: Product;
}

const ProductsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function CartList({ editable = false, product }: Props) {
  return (
    <GridItem gap={5} marginTop={5}>
      {ProductsInCart.map((items) => (
        <Flex
          key={items.slug}
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
                src={`/products/${items.images[0]}`}
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
                  currentValue={1}
                  maxValue={5}
                  updateQuantity={function (newValue: number): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              ) : (
                "nones"
              )}
            </Flex>
            <Flex maxW="80%">
              {editable && (
                <Button color="red.400" variant="ghost">
                  Remove
                </Button>
              )}
            </Flex>
          </Flex>
        </Flex>
      ))}
    </GridItem>
  );
}
