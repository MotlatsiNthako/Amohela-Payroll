import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";

function EmployeeHome() {
  return (
    <Box>
      <HStack>
        <Heading>Amo</Heading>
        <HStack>
          <Text pl="750px">Logout Majoro Futhoane</Text>
        </HStack>
      </HStack>
      <Box
        w={["full", "md"]}
        p={[8, 10]}
        mt={[20, "10vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "green.600"]}
        borderRadius={10}
      >
        <Heading size="md">Employee Basic and Tax Info</Heading>
        <VStack spacing={5}>
          <Text>Employee number: Majoro Futhoane</Text>
          <Text>Gross Pay: LSL 20 000.00</Text>
          <Text>Bank Account number: 11003554646</Text>
          <Text>Bank name: Standard Lesotho Bank</Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default EmployeeHome;
