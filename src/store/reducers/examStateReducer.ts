import { ExamState, GenericAction, AnswerStatus } from "../types";
import initialState from "../initialState";
import {
  SET_ACTIVE_GENERIC,
  INIT_ANSWERS,
  UPDATE_ANSWER,
  COMMIT_ANSWER,
} from "../actions";

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
        case "question": {
          if (
            state.answers[action.payload.index].status ===
            AnswerStatus.NOT_VISITED
          ) {
            let newAns = [...state.answers];
            newAns[action.payload.index].status = AnswerStatus.NOT_ANSWERED;
            return {
              ...state,
              answers: newAns,
              activeQuestionIndex: action.payload.index,
              activeAnswer: state.answers[action.payload.index],
            };
          }
          return {
            ...state,
            activeQuestionIndex: action.payload.index,
            activeAnswer: state.answers[action.payload.index],
          };
        }
        default: {
          return state;
        }
      }
    }
    case INIT_ANSWERS: {
      return {
        ...state,
        answers: action.payload.answers,
        activeAnswer: action.payload.answers[state.activeQuestionIndex],
      };
    }
    case UPDATE_ANSWER: {
      return {
        ...state,
        activeAnswer: action.payload.answer,
      };
    }

    case COMMIT_ANSWER: {
      let newAnswers = [...state.answers];
      newAnswers[action.payload.answer.index] = action.payload.answer;
      return {
        ...state,
        answers: newAnswers,
      };
    }
    default:
      return initialState.examState;
  }
};
