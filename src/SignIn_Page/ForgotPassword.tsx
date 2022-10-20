import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";

type ForgotPasswordFormInputs = {
  email: string;
};

export default function ForgotPassword(): JSX.Element {
  return (
    <Box bg="#C4EEDF">
      <NavBar/>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              as={"a"}
              href={"reset-password"}
              bg={"green.500"}
              color={"white"}
              _hover={{
                bg: "green.400",
              }}
            >
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Footer/>
    </Box>
  );
}
