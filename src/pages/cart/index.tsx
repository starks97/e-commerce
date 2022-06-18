import { Flex, Grid, GridItem, Box, Text, Container } from "@chakra-ui/react";

import { CartResume } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

type Props = {};

export default function CartPage({}: Props) {
  return (
    <ShopLayout title="cart" pageDescription="your items">
      <Navbar />
      <CartResume />
    </ShopLayout>
  );
}
