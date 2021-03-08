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
  FormHelperText,
  Alert,
} from "../../components";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions";
import { useTypedSelector } from "../../store/selector";
import { ResponseStatusType } from "../../store/types";
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
  const status = useTypedSelector((state) => state.globalVolatileState.status);
  const data = useTypedSelector((state) => state.globalVolatileState.data);
  const token = useTypedSelector((state) => state.globalState.token);
  const userLoggedIn = useTypedSelector(
    (state) => state.globalState.userLoggedIn
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const doSignup = () => {
    dispatch(signup(username as string, email as string, password as string));
    if (status === ResponseStatusType.SUCCESS)
      navigate(successRoute ? successRoute : "/");
  };
  if (userLoggedIn) {
    navigate("/", { replace: true });
    return null;
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
        <Heading as="h2"> Signup </Heading>
        <Text color="gray.500" size="sm" my="2">
          We're glad that you're interested.
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
