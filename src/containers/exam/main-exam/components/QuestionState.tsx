import * as React from "react";
import { Text, HFlex, Image, VFlex, Grid } from "../../../../components";
import { AnswerState, AnswerStatus } from "../../../../store/types";
import NotVisitedImage from "../../../../assets/not-visited.svg";
import NotAnsweredImage from "../../../../assets/not-answered.svg";
import AnsweredImage from "../../../../assets/answered.svg";
import MarkedForReviewImage from "../../../../assets/marked-for-review.svg";
import MarkedForReviewAndAnsweredImage from "../../../../assets/marked-for-review-and-answered.svg";
import { normalFontSize, smallerFontSize } from "../styles";

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
        fontWeight="bold"
        color={status === AnswerStatus.NOT_VISITED ? "black" : "white"}
        mt={
          status === AnswerStatus.MARKED_FOR_REVIEW_AND_ANSWERED
            ? "-34px"
            : "-30px"
        }
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

export function SymbolInfo({ symbol, containerProps }: SymbolInfoProps) {
  let res = getSymbolInfo(symbol);
  return (
    <HFlex {...containerProps} justify="center">
      <SpecialButton status={symbol} value={1} />
      <Text fontSize={smallerFontSize} mx="2" w="100%" textOverflow="ellipsis">
        {res.info}
      </Text>
    </HFlex>
  );
}

interface QuestionStateProps {
  answers: AnswerState[];
  activeSection: string;
  onQuestionClick: (index: number) => void;
  containerProps?: any;
}

export default function QuestionState({
  answers,
  activeSection,
  onQuestionClick,
  containerProps,
}: QuestionStateProps) {
  return (
    <VFlex {...containerProps} bg="blue.50">
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
      <Text w="100%" px="2" mt="4" fontWeight="bold" fontSize={normalFontSize}>
        Choose a Question
      </Text>
      <Grid
        templateColumns="repeat(4,1fr)"
        gridRowGap="8"
        gridColumnGap="2"
        overflowY="auto"
        // height="40vh"
        mt="4"
        mx="4"
      >
        {answers.map((each) => (
          <SpecialButton
            onQuestionClick={() => onQuestionClick(each.index)}
            key={each.index}
            value={each.index + 1}
            status={each.status}
          />
        ))}
      </Grid>
    </VFlex>
  );
}
