import Link from "next/link";

import {
  Flex,
  Grid,
  Box,
  Container,
  Text,
  GridItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import { DataContext, DataProps } from "../../context";
import { useContext } from "react";

interface Props {}

export default function ReviewData({}: Props) {
  const { data } = useContext(DataContext);

  return (
    <Container maxW="80rem" my="4">
      <Flex justifyContent="end" alignItems="center">
        <Link href="/checkout/review" passHref>
          <Button variant="link" size="md">
            Edit
          </Button>
        </Link>
      </Flex>

      <Flex flexDirection="column">
        <Text as="h3" fontFamily="less" fontWeight="bold" fontSize="md">
          Delivery Address
        </Text>
        <Text as="h3" fontFamily="less" fontWeight="light" sx={{ my: 2 }}>
          {`${data?.name} ${data?.lastname}`}
        </Text>
        <Text as="h3" fontFamily="less" fontWeight="light" sx={{ my: 2 }}>
          {`${data?.address}, ${data?.city}, NY, ${data?.zipCode}`}
        </Text>
        <Text as="h3" fontFamily="less" fontWeight="light" sx={{ my: 2 }}>
          {`${data?.country}`}
        </Text>
        <Text as="h3" fontFamily="less" fontWeight="light" sx={{ my: 2 }}>
          {data?.telephone}
        </Text>
      </Flex>
      <Divider w="full" border="0.5px" borderColor="gray" />
    </Container>
  );
}
