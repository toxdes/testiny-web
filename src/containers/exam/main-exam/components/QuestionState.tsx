import * as React from "react";
import { Text, HFlex, Image, VFlex } from "../../../../components";
import { AnswerState, AnswerStatus } from "../../../../store/types";
// import NotVisitedImage from "../../../../assets/not-visited.svg";
// import NotAnsweredImage from "../../../../assets/not-answered.svg";
// import AnsweredImage from "../../../../assets/answered.svg";
// import MarkedForReviewImage from "../../../../assets/marked-for-review.svg";
import MarkedForReviewAndAnsweredImage from "../../../../assets/marked-for-review-and-answered.svg";
interface QuestionStateProps {
  answers: AnswerState[];
}

interface SpecialButtonProps {
  value: number;
  status: AnswerStatus;
  isDisabled?: boolean;
  onClick: (index: number) => void;
}

// const images = {
//   [AnswerStatus]: MarkedForReviewImage,
//   marked-for-review-and-answered: MarkedForReviewAndAnswered,
//   answered: AnsweredImage,
//   not-visited: NotVisitedImage,
//   "not-answered": NotAnsweredImage,
// };

function SpecialButton({ value, status, onClick }: SpecialButtonProps) {
  return (
    <VFlex m="2" cursor={"pointer"}>
      <Image src={MarkedForReviewAndAnsweredImage} w="40px" h="40px" />
      <Text textAlign="center" mt="-28px" color="white">
        {value}
      </Text>
    </VFlex>
  );
}
export default function QuestionState({ answers }: QuestionStateProps) {
  const onClick = (index: number) => {
    alert(`navigate to: ${index}`);
  };
  return (
    <HFlex flexGrow="1" bg="gray.300" w="100%" flexWrap="wrap">
      <VFlex h="300px" w="100%">
        <Text width="100px">
          Details about why the navigation buttons below are styled the way they
          are.
        </Text>
      </VFlex>
      <HFlex w="300px" h="400px" flexWrap="wrap" overflowY="scroll">
        {answers.map((each) => (
          <SpecialButton
            onClick={onClick}
            value={each.index}
            status={each.status}
          />
        ))}
      </HFlex>
    </HFlex>
  );
}
