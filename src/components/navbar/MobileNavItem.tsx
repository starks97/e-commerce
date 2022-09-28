import { ChevronDownIcon } from "@chakra-ui/icons";

import {useRouter} from "next/router"

import { Flex, Link, Stack, useDisclosure, Text, useColorModeValue, Icon, Collapse } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { NavItem } from "./navTypes";

interface Props {
    label: string;
    href: string;
    children: NavItem[]
}


export default function  MobileNavItem  ({ label, children, href }: Props)  {
    const { isOpen, onToggle } = useDisclosure();

    const {isLoggedIn, logout} = useContext(AuthContext)

    const router = useRouter()
  

  const handleLogOut = () => {
    const Logout = children.find((item) => item.label === "Logout");

    if (Logout) {
      logout();
      return;
    }
  }
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
          href={href}
        >
          <Text fontWeight={600} color={useColorModeValue("white", "gray.200")}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
              color={useColorModeValue("white", "white")}
            />
          )}
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
          color={useColorModeValue("white", "white")}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("white", "gray.700")}
            align={"start"}
          >
            <>
              {isLoggedIn ? (
                <>
                  {children &&
                    children.map((child) => (
                      <Link
                        key={child.label}
                        py={2}
                        href={child.href}
                        color={useColorModeValue("white", "white")}
                        onClick={handleLogOut}
                      >
                        {child.label}
                      </Link>
                    ))}
                </>
              ) : (
                <Link
                  py={2}
                  href={`/auth/login?p=${router.asPath}`}
                  color={useColorModeValue("white", "white")}
                >
                  Login
                </Link>
              )}
            </>
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  
