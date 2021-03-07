import { Dispatch } from "redux";
import { GenericAction, AnswerState } from "./types";
export const SET_BEFORE_EXAM_STEP = "SET_BEFORE_EXAM_STEP";
export const SET_BEFORE_EXAM_DONE = "SET_BEFORE_EXAM_DONE";
export const INIT_ANSWERS = "INIT_ANSWERS";
export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const COMMIT_ANSWER = "COMMIT_ANSWER";
export const SET_ACTIVE_GENERIC = "SET_ACTIVE_GENERIC";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const SET_LOADING = "SET_LOADING";
// action creators

// before exam actions
export const setBeforeExamStep = (step: number): GenericAction => {
  return {
    type: SET_BEFORE_EXAM_STEP,
    payload: { step },
  };
};

export const setBeforeExamDone = (): GenericAction => {
  return {
    type: SET_BEFORE_EXAM_DONE,
  };
};

// exam state updates

// generic one, so that code is not duplicated
export const setActive = (what: string, index: number) => {
  return {
    type: SET_ACTIVE_GENERIC,
    payload: { what, index },
  };
};
export const initAnswers = (answers: AnswerState[]): GenericAction => {
  return {
    type: INIT_ANSWERS,
    payload: { answers },
  };
};

export const updateAnswer = (answer: AnswerState): GenericAction => {
  return {
    type: UPDATE_ANSWER,
    payload: { answer },
  };
};

export const commitAnswer = (answer?: AnswerState) => {
  return {
    type: COMMIT_ANSWER,
    payload: { answer: answer },
  };
};

// global state updates
// obviously this will change later, this is just temporary.
export const login = (
  username: string,
  password: string,
  remember: boolean
) => {
  return async (dispatch: Dispatch, _: any, { api }: any) => {
    dispatch(loading(true));
    try {
      let token = await api.post("/login", { data: { username, password } });
      alert(JSON.stringify(token));
      return {
        type: LOGIN,
        payload: { token },
      };
    } catch (e) {
      console.log(e);
    }
  };

  // return {
  //   type: LOGIN,
  //   payload: { username, password, remember },
  // };
};

export const signup = (username: string, email: string, password: string) => {
  return async (dispatch: Dispatch, _: any, { api }: any) => {
    dispatch(loading(true));
    const token = await api.post("/signup", {
      data: { username, password, email },
    });
    alert(JSON.stringify(token));
    return {
      type: SIGNUP,
      payload: { token },
    };
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loading = (l: boolean) => {
  return {
    type: SET_LOADING,
    payload: { loading: l },
  };
};
