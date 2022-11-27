import React, { ReactNode } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
} from "@chakra-ui/react";

import {
  UseFormRegister,
  FieldValues,
  Path,
  DeepMap,
  FieldError,
  get,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { UserData } from "@prisma/client";
//import ErrorMessage from "../ui/ErrorMessage";

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  labels: FormLabels;
  register?: UseFormRegister<TFormValues>;
  rules?: Parameters<UseFormRegister<TFormValues>>[1];
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, "name">;

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

export enum FormLabels {
  name = "Name",
  lastName = "Last Name",
  addres = "Address",
  telephone = "Telephone",
  address2 = "Address 2",
  city = "City",
  zipCode = "ZipCode",
  country = "Country",
}
interface Props<G extends FormProps> {
  labels: FormLabels;
  userData: G;
  children: ReactNode;
}

const Form = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  labels,
  errors,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name);

  const hasError = !!(errors && errorMessages);
  return (
    <FormControl mt={4} isRequired borderColor="black">
      <FormLabel>{labels}</FormLabel>
      <InputGroup
        borderColor="black"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Input
          name={name}
          {...props}
          size="md"
          {...(register && register(name, rules))}
          aria-invalid={hasError}
        />
        <ErrorMessage
          errors={errors}
          name={name as any}
          render={({ message }) => (
            <Box color="red" fontSize="md" textAlign="center" marginTop="1rem">
              {message}
            </Box>
          )}
        />
      </InputGroup>
    </FormControl>
  );
};

export default Form;
