import * as React from "react";
import { VFlex, HFlex } from "../../../components";
import {
  Header,
  SubjectTab,
  SectionHeader,
  SectionTab,
  QuestionHeader,
  QuestionArea,
  Navigation,
  Profile,
  QuestionState,
  SubmitExam,
} from "./components";
import { ExamData as data } from "../future";
import { useTypedSelector } from "../../../store/selector";

export default function MainExam() {
  // navigation-tabs
  const activeQuestionIndex = useTypedSelector(
    (state) => state.examState.activeQuestionIndex
  );
  const activeSectionIndex = useTypedSelector(
    (state) => state.examState.activeSectionIndex
  );
  const activeSubjectIndex = useTypedSelector(
    (state) => state.examState.activeSubjectIndex
  );

  // navigation-questions
  const onClearResponse = () => {
    alert("Clear Response");
  };
  const onMarkForReviewAndNext = () => {
    alert("Mark for review and next");
  };
  const onSaveAndNext = () => {
    alert("Save and Next");
  };
  return (
    <VFlex w="100vw" h="100vh" align="center" justify="flex-start" bg="red.300">
      <Header title={`${data.streamName} ${data.examName}`} />
      <HFlex bg="blue.300" flexGrow="1" w="100vw">
        <VFlex
          flexBasis="auto"
          flexGrow="1"
          flexShrink="1"
          bg="yellow.300"
          h="100%"
          justify="flex-start"
        >
          <SubjectTab
            subjects={data.subjects.map((each) => {
              return {
                title: each,
              };
            })}
            calculatorAllowed={data.calculatorAllowed}
            activeIndex={activeSubjectIndex}
          />
          <SectionHeader />
          <SectionTab
            sections={data.sections.map((each) => {
              return {
                title: each,
              };
            })}
            activeIndex={activeSectionIndex}
          />
          <QuestionHeader
            type={data.questions[activeSectionIndex][activeQuestionIndex].type}
            correctMarks={1}
            incorrectMarks={0.33}
          />
          <QuestionArea
            question={data.questions[activeSectionIndex][activeQuestionIndex]}
            activeIndex={activeQuestionIndex}
          />
          <Navigation
            onClearResponse={onClearResponse}
            onSaveAndNext={onSaveAndNext}
            onMarkForReviewAndNext={onMarkForReviewAndNext}
          />
        </VFlex>
        <VFlex
          flexGrow="0"
          w="300px"
          bg="orange.300"
          h="100%"
          justify="flex-start"
        >
          <Profile />
          <QuestionState />
          <SubmitExam />
        </VFlex>
      </HFlex>
    </VFlex>
  );
}
