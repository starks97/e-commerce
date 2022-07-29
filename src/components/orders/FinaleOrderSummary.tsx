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
import ReviewData from "../checkout/ReviewData";
import ApproveCard from "./ApproveCard";
type Props = {};

export default function FinaleOrderSummary({}: Props) {
  return (
    <Container maxW="80rem" marginTop={8}>
      <Flex flexDirection="column">
        <Text as="h1" fontFamily="Less" fontWeight={"bold"} fontSize="3xl">
          Order number: 123314355132
        </Text>
      </Flex>
      <ApproveCard />

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
              Summary (3 orders)
            </Text>
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

            <Box display="flex" flexDirection="column" marginLeft='1rem'>
              <Text fontFamily='less' fontWeight="bold" fontSize='3xl'>
                Pay
              </Text>
              <ApproveCard />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}
