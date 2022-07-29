import { Flex, Box, Text, CircularProgress } from "@chakra-ui/react";

export default function FullScreenLoading() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <Text as={"h1"} fontSize="3xl" fontFamily="Less" fontWeight="hairline">
        Loading...
      </Text>
      <CircularProgress isIndeterminate color="black" />
    </Flex>
  );
}
