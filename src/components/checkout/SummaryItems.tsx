import Link from "next/link";

import {
  Flex,
  Grid,
  GridItem,
  Box,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import { IProduct } from "../../interfaces";

import { CartList } from "../cart";
import { OrderSummary } from "../cart";
import ReviewData from "./ReviewData";
import { Product } from "@prisma/client";
import { CartContext } from "../../context";
import { useContext } from "react";

interface Props {
  product: Product;
}

export default function SummaryItems({ product }: Props) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Container maxW="80rem" marginTop={8}>
        <Flex>
          <Text as="h1" fontFamily="Less" fontWeight={"bold"} fontSize="3xl">
            Cart
          </Text>
        </Flex>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat (1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "60% 40%",
            xl: "60% 40%",
          }}
          gap={5}
        >
          <CartList editable product={product} />
          <GridItem>
            <Flex
              border="black"
              borderRadius="sm"
              boxShadow="md"
              flexDirection="column"
              p="2rem"
            >
              <Box>
                <Text fontSize="xl" fontFamily="Less" fontWeight="hairline">
                  {`Summary (${cart.length} orders)`}
                </Text>
              </Box>
              <Divider w="full" border="0.5px" borderColor="gray" />
              <ReviewData />
              <Flex justifyContent="end" alignItems="end" marginRight="1rem">
                <Link href="/cart" passHref>
                  <Button variant="link" size="md">
                    Edit
                  </Button>
                </Link>
              </Flex>

              <OrderSummary />

              <Box display="flex" flexDirection="column">
                <Button
                  bg="rgb(0,0,0, 0.8)"
                  color="white"
                  _hover={{ background: "rgb(0, 0, 0, 0.6)" }}
                >
                  Confirm Order
                </Button>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
