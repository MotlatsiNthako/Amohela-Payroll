import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FormHelperText } from "@chakra-ui/react";

type RegistrationValues = {
  phoneNumber: number;
  employeeNumber: string;
  amount: number;
};

interface ModalProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const AdvanceModal: FC<ModalProps> = ({ onClose, onOpen, isOpen }) => {
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
      title: "Success! You advance is being reviewed",
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
            phoneNumber: mydata.phoneNumber,
            employeeNumber: mydata.employeeNumber,
            amount: mydata.amount,
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
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Heading>Request Advance</Heading>
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel>Phone number</FormLabel>
                <Input
                  type="number"
                  id="phoneNumber"
                  aria-describedby="phoneNumber-helper-text"
                  {...register("phoneNumber", {
                    required: true,
                    maxLength: 11,
                  })}
                />
                <FormHelperText color="red">
                  {errors.phoneNumber?.type === "required" &&
                    "Phone number is required"}

                  {errors.phoneNumber?.type === "maxLength" &&
                    "Phone number maximum length is 11"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Employee number</FormLabel>
                <Input
                  type="text"
                  id="employeeNumber"
                  aria-describedby="employeeNumber-helper-text"
                  {...register("employeeNumber", {
                    required: true,
                    maxLength: 10,
                  })}
                />
                <FormHelperText color="red">
                  {errors.employeeNumber?.type === "required" &&
                    "Employee number is required"}

                  {errors.employeeNumber?.type === "maxLength" &&
                    "Employee number maximum length is 10"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  id="amount"
                  aria-describedby="amount-helper-text"
                  {...register("amount", {
                    required: true,
                  })}
                />
                <FormHelperText color="red">
                  {errors.amount?.type === "required" && "Amount is required"}
                </FormHelperText>
              </FormControl>
              <ModalFooter>
                <HStack spacing={210}>
                  <Button colorScheme="red" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="green"
                    isLoading={loading}
                    loadingText="Creating Account"
                    type="submit"
                    w={["full", "auto"]}
                  >
                    Submit
                  </Button>
                </HStack>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdvanceModal;
