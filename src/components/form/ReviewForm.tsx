import React, { useContext } from "react";

import { useRouter } from "next/router";

import { UserData } from "@prisma/client";

import {
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  InputGroup,
  Select,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { DataContext } from "../../context";
import countries from "../../utils/countries.json";
import ErrorMessage from "../ui/ErrorMessage";
import { Form } from ".";
import { FormLabels, FormProps } from "./Form";

interface UserDataProps {
  userData: UserData;
}

export default function ReviewForm({ userData }: UserDataProps) {
  const { createData_of_user, updateData_of_user } = useContext(DataContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      name: userData.name,
      address: userData.address,
      zipCode: userData.zipCode,
      country: userData.country,
      telephone: userData.telephone,
      lastname: userData.lastname,
      address2: userData.address2,
      city: userData.city,
    },
  });

  const handleOnSubmit = (datas: FormProps) => {
    try {
      if (userData) {
        updateData_of_user({ ...datas, id: userData.id });
        router.push("/checkout/summary");

        return;
      }

      createData_of_user({ ...datas });
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
            <Form<FormProps>
              name="name"
              type="text"
              labels={FormLabels.name}
              register={register}
              rules={{ required: "Name is required" }}
              errors={errors}
            />

            <Form<FormProps>
              name="lastname"
              type="text"
              labels={FormLabels.lastName}
              register={register}
              rules={{ required: "Last Name is required" }}
              errors={errors}
            />
            <Form<FormProps>
              name="address"
              type="text"
              labels={FormLabels.addres}
              register={register}
              rules={{ required: "Address is required" }}
              errors={errors}
            />
          </Stack>
        </GridItem>

        <GridItem>
          <Stack spacing="3">
            <Form<FormProps>
              name="address2"
              type="text"
              labels={FormLabels.address2}
              register={register}
              errors={errors}
            />
            <Form<FormProps>
              name="city"
              type="text"
              labels={FormLabels.city}
              register={register}
              rules={{ required: "City is required" }}
              errors={errors}
            />
            <Form<FormProps>
              name="zipCode"
              type="text"
              labels={FormLabels.zipCode}
              register={register}
              rules={{ required: "Zip Code is required" }}
              errors={errors}
            />

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
                    required: "this field is require",
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
