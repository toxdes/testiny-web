import { GenericAction, Item } from "./types";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

// action creators

export const addItem = (item: string): GenericAction => {
  return {
    type: ADD_ITEM,
    payload: { item },
  };
};

export const removeItem = (item: Item): GenericAction => {
  return {
    type: REMOVE_ITEM,
    payload: { item },
  };
};
