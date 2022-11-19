import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoom } from "../api";
import { IRoomDetail } from "../types";
import { Box, Grid, GridItem, Heading, Image, Skeleton } from "@chakra-ui/react";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(["rooms", roomPk], getRoom);
  console.log(data);
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
    </Box>
  );
}