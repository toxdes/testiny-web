export interface InputFieldProps {
  label: string;
  value: string;
  type?: string;
  icon?: string;
  containerProps?: any;
  onButtonClick?: () => void;
  onClick?: () => void;
}
export type THeaderData = {
  systemName: string;
  candidateName: string;
  subject: string;
  candidateAvatar: string;
};

export interface HeaderProps {
  data: THeaderData;
}

export interface StepProps {
  onNextStep: () => void;
  onPreviousStep?: () => void;
}

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
