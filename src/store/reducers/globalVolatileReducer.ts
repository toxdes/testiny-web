import { SET_STATUS } from "../actions";
import { GlobalVolatileState, GenericAction } from "../types";
import initialState from "../initialState";

export default (
  state: GlobalVolatileState,
  action: GenericAction
): GlobalVolatileState => {
  switch (action.type) {
    case SET_STATUS:
      console.log("from reducer, ", action.payload);
      return {
        ...state,
        status: action.payload.status,
        data: action.payload?.data,
      };
    default:
      return initialState.globalVolatileState;
  }
};
