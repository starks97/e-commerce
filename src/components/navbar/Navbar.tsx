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
<<<<<<< HEAD
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
=======
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import { NavItem, NAV_ITEMS } from "./navTypes";
import ShopCart from "../../assets/ShopCart.svg";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
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
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <NextLink href="/">
            <Button variant="none">
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"Less"}
                color={useColorModeValue("gray.800", "white")}
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
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
        >
          <NextLink href="/checkout" passHref>
            <IconButton
              icon={<SearchIcon />}
              fontSize={"xl"}
              aria-label="Search"
              variant={"none"}
            />
          </NextLink>
          <NextLink href="/cart" passHref>
            <Button size="sm" variant="none">
              <Image src={ShopCart} layout="fill" />
            </Button>
          </NextLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"xl"}
                fontWeight={500}
                fontFamily="Less"
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blackAlpha.50", "gray.900") }}
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
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
>>>>>>> 779b262 (merge)
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
<<<<<<< HEAD
        <MobileNavItem
          key={navItem.label}
          href={navItem.href!}
          label={navItem.label}
          children={navItem.children!}
        />
=======
        <MobileNavItem key={navItem.label} {...navItem} />
>>>>>>> 779b262 (merge)
      ))}
    </Stack>
  );
};

<<<<<<< HEAD
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
=======
const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
>>>>>>> 779b262 (merge)
