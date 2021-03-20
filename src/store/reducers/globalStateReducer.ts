import { LOGIN, LOGOUT, SIGNUP } from "../actions";
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
      };
    default:
      return initialState.globalState;
  }
};
