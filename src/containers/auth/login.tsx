import * as React from "react";
import {
  VFlex,
  Button,
  Heading,
  Link,
  InputWithLabel,
  CheckboxWithLabel,
} from "../../components";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";
interface LoginProps {
  // if user was accessing something that required him to be signed in
  // then on successful sign in, we should redirect him there.
  successRoute?: string;
}
export function Login({ successRoute }: LoginProps) {
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [valid, setValid] = React.useState<boolean>(true);
  const [rememberMe, setRememberMe] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = () => {
    if (username === "" && password === "") {
      if (valid) return;
      setValid(true);
    }
    if (username === "bruh" && password === "bruh") {
      if (valid) return;
      setValid(true);
    } else {
      if (!valid) return;
      setValid(false);
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
    navigate(successRoute ? successRoute : "/");
    dispatch(login());
  };

  const doSignup = () => {
    navigate("/signup");
  };

  return (
    <VFlex h="100vh" w="100vw">
      <VFlex
        w={{ sm: "100%", lg: "50%" }}
        maxW="420px"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="4px"
        m="auto"
        p={{ base: "4", lg: "12" }}
      >
        <Heading as="h3" mb="8">
          {" "}
          Login{" "}
        </Heading>

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
          disabled={!valid}
          w="100%"
          variant="solid"
          bg="purple.500"
          color="white"
          mt="8"
        >
          Login
        </Button>
        <Link onClick={doSignup} ml="2" my="4" href="#" color="purple.500">
          Don't have an account? Sign up.
        </Link>
      </VFlex>
    </VFlex>
  );
}
