export type State = {
  beforeExamStep: number;
  beforeExamDone: boolean;
};

export type GenericAction = {
  type: string;
  payload?: any;
};
