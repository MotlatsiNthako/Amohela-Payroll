import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdLocationOn } from "react-icons/md";

import { HiOutlineMailOpen } from "react-icons/hi";

import { BsPerson } from "react-icons/bs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <Box bg="#C4EEDF">
     <NavBar/>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="green.500"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading textColor={"black"}>Contact Us</Heading>

                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          textColor={"black"}
                          _hover={{ border: "2px solid black" }}
                          leftIcon={<MdPhone color="black" size="20px" />}
                        >
                          (+266) 50936472
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          textColor={"black"}
                          color="#DCE2FF"
                          _hover={{ border: "2px solid black" }}
                          leftIcon={
                            <HiOutlineMailOpen color="black" size="20px" />
                          }
                        >
                          amo@payroll.org
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          textColor={"black"}
                          color="#DCE2FF"
                          _hover={{ border: "2px solid black" }}
                          leftIcon={
                            <MdLocationOn color="black" size="20px" />
                          }
                        >
                          Maseru, Lesotho
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>E-Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<HiOutlineMailOpen color="gray.800" />}
                            />
                            <Input type="email" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="green.500"
                            color="white"
                            _hover={{ bg: "green.400" }}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer/>
    </Box>
  );
}
