import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Stack, useColorModeValue, Text, Link } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { AuthContext } from '../../context';
interface Props {
  href: string;
  label: string;
  subLabel: string;
}

export default function DeskTopSubNav({href, label, subLabel}: Props) {
  const {logout} = useContext(AuthContext)

  const handleLogOut = () => {
    if(label === "Logout"){
      logout()
      return;
    }
  }
  return (
    <>
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("blackAlpha.50", "gray.900") }}
        onClick={handleLogOut}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "gray.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"blackAlpha.900"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </>
  );
}