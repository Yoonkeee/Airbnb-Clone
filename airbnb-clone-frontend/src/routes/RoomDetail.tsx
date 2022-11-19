import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoom, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";
import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(["rooms", roomPk], getRoom);
  const { isLoading: isReviewsLoading, data: reviewsData } = useQuery<IReview[]>(
    ["rooms", roomPk, "reviews"],
    getRoomReviews
  );
  return (
    <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
      <Skeleton h={"43px"} w={"25%"} isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt={8}
        rounded={"xl"}
        overflow={"hidden"}
        gap={8}
        h={"60vh"}
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h={"100%"} w={"100%"}>
              <Image objectFit={"cover"} w={"100%"} h={"100%"} src={data?.photos[index].file} />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack w={"40%"} justifyContent={"space-between"} mt={10}>
        <VStack alignItems={"flex-start"}>
          <Skeleton isLoaded={!isLoading} height={"30%"}>
            <Heading fontSize={"2xl"}>이 집은 {data?.owner.name} 님 꺼임</Heading>
            <HStack justifyContent={"flex-start"} w={"100%"}>
              <Text>{data?.toilets} 화장실</Text>
              <Text>•</Text>
              <Text>{data?.rooms} 방</Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar name={data?.owner.name} size={"xl"} src={"data?.owner.avatar"} />
      </HStack>
      <Box mt={10}>
        <Heading fontSize={"2xl"}>
          <HStack>
            <FaStar /> <Text>{data?.rating}</Text>
            <Text>•</Text>
            <Text>리뷰 {reviewsData?.length}개</Text>
          </HStack>
        </Heading>
      </Box>
    </Box>
  );
}
