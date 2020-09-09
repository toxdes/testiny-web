import { Text, VFlex, Button } from "../../components";
import * as React from "react";
import { useNavigate } from "react-router";
import LandingPage from "../landing-page";
import { useTypedSelector } from "../../store/selector";

export default function Home() {
  const navigate = useNavigate();
  const userLoggedIn = useTypedSelector(
    (state) => state.globalState.userLoggedIn
  );
  const navigateTo = (to: string) => {
    navigate(to, { replace: false });
  };
  if (!userLoggedIn) {
    return <LandingPage />;
  } else {
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
  return <LandingPage />;
}
