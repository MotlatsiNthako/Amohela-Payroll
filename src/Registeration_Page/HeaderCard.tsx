import { Box, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function HeaderCard() {
  return (
    <Box py={6} ml={35}>
      <Box
        maxW={"600px"}
        w={"full"}
        h={"200px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          
          <Text color={"#000000"} textAlign={"center"} p={"4"}>
          With Amo we offer no interests on payments, there is no paper work required.<br/>
          Employees only pay a fixed transaction fee.<br/>Get paid on the same day.<br/> Sign up
          to partner with us
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
