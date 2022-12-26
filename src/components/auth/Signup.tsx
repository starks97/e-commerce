import { ChangeEvent, useContext, useEffect, useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { NextRouter, useRouter } from "next/router";

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
} from "@chakra-ui/react";

import { AuthContext } from "../../context";
import ErrorMessage from "../ui/ErrorMessage";

import { isValidEmail } from "../../utils";

export default function SignupCard() {
  const { registerUser } = useContext(AuthContext);

  const router: NextRouter = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const [isRegister, setIsRegister] = useState<boolean>(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const destination = router.query.p?.toString() || "/";

  const onRegisterForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerUser(data.email, data.password, data.name);

      if (response.hasError) {
        setError(response.message as string);
        setIsRegister(false);

        setTimeout(() => {
          setError("");
        }, 4000);
        return;
      }

      setError("");
      setIsRegister(true);

      router.replace(destination);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    router.prefetch(destination);
  });

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
            {error && <ErrorMessage>{error}</ErrorMessage>}
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
                  <Link
                    href={
                      router.query.p
                        ? `/auth/login?p=${router.query.p}`
                        : "/auth/login"
                    }
                    color={"blue.400"}
                  >
                    Login
                  </Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
