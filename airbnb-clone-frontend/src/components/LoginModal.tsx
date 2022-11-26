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
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaKey, FaUserCheck } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface IForm {
  username: string;
  password: string;
}
export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit = (data: IForm) => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>로그인 모달창</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserCheck color={"gray"} />} />
              <Input
                isInvalid={Boolean(errors.username?.message)}
                required
                {...register("username", { required: "아이디 입력하셔야죠" })}
                variant={"filled"}
                placeholder={"아이디 입력하셈"}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaKey color={"gray"} />} />
              <Input
                isInvalid={Boolean(errors.password?.message)}
                required
                {...register("password", { required: "비번도 입력하셔야죠" })}
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
