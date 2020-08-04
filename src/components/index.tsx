import * as React from "react";
import { Flex as ChakraFlex } from "@chakra-ui/core";
export {
  Heading,
  Flex,
  Text,
  Stack,
  Divider,
  Box,
  IconButton,
  Input,
  Image,
  FormControl,
  Button,
  Checkbox,
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
