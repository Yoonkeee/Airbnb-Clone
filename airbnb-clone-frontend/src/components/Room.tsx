import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"} spacing={-0.5}>
      <Box position={"relative"} overflow={"hidden"} mb={2} rounded={"2xl"}>
        <Image
          minH="280"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/07c2691a-7a40-4740-bf9b-6e821b52547b.jpeg?im_w=720"
        />
        <Button variant={"unstyled"} position={"absolute"} top={5} right={5} color={"white"}>
          <FaRegHeart size={35} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} noOfLines={1} fontSize={"md"}>
            그라스 밸리(Grass Valley), 캘리포니아, 미국
          </Text>
          <HStack spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          서울 강남임
        </Text>

        <Text fontSize={"sm"} color={gray}>
          <Text as={"b"}>백만원</Text> / 1밤
        </Text>
      </Box>
    </VStack>
  );
}
