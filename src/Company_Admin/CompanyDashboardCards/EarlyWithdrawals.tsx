import {
    Box,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    HStack,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  
  export default function EarlyWithdrawals() {
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
                Total Amount Withdrawn
              </Text>
              <Text
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
                textAlign={"center"}
              >
                No.Of Withdrawals
              </Text>
            </HStack>
            <HStack spacing={300}>
              <Text color={"#000000"}>
                LSL 25 000
              </Text>
              
              <Text color={"#000000"}>
                 3
              </Text>
            </HStack>
          </Stack>
          <Button colorScheme="green"  ml="650px">View Withdrawals Details</Button>
        </Box>
      </Box>
    );
  }
  