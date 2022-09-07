import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: Props): JSX.Element {
  return (
    <>
      <Box color="red" fontSize="md" textAlign="center" marginTop="1rem">
        {children}
      </Box>
    </>
  );
}