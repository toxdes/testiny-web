import reducer from "./reducer";
import { createStore } from "redux";
import { State } from "./types";

const initialState: State = {
  items: [],
};

// TODO: Fix this typescript thing, Idk what to do here.
export default createStore(reducer as any, initialState as any);
