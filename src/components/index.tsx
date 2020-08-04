import * as React from "react";
import { Flex as ChakraFlex } from "@chakra-ui/core";
export {
  Heading,
  Flex,
  Text,
  Stack,
  Button,
  Divider,
  Box,
  IconButton,
  Input,
  Image,
} from "@chakra-ui/core";

export function HFlex(props: any) {
  return (
    <ChakraFlex direction="row" align="center" justify="center" {...props}>
      {props.children}
    </ChakraFlex>
  );
}

export function VFlex(props: any) {
  return (
    <ChakraFlex direction="column" align="center" justify="center" {...props}>
      {props.children}
    </ChakraFlex>
  );
}
