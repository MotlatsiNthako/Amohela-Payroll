import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Employees() {
  return (
    <Box ml='200px' h='100vh' bg='#C4EEDF'>
      <>
      <Heading>Employees</Heading>
      <TableContainer mt="50px">
          <Table size="sm" variant='striped'>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>Emp ID</Th>
                <Th>Position</Th>
                <Th>Department</Th>
                <Th isNumeric>Gross Pay</Th>
                <Th isNumeric>Deductions</Th>
                <Th isNumeric>Net Pay</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Motlatsi Nthako</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Front-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Majoro Futhoane</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Back-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Paballo Molati</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Front-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Bulane Naeo</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Back-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Motlatsi Nthako</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Front-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Motlatsi Nthako</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Front-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Motlatsi Nthako</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Front-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Motlatsi Nthako</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Front-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
              <Tr>
                <Td>Motlatsi Nthako</Td>
                <Td isNumeric>123</Td>
                <Td>Jnr.Front-end Dev</Td>
                <Td>IT</Td>
                <Td isNumeric>20 000.00</Td>
                <Td isNumeric>2 310.10</Td>
                <Td isNumeric>17 689.90</Td>
                
              </Tr>
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>Name</Th>
                <Th isNumeric>Emp ID</Th>
                <Th>Position</Th>
                <Th>Department</Th>
                <Th isNumeric>Gross Pay</Th>
                <Th isNumeric>Deductions</Th>
                <Th isNumeric>Net Pay</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        
      </>
      <br/>
      <Button colorScheme="green">Process Payment</Button>
      

    </Box>
  );
}

export default Employees;
