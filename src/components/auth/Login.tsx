import { ChangeEvent, useContext, useEffect, useState } from "react";

import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { AuthContext } from "../../context";

import { ErrorMessage } from "../ui";

export default function SimpleCard() {
  const { loginUser } = useContext(AuthContext);

  const router: NextRouter = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [islogin, setIsLogin] = useState<boolean>(false);

  const [error, setError] = useState<string>("false");

  const destination = router.query.p?.toString() || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginUser(data.email, data.password);

      if (response.hasError) {
        setIsLogin(false);
        setError(response.message as string);

        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }

      setIsLogin(true);
      setError("");
      router.replace(destination);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    router.prefetch(destination);
  }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <form onSubmit={handleSubmit}>
              <FormControl
                id="email"
                isRequired
                borderColor="gray"
                marginBottom="1rem"
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={data.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setData({ ...data, email: e.target.value })
                  }
                />
              </FormControl>
              <FormControl
                id="password"
                isRequired
                borderColor="gray"
                marginBottom="1rem"
              >
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={data.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox borderColor="gray">Remember me</Checkbox>
                  <Link href="/" color={"blue.400"}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={islogin}
                  loadingText="Login..."
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              You dont have account yet?{" "}
              <Link
                href={
                  router.query.p
                    ? `/auth/register?p=${router.query.p}`
                    : "/auth/register"
                }
                color={"blue.400"}
              >
                register
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
