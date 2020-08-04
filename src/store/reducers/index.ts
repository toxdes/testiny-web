import { combineReducers } from "redux";
import beforeExamReducer from "./beforeExamReducer";
import examStateReducer from "./examStateReducer";
export default combineReducers({
  beforeExamState: beforeExamReducer,
  examState: examStateReducer,
});
