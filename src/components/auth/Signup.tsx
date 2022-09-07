import { ChangeEvent, useContext, useState } from "react";

import Link from "next/link";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NextRouter, useRouter } from "next/router";
import { AuthContext } from "../../context";
import ErrorMessage from "../ui/ErrorMessage";

export default function SignupCard() {
  const { registerUser } = useContext(AuthContext);

  const router: NextRouter = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const [isRegister, setIsRegister] = useState<boolean>(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onRegisterForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerUser(data.email, data.password, data.name);

      if (
        data.email.length === 0 ||
        data.name.length === 0 ||
        data.password.length === 0 ||
        !response
      ) {
        setError(true);
        setIsRegister(false);
      }

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      h="calc(100vh - 60px)"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={onRegisterForm} noValidate>
              <Box>
                <FormControl id="Name" isRequired borderColor="gray">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={data.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, name: e.target.value })
                    }
                  />
                </FormControl>
              </Box>

              <FormControl id="email" isRequired borderColor="gray">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={data.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setData({ ...data, email: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired borderColor="gray">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={data.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={isRegister}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/auth/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
              {error && (
                <ErrorMessage>
                  You need to fill out the error message
                </ErrorMessage>
              )}
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
