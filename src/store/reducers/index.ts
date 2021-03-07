import { combineReducers } from "redux";
import beforeExamReducer from "./beforeExamReducer";
import examStateReducer from "./examStateReducer";
import globalStateReducer from "./globalStateReducer";
import globalVolatileReducer from "./globalVolatileReducer";

const rootReducer = combineReducers({
  beforeExamState: beforeExamReducer,
  examState: examStateReducer,
  globalState: globalStateReducer,
  globalVolatileState: globalVolatileReducer,
});

export default rootReducer;
