export type RootState = {
  beforeExamState: BeforeExamState;
  examState: ExamState;
};
export type BeforeExamState = {
  step: number;
  done: boolean;
};

export enum AnswerStatus {
  MARKED_FOR_REVIEW,
  MARKED_FOR_REVIEW_AND_ANSWERED,
  ANSWERED,
  NOT_ANSWERED,
  NOT_VISITED,
}
export type AnswerState = {
  index: number;
  status: AnswerStatus;
};

export type ExamState = {
  activeQuestionIndex: number;
  activeSectionIndex: number;
  activeSubjectIndex: number;
  answers: AnswerState[];
};

export type GenericAction = {
  type: string;
  payload?: any;
};
