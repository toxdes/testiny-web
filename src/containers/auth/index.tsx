import React from "react";
import { Login as L } from "./login";

import { Signup as S } from "./signup";

import Header from "../header";

export function Login() {
  return (
    <>
      <Header />
      <L />
    </>
  );
}

export function Signup() {
  return (
    <>
      <Header />
      <S />
    </>
  );
}
