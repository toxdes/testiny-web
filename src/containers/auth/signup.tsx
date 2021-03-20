import * as React from "react";
import {
  VFlex,
  Button,
  Heading,
  Link,
  InputWithLabel,
  Text,
  FormControl,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from "../../components";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../store/actions";
import { FetchDataType, ResponseStatusType } from "../../store/types";
import api from "../../api";
interface LoginProps {
  // if user was accessing something that required him to be signed in
  // then on successful sign in, we should redirect him there.
  successRoute?: string;
}
export function Signup({ successRoute }: LoginProps) {
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");
  const [valid, setValid] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = React.useState<FetchDataType>({
    status: ResponseStatusType.IDLE,
  });

  let params = useParams();
  // let user continue whatever he was doing after login, by rerouting them on success.

  if (!successRoute) {
    if (params.success_redirect) successRoute = params.success_redirect;
  }
  const validate = () => {
    if (password === passwordConfirm) {
      if (!valid) setValid(true);
    } else {
      if (valid) setValid(false);
    }
  };

  const doLogin = () => {
    navigate("/login");
  };

  const doSignup = React.useCallback(async () => {
    if (!valid) {
      console.log("fields are not valid, cannot post to the API.");
      return;
    }
    if (data.status === ResponseStatusType.FETCHING) {
      console.log("already fetching...");
      return;
    }
    setData({ status: ResponseStatusType.FETCHING });
    try {
      let res: any = await api.post("/signup", {
        data: { username, email, password },
      });
      res = res.data;
      console.log("SIGNUP RES", res);
      if (res.status === "error") {
        setData({ status: ResponseStatusType.ERROR, data: res.message });
        return;
      }
      // update global state, to indicate that user has logged in successfully.
      dispatch(setUserLoggedIn(true, res.token, successRoute));
    } catch (e) {}
  }, [valid, data, email, username, password, dispatch, successRoute]);

  return (
    <VFlex h="100vh" w="100vw">
      <VFlex
        w={{ base: "80%", lg: "50%" }}
        maxW="420px"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="4px"
        m="auto"
        p={{ base: "4", lg: "12" }}
      >
        <Heading as="h2"> Signup </Heading>
        <Text color="gray.500" size="sm" my="2">
          We're glad that you're interested.
        </Text>
        <FormControl
          isInvalid={
            data.status === ResponseStatusType.ERROR ||
            data.status === ResponseStatusType.UNEXPECTED_ERROR
          }
        >
          <FormErrorMessage>
            <Alert status="error">
              <AlertIcon />
              {JSON.stringify(data)}
            </Alert>
          </FormErrorMessage>
        </FormControl>
        <InputWithLabel
          type="text"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={validate}
          required
        />
        <InputWithLabel
          type="text"
          label="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onBlur={validate}
          required
        />
        <InputWithLabel
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validate}
          required
        />

        <InputWithLabel
          type="password"
          label="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          onBlur={validate}
          required
        />
        <Button
          onClick={doSignup}
          isLoading={data.status === ResponseStatusType.FETCHING}
          disabled={!valid || data.status === ResponseStatusType.FETCHING}
          w="100%"
          variant="solid"
          bg="purple.500"
          color="white"
          mt="8"
        >
          Signup
        </Button>
        <Link
          onClick={doLogin}
          ml="2"
          my="4"
          href="#"
          color="purple.500"
          textAlign="center"
        >
          Already have an account? Login instead
        </Link>
      </VFlex>
    </VFlex>
  );
}
