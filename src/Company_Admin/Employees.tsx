/* eslint-disable react-hooks/exhaustive-deps */
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Text,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RegistrationModal from "../Registeration_Page/RegistrationModal";
import PaymentModal from "../Registeration_Page/PaymentModal";
import employeesData from "./CompanyDashboardCards/users.json";

type Employee = {
  name: string;
  id: number;
  surname: string;
  phoneNumber: string;
  location: string;
};

function Employees() {
  const [employees, setEmployees] = useState<Employee>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Remove  line 39 while api is ready

  const employee = employeesData.data;
  const fetchEmployees = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/users")
      .catch((err) => console.log(err));

    if (response) {
      const employees = response.data;
      //uncomment const employee = response.data;
      console.log("Employees: ", employees);
      setEmployees(employees);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Box ml="200px" h="100vh" bg="#C4EEDF">
      <>
        <Heading>Employees</Heading>
        <TableContainer mt="50px">
          <Table size="sm" variant="striped" bg="white">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Emp ID</Th>
                <Th>Position</Th>
                <Th>Department</Th>
                <Th>Gross Pay</Th>
                <Th>Deductions</Th>
                <Th>Net Pay</Th>
              </Tr>
            </Thead>
            <Tbody>
              {employee &&
                employee.map((users) => {
                  return (
                    <Tr>
                      <Td>
                        <Flex gap={2}>
                          <Text>{users.name}</Text>
                          <Text>{users.surname}</Text>
                        </Flex>
                      </Td>
                      <Td>{users.id}</Td>
                      <Td>{users.phoneNumber}</Td>
                      <Td>{users.location}</Td>
                      <Td>{users.grossPay}</Td>
                      <Td>{users.deductions}</Td>
                      <Td>{users.netPay}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>Emp ID</Th>
                <Th>Position</Th>
                <Th>Department</Th>
                <Th>Gross Pay</Th>
                <Th>Deductions</Th>
                <Th>Net Pay</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </>
      <br />
      <HStack spacing={750} pl={2}>
        <Button colorScheme="green" leftIcon={<CheckIcon />}>
          Process Payment
        </Button>
        <Button colorScheme="green" onClick={onOpen} leftIcon={<AddIcon />}>
          Add Employee
        </Button>

        <RegistrationModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        {/* <PaymentModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} /> */}
      </HStack>
    </Box>
  );
}

export default Employees;
