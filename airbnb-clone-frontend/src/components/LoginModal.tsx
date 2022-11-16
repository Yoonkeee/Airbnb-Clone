import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { FaKey, FaUserCheck } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>로그인 모달창</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserCheck color={"gray"} />} />
              <Input variant={"filled"} placeholder={"아이디 입력하셈"} />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaKey color={"gray"} />} />
              <Input variant={"filled"} placeholder={"비번 입력하셈"} />
            </InputGroup>
          </VStack>
          <Button mt={"2rem"} w={"100%"} colorScheme={"red"}>
            눌러유
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
