import { combineReducers } from "redux";
import beforeExamReducer from "./beforeExamReducer";
import examStateReducer from "./examStateReducer";
import globalStateReducer from "./globalStateReducer";
import globalVolatileStateReducer from "./globalVolatileReducer";

const rootReducer = combineReducers({
  beforeExamState: beforeExamReducer,
  examState: examStateReducer,
  globalState: globalStateReducer,
  globalVolatileState: globalVolatileStateReducer,
});

export default rootReducer;
