import { Text, VFlex, Button } from "../../components";
import * as React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const navigateTo = (to: string) => {
    navigate(to, { replace: false });
  };
  return (
    <VFlex w="100vw" h="100vh">
      <Text mb="4">Currently Working on</Text>
      <Button
        onClick={() => navigateTo("/exams")}
        w="48"
        my="2"
        variantColor="green"
      >
        Exams
      </Button>
      <Button
        onClick={() => navigateTo("/exams/one")}
        w="48"
        my="2"
        variantColor="green"
      >
        A single Exam
      </Button>
      <Button
        onClick={() => navigateTo("/exams/one/start-exam")}
        w="48"
        my="2"
        variantColor="green"
      >
        Start a single Exam
      </Button>
    </VFlex>
  );
}
