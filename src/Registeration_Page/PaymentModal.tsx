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

interface ModalProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const PaymentModal: FC<ModalProps> = ({ onClose, onOpen, isOpen }) => {
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Heading>Payment</Heading>
            <form>
              <HStack spacing={2}>
                <FormControl>
                  <FormLabel>From</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>To</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </HStack>
              <HStack spacing={2}>
                <FormControl>
                  <FormLabel>Employee name</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Amount</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </HStack>
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

export default PaymentModal;
