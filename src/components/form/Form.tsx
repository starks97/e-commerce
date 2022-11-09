import React from "react";

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

import { useForm, useController, UseControllerProps } from "react-hook-form";
import { UserData } from "@prisma/client";
import ErrorMessage from "../ui/ErrorMessage";

type G = {};

export type FormProps = {
  name: string;
  address: string;
  zipCode: string;
  country: string;
  telephone: string;
  lastname: string;
  address2: string;
  city: string;
};

enum FormLabels {
  name = "Name",
  lastName = "Last Name",
  addres = "Address",
  telephone = "Telephone",
  address2 = "Address 2",
  city = "City",
  zipCode = "ZipCode",
}
interface Props<G extends UserData> {
  labels: FormLabels;
  userData: G;
}
type T = object;

export default function Form({ labels, userData }: Props<UserData>) {
  const {
    register,
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
    reValidateMode: "onChange",
  });
  return (
    <FormControl id="name" mt={4} isRequired borderColor="black">
      <FormLabel>{labels}</FormLabel>
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
  );
}
