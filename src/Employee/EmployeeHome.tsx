import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Checkbox,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdvanceModal from "../Employee/AdvanceModal";

function EmployeeHome() {
  const [error, setError] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetch("https://firesms-messaging-platform.herokuapp.com/user/all-users")
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => setError(err));
  }, []);

  return (
    <Box bg="#C4EEDF">
      <HStack spacing="950px">
        <Heading>Amo</Heading>
        <HStack spacing={5}>
          <Text>Logout</Text>
          <Text>Motlatsi Nthako</Text>
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
        bg="white"
      >
        <Heading size="md">Employee Basic and Tax Info</Heading>
        <VStack spacing={5}>
          <Text>Employee number: Majoro Futhoane</Text>
          <Text>Gross Pay: LSL 20 000.00</Text>
          <Text>Bank Account number: 11003554646</Text>
          <Text>Bank name: Standard Lesotho Bank</Text>
        </VStack>
      </Box>
      <Box
        w={["full", "md"]}
        p={[8, 10]}
        mt={[20, "10vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "green.600"]}
        borderRadius={10}
        bg="white"
      >
        <VStack spacing={5}>
          <Text>Accumulated Pay: LSL 5 000.03</Text>
          <Text>Number of Days Worked: 5</Text>
          <Text>Pay Per Day: LSL 900.00</Text>
          <Text>Withdrawable Amount: LSL 3 600.00</Text>
          <Text>Position: Technician</Text>
        </VStack>
        <HStack w="full" justify="space-between" mt="20px">
          <Checkbox borderColor="green"></Checkbox>
          <Link color="green.600" id="terms" to="/terms-and-conditions">
            Agree to terms and conditions.
          </Link>
          <Button colorScheme="green" onClick={onOpen}>
            Request Pay
          </Button>
          <AdvanceModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        </HStack>
      </Box>
    </Box>
  );
}

export default EmployeeHome;
