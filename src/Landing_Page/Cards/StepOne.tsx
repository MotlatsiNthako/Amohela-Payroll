import { Box, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";

export interface CardProps {
  heading: string;
  body: string;
}
  
export default function StepOne() {
  return (
    <Box py={6} ml={35}>
      <Box
        maxW={"300px"}
        w={"400px"}
        h={"200px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
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
            {/* {heading} */}
            Step 1
          </Heading>
          <Text color={"#000000"} textAlign={"center"}>
            {/* {body} */}
            Company registers with Amo
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}



