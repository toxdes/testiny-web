import * as React from "react";
import { VFlex, Heading, Text, Divider } from "../../components";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <VFlex h="100vh">
      <Heading>404 | Not found.</Heading>
      <Text fontWeight="bold" mt="10">
        {" "}
        That means you shouldn't be here.
      </Text>
      <Divider />
      <Text></Text>
      <Link to="/">
        <Text color="blue.600" textDecoration="underline">
          Go to home, where you should belong.
        </Text>
      </Link>
    </VFlex>
  );
}
