import { Box, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function StepThree() {
  return (
    <Box py={6} ml={35}>
      <Box
        maxW={'300px'}
        w={'full'}
        h={'200px'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            textAlign={'center'}
          >
            Step 3
          </Heading>
          <Text color={'#000000'} textAlign={'center'}>
          Employees request salary advance anytime during the month
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
