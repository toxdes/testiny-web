import * as React from "react";
import {
  Text,
  HFlex,
  VFlex,
  RadioGroup,
  Radio,
  Input,
  IconButton,
} from "../../../../components";
import { TQuestion } from "../types";
import { normalFontSize, blue, smallerFontSize } from "../styles";
import { FaArrowCircleDown } from "react-icons/fa";
import { AnswerState } from "../../../../store/types";

interface ChoicesProps {
  choices: string[] | undefined;
  answer: number | number[] | undefined;
  onAnswer: (answer: number | undefined) => void;
}
function Choices({ choices, onAnswer, answer }: ChoicesProps) {
  // TODO: Clicking on the same radio button choice should de-select the option
  // @body `onChange` is not triggered on clicking the same radioOption twice. So, clicking does not have any effect whatsoever while doing so.
  return (
    <RadioGroup
      fontFamily={"serif"}
      m="4"
      onChange={(e) => {
        onAnswer(Number(e.target.value));
      }}
      value={Number(answer)}
    >
      {choices &&
        choices.map((each, i) => {
          return (
            <Radio
              value={i + 1}
              size="sm"
              fontSize={smallerFontSize}
              key={each}
            >
              {each}
            </Radio>
          );
        })}
    </RadioGroup>
  );
}

interface NumericProps {
  onAnswer: (answer: number | undefined) => void;
  answer: number | number[] | undefined;
}
function Numeric({ onAnswer, answer }: NumericProps) {
  const [value, setValue] = React.useState<string>("");
  // TODO: Add visual numeric-keyboard for NAT questions
  //@body currently the NAT questions are based on the actual physical input. Also, `react-simple-keyboard` should be eliminated in long run, and have a in-home implementation of a visual-keyboard.
  return (
    <Input
      type="text"
      value={value}
      size="sm"
      mt="10"
      width="40"
      onBlur={(e: any) => {
        if (isNaN(e.target.value) || e.target.value === "") {
          setValue("");
          onAnswer(undefined);
        } else {
          onAnswer(e.target.value);
        }
      }}
      onChange={(e: any) => {
        console.log(answer);
        setValue(e.target.value);
      }}
    />
  );
}

// TODO: Add MSQ type questions
// @body apparently, the question has another type, multiple-select-question where more than one questions are correct. So, I'd have to include that too. Right here.

interface QuestionAreaProps {
  question: TQuestion;
  activeIndex: number;
  answer: AnswerState;
  onAnswer: (newAns: number | undefined) => void;
}
export default function QuestionArea({
  question,
  activeIndex,
  answer,
  onAnswer,
}: QuestionAreaProps) {
  return (
    <HFlex flexGrow="1" bg="gray.100" w="100%" align="flex-start">
      <VFlex justify="flex-start" w="100%">
        <HFlex
          h="32px"
          w="100%"
          justify="flex-start"
          px="2"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
        >
          <Text fontSize={normalFontSize} fontWeight="bold">
            Question No. {activeIndex + 1}
          </Text>
          <IconButton
            as={FaArrowCircleDown}
            onClick={() => alert("Scroll to bottom when the text is too long.")}
            aria-label="scroll-to-bottom"
            size="xs"
            isDisabled
            color={blue}
            bg="gray.100"
            ml="auto"
          />
        </HFlex>
        <VFlex w="100%" p="4" flexWrap="wrap">
          <Text fontFamily="serif" fontSize={normalFontSize}>
            {question.text}
          </Text>
          {question && question.type === "mcq" ? (
            <Choices
              choices={question.choices}
              onAnswer={onAnswer}
              answer={answer?.answer}
            />
          ) : (
            <Numeric onAnswer={onAnswer} answer={answer?.answer} />
          )}
        </VFlex>
      </VFlex>
    </HFlex>
  );
}
