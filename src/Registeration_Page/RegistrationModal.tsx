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
  FormHelperText,
  Input,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { FC } from "react";

interface ModalProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const RegistrationModal: FC<ModalProps> = ({ onClose, onOpen, isOpen }) => {
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Heading>Add Employee</Heading>
            <form>
              <HStack spacing={2}>
                <FormControl>
                  <FormLabel>Employee Name</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email"></Input>
                </FormControl>
              </HStack>
              <HStack spacing={2}>
                <FormControl>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type="date"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </HStack>
              <HStack spacing={2}>
                <FormControl>
                  <FormLabel>Department</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Position</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Net Pay</FormLabel>
                <Input type="text"></Input>
                <FormHelperText>We keep your info secure</FormHelperText>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={235}>
              <Button colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="green">
                Submit
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegistrationModal;
