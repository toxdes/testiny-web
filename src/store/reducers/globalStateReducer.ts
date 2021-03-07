import { LOGIN, LOGOUT, SIGNUP } from "../actions";
import { GlobalState, GenericAction } from "../types";
import initialState from "../initialState";

export default (state: GlobalState, action: GenericAction): GlobalState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userLoggedIn: true,
      };
    case SIGNUP:
      return state;
    case LOGOUT:
      return {
        ...state,
        userLoggedIn: false,
      };
    default:
      return initialState.globalState;
  }
};
