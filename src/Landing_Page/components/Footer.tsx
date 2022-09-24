import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text>Amo</Text>
            </Box>
            <Text fontSize={"sm"}>(c) 2022 All rights reserved</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            <Link href={"#"}>Payroll</Link>
            <Link href={"#"}>Budget</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>
            <Link href={"pricing"}>Pricing</Link>
            <Link href={"#"}>Customers</Link>
            <Link href={"#"}>Help Center</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Privacy and Terms</Link>
            <Link href={"#"}>Help Center</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
