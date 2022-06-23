import { TriangleUpIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Button,
  Container,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useMemo } from "react";

import Link from "next/link";

interface RowProps {
  id: string;
  name: string;
  paid: boolean;
  order: boolean;
}

const data = [
  { id: "1", name: "John Doe", paid: true, order: true },
  { id: "2", name: "Jane Doe", paid: false, order: true },
  { id: "3", name: "John Doe", paid: true, order: true },
  { id: "4", name: "Jane Doe", paid: false, order: true },
  { id: "5", name: "John Doe", paid: true, order: true },
  { id: "6", name: "Jane Doe", paid: false, order: true },
];

type Props = {};

export default function DataGrid({}: Props) {
  return (
    <Container maxW="80rem" marginTop="10">
      <Flex sx={{marginBottom: '3rem'}}>
        <Text as='h1' fontSize='3xl' fontFamily='less' fontWeight='bold'>Order History</Text>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>History of yours orders</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Full Name</Th>
              <Th>Paid</Th>
              <Th>See Order</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.name}</Td>
                <Td>
                  {row.paid ? (
                    <Button variant={"paidBtn"}>Paid</Button>
                  ) : (
                    <Button>No Paid</Button>
                  )}
                </Td>
                <Td>
                  <Link href="/checkout/summary" passHref>
                    {row.order ? <Button>See order</Button> : ""}
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
}
