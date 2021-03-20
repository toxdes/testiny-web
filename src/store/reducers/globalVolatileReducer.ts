import { GlobalVolatileState, GenericAction } from "../types";
import initialState from "../initialState";

export default (
  state: GlobalVolatileState,
  action: GenericAction
): GlobalVolatileState => {
  switch (action.type) {
    default:
      return initialState.globalVolatileState;
  }
};
