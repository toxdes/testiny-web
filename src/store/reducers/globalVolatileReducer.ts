import { SET_LOADING } from "../actions";
import { GlobalVolatileState, GenericAction } from "../types";
import initialState from "../initialState";

export default (
  state: GlobalVolatileState,
  action: GenericAction
): GlobalVolatileState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return initialState.globalVolatileState;
  }
};
