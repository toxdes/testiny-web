import { Text, VFlex } from "../../components";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <VFlex w="100vw" h="100vh">
      <Text>Currently Working on:</Text>
      <Link to={"/tests"}>Tests</Link>
      <Link to={"/tests/one"}>A single Test</Link>
    </VFlex>
  );
}
