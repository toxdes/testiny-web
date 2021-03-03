import * as React from "react";
import { VFlex, Heading, Button } from "../../components";
import { useNavigate } from "react-router";

export default function ExamsList() {
  const navigate = useNavigate();
  return (
    <VFlex w="100vw" h="100vh">
      <Heading as="h3" size="md">
        List of Available exams Here
      </Heading>
      <Button mt="12" onClick={() => navigate(-1)} colorScheme="red" size="lg">
        Go back
      </Button>
    </VFlex>
  );
}
