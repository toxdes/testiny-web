import * as React from "react";
import { HFlex, VFlex, Button, Code, Heading } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../header";
import { openInNewTab } from "../../config/helpers";
export default function ExamsList() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <VFlex maxW="1250px" w="100%" m="auto" align="start">
        <Heading m="4" color="gray.500" mt="20">
          Exam Details
        </Heading>
        <VFlex m="auto" mt="20">
          <Code p="2">Information from the URL: {JSON.stringify(params)}</Code>
          <HFlex mt="8">
            <Button
              onClick={() => openInNewTab(`/exams/${params.id}/start-exam`)}
              colorScheme="green"
              mx="2"
            >
              Start Exam
            </Button>
            <Button mx="2" onClick={() => navigate(-1)} colorScheme="red">
              Go back
            </Button>
          </HFlex>
        </VFlex>
      </VFlex>
    </>
  );
}
