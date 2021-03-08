import { LOGIN, LOGOUT, SIGNUP } from "../actions";
import { GlobalState, GenericAction } from "../types";
import initialState from "../initialState";

export default (state: GlobalState, action: GenericAction): GlobalState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userLoggedIn: true,
        token: action.payload.token,
      };
    case SIGNUP:
      return {
        ...state,
        userLoggedIn: true,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        userLoggedIn: false,
        token: "",
      };
    default:
      return initialState.globalState;
  }
};
