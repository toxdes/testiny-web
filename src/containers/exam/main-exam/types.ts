export type TCandidateData = {
  name: string;
  avatar: string;
  rollNumber: string;
};

export type TQuestionType = "mcq" | "numeric";

// TODO: Reduce duplication in the data-model
// @body right now, most of the data is repeated unnecessarily. Maybe a better model exists. Replace this on with a model that's space efficient.
export type TQuestion = {
  id: string;
  text: string;
  type: TQuestionType;
  choices?: string[];
  correctMarks: number;
  incorrectMarks: number;
};

export type TExamData = {
  streamName: string;
  examName: string;
  subjects: string[];
  sections: string[];
  candidateData: TCandidateData;
  questions: TQuestion[][];
  totalTimeInMinutes: number;
  calculatorAllowed: boolean;
};
