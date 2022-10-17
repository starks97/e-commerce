import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Select,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../context";
import { countries } from "../../utils";
import ErrorMessage from "./ErrorMessage";

type Props = {};

export type FormProps = {
  name: string;
  address: string;
  zipCode: string;
  country: string;
  telephone: string;
  lastname: string;
  adress2: string;
  city: string;
};

export default function EditReviewForm({}: Props) {
  const { createData_of_user, data } = useContext(DataContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      name: "",
      address: "",
      zipCode: "",
      country: countries[0].name,
      telephone: "",
      lastname: "",
      adress2: "",
      city: "",
    },
  });

  const handleOnSubmit = (data: FormProps) => {
    try {
      createData_of_user({ ...data });
      router.push("/checkout/summary");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
      <Grid
        gridTemplateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        marginTop="5"
        gap={8}
      >
        <GridItem>
          <Stack spacing="3">
            <FormControl id="name" mt={4} isRequired borderColor="black">
              <FormLabel>Name</FormLabel>
              <InputGroup
                borderColor="black"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Input
                  size="md"
                  {...register("name", {
                    required: "this fild is require",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <ErrorMessage>*Name is required</ErrorMessage>
                )}
              </InputGroup>
            </FormControl>

            <FormControl id="Last Name" mt={4} isRequired>
              <FormLabel>Last Name</FormLabel>
              <InputGroup
                borderColor="black"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Input
                  placeholder="Last Name"
                  size="md"
                  {...register("lastname", {
                    required: "this fild is require",
                  })}
                  aria-invalid={errors.lastname ? "true" : "false"}
                />
                {errors.lastname?.type === "required" && (
                  <ErrorMessage>*Last Name is required</ErrorMessage>
                )}
              </InputGroup>
            </FormControl>

            <FormControl id="address" mt={4} isRequired borderColor="black">
              <FormLabel>Address</FormLabel>
              <InputGroup
                borderColor="black"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Input
                  placeholder="Address"
                  size="md"
                  {...register("address", {
                    required: "this fild is require",
                  })}
                  aria-invalid={errors.address ? "true" : "false"}
                />
                {errors.address?.type === "required" && (
                  <ErrorMessage>*Address is required</ErrorMessage>
                )}
              </InputGroup>
            </FormControl>

            <FormControl isRequired flexDirection="column">
              <FormLabel>Telephone</FormLabel>
              <InputGroup
                borderColor="black"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Input
                  type="number"
                  placeholder="phone number"
                  {...register("telephone", {
                    required: "this fild is require",
                  })}
                  aria-invalid={errors.telephone ? "true" : "false"}
                />
                {errors.telephone?.type === "required" && (
                  <ErrorMessage>*Telephone is required</ErrorMessage>
                )}
              </InputGroup>
            </FormControl>
          </Stack>
        </GridItem>

        <GridItem>
          <Stack spacing="3">
            <FormControl id="address 2" mt={4} borderColor="black">
              <FormLabel>Address 2</FormLabel>

              <Input
                placeholder="Address 2"
                size="md"
                {...register("adress2")}
              />
            </FormControl>
            <FormControl id="city" mt={4} isRequired borderColor="black">
              <FormLabel>City</FormLabel>
              <InputGroup
                borderColor="black"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Input
                  placeholder="City"
                  size="md"
                  {...register("city", {
                    required: "this fild is require",
                  })}
                  aria-invalid={errors.city ? "true" : "false"}
                />
                {errors.city?.type === "required" && (
                  <ErrorMessage>*City is required</ErrorMessage>
                )}
              </InputGroup>
            </FormControl>
            <FormControl id="Postal Code" mt={4} isRequired borderColor="black">
              <FormLabel>ZIP Code</FormLabel>
              <InputGroup
                borderColor="black"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Input
                  placeholder="Postal Code"
                  size="md"
                  type="number"
                  {...register("zipCode", {
                    required: "this fild is require",
                  })}
                  aria-invalid={errors.zipCode ? "true" : "false"}
                />
                {errors.zipCode?.type === "required" && (
                  <ErrorMessage>*ZIP Code is required</ErrorMessage>
                )}
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <InputGroup
                borderColor="black"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Spacer />
                <Select
                  placeholder="Select Country"
                  borderColor="black"
                  {...register("country", {
                    required: "this fild is require",
                  })}
                  aria-invalid={errors.country ? "true" : "false"}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </Select>
                {errors.country?.type === "required" && (
                  <ErrorMessage>*Country is required</ErrorMessage>
                )}
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
          bg="rgb(0,0,0, 0.6)"
          color="white"
          _hover={{ background: "rgb(0, 0, 0, 0.8)" }}
          type="submit"
        >
          Review Order
        </Button>
      </Flex>
    </form>
  );
}