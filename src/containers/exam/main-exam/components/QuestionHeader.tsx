import * as React from "react";
import { Text, HFlex } from "../../../../components";
import { orange, smallerFontSize } from "../styles";

interface QuestionHeaderProps {
  type: string;
  correctMarks: number;
  incorrectMarks: number;
}
export default function QuestionHeader({
  type,
  correctMarks,
  incorrectMarks,
}: QuestionHeaderProps) {
  return (
    <HFlex h="32px" bg="gray.100" w="100%" justify="flex-start">
      <Text color={orange} fontSize={smallerFontSize} fontWeight="bold" mx="2">
        Question Type: {type === "mcq" ? "MCQ" : "NAT"}
      </Text>
      <HFlex ml="auto">
        <Text mr="1" fontSize={smallerFontSize}>
          Marks for correct answer
        </Text>
        <Text
          mr="1"
          fontSize={smallerFontSize}
          color="green.400"
          fontWeight="bold"
        >
          {correctMarks}
        </Text>
        <Text mr="1" fontSize={smallerFontSize}>
          | Negative Marks{" "}
        </Text>
        <Text
          mr="1"
          fontSize={smallerFontSize}
          color="red.400"
          fontWeight="bold"
        >
          {incorrectMarks}
        </Text>
      </HFlex>
    </HFlex>
  );
}
