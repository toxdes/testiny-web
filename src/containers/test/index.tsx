import * as React from "react";
import {
  HFlex,
  VFlex,
  IconButton,
  Input,
  Text,
  Image,
  Divider,
} from "../../components";
import { card } from "../../components/styles";
import { MdKeyboard } from "react-icons/md";
import { FormControl, Button } from "@chakra-ui/core";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useForceUpdate } from "../../hooks";
import { HeaderData, THeaderData } from "./future";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface InputFieldProps {
  label: string;
  value: string;
  type?: string;
  icon?: string;
  containerProps?: any;
  onButtonClick?: () => void;
  onClick?: () => void;
}
function InputField({
  value,
  label,
  type,
  onClick,
  onButtonClick,
  containerProps,
}: InputFieldProps) {
  return (
    <HFlex align="center" justify="center" {...containerProps}>
      <IconButton
        as={type ? FaLock : FaUser}
        aria-label={type ? "password" : "username"}
        onClick={(e) => e.preventDefault()}
        size="xs"
      />
      <Input
        placeholder={label}
        type={type ? type : "text"}
        size="sm"
        onChange={(e: any) => e.preventDefault()}
        value={value}
        onClick={onClick}
        // isDisabled
      />
      <IconButton
        as={MdKeyboard}
        width="18"
        onClick={onButtonClick}
        aria-label="on-screen-keyboard"
        size="sm"
      />
    </HFlex>
  );
}

interface HeaderProps {
  data: THeaderData;
}
function Header({ data }: HeaderProps) {
  return (
    <HFlex bg="gray.700" w="100vw" minHeight={140} justify="space-between">
      <VFlex align="flex-start" ml="8">
        <Text color="white">System Name:</Text>
        <Text color="yellow.300" fontSize="32px">
          {data.systemName}
        </Text>
        <Text color="white">
          Some random instruction that has like 12 words.
        </Text>
      </VFlex>
      <VFlex ml="auto" align="flex-start" mr="4">
        <Text color="white">Candidate Name:</Text>
        <Text color="yellow.300" fontSize="24px">
          {data.candidateName}
        </Text>
        <Text color="white">Subject</Text>
        <Text color="yellow.300">{data.subject}</Text>
      </VFlex>
      <Image size="130px" objectFit="cover" src={data.candidateAvatar} mr="4" />
    </HFlex>
  );
}

export default function Test(props: any) {
  const [keyboard, setKeyboard] = React.useState<boolean>(false);
  const [activeInput, setActiveInput] = React.useState<number>(0);
  const [inputs, setInputs] = React.useState<string[]>(["", ""]);
  const forceUpdate = useForceUpdate();
  const toggleKeyboard = (id: number) => {
    setActiveInput(id);
    setKeyboard(!keyboard);
  };

  const onTextChange = (id: number, text: string) => {
    if (id > inputs?.length || id < 0) return;
    let newInputs = inputs;
    newInputs[id] = text;
    setTimeout(() => setInputs(newInputs), 0);
    forceUpdate();
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    //TODO: more accurate validation?
    let okay = true;
    for (let input of inputs) {
      if (!input || input === "") {
        okay = false;
        break;
      }
    }
    if (okay) {
      alert("Proceed.");
    } else {
      alert("Username / Password Not okay.");
    }
  };

  //   React.useEffect(() => {}, inputs);
  return (
    <VFlex>
      <Header data={HeaderData} />
      <VFlex mt="40" pt="2" pb="6" pl="4" pr="4" boxShadow={card.boxShadow}>
        <Text
          // bg="gray.300"
          color="black.600"
          // fontSize="16px"
          width="100%"
          textAlign="center"
          // pl="4"
          pt="2"
          pb="2"
          fontWeight="bold"
        >
          Login
        </Text>
        <Divider color="gray.600" />
        <FormControl
          width="370px"
          onSubmit={onSubmit}
          onSubmitCapture={onSubmit}
        >
          <InputField
            label="Username"
            containerProps={{ mt: "4", mb: "4" }}
            value={inputs[0]}
            onClick={() => toggleKeyboard(0)}
            onButtonClick={() => toggleKeyboard(0)}
          />
          <InputField
            label="Password"
            type="password"
            containerProps={{ mv: "4", mr: "0" }}
            value={inputs[1]}
            onClick={() => toggleKeyboard(1)}
            onButtonClick={() => toggleKeyboard(1)}
          />
          <Divider />
          <Button
            onClick={onSubmit}
            variantColor="cyan"
            size="sm"
            width="100%"
            mt="8"
          >
            Sign in
          </Button>
        </FormControl>
        {keyboard && (
          <Keyboard onChange={(text) => onTextChange(activeInput, text)} />
        )}
      </VFlex>
    </VFlex>
  );
}
