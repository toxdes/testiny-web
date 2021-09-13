import * as React from "react";
import {
  Flex as ChakraFlex,
  Input as ChakraInput,
  Text as ChakraText,
  Checkbox as ChakraCheckbox,
  Spinner as ChakraSpinner,
  Tag as ChakraTag,
  MenuItem as ChakraMenuItem,
  HTMLChakraProps,
  SpinnerProps,
  FlexProps,
  InputProps,
} from "@chakra-ui/react";
export {
  Heading,
  Center,
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
  useBreakpointValue,
  Drawer,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerContent,
  DrawerOverlay,
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
  MenuItemOption,
  MenuOptionGroup,
  Select,
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
  label?: string;
  value?: string;
  type?: string;
  inputProps?: InputProps;
  containerProps?: any;
  required?: boolean;
  placeholder?: string;
}

export function InputWithLabel({
  label,
  value,
  type,
  containerProps,
  inputProps,
  required,
  placeholder,
}: InputWithLabelProps) {
  return (
    <VFlex align="flex-start" my="2" w="100%" {...containerProps}>
      {label && (
        <ChakraText fontWeight="semibold" color="gray.500" fontSize="12px">
          {label}
        </ChakraText>
      )}
      <ChakraInput
        type={type ? type : "text"}
        variant="unstyled"
        bg="gray.50"
        py="2"
        pl="4"
        border="2px solid"
        borderColor="gray.50"
        placeholder={placeholder ? placeholder : label}
        value={value}
        _focus={{ borderColor: "purple.200", bg: "white" }}
        required={required}
        mt={label ? "2" : "0"}
        {...inputProps}
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

interface LoadingProps {
  spinnerProps?: SpinnerProps;
  containerProps?: FlexProps;
  label?: string;
}

export function Loading({ spinnerProps, label, containerProps }: LoadingProps) {
  return (
    <VFlex {...containerProps}>
      {label && <ChakraText>{label}</ChakraText>}
      <ChakraSpinner
        size="xl"
        speed="0.8s"
        color="purple.500"
        emptyColor="gray.200"
        thickness="4px"
        {...spinnerProps}
      />
    </VFlex>
  );
}
