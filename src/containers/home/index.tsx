import { Divider, Heading, Text, Flex, Stack, Button } from "../../components";
import * as React from "react";
import { addItem, removeItem } from "../../store/actions";
import { State, Item } from "../../store/types";

import { useSelector, useDispatch } from "react-redux";
// import { Checkbox } from "@chakra-ui/core";

function Selected() {
  const items = useSelector((state: State) => state.items);
  const dispatch = useDispatch();
  return (
    <Stack>
      {items?.map((item: Item) => (
        <Text
          onClick={() => dispatch(removeItem(item))}
          cursor="pointer"
          key={item.id}
        >
          {item.text}
        </Text>
      ))}
    </Stack>
  );
}

function Items() {
  const items = ["one", "two", "three", "four"];

  const dispatch = useDispatch();
  return (
    <Flex direction="row">
      {items?.map((item: string) => (
        <Button
          m="4"
          cursor="pointer"
          onClick={() => dispatch(addItem(item))}
          key={item}
          variantColor="purple"
        >
          {item}
        </Button>
      ))}
    </Flex>
  );
}

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
      <Heading as="h3" size="md">
        Testing Redux with hooks
      </Heading>
      <Stack>
        <Text marginTop="4">Add Item:</Text>
        <Items />
        <Divider />
        <Text marginTop="4">Added Items (Click to remove):</Text>
        <Selected />
      </Stack>
    </Flex>
  );
}
