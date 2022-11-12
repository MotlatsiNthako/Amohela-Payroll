import { ReactNode } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("green.600", "green.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Products() {
  return (
    <Box bg="#C4EEDF">
      <Box>
        <NavBar />
      </Box>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" pt="20px">
          Products
        </Heading>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Payroll
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                Payroll for any type of worker
                <br />
                in Lesotho and Botswana
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Anytime Withdrawals
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  Anytime Withdrawals. We allow
                  <br />
                  you to withdraw the amount you
                  <br />
                  have worked for any point in
                  <br />
                  time
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Contract
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                Contract that comply with
                <br /> local laws
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
      </Stack>
      <Footer />
    </Box>
  );
}
