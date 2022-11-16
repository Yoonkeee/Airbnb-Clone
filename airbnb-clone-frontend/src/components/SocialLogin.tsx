import { Box, Button, Divider, HStack, Text } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box>
      <HStack my={5}>
        <Divider />
        <Text
          textTransform={"uppercase"}
          color={"gray.400"}
          fontSize={"xs"}
          as={"b"}
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <HStack>
        <Button w={"50%"} leftIcon={<FaGithub />} colorScheme={"telegram"}>
          깃헙으로 로그인
        </Button>
        <Button w={"50%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
          카카오로 로그인
        </Button>
      </HStack>
    </Box>
  );
}
