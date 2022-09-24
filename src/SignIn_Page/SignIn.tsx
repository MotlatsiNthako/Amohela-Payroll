import {
  Box,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Link,
  Text,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";

function SignIn() {
  const [input, setInput] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Box bg="#C4EEDF">
      <NavBar />
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
            <Heading>Login</Heading>
          </VStack>
          <FormControl isInvalid={isError}>
            <FormLabel>E-mail Address</FormLabel>
            <Input
              type="email"
              value={input}
              onChange={handleInputChange}
              rounded="none"
              variant="filled"
            />
            {!isError ? (
              <FormHelperText>
                Enter the email that you registered with.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input rounded="none" variant="filled" type="password" />
          </FormControl>
          <HStack w="full" justify="space-between">
            <Checkbox borderColor="green">Remember me.</Checkbox>
            <Button variant="link" colorScheme="green">
              Forget Password
            </Button>
          </HStack>
          <HStack w="full" justify="space-between">
            <Button
              rounded="none"
              colorScheme="green"
              w={["full", "auto"]}
              as={"a"}
              href={"admin-dashboard/admin"}
              // href={"system-admin-menu"}
              
            >
              Login
            </Button>
            <Text>
              Don't have an account?{" "}
              <Link color="green.600" href="registration">
                Register
              </Link>
            </Text>
          </HStack>
        </VStack>
      </Box>

      <Footer />
    </Box>
  );
}

export default SignIn;
