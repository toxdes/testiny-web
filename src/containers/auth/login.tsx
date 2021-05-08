import * as React from "react";
import {
  VFlex,
  Button,
  Heading,
  Link,
  InputWithLabel,
  CheckboxWithLabel,
  HFlex,
  Text,
  FormControl,
  Alert,
  AlertIcon,
  FormErrorMessage,
} from "../../components";
import api from "../../api";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { ResponseStatusType, FetchDataType } from "../../store/types";
import { setUserLoggedIn } from "../../store/actions";
interface LoginProps {
  // if user was accessing something that required him to be signed in
  // then on successful sign in, we should redirect him there.
  successRoute?: string;
}
export function Login({ successRoute }: LoginProps) {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [valid, setValid] = React.useState<boolean>(true);

  // TODO: Implement Remember Me in Login
  //@body Currently, once a user is logged in, they stay logged in unless they logout themselves.
  const [rememberMe, setRememberMe] = React.useState<boolean>(true);
  const [data, setData] = React.useState<FetchDataType>({
    status: ResponseStatusType.IDLE,
    data: undefined,
  });

  const navigate = useNavigate();
  let params = useParams();

  // let user continue whatever he was doing after login, by rerouting them on success.
  if (!successRoute) {
    if (params.success_redirect) successRoute = params.success_redirect;
  }
  const dispatch = useDispatch();
  const validate = () => {
    if (username === "" || password === "") {
      if (valid) setValid(false);
    } else {
      if (!valid) setValid(true);
    }
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const doLogin = React.useCallback(async () => {
    if (username === "" || password === "" || !valid) {
      console.log("username /password should not be empty");
      return;
    }
    if (data.status === ResponseStatusType.FETCHING) {
      console.log("already fetching.");
      return;
    }
    setData({ status: ResponseStatusType.FETCHING });
    try {
      let res: any = await api.post("/login", { data: { username, password } });
      res = res.data;
      console.log("LOGIN RES", res);
      if (res.status === "error") {
        setData({ status: ResponseStatusType.ERROR, data: res.message });
        return;
      }

      // update global state, to indicate that user has logged in successfully.
      dispatch(setUserLoggedIn(true, res.token, successRoute));
    } catch (e) {
      console.log(JSON.stringify(e));
      setData({
        status: ResponseStatusType.ERROR,
        data: "Probably failed to connect to the backend.",
      });
    }
  }, [valid, data, username, password, dispatch, successRoute]);

  const doSignup = () => {
    navigate("/signup");
  };

  return (
    <HFlex w="100vw" h="100vh">
      <VFlex
        w={{ base: "80%", lg: "50%" }}
        maxW="420px"
        border="1px solid"
        borderColor="gray.100"
        borderRadius="4px"
        bg="white"
        p={{ base: "4", lg: "12" }}
      >
        <Heading as="h3" mb="4">
          Login
        </Heading>
        <Text color="gray.500" size="sm" my="2">
          To continue, please login.
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
              {data.data && data.data.toString()}
            </Alert>
          </FormErrorMessage>
        </FormControl>
        <InputWithLabel
          type="text"
          label="Username /  Email"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          onBlur={validate}
        />
        <InputWithLabel
          type="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          onBlur={validate}
        />
        <CheckboxWithLabel
          value={rememberMe}
          onChange={toggleRememberMe}
          label="Remember Me"
        />
        <Button
          onClick={doLogin}
          disabled={!valid || data.status === ResponseStatusType.FETCHING}
          w="100%"
          variant="solid"
          bg="purple.500"
          color="white"
          mt="8"
          isLoading={data.status === ResponseStatusType.FETCHING}
        >
          Login
        </Button>
        <Link
          onClick={doSignup}
          ml="2"
          my="4"
          href="#"
          color="purple.500"
          textAlign="center"
        >
          Don't have an account? Sign up.
        </Link>
      </VFlex>
    </HFlex>
  );
}
