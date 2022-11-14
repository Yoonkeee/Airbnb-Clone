import { Outlet } from "react-router-dom";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { SiTesla } from "react-icons/si";
import { FaKey, FaMoon, FaUserCheck } from "react-icons/fa";

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        px={"10"}
        py={"5"}
        borderBottomWidth={1}
      >
        <Box color="red.500">
          <SiTesla size={"48"} />
        </Box>
        <HStack spacing={2}>
          <IconButton
            variant={"ghost"}
            aria-label={"다크모드"}
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>로긴</Button>
          <Button colorScheme={"red"}>횐가입</Button>
        </HStack>
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
            </ModalBody>
            <ModalFooter>
              <Button mt={"2rem"} w={"100%"} colorScheme={"red"}>
                눌러유
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  );
}
