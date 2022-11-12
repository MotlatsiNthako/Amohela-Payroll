import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormHelperText,
  useToast,
  Select,
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
  CompanyName: string;
  CompanyIndustry: string;
  CompanyLocation: string;
  PayrollDate: Date;
  BaseCountry: string;
  PhoneNumber: number;
  ContractType: string;
  Password: string;
};
function Registration() {
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const REGISTRATION_URL = "http://13.233.138.67:3000/company";
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
            CompanyName: mydata.CompanyName,
            CompanyIndustry: mydata.CompanyIndustry,
            CompanyLocation: mydata.CompanyLocation,
            PayrollDate: mydata.PayrollDate,
            BaseCountry: mydata.BaseCountry,
            PhoneNumber: mydata.PhoneNumber,
            ContractType: mydata.ContractType,
            Password: mydata.Password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          if (response.status >= 201 && response.status < 300) {
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
                  type="text"
                  id="CompanyName"
                  placeholder="Company name"
                  aria-describedby="CompanyName-helper-text"
                  {...register("CompanyName", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.CompanyName?.type === "required" &&
                    "Company name is required"}

                  {errors.CompanyName?.type === "maxLength" &&
                    "Required name maxLength is 30"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Company Industry</FormLabel>
                <Input
                  type="text"
                  id="industry"
                  placeholder="Company industry"
                  aria-describedby="industry-helper-text"
                  {...register("CompanyIndustry", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.CompanyIndustry?.type === "required" &&
                    "Company industry is required"}

                  {errors.CompanyIndustry?.type === "maxLength" &&
                    "Required name maxLength is 30"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Company Location</FormLabel>
                <Input
                  type="text"
                  id="location"
                  placeholder="Company location"
                  aria-describedby="location-helper-text"
                  {...register("CompanyLocation", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.CompanyLocation?.type === "required" &&
                    "Company location is required"}

                  {errors.CompanyLocation?.type === "maxLength" &&
                    "Required name maxLength is 30"}
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  id="date"
                  aria-describedby="date-helper-text"
                  {...register("PayrollDate", {
                    required: true,
                  })}
                />
                <FormHelperText color="red">
                  {errors.PayrollDate?.type === "required" &&
                    "Date is required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Country Name">Country</FormLabel>
                <Select
                  id="country"
                  placeholder="Select Country"
                  {...register("BaseCountry", { required: true })}
                >
                  <option value="Lesotho">Lesotho</option>
                  <option value="Botwsana">Botwsana</option>
                </Select>
                <FormHelperText color="red">
                  {errors.BaseCountry?.type === "required" &&
                    "Country name is required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="number"
                  id="phone"
                  placeholder="Phone Number"
                  aria-describedby="number-helper-text"
                  {...register("PhoneNumber", {
                    required: true,
                    minLength: 8,
                    maxLength: 12,
                  })}
                />
                <FormHelperText color="red">
                  {errors.PhoneNumber?.type === "required" &&
                    "Phone number is required"}
                  {errors.PhoneNumber?.type === "minLength" &&
                    "Phone numbers must include at least 8 numbers"}
                  {errors.PhoneNumber?.type === "maxLength" &&
                    "Entered number is more than 12 digits"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Company Contract">
                  Company Contract
                </FormLabel>
                <Select
                  id="contractType"
                  placeholder="Select Contract"
                  {...register("ContractType", { required: true })}
                >
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Contract">Contract</option>
                </Select>
                <FormHelperText color="red">
                  {errors.ContractType?.type === "required" &&
                    "Contract Type is required"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  aria-describedby="password-helper-text"
                  {...register("Password", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,30}$/,
                    minLength: 10,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red">
                  {errors.Password?.type === "required" &&
                    "Password is required"}
                  {errors.Password?.type === "minLength" &&
                    "Required Password minLength is 10"}
                  {errors.Password?.type === "maxLength" &&
                    "Required Password maxLength is 30"}
                  {errors.Password?.type === "pattern" &&
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
