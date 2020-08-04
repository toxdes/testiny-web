import { SET_BEFORE_EXAM_STEP, SET_BEFORE_EXAM_DONE } from "../actions";
// import { Reducer } from "react";
import { BeforeExamState, GenericAction } from "../types";
import initialState from "../initialState";

export default (
  state: BeforeExamState,
  action: GenericAction
): BeforeExamState => {
  if (state === undefined) return initialState.beforeExamState;
  switch (action.type) {
    case SET_BEFORE_EXAM_STEP: {
      return {
        ...state,
        step: action.payload.step,
      };
    }
    case SET_BEFORE_EXAM_DONE: {
      return {
        ...state,
        done: true,
      };
    }
    default:
      return state;
  }
};
