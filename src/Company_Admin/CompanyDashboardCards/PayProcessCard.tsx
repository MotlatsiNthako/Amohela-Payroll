import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function PayProcessCard() {
  return (
    <Box py={6} ml={35}>
      <Box
        maxW={"900px"}
        w={"full"}
        h={"200px"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <HStack spacing={10}>
            <Text
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              textAlign={"center"}
            >
              Employess Net Pay
            </Text>
            <Text
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              textAlign={"center"}
            >
              Payment Date
            </Text>
            <Text
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              textAlign={"center"}
            >
              No.Of Employees
            </Text>
          </HStack>
          <HStack spacing={150}>
            <Text color={"#000000"}>LSL 260 000</Text>
            <Text color={"#000000"}>30/08/2022</Text>
            <Text color={"#000000"}>26</Text>
          </HStack>
        </Stack>
        <Flex >
        <Button colorScheme="green" ml="650px">View Pay Details</Button>
          
        </Flex>
        
      </Box>
    </Box>
  );
}
