import React from "react";
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

interface ModalProps{
  onOpen: ()=>void
  onClose: ()=>void
  isOpen: boolean
}

const AdvanceModal:FC<ModalProps> = ({onClose,onOpen, isOpen}) => {
    
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
            <form>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input type="text"></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Employee Number</FormLabel>
                <Input type="email"></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input type="text"></Input>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={235}>
            <Button colorScheme="red" onClick={onClose}>Cancel</Button>
            <Button type="submit" colorScheme="green">Submit</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdvanceModal;
