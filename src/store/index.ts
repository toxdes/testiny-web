import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import initialState from "./initialState";
import api from "../api";
import thunk from "redux-thunk";
import { RootState } from "./types";

// load state from localStorage
const REDUX_PERSIST_KEY = "globalState";
let persistedStateValue = localStorage.getItem(REDUX_PERSIST_KEY);
const globalState = persistedStateValue
  ? JSON.parse(persistedStateValue)
  : undefined;

// replace the initial state based on localStorage
if (globalState) initialState.globalState = globalState;
console.log("loaded persisted state", initialState.globalState);

// set authorization header, if user is logged in, then token exists.
api.defaults.headers.common["Authorization"] = `Bearer ${globalState.token}`;
// compose middlewares
const composed = compose(
  applyMiddleware(
    thunk.withExtraArgument({ api, token: initialState.globalState.token })
  ),
  //ts-ignore
  typeof window !== "undefined" &&
    (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__()
);

// create the store
const store = createStore(reducers as any, initialState as RootState, composed);

// save state to localStorage at regular time intervals
// stolen from https://stackoverflow.com/a/35675304/6027457
let lastUpdated = Date.now().valueOf();
const timeIntervalInMillis = 0;

const writeStateToLocalStorage = (state: RootState) => {
  const current = Date.now().valueOf();
  if (current - lastUpdated > timeIntervalInMillis) {
    localStorage.setItem(REDUX_PERSIST_KEY, JSON.stringify(state.globalState));
    lastUpdated = current;
    console.log("wrote state to local-storage.");
  }
};

// subscribe to state changes
store.subscribe(() => {
  const state = store.getState();
  writeStateToLocalStorage(state);
});

export default store;
