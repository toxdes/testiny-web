import reducer from "./reducer";
import { createStore } from "redux";
import { State } from "./types";

const initialState: State = {
  beforeExamStep: 0,
  beforeExamDone: false,
};

// TODO: Fix this typescript thing, Idk what to do here.
export default createStore(reducer as any, initialState as any);
