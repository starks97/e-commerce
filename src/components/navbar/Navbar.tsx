import NextLink from "next/link";
import Image from "next/image";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { NavItem, NavItemsAdmin, NAV_ITEMS } from "./navTypes";
import ShopCart from "../../assets/ShopCart.svg";

import { SearchInput } from "../searchInput";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../context";
import DesktopNav from "./DesktopNav";
import DesktopAdminNav from "./DesktopAdminNav";
import { useRouter } from "next/router";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  const { auth } = useContext(AuthContext);

  return (
    <>
      <Box bg={useColorModeValue("black", "white")} margin="0">
        <Flex
          color={useColorModeValue("black", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"none"}
              aria-label={"Toggle Navigation"}
              color={useColorModeValue("white", "white")}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <NextLink href="/">
              <Button variant="none">
                <Text
                  textAlign={useBreakpointValue({ base: "center", md: "left" })}
                  fontFamily={"Less"}
                  color={useColorModeValue("white", "white")}
                  fontSize={"3xl"}
                  fontWeight={"bold"}
                >
                  Teslo | Shop
                </Text>
              </Button>
            </NextLink>

            <Flex
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              ml={20}
            >
              <DesktopNav />
              {auth?.user.role === "admin" ? <DesktopAdminNav /> : ""}
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            alignItems="center"
          >
            <SearchInput />

            <NextLink href="/cart" passHref>
              <Button
                size="sm"
                variant="none"
                style={{ color: useColorModeValue("white", "white") }}
              >
                <Image
                  src={ShopCart}
                  layout="fill"
                  style={{ background: "white" }}
                />
              </Button>
            </NextLink>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
          {auth?.user.role === "admin" ? <MobileAdminNav /> : ""}
        </Collapse>
      </Box>
    </>
  );
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("#22272d", "gray.900")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          href={navItem.href!}
          label={navItem.label}
          children={navItem.children!}
        />
      ))}
    </Stack>
  );
};

const MobileAdminNav = () => {
  return (
    <Stack
      bg={useColorModeValue("#22272d", "gray.900")}
      p={4}
      display={{ md: "none" }}
    >
      {NavItemsAdmin.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          href={navItem.href!}
          label={navItem.label}
          children={navItem.children!}
        />
      ))}
    </Stack>
  );
};

interface Props {
  label: string;
  href: string;
  children: NavItem[];
}

function MobileNavItem({ label, children, href }: Props) {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    const Logout = children.find((item) => item.label === "Logout");

    if (Logout) {
      logout();
      return;
    }
  };
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const linkColor = useColorModeValue("white", "white");

  return (
    <>
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
                        href={child.href!}
                        onClick={handleLogOut}
                        color={linkColor}
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
    </>
  );
}
