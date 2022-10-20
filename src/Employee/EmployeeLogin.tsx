import {
  Box,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Link,
  Text,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
//import { useHistory } from 'react-router-dom';
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const history=useHistory();

  useEffect(() => {});
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
        bg="white"
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start" w="full">
                <VStack spacing={1} align={["flex-start", "center"]} w="full">
                  <Heading>Employee Login</Heading>
                </VStack>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">E-mail Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    pattern="('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl
                  isInvalid={!!errors.password && touched.password}
                  isRequired
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value: string) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <HStack w="full" justify="space-between">
                  <Checkbox borderColor="green">Remember me.</Checkbox>
                  <Button
                    colorScheme="green"
                    w={["full", "auto"]}
                    as={"a"}
                    href={"employee-home"}
                    // href={"system-admin-menu"}
                  >
                    Login
                  </Button>
                </HStack>
                <HStack w="full" justify="space-between">
                  <Text>
                    <Link color="green.600" href="forgot-password">
                    Forgot password?{" "}
                    </Link>
                  </Text>
                </HStack>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>

      <Footer />
    </Box>
  );
}

export default SignIn;
