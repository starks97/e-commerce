import { useContext } from "react";

import { Flex, Grid, Box, Container, Text, GridItem } from "@chakra-ui/react";

import { CartContext } from "../../context";

interface Props {}

export default function OrderSummary({}: Props) {
  const { summary } = useContext(CartContext);

  return (
    <Container maxW="80rem" my="4">
      <Grid gridTemplateColumns={"repeat(2,1fr)"}>
        <GridItem>
          <Text as="h3" fontFamily="less" fontWeight="semi-bold" fontSize="md">
            n products:
          </Text>
        </GridItem>
        <GridItem>
          <Flex justifyContent={"end"} alignItems="center">
            <Text as="h3" fontFamily="Less" fontSize="md">
              {`${summary.total_of_items}`}
            </Text>
          </Flex>
        </GridItem>
        <GridItem my={4}>
          <Text as="h3" fontFamily="less" fontWeight="semi-bold" fontSize="md">
            Subtotal:
          </Text>
        </GridItem>
        <GridItem my={4}>
          <Flex justifyContent={"end"} alignItems="center">
            <Text as="h3" fontFamily="Less" fontSize="md">
              {`$ ${summary.total_of_price.toFixed(2)}`}
            </Text>
          </Flex>
        </GridItem>

        <GridItem>
          <Text as="h3" fontFamily="less" fontWeight="semi-bold" fontSize="md">
            Taxes(8.647%):
          </Text>
        </GridItem>
        <GridItem>
          <Flex justifyContent={"end"} alignItems="center">
            <Text as="h3" fontFamily="Less" fontSize="md">
              {`$ ${summary.taxes.toFixed(2)}`}
            </Text>
          </Flex>
        </GridItem>
        <GridItem my={8}>
          <Text as="h3" fontFamily="less" fontWeight="bold" fontSize="xl">
            Total:
          </Text>
        </GridItem>
        <GridItem my={8}>
          <Flex justifyContent={"end"} alignItems="center">
            <Text as="h3" fontFamily="Less" fontSize="xl" fontWeight="bold">
              {`$ ${summary.total_of_price_with_taxes.toFixed(2)}`}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}
