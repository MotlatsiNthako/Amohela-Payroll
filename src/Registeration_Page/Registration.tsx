import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";
import HeaderCard from "./HeaderCard";

function Registration() {
  return (
    <Box bg="#C4EEDF">
      <NavBar />
      <Center>
        <HeaderCard />
      </Center>
      <Box>
        <></>
        <Box
          w={["full", "md"]}
          p={[8, 10]}
          mt={[20, "10vh"]}
          mx="auto"
          border={["none", "1px"]}
          borderColor={["", "green.600"]}
          borderRadius={10}
        >
          <VStack spacing={4} align="flex-start" w="full">
            <VStack spacing={1} align={["flex-start", "center"]} w="full">
              <Heading>Registration</Heading>
            </VStack>
            <FormControl>
              <FormLabel>Company Name</FormLabel>
              <Input rounded="none" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Company Registration</FormLabel>
              <Input rounded="none" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Company Location</FormLabel>
              <Input rounded="none" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Company Logo</FormLabel>
              <Input rounded="none" type="file" variant="filled"/>
            </FormControl>
            <FormControl>
              <FormLabel>Pay Date</FormLabel>
              <Input rounded="none" variant="filled" type="date" />
            </FormControl>
            <FormControl>
              <Select placeholder="Company Contract" variant="filled">
                <option value="option1">Premium</option>
                <option value="option2">Contract</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="green.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Company Cost" variant="filled"/>
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </FormControl>

            <Button rounded="none" colorScheme="green" w={["full", "auto"]}>
              Register
            </Button>
          </VStack>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

export default Registration;
