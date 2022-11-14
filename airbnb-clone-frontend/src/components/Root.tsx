import { Outlet } from "react-router-dom";
import { Box, Button, HStack } from "@chakra-ui/react";
import { SiTesla } from "react-icons/si";

export default function Root() {
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
          <Button>로긴</Button>
          <Button colorScheme={"red"}>횐가입</Button>
        </HStack>
        {/*여긴 Root.tsx*/}
      </HStack>
      <Outlet />
    </Box>
  );
}
