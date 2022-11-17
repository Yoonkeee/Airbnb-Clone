import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { SiTesla } from "react-icons/si";
import { FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
  const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <Stack
      alignItems={"center"}
      spacing={{ sm: 4, md: 0 }}
      justifyContent={"space-between"}
      px={"40"}
      py={"5"}
      direction={{ sm: "column", md: "row" }}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <SiTesla size={"48"} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label={"다크모드"}
          icon={<Icon />}
        />

        <Button onClick={onLoginOpen}>로긴</Button>
        <LightMode>
          <Button onClick={onSignUpOpen} colorScheme={"red"}>
            횐가입
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
}
