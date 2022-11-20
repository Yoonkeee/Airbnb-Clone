import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { SiTesla } from "react-icons/si";
import { FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";
import { logOut } from "../api";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
  const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  const toast = useToast();
  const onLogOut = async () => {
    // const data = await logOut();
    const toastId = toast({
      title: "로그아웃 중...",
      description: "ㄱㄷㄱㄷ",
      status: "loading",
      position: "top-right",
      isClosable: true,
    });
    setTimeout(() => {
      toast.update(toastId, {
        status: "success",
        title: "ㅂㅂ",
        description: "또오셈",
        duration: 500,
      });
    }, 1000);
  };
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
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>로긴</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>
                  횐가입
                </Button>
              </LightMode>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar size={"md"} src={user.avatar} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>로그아웃</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
}
