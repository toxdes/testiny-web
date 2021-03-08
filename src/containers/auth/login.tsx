import * as React from "react";
import {
  VFlex,
  Button,
  Heading,
  Link,
  InputWithLabel,
  CheckboxWithLabel,
  Text,
  FormControl,
  Alert,
  FormErrorMessage,
  FormHelperText,
} from "../../components";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";
import { useTypedSelector } from "../../store/selector";
import { ResponseStatusType } from "../../store/types";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useTypedSelector((state) => state.globalVolatileState.status);
  const data = useTypedSelector((state) => state.globalVolatileState.data);
  const token = useTypedSelector((state) => state.globalState.token);
  const userLoggedIn = useTypedSelector(
    (state) => state.globalState.userLoggedIn
  );
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

  const doLogin = () => {
    if (username === "" || password === "") {
      alert("bruh, cannot be empty.");
      return;
    }
    dispatch(login(username as string, password as string, rememberMe));
    if (status === ResponseStatusType.SUCCESS)
      navigate(successRoute ? successRoute : "/");
  };

  const doSignup = () => {
    navigate("/signup");
  };
  if (userLoggedIn) {
    navigate("/", { replace: true });
  }
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
        <Heading as="h3" mb="4">
          Login
        </Heading>
        <Text color="gray.500" size="sm" my="2">
          To continue, please login.
        </Text>
        <FormControl
          isInvalid={
            status === ResponseStatusType.ERROR ||
            status === ResponseStatusType.UNEXPECTED_ERROR
          }
        >
          <FormHelperText>{token}</FormHelperText>
          <FormErrorMessage>
            <Alert status="error">{JSON.stringify(data)}</Alert>
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
          disabled={!valid || status === ResponseStatusType.FETCHING}
          w="100%"
          variant="solid"
          bg="purple.500"
          color="white"
          mt="8"
          isLoading={status === ResponseStatusType.FETCHING}
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
    </VFlex>
  );
}
