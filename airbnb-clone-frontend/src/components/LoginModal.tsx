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
import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>로그인 모달창</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={onSubmit as any}>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserCheck color={"gray"} />} />
              <Input
                required
                name={"username"}
                onChange={onChange}
                value={username}
                variant={"filled"}
                placeholder={"아이디 입력하셈"}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaKey color={"gray"} />} />
              <Input
                required
                name={"password"}
                onChange={onChange}
                value={password}
                type={"password"}
                variant={"filled"}
                placeholder={"비번 입력하셈"}
              />
            </InputGroup>
          </VStack>
          <Button type={"submit"} mt={"2rem"} w={"100%"} colorScheme={"red"}>
            눌러유
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
