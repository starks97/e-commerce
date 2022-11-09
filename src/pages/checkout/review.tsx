import { Container, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

import { EditReviewForm } from "../../components/ui";
import { DataContext } from "../../context";

export default function AddressPage() {
  const { data } = useContext(DataContext);

  console.log(data);

  return (
    <ShopLayout
      title="Check Address"
      pageDescription="Checking address and updating"
    >
      <Navbar />
      <Container maxW="80rem" marginTop="2rem">
        <Flex>
          <Text as="h1" fontSize="3xl">
            Check Info
          </Text>
        </Flex>

        {!data ? (
          ""
        ) : (
          <EditReviewForm userData={{ id: "", userId: "", ...data }} />
        )}
      </Container>
    </ShopLayout>
  );
}
