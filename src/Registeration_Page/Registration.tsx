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
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";
import HeaderCard from "./HeaderCard";
import axios from "axios";

const CreateCompanyResponse = {
  companyName: String,
  registerationNumber: String,
  location: String,
  password: Number,
  logo: String,
  paymentDate: Date,
  contractType: String,
};

async function createCompany() {
  try {
    const { data } = await axios.post<typeof CreateCompanyResponse>(
      "https://firesms-messaging-platform.herokuapp.com/",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error meassage:", error.message);

      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "Unxpected error occurred";
    }
  }
}
createCompany();
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
          bg="white"
        >
          <form>
            <VStack spacing={4} align="flex-start" w="full">
              <VStack spacing={1} align={["flex-start", "center"]} w="full">
                <Heading>Registration</Heading>
              </VStack>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input rounded="none" variant="filled" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Registeration number</FormLabel>
                <Input rounded="none" variant="filled" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Company Location</FormLabel>
                <Input rounded="none" variant="filled" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input rounded="none" variant="filled" type="password" />
              </FormControl>
              <FormControl>
                <FormLabel>Company Logo</FormLabel>
                <Input rounded="none" type="file" variant="filled" />
              </FormControl>
              <FormControl>
                <FormLabel>Pay Date</FormLabel>
                <Input rounded="none" variant="filled" type="date" />
              </FormControl>
              <FormControl>
                <Select placeholder="Company Contract" variant="filled">
                  <option value="option1">Basic</option>
                  <option value="option2">Premium</option>
                  <option value="option3">Contract</option>
                </Select>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="green.300"
                    fontSize="1.2em"
                    children="LSL"
                  />
                  <Input placeholder="Company Cost" variant="filled" />
                </InputGroup>
              </FormControl>

              <Button colorScheme="green" type="submit" w={["full", "auto"]}>
                Register
              </Button>
            </VStack>
          </form>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Registration;
