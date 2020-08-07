export type RootState = {
  beforeExamState: BeforeExamState;
  examState: ExamState;
};
export type BeforeExamState = {
  step: number;
  done: boolean;
};
export type ExamState = {
  activeQuestionIndex: number;
  activeSectionIndex: number;
  activeSubjectIndex: number;
};

export type GenericAction = {
  type: string;
  payload?: any;
};
