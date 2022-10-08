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
  FormControl,
  InputLeftElement,
  Select,
  Button,
  FormLabel,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

type FormProps = {
  name: string;
  address: string;
  zipCode: string
  country: string;
  telephone: string;
  lastname: string;
  adress2: string;
  city: string;
};

export default function addressPage({}: FormProps) {

  const {register, handleSubmit, formState: {errors}} = useForm<FormProps>()

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
        <Grid
          gridTemplateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          marginTop="5"
          gap={8}
        >
          <GridItem>
            <Stack spacing="3">
              <FormControl id="name" mt={4} isRequired borderColor="black">
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name" size="md" />
              </FormControl>

              <FormControl id="address" mt={4} isRequired borderColor="black">
                <FormLabel>Address</FormLabel>
                <Input placeholder="Address" size="md" />
              </FormControl>

              <FormControl
                id="Postal Code"
                mt={4}
                isRequired
                borderColor="black"
              >
                <FormLabel>ZIP Code</FormLabel>
                <Input placeholder="Postal Code" size="md" type="number" />
              </FormControl>

              <FormControl>
                <FormLabel>Select Country</FormLabel>
                <Select placeholder="Select Country" borderColor="black">
                  <option value="Country">United State</option>
                  <option value="Country">Spain</option>
                  <option value="Country">Ecuador</option>
                </Select>
              </FormControl>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing="3">
              <FormControl id="Last Name" mt={4} isRequired borderColor="black">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" size="md" type="number" />
              </FormControl>

              <FormControl id="address 2" mt={4} borderColor="black">
                <FormLabel>Address 2</FormLabel>
                <Input placeholder="Address 2" size="md" />
              </FormControl>
              <FormControl id="city" mt={4} isRequired borderColor="black">
                <FormLabel>City</FormLabel>
                <Input placeholder="City" size="md" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Telephone</FormLabel>
                <InputGroup borderColor="black">
                  <InputLeftAddon children="+1" />
                  <Input type="tel" placeholder="phone number" />
                </InputGroup>
              </FormControl>
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
