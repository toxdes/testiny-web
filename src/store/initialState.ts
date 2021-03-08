import { RootState, AnswerStatus, ResponseStatusType } from "./types";

const initialState: RootState = {
  beforeExamState: {
    step: 0,
    done: true, // TODO: set it to false during production
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
  },
  // not persisted
  globalVolatileState: {
    status: ResponseStatusType.IDLE,
  },
};

export default initialState;
