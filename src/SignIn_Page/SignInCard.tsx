import {
  Box,
  Text,
  Stack,
  useColorModeValue,
  Input,
  FormControl,
  FormLabel,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";

export default function SignInCard() {
  return (
    <Box py={6} ml={35}>
      <Box
        maxW={"300px"}
        w={"full"}
        h={"300px"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <form>
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input placeholder="First name" />
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <Button
              colorScheme="green"
              size="sm"
              as={"a"}
              href={"admin-dashboard/admin"}
            >
              Login
            </Button>
            <Text>
              <Link color="teal.500" href="forget-password">
              Forget password
              </Link>
            </Text>
            <Text>
              Don't have an account?{" "}
              <Link color="teal.500" href="registration">
                Register
              </Link>
            </Text>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
