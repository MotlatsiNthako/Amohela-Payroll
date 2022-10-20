import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StepOne, { CardProps } from "../Cards/StepOne";
import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react";
import { GiTimeBomb } from "react-icons/gi";
import { FaRocket, FaTools, FaPercentage } from "react-icons/fa";
import StepThree from "../Cards/StepThree";
import StepTwo from "../Cards/StepTwo";


function Home() {
  const steps: CardProps[] = [
    {
      heading: "Step 1",
      body: "Company registers with Amo",
    },
    {
      heading: "Step 2",
      body: "Employees get access to Amo’s platform",
    },
    {
      heading: "Step 3",
      body: "Employees request salary advance anytime during the month",
    },
  ];
  return (
    <Box bg="#C4EEDF">
      <NavBar />
      <></>
      <Box>
        <Text
          mt="5"
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="bold"
          color="black"
          textAlign="center"
        >
          Amo
        </Text>
        <Center>
          <Text fontSize={{ base: "24px", md: "40px", lg: "24px" }}>
            Get paid part of your salary at any point during the month
          </Text>
        </Center>

        <Button
          as={"a"}
          colorScheme="green"
          size="lg"
          ml="550"
          mt="50"
          href={"registration"}
        >
          Partner with us
        </Button>
        <Heading
          mt="34"
          textAlign="center"
          fontSize={{ base: "24px", md: "40px", lg: "56px" }}
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          id="benefits"
        >
          Employee Benefits
        </Heading>
        <HStack spacing={1} mt={100}>
          <Text
            position="absolute"
            ml="180"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize={{ base: "24px", md: "40px", lg: "24px" }}
            textAlign="center"
            color="#000000"
          >
            <Center>
              <FaPercentage />
            </Center>
            <Heading>0% interest</Heading>
            We offer no interest on payments
          </Text>
          <Text
            pl={650}
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize={{ base: "24px", md: "40px", lg: "24px" }}
            textAlign="center"
            color="#000000"
          >
            <Center>
              <GiTimeBomb />
            </Center>
            <Heading>Hassle Free</Heading>
            There is no paper work required, zero stress
          </Text>
        </HStack>
        <HStack mt={150}>
          <Text
            position="absolute"
            ml="130"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize={{ base: "24px", md: "40px", lg: "24px" }}
            textAlign="center"
            color="#000000"
          >
            <Center>
              <FaTools />
            </Center>
            <Heading>Fixed transaction fee</Heading>
            Employees only pay a fixed transaction fee
          </Text>
          <Text
            position="absolute"
            pl={700}
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize={{ base: "24px", md: "40px", lg: "24px" }}
            textAlign="center"
            color="#000000"
          >
            <Center>
              <FaRocket />
            </Center>
            <Heading>Simple and quick</Heading>
            Get paid on the same day
          </Text>
        </HStack>
        <Heading
          position="absolute"
          ml="550"
          mt="140"
          fontSize={{ base: "24px", md: "40px", lg: "36px" }}
          textAlign="center"
          color="#000000"
          id="Solution"
        >
          How it works
        </Heading>

        <VStack mt="300" spacing={"50px"} alignItems={"center"}>
          <Flex>
            {/* {steps.map((step, i) => (
              <StepOne heading={step.heading} body={step.body} />
            ))} */}
            <StepOne/>
            <StepTwo/>
            <StepThree/>
          </Flex>
        </VStack>
      </Box>

      <Box mt="100">
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
