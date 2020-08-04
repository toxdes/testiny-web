export type BeforeExamState = {
  step: number;
  done: boolean;
};
export type ExamState = {};
export type State = {
  beforeExamState: BeforeExamState;
  examState: ExamState;
};
export type GenericAction = {
  type: string;
  payload?: any;
};
