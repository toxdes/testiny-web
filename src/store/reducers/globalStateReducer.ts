import { LOGIN, LOGOUT, SIGNUP, SET_USER_DETAILS } from "../actions";
import { GlobalState, GenericAction } from "../types";
import initialState from "../initialState";
import api from "../../api";
export default (state: GlobalState, action: GenericAction): GlobalState => {
  switch (action.type) {
    case LOGIN:
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.token}`;
      return {
        ...state,
        userLoggedIn: true,
        token: action.payload.token,
        successRoute: action.payload.successRoute,
        userDetails: action.payload.userDetails
          ? action.payload.userDetails
          : state.userDetails,
      };
    case SIGNUP:
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.token}`;
      return {
        ...state,
        userLoggedIn: true,
        token: action.payload.token,
      };
    case LOGOUT:
      delete api.defaults.headers.common["Authorization"];
      return {
        ...state,
        userLoggedIn: false,
        token: "",
        userDetails: undefined,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload.userDetails,
      };
    default:
      return initialState.globalState;
  }
};
