import { Text, VFlex, Button } from "../../components";
import * as React from "react";
import { useNavigate } from "react-router";
import LandingPage from "../landing-page";
import { useTypedSelector } from "../../store/selector";
import { logout } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          colorScheme="green"
        >
          Exams
        </Button>
        <Button
          onClick={() => navigateTo("/exams/one")}
          w="48"
          my="2"
          colorScheme="green"
        >
          A single Exam
        </Button>
        <Button
          onClick={() => navigateTo("/exams/one/start-exam")}
          w="48"
          my="2"
          colorScheme="purple"
        >
          Start a single Exam
        </Button>
        <Button
          onClick={() => dispatch(logout())}
          w="48"
          my="2"
          colorScheme="red"
        >
          Logout
        </Button>
      </VFlex>
    );
  }
}
