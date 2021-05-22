import {
  Text,
  VFlex,
  Button,
  Grid,
  HFlex,
  Heading,
  Divider,
} from "../../components";
import * as React from "react";
import { useNavigate } from "react-router";
import LandingPage from "../landing-page";
import { useTypedSelector } from "../../store/selector";
import { logout } from "../../store/actions";
import { useDispatch } from "react-redux";
import { Profile } from "../users";
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
    // dispatch(fetchUser());
    return (
      <Grid
        w="100vw"
        h="100vh"
        templateAreas={{ lg: `"profile content"`, sm: `"profile""content"` }}
        templateColumns={{ sm: "1fr", md: "0.14fr 0.86fr" }}
      >
        <Profile
          own
          containerProps={{
            area: "profile",
            justify: "flex-start",
            bg: "gray.100",
            height: { md: "100vh", base: "100%" },
          }}
        />
        <VFlex area="content" w="100%">
          <Text>Welcome, you are logged in.</Text>
          <VFlex align="start">
            <Heading as="h3" color="gray.500">
              Exams
            </Heading>
            <Divider />
            <HFlex justify="center" align="start" flexWrap="wrap">
              <Button
                onClick={() => navigateTo("/exams")}
                my="2"
                mx="2"
                colorScheme="green"
              >
                Exams
              </Button>
              <Button
                onClick={() => navigateTo("/exams/one")}
                my="2"
                mx="2"
                colorScheme="green"
              >
                A single Exam
              </Button>
              <Button
                onClick={() => navigateTo("/exams/one/start-exam")}
                my="2"
                mx="2"
                colorScheme="purple"
              >
                Start a single Exam
              </Button>
            </HFlex>
          </VFlex>
          <Button
            onClick={() => dispatch(logout())}
            w="48"
            my="2"
            colorScheme="red"
          >
            Logout
          </Button>
        </VFlex>
      </Grid>
    );
  }
}
