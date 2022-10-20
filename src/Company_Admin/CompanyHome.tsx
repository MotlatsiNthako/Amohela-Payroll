import {
  Box,
  Input,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import EarlyWithdrawals from "./CompanyDashboardCards/EarlyWithdrawals";
import PayProcessCard from "./CompanyDashboardCards/PayProcessCard";
import ToDoTasks from "./CompanyDashboardCards/ToDoTasks";

function CompanyHome() {

  const [error, setError] = useState({}) 
  useEffect(() =>{
    fetch('https://firesms-messaging-platform.herokuapp.com/user/all-users')
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => setError(err))
  }, [])
  return (
    <Box bg="#C4EEDF" ml="202px">
      <Box width="432px" height="56px" pl="50px" pt="10px">
        <InputGroup>
          <Input variant="filled" placeholder="Search Employee" />
          <InputRightElement children={<FaSearch />} />
        </InputGroup>
      </Box>
      <Stack pl="780PX">
        <HStack spacing={10}>
          <Button
            as={"a"}
            fontSize={"md"}
            fontWeight={400}
            variant={"link"}
            href={""}
            color="#000000"
          >
            Log Out
          </Button>
          <Text>Motlatsi Nthako</Text>
        </HStack>
      </Stack>

      <Box>
        <Heading pl="50px">Welcome Motlatsi Nthako!</Heading>
      </Box>
      <Stack pt={10}>
        <Heading as="h6" size="xs" pl="50px">
          Process Pay Run
        </Heading>
        <Box>
          <PayProcessCard />
        </Box>

        <Heading as="h6" size="xs" pl="50px">
          Early Withdrawals
        </Heading>
        <Box>
          <EarlyWithdrawals />
        </Box>

        <Heading as="h6" size="xs" pl="50px">
          To Do Tasks
        </Heading>
        <Box>
          <ToDoTasks />
        </Box>
      </Stack>
    </Box>
  );
}

export default CompanyHome;
