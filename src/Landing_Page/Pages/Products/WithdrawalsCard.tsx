import { Box, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function WithdrawalsCard() {
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
            Anytime Withdrawals
          </Heading>
          <Text color={"#000000"} textAlign={"center"}>
          Anytime Withdrawals. We allow you to withdraw the amount you have worked for at any point in time
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
