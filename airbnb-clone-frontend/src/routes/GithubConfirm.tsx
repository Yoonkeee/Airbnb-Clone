import { Button, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { githubLogin } from "../api";

export default function GithubConfirm() {
  const { search } = useLocation();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      await githubLogin(code);
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
  }, []);
  return (
    <VStack justifyContent={"center"} mt={40}>
      <Heading>깃허브 로그인중~~~</Heading>
      <Text>기다리세영</Text>
      <Spinner size={"xl"}></Spinner>
    </VStack>
  );
}
