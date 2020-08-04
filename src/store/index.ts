import reducers from "./reducers";
import { createStore } from "redux";
import initialState from "./initialState";

// TODO: Fix this typescript thing, Idk what to do here.
export default createStore(
  reducers as any,
  initialState as any,
  //ts-ignore
  typeof window !== "undefined" &&
    (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__()
);
