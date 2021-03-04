import * as React from "react";
import { VFlex, Button, Heading, Link, InputWithLabel } from "../../components";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";

interface LoginProps {
  // if user was accessing something that required him to be signed in
  // then on successful sign in, we should redirect him there.
  successRoute?: string;
}
export function Signup({ successRoute }: LoginProps) {
  const [username, setUsername] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>();
  const [valid, setValid] = React.useState<boolean>();
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
    navigate(successRoute ? successRoute : "/");
    dispatch(login());
  };

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
