import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function RegistrationCard() {
  return (
    <Box py={6} ml={35} >
      <Box
        maxW={"1000px"} //It was 300px
        w={"full"}
        h={"600px"}
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
            Company Registration
          </Heading>
          <form>
            <FormControl isRequired>
              <Flex>
                <Input placeholder="Company Name" />
              </Flex>
              <Flex>
                <Input placeholder="Company Industry" />
              </Flex>
              <Flex>
                <Input placeholder="Company Location" />
              </Flex>
              <Flex>
                <Input placeholder="company logo" />
              </Flex>
              <Flex>
                <Input type="date" />
              </Flex>
              <Flex>
                <Input placeholder="Contract Type" />
              </Flex>
              <Flex>
                <Input placeholder="Company Cost" />
              </Flex>
              <Flex>
                <Input type="password" placeholder="Password" />
              </Flex>
            </FormControl>
          </form>

          <Button colorScheme="green">Register</Button>
        </Stack>
      </Box>
    </Box>
  );
}
