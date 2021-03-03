import { RootState, AnswerStatus } from "./types";

const initialState: RootState = {
  beforeExamState: {
    step: 0,
    done: true, // TODO: set it to true during development
  },
  examState: {
    activeQuestionIndex: 0,
    activeSectionIndex: 0,
    activeSubjectIndex: 0,
    activeAnswer: {
      index: 0,
      status: AnswerStatus.NOT_ANSWERED,
      answer: undefined,
    },
    answers: [],
  },
  globalState: {
    userLoggedIn: false,
  },
};

export default initialState;
