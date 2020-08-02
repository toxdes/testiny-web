import { Heading, Text, Flex } from "../components";
import * as React from "react";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading as="h1">Hello world</Heading>
      <Text p="10">
        I hope I finish this dude. People are counting on me. Everything is
        falling apart.
      </Text>
    </Flex>
  );
}
