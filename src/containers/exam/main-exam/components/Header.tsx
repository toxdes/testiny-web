import * as React from "react";
import { Text, HFlex, Box, Link } from "../../../../components";
import { yellow, blue, green, darkGray, normalFontSize } from "../styles";
import { FaListAlt } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

interface HeaderProps {
  title: string;
}
interface ActionProps {
  title: string;
  onClick: () => void;
}

function Action({ title, onClick }: ActionProps) {
  return (
    <HFlex mx="4">
      <Box
        as={title === "Instructions" ? BsInfoCircleFill : FaListAlt}
        color={title === "Instructions" ? blue : green}
        mx="2"
      />
      <Link
        onClick={onClick}
        color="white"
        fontWeight="bold"
        fontSize={normalFontSize}
      >
        {title}
      </Link>
    </HFlex>
  );
}
export default function Header({ title }: HeaderProps) {
  const openQuestionPaper = () => {
    alert("Open question paper");
  };
  const openInstructions = () => {
    alert("Open Instructions.");
  };

  return (
    <HFlex minHeight="32px" bg={darkGray} w="100%" justify="flex-start">
      <Text color={yellow} fontSize={normalFontSize} mx="4">
        {title}
      </Text>
      <HFlex ml="auto">
        <Action title="Question Paper" onClick={openQuestionPaper} />
        <Action title="Instructions" onClick={openInstructions} />
      </HFlex>
    </HFlex>
  );
}
