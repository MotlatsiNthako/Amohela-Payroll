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
import approvalsData from "./CompanyDashboardCards/approvals.json";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import { request } from "http";

type Approval = {
  phoneNumber: string;
  employeeNumber: string;
  amount: string;
  status: string;
};

function Approvals() {
  const [approvals, setApprovals] = useState<Approval>();

  const approval = approvalsData.data;
  const fetchAdvances = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/users")
      .catch((err) => console.log(err));

    if (response) {
      const Approvals = response.data;
      console.log("Approvals: ", approvals);
      setApprovals(approvals);
    }
  };
  useEffect(() => {
    fetchAdvances();
  }, []);
  return (
    <Box ml="200px" h="100vh" bg="#C4EEDF">
      <>
        <Heading>Approvals</Heading>
        <TableContainer mt="50px">
          <Table size="sm" variant="striped" bg="white">
            <TableCaption>Approved requests</TableCaption>
            <Thead>
              <Tr>
                <Th>Phone number</Th>
                <Th>Employee number</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {approval &&
                approval.map((requests) => {
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
                      <Td>
                        <Text>{requests.status}</Text>
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

export default Approvals;
