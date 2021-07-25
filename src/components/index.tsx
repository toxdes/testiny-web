import * as React from "react";
import {
  Flex as ChakraFlex,
  Input as ChakraInput,
  Text as ChakraText,
  Checkbox as ChakraCheckbox,
  Tag as ChakraTag,
  MenuItem as ChakraMenuItem,
  HTMLChakraProps,
} from "@chakra-ui/react";
export {
  Heading,
  Flex,
  Avatar,
  Tooltip,
  Text,
  TagLabel,
  TagCloseButton,
  TagLeftIcon,
  TagRightIcon,
  Stack,
  Divider,
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
  FormControl,
  Button,
  Checkbox,
  Link,
  TabPanels,
  TabPanel,
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
  FormErrorMessage,
  FormHelperText,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertDescription,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Badge,
  Menu,
  MenuList,
  MenuButton,
  useToast,
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

export function Tag(props: any) {
  return <ChakraTag cursor="pointer" {...props} />;
}

interface InputWithLabelProps {
  label: string;
  value?: string;
  type: string;
  required?: boolean;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  onActive?: (e: any) => void;
  onKeyPress?: (e: any) => void;
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
  onKeyPress,
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
        onKeyPress={onKeyPress}
        borderColor="gray.100"
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
      <ChakraCheckbox
        m="0"
        p="0"
        value="bruh"
        size="lg"
        isChecked={value}
        onChange={onChange}
      />
      <ChakraText
        mt="1"
        p="0"
        ml="1ch"
        color="gray.500"
        cursor="pointer"
        onClick={onChange}
      >
        {label}
      </ChakraText>
    </HFlex>
  );
}

export const MenuItem = (props: HTMLChakraProps<typeof ChakraMenuItem>) => {
  return (
    <ChakraMenuItem
      _hover={{ bg: "gray.100" }}
      _focus={{ bg: "gray.100" }}
      _active={{ bg: "purple.500", color: "white" }}
      color="gray.500"
      fontWeight="bold"
      py="2"
      fontSize="13px"
      {...props}
    >
      {props.children}
    </ChakraMenuItem>
  );
};
