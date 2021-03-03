import * as React from "react";
import { Text, VFlex, Button, Code, Heading } from "../../components";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function ExamsList() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <VFlex w="100vw" h="100vh">
      <Heading as="h2" size="md" m="4">
        Details about a single Exam
      </Heading>
      <Text>Information from the URL</Text>
      <Code p="2">Information from the URL: {JSON.stringify(params)}</Code>
      <Button
        onClick={() => navigate("start-exam", { replace: true })}
        colorScheme="green"
        my="4"
      >
        Start Exam
      </Button>
      <Button mt="12" onClick={() => navigate(-1)} colorScheme="red" size="lg">
        Go back
      </Button>
    </VFlex>
  );
}
