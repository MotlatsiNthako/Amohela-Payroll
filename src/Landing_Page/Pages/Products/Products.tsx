import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import NavBar from "../../components/NavBar";
import PayrollCard from "./PayrollCard";
import ContractCard from "./ContractCard";
import WithdrawalsCard from "./WithdrawalsCard";
import { HStack, Heading } from "@chakra-ui/react";
import Footer from "../../components/Footer";

function Products() {
  return (
    <Box bg="#C4EEDF">
      <NavBar />
      <Heading ml="0px" mt="120px" textAlign="center" color="#000000">
        Products
      </Heading>
      <HStack spacing={80} ml={140}>
        <PayrollCard />
        <ContractCard />
      </HStack>
      <Box ml="450px">
        <WithdrawalsCard />
      </Box>
      <Footer />
    </Box>
  );
}

export default Products;
