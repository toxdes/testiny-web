import * as React from "react";
import { Text, HFlex, Image, VFlex, Grid, Stack } from "../../../../components";
import { AnswerState, AnswerStatus } from "../../../../store/types";
import NotVisitedImage from "../../../../assets/not-visited.svg";
import NotAnsweredImage from "../../../../assets/not-answered.svg";
import AnsweredImage from "../../../../assets/answered.svg";
import MarkedForReviewImage from "../../../../assets/marked-for-review.svg";
import MarkedForReviewAndAnsweredImage from "../../../../assets/marked-for-review-and-answered.svg";
import { normalFontSize } from "../styles";

interface SpecialButtonProps {
  value: number;
  status: AnswerStatus;
  isDisabled?: boolean;
  onQuestionClick?: (index: number) => void;
}

// const images = {
//   [AnswerStatus]: MarkedForReviewImage,
//   marked-for-review-and-answered: MarkedForReviewAndAnswered,
//   answered: AnsweredImage,
//   not-visited: NotVisitedImage,
//   "not-answered": NotAnsweredImage,
// };

function SpecialButton({ value, status, onQuestionClick }: SpecialButtonProps) {
  const symbolInfo = getSymbolInfo(status);
  return (
    <VFlex
      cursor={"pointer"}
      flexShrink="0"
      onClick={() => {
        onQuestionClick && onQuestionClick(value);
      }}
    >
      <Image src={symbolInfo.image} w="40px" h="40px" />
      <Text
        textAlign="center"
        color={status === AnswerStatus.NOT_VISITED ? "black" : "white"}
        mt="-28px"
      >
        {value}
      </Text>
    </VFlex>
  );
}

// a helper function to get currect image and text for different answer-statuses
const getSymbolInfo = (symbol: AnswerStatus) => {
  let ans: any = { image: undefined, info: undefined };
  switch (symbol) {
    case AnswerStatus.NOT_VISITED:
      ans.image = NotVisitedImage;
      ans.info = "Not Visited";
      break;
    case AnswerStatus.NOT_ANSWERED:
      ans.image = NotAnsweredImage;
      ans.info = "Not Answered";
      break;
    case AnswerStatus.ANSWERED:
      ans.image = AnsweredImage;
      ans.info = "Answered";
      break;
    case AnswerStatus.MARKED_FOR_REVIEW:
      ans.image = MarkedForReviewImage;
      ans.info = "Marked for Review";
      break;
    case AnswerStatus.MARKED_FOR_REVIEW_AND_ANSWERED:
      ans.image = MarkedForReviewAndAnsweredImage;
      ans.info =
        "Answered & Makred for Review (will be considered for evaluation)";
      break;
  }
  return ans;
};

interface SymbolInfoProps {
  symbol: AnswerStatus;
  containerProps?: any;
}

function SymbolInfo({ symbol, containerProps }: SymbolInfoProps) {
  let res = getSymbolInfo(symbol);
  return (
    <HFlex {...containerProps} justify="flex-start">
      <SpecialButton status={symbol} value={1} />
      <Text fontSize={normalFontSize} mx="2" w="auto">
        {res.info}
      </Text>
    </HFlex>
  );
}

interface QuestionStateProps {
  answers: AnswerState[];
  activeSection: string;
  onQuestionClick: (index: number) => void;
}

export default function QuestionState({
  answers,
  activeSection,
  onQuestionClick,
}: QuestionStateProps) {
  return (
    <HFlex
      flexWrap="nowrap"
      flexGrow="1"
      bg="gray.100"
      border="2px solid"
      w="100%"
      align="flex-start"
    >
      <VFlex flexWrap="nowrap" w="100%" h="100%" justify="flex-start">
        {/* <Text bg="purple.300">
          Details about why the navigation buttons below are styled the way they
          are.
        </Text> */}
        {/* <HFlex w="100%">
          <VFlex w="100%" bg="green.200" justify="flex-start">
            <SymbolInfo symbol={AnswerStatus.ANSWERED} />
            <SymbolInfo
              symbol={AnswerStatus.NOT_ANSWERED}
              containerProps={{ ml: "2" }}
            />
          </VFlex>
          <VFlex w="100%" bg="green.200" justify="flex-start">
            <SymbolInfo symbol={AnswerStatus.NOT_VISITED} />
            <SymbolInfo
              symbol={AnswerStatus.MARKED_FOR_REVIEW}
              containerProps={{ ml: "2" }}
            />
          </VFlex>
          <SymbolInfo symbol={AnswerStatus.MARKED_FOR_REVIEW_AND_ANSWERED} />
        </HFlex> */}
        <Stack>
          <HFlex w="100%" align="flex-start">
            <VFlex w="100%" align="flex-start">
              <SymbolInfo
                symbol={AnswerStatus.ANSWERED}
                containerProps={{ m: "2" }}
              />
              <SymbolInfo
                symbol={AnswerStatus.NOT_VISITED}
                containerProps={{ m: "2" }}
              />
            </VFlex>
            <VFlex w="100%" align="flex-start">
              <SymbolInfo
                symbol={AnswerStatus.NOT_ANSWERED}
                containerProps={{ m: "2" }}
              />
              <SymbolInfo
                symbol={AnswerStatus.MARKED_FOR_REVIEW}
                containerProps={{ m: "2" }}
              />
            </VFlex>
          </HFlex>
          <SymbolInfo
            symbol={AnswerStatus.MARKED_FOR_REVIEW_AND_ANSWERED}
            containerProps={{ mx: "2" }}
          />
        </Stack>
        <Text
          bg="blue.500"
          color="white"
          fontWeight="bold"
          textAlign="left"
          w="100%"
          mt="4"
          p="2"
        >
          {activeSection}
        </Text>
        <VFlex w="100%" bg="blue.50">
          <Text w="100%" p="2" fontWeight="bold" fontSize={normalFontSize}>
            Choose a Question
          </Text>
          <Grid
            templateColumns="repeat(4,1fr)"
            gridRowGap="4"
            gridColumnGap="4"
            height="480px"
            overflowY="scroll"
            p="4"
          >
            {answers.map((each) => (
              <SpecialButton
                onQuestionClick={onQuestionClick}
                key={each.index}
                value={each.index}
                status={each.status}
              />
            ))}
          </Grid>
        </VFlex>
      </VFlex>
    </HFlex>
  );
}
