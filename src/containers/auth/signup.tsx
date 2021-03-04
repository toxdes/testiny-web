import * as React from "react";
import { VFlex, Input, Button, Heading, Link } from "../../components";
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
    <VFlex m="auto" minW="40">
      <Heading as="h2"> Signup </Heading>
      <Input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onBlur={validate}
        required
      />
      <Input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        onBlur={validate}
        required
      />
      <Input
        type="password"
        placeholder="Create a super secure password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={validate}
        required
      />

      <Input
        type="password"
        placeholder="Confirm that super secure password..."
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        onBlur={validate}
        required
      />
      <Button onClick={doSignup} disabled={valid}>
        Signup
      </Button>
      <Link onClick={doLogin} ml="2" href="#">
        Already have an account? Login instead
      </Link>
    </VFlex>
  );
}
