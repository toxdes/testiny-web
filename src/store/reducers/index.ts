import { combineReducers } from "redux";
import beforeExamReducer from "./beforeExamReducer";
import examStateReducer from "./examStateReducer";
import globalStateReducer from "./globalStateReducer";

const rootReducer = combineReducers({
  beforeExamState: beforeExamReducer,
  examState: examStateReducer,
  globalState: globalStateReducer,
});

export default rootReducer;
