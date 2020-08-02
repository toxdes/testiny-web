export type Item = {
  id: string | number;
  text: string;
};

export type State = {
  items: Item[];
};
export type GenericAction = {
  type: string;
  payload: any;
};
