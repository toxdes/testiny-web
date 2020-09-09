import { LOGIN, LOGOUT } from "../actions";
// import { Reducer } from "react";
import { GlobalState, GenericAction } from "../types";
import initialState from "../initialState";

export default (state: GlobalState, action: GenericAction): GlobalState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        userLoggedIn: false,
      };
    default:
      return initialState.globalState;
  }
};
