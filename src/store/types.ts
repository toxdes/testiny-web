export type RootState = {
  beforeExamState: BeforeExamState;
  examState: ExamState;
  globalState: GlobalState;
  globalVolatileState: GlobalVolatileState;
};
export type BeforeExamState = {
  step: number;
  done: boolean;
};

export type GlobalState = {
  userLoggedIn: boolean;
  userDetails?: UserDetails;
  token: string;
  successRoute: string;
};

export type UserDetails = {
  username: string;
  name?: string;
  avatar?: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  bio?: string;
  emailVerified: boolean;
  followersCount: number;
  followingCount: number;
};

export type GlobalVolatileState = {};
export enum AnswerStatus {
  MARKED_FOR_REVIEW,
  MARKED_FOR_REVIEW_AND_ANSWERED,
  ANSWERED,
  NOT_ANSWERED,
  NOT_VISITED,
}

// should also include question_id I think
// array of questions is for MSQ type questions, they are the "checked" indices
export type AnswerState = {
  index: number;
  status: AnswerStatus;
  answer?: number | number[];
};

export type ExamState = {
  activeQuestionIndex: number;
  activeSectionIndex: number;
  activeSubjectIndex: number;
  answers: AnswerState[];
  activeAnswer: AnswerState;
};

export type GenericAction = {
  type: string;
  payload?: any;
};

export enum ResponseStatusType {
  IDLE,
  FETCHING,
  SUCCESS,
  ERROR,
  UNEXPECTED_ERROR,
}

export interface FetchDataType {
  status: ResponseStatusType;
  data?: any;
}
