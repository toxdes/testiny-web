import { Dispatch } from "redux";
import { GenericAction, AnswerState, ResponseStatusType } from "./types";
export const SET_BEFORE_EXAM_STEP = "SET_BEFORE_EXAM_STEP";
export const SET_BEFORE_EXAM_DONE = "SET_BEFORE_EXAM_DONE";
export const INIT_ANSWERS = "INIT_ANSWERS";
export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const COMMIT_ANSWER = "COMMIT_ANSWER";
export const SET_ACTIVE_GENERIC = "SET_ACTIVE_GENERIC";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const SET_STATUS = "SET_STATUS";
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
    dispatch(setStatus("fetching", undefined));
    try {
      let data = await api.post("/login", { data: { username, password } });
      data = data.data;
      if (data?.status === "error") {
        dispatch(setStatus("error", data.message));
        console.log("error", data);
        return;
      }
      dispatch(setStatus("success", data));
      dispatch(setUserLoggedIn(true, data.token));
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  };

  // return {
  //   type: LOGIN,
  //   payload: { username, password, remember },
  // };
};

export const setUserLoggedIn = (userLoggedIn: boolean, token: string) => {
  return {
    type: LOGIN,
    payload: { userLoggedIn, token },
  };
};
export const signup = (username: string, email: string, password: string) => {
  return async (dispatch: Dispatch, _: any, { api }: any) => {
    dispatch(setStatus("fetching"));
    let data = await api.post("/signup", {
      data: { username, password, email },
    });
    data = data.data;
    if (data?.status === "error") {
      dispatch(setStatus("error", data.message));
      console.log("error", data);
      return;
    }
    dispatch(setStatus("success", data));
    dispatch(setUserLoggedIn(true, data.token));
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

const getStatus = (s: string) => {
  switch (s) {
    case "error":
      return ResponseStatusType.ERROR;
    case "fetching":
      return ResponseStatusType.FETCHING;
    case "success":
      return ResponseStatusType.SUCCESS;
    default:
      return ResponseStatusType.UNEXPECTED_ERROR;
  }
};

export const setStatus = (status: string, data?: any) => {
  return {
    type: SET_STATUS,
    payload: { status: getStatus(status), data },
  };
};
