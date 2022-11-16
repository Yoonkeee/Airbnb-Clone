import { Box, Button, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { SiTesla } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
  const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
  return (
    <HStack justifyContent={"space-between"} px={"10"} py={"5"} borderBottomWidth={1}>
      <Box color="red.500">
        <SiTesla size={"48"} />
      </Box>
      <HStack spacing={2}>
        <IconButton variant={"ghost"} aria-label={"다크모드"} icon={<FaMoon />} />
        <Button onClick={onLoginOpen}>로긴</Button>
        <Button onClick={onSignUpOpen} colorScheme={"red"}>
          횐가입
        </Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
