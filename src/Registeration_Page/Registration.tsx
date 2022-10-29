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
  FormHelperText,
  Flex,
  useToast,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";
import HeaderCard from "./HeaderCard";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Stack } from "@chakra-ui/react";

type RegistrationValues = {
  companyName: string;
  industry: string;
  location: string;
  date: string;
  country: string;
  phoneNumber: string;
  contractType: string;
  password: string;
};
function Registration() {
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const REGISTRATION_URL = "/api/v1/user";
  const toast = useToast();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationValues>();

  const showToast = () => {
    toast({
      position: "top",
      title: "Registration Successful",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(
          REGISTRATION_URL,
          {
            companyName: mydata.companyName,
            industry: mydata.industry,
            location: mydata.location,
            date: mydata.date,
            country: mydata.country,
            phoneNumber: mydata.phoneNumber,
            contractType: mydata.contractType,
            password: mydata.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setLoading(false);
            reset();
            showToast();
            navigate("/signin");
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setLoginStatus("No Server Response");
      } else if (err.response?.status === 400) {
        setLoginStatus("User Details Already Exists");
      } else {
        setLoginStatus("User Registration Failed");
      }
    }
  });

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
          mb={[20, "10vh"]}
          mx="auto"
          border={["none", "1px"]}
          borderColor={["", "green.600"]}
          borderRadius={10}
          bg="white"
        >
          <form onSubmit={onSubmit}>
            <Stack spacing={4} align="flex-start" w="full">
              <VStack spacing={1} align={["flex-start", "center"]} w="full">
                <Heading>Registration</Heading>
              </VStack>
              <FormControl>
                <FormHelperText
                  pb={{ base: "5%", md: "5%" }}
                  textAlign="center"
                  fontFamily="sans-serif"
                  fontWeight="semi-bold"
                  color="red"
                >
                  {loginStatus}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input
                  type="companyName"
                  id="companyName"
                  placeholder="Company name"
                  aria-describedby="companyName-helper-text"
                  {...register("companyName", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.companyName?.type === "required" &&
                    "Company name is required"}

                  {errors.companyName?.type === "maxLength" &&
                    "Required name maxLength is 30"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Company Industry</FormLabel>
                <Input
                  type="industry"
                  id="industry"
                  placeholder="Company industry"
                  aria-describedby="industry-helper-text"
                  {...register("industry", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.industry?.type === "required" &&
                    "Company industry is required"}

                  {errors.industry?.type === "maxLength" &&
                    "Required name maxLength is 30"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Company Location</FormLabel>
                <Input
                  type="location"
                  id="location"
                  placeholder="Company location"
                  aria-describedby="location-helper-text"
                  {...register("location", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.location?.type === "required" &&
                    "Company location is required"}

                  {errors.location?.type === "maxLength" &&
                    "Required name maxLength is 30"}
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  id="date"
                  aria-describedby="date-helper-text"
                  {...register("date", {
                    required: true,
                  })}
                />
                <FormHelperText color="red">
                  {errors.password?.type === "required" && "Date is required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Country Name">Country</FormLabel>
                <Select
                  id="country"
                  placeholder="Select Country"
                  variant="filled"
                  {...register("country", { required: true })}
                >
                  <option value="Lesotho">Lesotho</option>
                  <option value="Botwsana">Botwsana</option>
                </Select>
                <FormHelperText color="red">
                  {errors.country?.type === "required" &&
                    "Country name is required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="number"
                  id="phone"
                  variant="filled"
                  placeholder="Phone Number"
                  aria-describedby="number-helper-text"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 8,
                    maxLength: 12,
                  })}
                />
                <FormHelperText color="red">
                  {errors.phoneNumber?.type === "required" &&
                    "Phone number is required"}
                  {errors.phoneNumber?.type === "minLength" &&
                    "Phone numbers must include at least 8 numbers"}
                  {errors.phoneNumber?.type === "maxLength" &&
                    "Entered number is more than 12 digits"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Country Name">Company Contract</FormLabel>
                <Select
                  id="contractType"
                  placeholder="Select Contract"
                  variant="filled"
                  {...register("contractType", { required: true })}
                >
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Contract">Contract</option>
                </Select>
                <FormHelperText color="red">
                  {errors.country?.type === "required" &&
                    "Contract Type is required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  variant="filled"
                  aria-describedby="password-helper-text"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,30}$/,
                    minLength: 10,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.password?.type === "required" &&
                    "Password is required"}
                  {errors.password?.type === "minLength" &&
                    "Required Password minLength is 10"}
                  {errors.password?.type === "maxLength" &&
                    "Required Password maxLength is 30"}
                  {errors.password?.type === "pattern" &&
                    "Password should at least include 1 Symbol,1 Uppercase, 1 Lowercase & 1 Number"}
                </FormHelperText>
              </FormControl>
              <Button
                colorScheme="green"
                isLoading={loading}
                loadingText="Creating Account"
                type="submit"
                w={["full", "auto"]}
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Registration;
