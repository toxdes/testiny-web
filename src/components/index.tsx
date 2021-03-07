import * as React from "react";
import {
  Flex as ChakraFlex,
  Input as ChakraInput,
  Text as ChakraText,
  Checkbox as ChakraCheckbox,
} from "@chakra-ui/react";
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
  Link,
  TabList,
  Tab,
  Tabs,
  Radio,
  Code,
  RadioGroup,
  Grid,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";

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

interface InputWithLabelProps {
  label: string;
  value?: string;
  type: string;
  required?: boolean;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  onActive?: (e: any) => void;
  onSubmit?: (e: any) => void;
  containerProps?: any;
}

export function InputWithLabel({
  label,
  value,
  type,
  required,
  onChange,
  onBlur,
  onActive,
  onSubmit,
  containerProps,
}: InputWithLabelProps) {
  return (
    <VFlex align="flex-start" my="2" w="100%" {...containerProps}>
      <ChakraText fontWeight="semibold" color="gray.500" fontSize="12px">
        {label}
      </ChakraText>
      <ChakraInput
        type={type}
        w="100%"
        placeholder={label}
        value={value}
        required={required}
        onChange={onChange}
        mt="2"
        onBlur={onBlur}
        onBeforeInput={onActive}
        onSubmit={onSubmit}
      />
    </VFlex>
  );
}

interface CheckboxWithLabelProps {
  value?: boolean;
  onChange: (e: any) => void;
  label: string;
}
export function CheckboxWithLabel({
  value,
  onChange,
  label,
}: CheckboxWithLabelProps) {
  return (
    <HFlex justify="center" mr="auto" my="2">
      <ChakraCheckbox m="0" p="0" value="bruh" size="lg" isChecked={value} />
      <ChakraText mt="1" p="0" ml="1ch" cursor="pointer" onClick={onChange}>
        {label}
      </ChakraText>
    </HFlex>
  );
}
