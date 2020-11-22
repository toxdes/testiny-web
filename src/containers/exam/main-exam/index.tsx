import * as React from "react";
import { useDispatch } from "react-redux";
import { Grid } from "../../../components";
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
  SymbolsInfo
} from "./components";
import { ExamData as data } from "../future";
import { useTypedSelector } from "../../../store/selector";
import {
  initAnswers,
  setActive,
  updateAnswer,
  commitAnswer,
} from "../../../store/actions";
import { AnswerStatus, AnswerState } from "../../../store/types";

export default function MainExam() {
  // navigation-tabs
  const dispatch = useDispatch();
  const activeQuestionIndex = useTypedSelector(
    (state) => state.examState.activeQuestionIndex
  );
  const activeSectionIndex = useTypedSelector(
    (state) => state.examState.activeSectionIndex
  );
  const activeSubjectIndex = useTypedSelector(
    (state) => state.examState.activeSubjectIndex
  );

  const answers = useTypedSelector((state) => state.examState.answers);
  const activeAnswer = useTypedSelector(
    (state) => state.examState.activeAnswer
  );
  // const answer = useTypedSelector(
  //   (state) => state.examState.answers[activeQuestionIndex]
  // );

  // there is a case of having an incomplete session continuing, at that time,
  // the answers should be populated with the answers array.
  // TODO: use reselect here, somehow, see if it does any perf-improvements
  if (!answers || answers.length <= 0) {
    let ans: AnswerState[] = data.questions[activeSectionIndex].map(
      (each, i) => {
        return {
          index: i,
          status:
            i === 0 ? AnswerStatus.NOT_ANSWERED : AnswerStatus.NOT_VISITED,
          answer: undefined,
        };
      }
    );
    dispatch(initAnswers(ans));
  }

  // why unncessary dispatches? use a single on that inits all active indices?
  if (activeQuestionIndex === undefined) {
    dispatch(setActive("question", 0));
  }
  if (activeSectionIndex === undefined) {
    dispatch(setActive("section", 0));
  }
  if (activeSubjectIndex === undefined) {
    dispatch(setActive("subject", 0));
  }

  // navingating questions -> actions of buttons at the bottom

  const onClearResponse = () => {
    // set answer of the active index to undefined.
    dispatch(
      commitAnswer({
        index: activeQuestionIndex,
        status: AnswerStatus.NOT_ANSWERED,
        answer: undefined,
      })
    );
    // alert("Clear Response");
  };

  const onMarkForReviewAndNext = () => {
    let answer = activeAnswer;
    let newStatus = answer.status;
    if (!answer.answer) {
      newStatus = AnswerStatus.MARKED_FOR_REVIEW;
    } else {
      newStatus = AnswerStatus.MARKED_FOR_REVIEW_AND_ANSWERED;
    }
    dispatch(
      commitAnswer({
        index: activeQuestionIndex,
        status: newStatus,
        answer: answer.answer,
      })
    );
    // TODO: Merge setting the next activeQuestionIndex with updateAnswer
    dispatch(setActive("question", (activeQuestionIndex + 1) % answers.length));
  };

  const onSaveAndNext = () => {
    let newStatus;
    if (activeAnswer.answer) {
      newStatus = AnswerStatus.ANSWERED;
    } else {
      newStatus = AnswerStatus.NOT_ANSWERED;
    }
    dispatch(
      commitAnswer({
        index: activeQuestionIndex,
        status: newStatus,
        answer: activeAnswer.answer,
      })
    );
    dispatch(setActive("question", (activeQuestionIndex + 1) % answers.length));
  };

  // for setting the activeQuestionIndex arbitrarily from the sidebar
  /**
   * The bottom navigation bar only dictates if the question should be answered or not,if the question should be marked for review or not etc.
   * So, here, we need to restore the answer only if it was commited, otherwise we should set it to undefined, cause without commiting, on navigating with the sidebar, the question should not be marked as answered at all.
   * So, in nutshell
      MarkedForReview stays same
      Answered stays same
      MarkedForReviewAndAnswered stays same
      NotVisited -> NotAnswered
   */
  const onQuestionStateChange = (next: number) => {
    if (next >= answers.length || next < 0) return;
    let answer = activeAnswer;
    let isAnswerCommited =
      answer.status === AnswerStatus.ANSWERED ||
      answer.status === AnswerStatus.MARKED_FOR_REVIEW_AND_ANSWERED;
    let newAnsValue = isAnswerCommited ? answer.answer : undefined;
    // change from NotVisited to NotAnswered, just in case
    let newStatusValue =
      answer.status === AnswerStatus.NOT_VISITED
        ? AnswerStatus.NOT_ANSWERED
        : answer.status;
    dispatch(
      updateAnswer({
        index: answer.index,
        status: newStatusValue,
        answer: newAnsValue,
      })
    );

    dispatch(setActive("question", next));
  };

  // this function is called when the radioButton is clicked, or when the value is entered in the textfield of NAT questions
  const onAnswer = (newAnswer: number | number[] | undefined) => {
    // for now, MSQs are not implemented, so we'd just return
    if (Array.isArray(newAnswer)) return;
    if (newAnswer === activeAnswer.answer) {
      return;
    }
    // if the answer is undefined, then the question is unanswered
    dispatch(
      updateAnswer({
        index: activeQuestionIndex,
        status: activeAnswer.status,
        answer: newAnswer,
      })
    );
  };
  return (
    <Grid
      templateAreas={`
      "header header"
      "left_row_1 profile"
      "left_row_2 profile"
      "left_row_3 profile"
      "left_row_4 symbols_info"
      "question_area symbols_info"
      "question_area question_state"
      "nav_left submit"`}
      templateRows={`32px 48px 32px 48px 36px 180px 1fr auto`}
      templateColumns="0.84fr 0.16fr"
      rowGap="0px"
      columnGap="0px"
      height="100vh"
      width="100vw"
    >
      <Header
        title={`${data.streamName} ${data.examName}`}
        containerProps={{ gridArea: "header" }}
      />
        <SubjectTab
          subjects={data.subjects.map((each) => {
            return {
              title: each,
            };
          })}
          containerProps={{gridArea:'left_row_1'}}
          calculatorAllowed={data.calculatorAllowed}
          activeIndex={activeSubjectIndex}
          // containerProps={{ area: "header2" }}
        />
        <SectionHeader containerProps={{gridArea:'left_row_2'}}/>
        <SectionTab
          sections={data.sections.map((each) => {
            return {
              title: each,
            };
          })}
          containerProps={{gridArea:'left_row_3'}}
          activeIndex={activeSectionIndex}
        />
        <QuestionHeader
          type={data.questions[activeSectionIndex][activeQuestionIndex].type}
          correctMarks={1}
          containerProps={{gridArea:"left_row_4"}}
          incorrectMarks={0.33}
        />
        <QuestionArea
          containerProps={{  gridArea:'question_area', overflow:'auto' }}
          question={data.questions[activeSectionIndex][activeQuestionIndex]}
          activeIndex={activeQuestionIndex}
          answer={activeAnswer}
          defaultAnswer={answers[activeQuestionIndex]}
          onAnswer={onAnswer}
        />

      
        <Profile profile={data.candidateData} containerProps={{gridArea:'profile'}} />
        <SymbolsInfo containerProps={{gridArea:'symbols_info', border:"2px solid", borderBottom:0}}/>
        <QuestionState
          containerProps={{gridArea:'question_state', overflow:"auto", border:"2px solid", borderTop:0}}
          onQuestionClick={onQuestionStateChange}
          answers={answers}
          activeSection={data.sections[activeSectionIndex]}
        />
     

      
        <Navigation
          onClearResponse={onClearResponse}
          onSaveAndNext={onSaveAndNext}
          containerProps={{gridArea:"nav_left"}}
          onMarkForReviewAndNext={onMarkForReviewAndNext}
        />
      <SubmitExam containerProps={{ gridArea: "submit" }} />
    </Grid>
  );
}
// return (
//   <VFlex w="100vw" h="100vh" align="center" justify="flex-start" bg="red.300">
//     <Header title={`${data.streamName} ${data.examName}`} />
//     <HFlex bg="blue.300" flexGrow="1" w="100vw">
//       <VFlex
//         flexBasis="100%"
//         flexGrow="1"
//         flexShrink="1"
//         bg="yellow.300"
//         h="100%"
//         justify="flex-start"
//       >
//         <SubjectTab
//           subjects={data.subjects.map((each) => {
//             return {
//               title: each,
//             };
//           })}
//           calculatorAllowed={data.calculatorAllowed}
//           activeIndex={activeSubjectIndex}
//         />
//         <SectionHeader />
//         <SectionTab
//           sections={data.sections.map((each) => {
//             return {
//               title: each,
//             };
//           })}
//           activeIndex={activeSectionIndex}
//         />
//         <QuestionHeader
//           type={data.questions[activeSectionIndex][activeQuestionIndex].type}
//           correctMarks={1}
//           incorrectMarks={0.33}
//         />
//         <QuestionArea
//           question={data.questions[activeSectionIndex][activeQuestionIndex]}
//           activeIndex={activeQuestionIndex}
//           answer={activeAnswer}
//           defaultAnswer={answers[activeQuestionIndex]}
//           onAnswer={onAnswer}
//         />
//         <Navigation
//           onClearResponse={onClearResponse}
//           onSaveAndNext={onSaveAndNext}
//           onMarkForReviewAndNext={onMarkForReviewAndNext}
//         />
//       </VFlex>
//       <VFlex
//         // flexGrow="0"
//         flexShrink="1"
//         minWidth="250px"
//         bg="orange.300"
//         // oy="scroll"
//         h="100%"
//         // align="flex-start"
//         // justify="flex-start"
//       >
//         <Profile profile={data.candidateData} />
//         <QuestionState
//           onQuestionClick={onQuestionStateChange}
//           answers={answers}
//           activeSection={data.sections[activeSectionIndex]}
//         />
//         <SubmitExam />
//       </VFlex>
//     </HFlex>
//   </VFlex>
// );
