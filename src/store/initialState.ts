import { RootState } from "./types";

const initialState: RootState = {
  beforeExamState: {
    step: 0,
    done: true, // TODO: set it to false after development
  },
  examState: {},
};

export default initialState;
