import { Box, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import DeskTopSubNav from './DeskTopSubNav';
import { NavItemsAdmin } from './navTypes';

type Props = {}

export default function DesktopAdminNav({}: Props) {
    const linkColor = useColorModeValue("white", "white");
    const linkHoverColor = useColorModeValue("white", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
  return (
    <Stack direction={"row"} spacing={4}>
      {NavItemsAdmin.map((navItem) => (
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
                    <DeskTopSubNav
                      key={child.label}
                      href={child.href!}
                      label={child.label}
                      subLabel={child.subLabel!}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}