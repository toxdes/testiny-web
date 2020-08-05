type TCandidateData = {
  name: string;
  avatar: string;
  rollNumber: string;
};

export type TQuestionType = "mcq" | "numeric";

export type TQuestion = {
  id: string;
  text: string;
  type: TQuestionType;
  choices?: string[];
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
