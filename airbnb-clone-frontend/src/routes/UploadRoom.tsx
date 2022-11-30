import ProtectedPage from "../components/ProtectedPage";
import HostOnlyPage from "../components/HostOnlyPage";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaBed, FaMoneyBill, FaToilet } from "react-icons/fa";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAmenities, getCategories } from "../api";
import { IAmenity, ICategory } from "../types";

export default function UploadRoom() {
  const { data: amenities, isLoading: isAmenitiesLoading } = useQuery<
    IAmenity[]
  >(["amenities"], getAmenities);
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<
    ICategory[]
  >(["categories"], getCategories);
  return (
    <ProtectedPage>
      <HostOnlyPage>
        <Box pb={40} mt={10} px={{ base: 10, lg: 40 }}>
          <Container>
            <Heading textAlign={"center"}>방 만들기</Heading>
            <VStack spacing={5} as={"form"} mt={5}>
              <FormControl>
                <FormLabel>이름</FormLabel>
                <Input type={"text"} />
              </FormControl>
              <FormControl>
                <FormLabel>도시</FormLabel>
                <Input type={"text"} />
              </FormControl>
              <FormControl>
                <FormLabel>주소</FormLabel>
                <Input type={"text"} />
              </FormControl>
              <HStack>
                <FormControl>
                  <FormLabel>가격</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children={<FaMoneyBill />} />
                    <Input type={"number"} min={0}></Input>
                    <InputRightAddon children={"원"} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>방 갯수</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children={<FaBed />} />
                    <Input type={"number"} min={0}></Input>
                    <InputRightAddon children={"개"} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>화장실</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children={<FaToilet />} />
                    <Input type={"number"} min={0}></Input>
                    <InputRightAddon children={"개"} />
                  </InputGroup>
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel>방 설명</FormLabel>
                <Textarea />
              </FormControl>
              <FormControl>
                <Checkbox>애견 동반 가능</Checkbox>
              </FormControl>
              <HStack>
                <FormControl w={350}>
                  <FormLabel>방 종류</FormLabel>
                  <Select placeholder={"종류를 골라보셈"}>
                    <option value={"entire_place"}>집 전체</option>
                    <option value={"private_room"}>개인 방</option>
                    <option value={"shared_room"}>공유 방</option>
                  </Select>
                  <FormHelperText>이 방 종류가 머임</FormHelperText>
                </FormControl>
                <FormControl w={350}>
                  <FormLabel>카테고리</FormLabel>
                  <Select placeholder={"종류를 골라보셈"}>
                    {categories?.map((category) => (
                      <option key={category.pk} value={category.pk}>
                        {category.name}
                      </option>
                    ))}
                  </Select>
                  <FormHelperText>카테고리를 골라보세여</FormHelperText>
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel>어메니티</FormLabel>
                <Grid templateColumns={"1fr 1fr"} gap={5}>
                  {amenities?.map((amenity) => (
                    <Box key={amenity.pk}>
                      <Checkbox>{amenity.name}</Checkbox>
                      <FormHelperText>{amenity.description}</FormHelperText>
                    </Box>
                  ))}
                </Grid>
              </FormControl>
              <Button colorScheme={"red"} size={"lg"} w={"100%"}>
                방 만들기~
              </Button>
            </VStack>
          </Container>
        </Box>
      </HostOnlyPage>
    </ProtectedPage>
  );
}
