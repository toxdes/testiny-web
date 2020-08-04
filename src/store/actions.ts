import { GenericAction } from "./types";
export const SET_BEFORE_EXAM_STEP = "SET_BEFORE_EXAM_STEP";
export const SET_BEFORE_EXAM_DONE = "SET_BEFORE_EXAM_DONE";

// action creators
export const setBeforeExamStep = (step: number): GenericAction => {
  return {
    type: SET_BEFORE_EXAM_STEP,
    payload: { step },
  };
};

export const setBeforeExamDone = (): GenericAction => {
  return {
    type: SET_BEFORE_EXAM_DONE,
  };
};
