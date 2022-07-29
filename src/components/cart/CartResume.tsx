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

import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

interface Props {}

export default function CartResume({}: Props) {
  return (
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
        <CartList editable />
        <GridItem>
          <Flex
            border="black"
            borderRadius="sm"
            boxShadow="md"
            flexDirection="column"
            p="2rem"
          >
            <Text fontSize="xl" fontFamily="Less" fontWeight="hairline">
              Order
            </Text>
            <Divider w="full" border="0.5px" borderColor="gray" />

            <OrderSummary />

            <Box display="flex" flexDirection="column">
              <Button
                bg="rgb(0,0,0, 0.8)"
                color="white"
                _hover={{ background: "rgb(0, 0, 0, 0.6)" }}
              >
                Checkout
              </Button>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}