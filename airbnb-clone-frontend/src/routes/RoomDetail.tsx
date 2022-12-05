import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoom, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";
import {
  Avatar,
  Box,
  Container,
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
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(["rooms", roomPk], getRoom);
  const { isLoading: isReviewsLoading, data: reviewsData } = useQuery<
    IReview[]
  >(["rooms", roomPk, "reviews"], getRoomReviews);
  const [dates, setDates] = useState<Date[]>();
  useEffect(() => {
    if (dates) {
      const [firstDate, secondDate] = dates;
      const [checkIn] = firstDate.toJSON().split("T");
      const [checkOut] = secondDate.toJSON().split("T");
      console.log(checkIn, checkOut);
    }
  }, [dates]);
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
              {data?.photos[index] ? (
                <Image
                  objectFit={"cover"}
                  w={"100%"}
                  h={"100%"}
                  src={data.photos[index].file}
                />
              ) : null}
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <Grid gap={20} templateColumns={"2fr 1fr"} maxW="container.lg">
        <Box>
          <HStack justifyContent={"space-between"} mt={10}>
            <VStack alignItems={"flex-start"}>
              <Skeleton isLoaded={!isLoading} height={"30%"}>
                <Heading fontSize={"2xl"}>
                  집주인 : {data?.owner.name} 님
                </Heading>
                <HStack justifyContent={"flex-start"} w={"100%"}>
                  <Text>{data?.toilets} 화장실</Text>
                  <Text>•</Text>
                  <Text>{data?.rooms} 방</Text>
                </HStack>
              </Skeleton>
            </VStack>
            <Avatar
              name={data?.owner.name}
              size={"xl"}
              src={"data?.owner.avatar"}
            />
          </HStack>
          <Box mt={10}>
            <Heading mb={5} fontSize={"2xl"}>
              <HStack>
                <FaStar /> <Text>{data?.rating}</Text>
                <Text>•</Text>
                <Text>리뷰 {reviewsData?.length}개</Text>
              </HStack>
            </Heading>
            <Container mt={15} maxW={"container.lg"} mx={"none"}>
              <Grid gap={10} templateColumns={"1fr 1fr"}>
                {reviewsData?.map((review, index) => (
                  <VStack alignItems={"flex-start"} key={index}>
                    <HStack>
                      <Avatar
                        name={review.user.name}
                        src={review.user.avatar}
                        size={"md"}
                      />
                      <VStack spacing={0} alignItems={"flex-start"}>
                        <Heading fontSize={"md"}>{review.user.name}</Heading>
                        <HStack spacing={1}>
                          <FaStar size={"12px"} />
                          <Text>{review.rating}</Text>
                        </HStack>
                      </VStack>
                    </HStack>
                    <Text>{review.payload}</Text>
                  </VStack>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
        <Box pt={10}>
          <Calendar
            onChange={setDates}
            minDate={new Date()}
            maxDate={new Date(Date.now() + 3600 * 24 * 7 * 4 * 6 * 1000)}
            selectRange
            formatDay={(locale, date) =>
              date.toLocaleString("en", { day: "numeric" })
            }
            prev2Label={null}
            next2Label={null}
          />
        </Box>
      </Grid>
    </Box>
  );
}
