import { RootState, AnswerStatus } from "./types";

const initialState: RootState = {
  beforeExamState: {
    step: 0,
    done: false,
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
  // only persisting globalState for now :)
  globalState: {
    userLoggedIn: false,
    token: "",
    successRoute: "",
  },
  // not persisted
  globalVolatileState: {},
};

export default initialState;
