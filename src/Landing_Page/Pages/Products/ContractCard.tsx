import { Box, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function ContractCard() {
  return (
    <Box py={6} ml={35}>
      <Box
        maxW={"300px"}
        w={"full"}
        h={"200px"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            textAlign={"center"}
          >
            Contract
          </Heading>
          <Text color={"#000000"} textAlign={"center"}>
          Contracts that comply with local laws
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
