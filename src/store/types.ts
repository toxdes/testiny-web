export type RootState = {
  beforeExamState: BeforeExamState;
  examState: ExamState;
};
export type BeforeExamState = {
  step: number;
  done: boolean;
};
export type ExamState = {};

export type GenericAction = {
  type: string;
  payload?: any;
};
