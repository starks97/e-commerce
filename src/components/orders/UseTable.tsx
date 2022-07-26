import { useMemo } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { UseTableInstanceProps } from "react-table";
import React from "react";

export interface TableNewProps<T extends object>
  extends Pick<
    UseTableInstanceProps<T>,
    | "getTableProps"
    | "headerGroups"
    | "getTableBodyProps"
    | "prepareRow"
    | "rows"
  > {}

export function generateId(): string {
  const random: IDGenerator = Math.random().toString(32).substring(2);
  const date: IDGenerator = Date.now().toString(32);
  return random + date;
}

type IDGenerator = string | number;
export default function UseTable<T extends object>(
  props: UseTableInstanceProps<T>
) {
  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    props;

  return (
    <TableContainer maxW="80rem" marginTop={5}>
      <Table {...getTableProps()} border="1px" borderColor="blue.500">
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={generateId()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps()}
                  borderBottom="3px"
                  borderColor="red.100"
                  bg="aliceblue"
                  color="black"
                  fontWeight="bold"
                  key={generateId()}
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={generateId()}>
                {row.cells.map((cell) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      padding="10px"
                      border="1px "
                      borderColor="gray.500"
                      bg="papayawhip"
                      key={generateId()}
                    >
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
