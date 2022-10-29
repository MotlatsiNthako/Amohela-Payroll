import {
  Box,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  FormHelperText,

} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
//import axios from "../../APIs/axiosBaseURL";
import Footer from "../Landing_Page/components/Footer";
import NavBar from "../Landing_Page/components/NavBar";

type FormValues = {
  userName: string;
  password: string;
};

function SignIn() {
  const LOGIN_URL = "/api/v1/user/login";
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const showToast = () => {
    toast({
      position: "top",
      title: "Logged In Successfully..",
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
          LOGIN_URL,
          JSON.stringify({
            emailOrPhone: mydata.userName,
            password: mydata.password,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            localStorage.setItem("access_token", response.data.accessToken);
            localStorage.setItem("session", response.data);
            setLoading(false);
            reset();
            showToast();
            navigate("/dashboard");
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setLoginStatus("No Server Response");
      } else if (err.response?.status === 400) {
        setLoginStatus("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setLoginStatus("Unauthorized");
      } else {
        setLoginStatus("Login Failed");
      }
    }
  });

  return (
    <Box bg="#C4EEDF">
      <NavBar />
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
          <VStack spacing={4} align="flex-start" w="full">
            <VStack spacing={1} align={["flex-start", "center"]} w="full">
              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                Login
              </Heading>
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
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                id="userName"
                placeholder="Email or Phone Number"
                aria-describedby="email-helper-text"
                {...register("userName", { required: true })}
              />
              <FormHelperText color="red">
                {errors.userName?.type === "required" &&
                  "Email Address or Phone number required"}
              </FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Password"
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
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  "Required Password minLength is 10"}
                {errors.password?.type === "maxLength" &&
                  "Required Password maxLength is 30"}
                {errors.password?.type === "pattern" &&
                  "Password should at least include 1 Symbol,1 Uppercase, 1 Lowercase & 1 Number"}
              </FormHelperText>
            </FormControl>

            <FormControl textAlign="center" pb={{ base: "4.6%", md: "4.5%" }}>
              <Button
                size={{ base: "md", md: "md" }}
                w="full"
                mt="5%"
                colorScheme="green"
                id="submitBtn"
                color="white"
                type="submit"
                isLoading={loading}
                loadingText="Submitting"
              >
                Login
              </Button>

              <Button
                size={{ base: "md", md: "md" }}
                w="full"
                mt="5%"
                colorScheme="green"
                as={"a"}
                href={"registration"}
              >
                Register
              </Button>
            </FormControl>
            <Text
              textAlign="center"
              cursor="pointer"
              pb={{ base: "4%", md: "2%" }}
              color="gray.800"
            >
              <Link color="green.600" id="forgot" to="/forgot-password">
                Forgot password
              </Link>
            </Text>
          </VStack>
        </form>
      </Box>

      <Footer />
    </Box>
  );
}

export default SignIn;
