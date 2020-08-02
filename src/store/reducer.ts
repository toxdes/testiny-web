import { ADD_ITEM, REMOVE_ITEM } from "./actions";
// import { Reducer } from "react";
import { State, GenericAction, Item } from "./types";

export default (state: State, action: GenericAction): State => {
  switch (action.type) {
    case ADD_ITEM: {
      let newItems = [
        ...state.items,
        { id: Math.floor(Math.random() * 1000), text: action.payload.item },
      ];
      return {
        ...state,
        items: newItems,
      };
    }
    case REMOVE_ITEM: {
      let newItems = state.items.filter(
        (item: Item) => item.id !== action.payload.item.id
      );
      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};
