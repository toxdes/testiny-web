import { ExamState, GenericAction } from "../types";
import initialState from "../initialState";
import { SET_ACTIVE_GENERIC, INIT_ANSWERS } from "../actions";

export default (state: ExamState, action: GenericAction): ExamState => {
  switch (action.type) {
    case SET_ACTIVE_GENERIC: {
      switch (action.payload.what) {
        case "subject":
          return {
            ...state,
            activeSubjectIndex: action.payload.index,
          };
        case "section":
          return {
            ...state,
            activeSectionIndex: action.payload.index,
          };
        case "question":
          return {
            ...state,
            activeQuestionIndex: action.payload.index,
          };
        default: {
          return state;
        }
      }
    }
    case INIT_ANSWERS: {
      return {
        ...state,
        answers: action.payload.answers,
      };
    }
    default:
      return initialState.examState;
  }
};
