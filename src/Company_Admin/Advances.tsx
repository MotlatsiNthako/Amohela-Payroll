import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import advanceData from "./CompanyDashboardCards/requests.json";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import { request } from "http";

type Advance = {
  phoneNumber: string;
  employeeNumber: string;
  amount: string;
};

function Advances() {
  const [advances, setAdvances] = useState<Advance>();

  const advance = advanceData.data;
  const fetchAdvances = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/users")
      .catch((err) => console.log(err));

    if (response) {
      const Advances = response.data;
      console.log("Advances: ", advances);
      setAdvances(advances);
    }
  };
  useEffect(() => {
    fetchAdvances();
  }, []);
  return (
    <Box ml="200px" h="100vh" bg="#C4EEDF">
      <>
        <Heading>Advances</Heading>
        <TableContainer mt="50px">
          <Table size="sm" variant="striped" bg="white">
            <TableCaption>Employee's advance requests</TableCaption>
            <Thead>
              <Tr>
                <Th>Phone number</Th>
                <Th>Employee number</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {advance &&
                advance.map((requests) => {
                  return (
                    <Tr>
                      <Td>
                        <Flex gap={2}>
                          <Text>{requests.phoneNumber}</Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Text>{requests.employeeNumber}</Text>
                      </Td>
                      <Td>
                        <Text>{requests.amount}</Text>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Phone number</Th>
                <Th>Employee number</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </>
    </Box>
  );
}

export default Advances;
