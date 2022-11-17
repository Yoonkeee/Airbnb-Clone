import { Box, Grid, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <Grid mt={10} px={40} columnGap={4} rowGap={8} templateColumns={"repeat(4, 1fr)"}>
      <VStack alignItems={"flex-start"} spacing={-0.5}>
        <Box overflow={"hidden"} mb={2} rounded={"3xl"}>
          <Image
            h="280"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-729597790487190657/original/07c2691a-7a40-4740-bf9b-6e821b52547b.jpeg?im_w=720"
          />
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
          <Text fontSize={"sm"} color={"gray.600"}>
            서울 강남임
          </Text>

          <Text fontSize={"sm"} color={"gray.600"}>
            <Text as={"b"}>백만원</Text> / 1밤
          </Text>
        </Box>
      </VStack>
    </Grid>
  );
}
