import * as React from "react";
import { VFlex, Heading, Text } from "../../components";
import { Link } from "react-router-dom";
import Header from "../header";
export default function NotFound() {
  return (
    <>
      <Header />
      <VFlex mt="20">
        <Heading>404 | Not found.</Heading>
        <Text fontWeight="bold"> That means you shouldn't be here.</Text>
        <Link to="/">
          <Text color="blue.600" textDecoration="underline">
            Go to home, where you should belong.
          </Text>
        </Link>
      </VFlex>
    </>
  );
}
