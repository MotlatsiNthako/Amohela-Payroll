import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Companies() {
  return (
    <Box h="100vh" bg="#C4EEDF">
      <>
        <Heading>Companies</Heading>
        <TableContainer mt="50px">
          <Table size="sm" variant="striped">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Industry</Th>
                <Th>Location</Th>
                <Th>Logo</Th>
                <Th isNumeric>Pay date</Th>
                <Th isNumeric>No. Of Employees</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Africa Code Foundry</Td>
                <Td>IT</Td>
                <Td>California USA</Td>
                <Td>ACF</Td>
                <Td isNumeric>25</Td>
                <Td isNumeric>20</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </>
      <br />
      <Button colorScheme="green">Process Payment</Button>
    </Box>
  );
}

export default Companies;
