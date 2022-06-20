import { useState } from "react";

import Image from "next/image";

import { Box, Text } from "@chakra-ui/react";

import creditOff from "../../assets/creditOff.svg";
import creditOn from "../../assets/creditOn.svg";

type Props = {};

export default function ApproveCard({}: Props) {
  const [isApproved, setIsApproved] = useState<boolean>(false);
  return (
    <>
      {isApproved ? (
        <Box
          border="1px"
          borderColor="red"
          borderRadius="md"
          maxW="10rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={4}
        >
          <Image src={creditOff} width="20" height="20" />
          <Text color="red" marginLeft="0.5rem">
            Pending Order
          </Text>
        </Box>
      ) : (
        <Box
          border="1px"
          borderColor="green"
          borderRadius="md"
          maxW="10rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={4}
        >
          <Image src={creditOn} width="20" height="20" />
          <Text color="green" marginLeft="0.5rem">
            Order Approved
          </Text>
        </Box>
      )}
    </>
  );
}
