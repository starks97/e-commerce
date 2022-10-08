import { Box, Button, Flex, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from "@chakra-ui/react";

import { useContext } from "react";

import {useRouter} from "next/router"

import { AuthContext } from "../../context";
import DeskTopSubNav from "./DeskTopSubNav";
import { NavItemsAdmin, NAV_ITEMS } from "./navTypes";



export default function DesktopNav  (){
    const linkColor = useColorModeValue("white", "white");
    const linkHoverColor = useColorModeValue("white", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    const { isLoggedIn} = useContext(AuthContext);

    const router = useRouter()

  
    return (
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  fontSize={"xl"}
                  fontWeight={500}
                  fontFamily="Less"
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                  href={navItem.href}
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
                    {isLoggedIn ? (
                      <>
                        {navItem.children.map((child) => (
                          <DeskTopSubNav
                            key={child.label}
                            href={child.href!}
                            label={child.label}
                            subLabel={child.subLabel!}
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        <Flex alignItems="center" flexDirection="column">
                          <Link
                            variant="none"
                            _hover={{ textDecoration: "none" }}
                            href={`/auth/login?p=${router.asPath}`}
                            alignItems="center"
                            justifyContent="center"
                            w="75%"
                          >
                            <Button
                              bg="rgb(0,0,0,0.6)"
                              color="white"
                              _hover={{
                                bg: "rgb(0,0,0,0.9)",
                              }}
                              w="100%"
                            >
                              Sign in
                            </Button>
                          </Link>
                        </Flex>
                      </>
                    )}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
