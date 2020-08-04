import { combineReducers } from "redux";
import beforeExamReducer from "./beforeExamReducer";
import examStateReducer from "./examStateReducer";
const rootReducer = combineReducers({
  beforeExamState: beforeExamReducer,
  examState: examStateReducer,
});

export default rootReducer;
