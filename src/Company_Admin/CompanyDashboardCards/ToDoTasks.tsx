import {
  Box,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function ToDoTasks() {
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
              Advance Requests
            </Text>
          </HStack>
          <Box>
            <Text color={"#000000"}>9 Pending Approvals</Text>
            <Button colorScheme="green" ml="650px">View Pending Requests</Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
