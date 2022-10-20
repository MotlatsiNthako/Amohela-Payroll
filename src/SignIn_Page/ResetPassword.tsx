import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";

export default function ResetPassword(): JSX.Element {
  return (
    <Box bg="#C4EEDF">
      <NavBar />

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
            Enter new password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>New-Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"green.500"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Footer />
    </Box>
  );
}
