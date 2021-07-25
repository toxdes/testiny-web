import * as React from "react";
import { VFlex, Heading, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import Header from "../header";

export default function ExamsList() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <VFlex w="100%" maxW="1250px" mx="auto">
        <Heading as="h3" size="md" mt="20">
          List of Available exams Here
        </Heading>
        <Button
          mt="12"
          onClick={() => navigate(-1)}
          colorScheme="red"
          size="lg"
        >
          Go back
        </Button>
      </VFlex>
    </>
  );
}
