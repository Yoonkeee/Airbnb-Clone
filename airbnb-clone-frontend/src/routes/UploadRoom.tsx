import ProtectedPage from "../components/ProtectedPage";
import HostOnlyPage from "../components/HostOnlyPage";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
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

export default function UploadRoom() {
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
              <FormControl>
                <FormLabel>방 종류</FormLabel>
                <Select placeholder={"종류를 골라보셈"}>
                  <option value={"entire_place"}>집 전체</option>
                  <option value={"private_room"}>개인 방</option>
                  <option value={"shared_room"}>공유 방</option>
                </Select>
                <FormHelperText>이 방의 종류가 머임</FormHelperText>
              </FormControl>
            </VStack>
          </Container>
        </Box>
      </HostOnlyPage>
    </ProtectedPage>
  );
}
