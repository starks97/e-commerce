import Image from "next/image";
import Link from "next/link";

import { Flex, Text, Button } from "@chakra-ui/react";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

import emptyCart from "../../assets/emptyCart.svg";

interface Props {}

export default function empty({}: Props) {
  return (
    <ShopLayout
      title={"Empty car"}
      pageDescription={"there are no items at the moment"}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { base: "column", md: "row" } }}
      >
        <Image src={emptyCart} alt="empty cart" width={100} height={100} />

        <Text fontSize="2xl" fontWeight="light" fontFamily="Less">
          There are not elements yet available.
        </Text>

        <Link href="/" passHref>
          <Button variant={"ghost"} sx={{ my: 5 }}>
            Go Back
          </Button>
        </Link>
      </Flex>
    </ShopLayout>
  );
}
