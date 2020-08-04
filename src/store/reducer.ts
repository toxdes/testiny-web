import { SET_BEFORE_EXAM_STEP, SET_BEFORE_EXAM_DONE } from "./actions";
// import { Reducer } from "react";
import { State, GenericAction } from "./types";

export default (state: State, action: GenericAction): State => {
  switch (action.type) {
    case SET_BEFORE_EXAM_STEP: {
      return {
        ...state,
        beforeExamStep: action.payload.step,
      };
    }
    case SET_BEFORE_EXAM_DONE: {
      return {
        ...state,
        beforeExamDone: true,
      };
    }
    default:
      return state;
  }
};
