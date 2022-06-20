import { PhoneIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Text,
  Grid,
  Input,
  Stack,
  GridItem,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
} from "@chakra-ui/react";

import { ShopLayout } from "../../components/layouts";

type Props = {};

export default function addressPage({}: Props) {
  return (
    <ShopLayout
      title="Check Address"
      pageDescription="Checking address and updating"
    >
      <Container maxW="80rem">
        <Flex>
          <Text as="h1" fontSize="3xl">
            Check Address
          </Text>
        </Flex>
        <Grid
          gridTemplateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          marginTop="5"
          gap={8}
        >
          <GridItem>
            <Stack spacing="3">
              <Input placeholder="Name" size="md" />
              <Input placeholder="Address" size="md" />
              <Input placeholder="Postal Code" size="md" />
              <Select placeholder="Select Country">
                <option value="Country">United State</option>
                <option value="Country">Spain</option>
                <option value="Country">Ecuador</option>
              </Select>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing="3">
              <Input placeholder="Last name" size="md" />
              <Input placeholder="Address 2" size="md" />
              <Input placeholder="City" size="md" />
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
            </Stack>
          </GridItem>
        </Grid>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ my: 10 }}
        >
          <Button
            bg="rgb(0,0,0, 0.8)"
            color="white"
            _hover={{ background: "rgb(0, 0, 0, 0.6)" }}
          >
            Review Order
          </Button>
        </Flex>
      </Container>
    </ShopLayout>
  );
}
