import { ExamState, GenericAction } from "../types";
import initialState from "../initialState";

export default (state: ExamState, action: GenericAction): ExamState => {
  if (state === undefined) return initialState.examState;
  console.log(action);
  return initialState.examState;
};
