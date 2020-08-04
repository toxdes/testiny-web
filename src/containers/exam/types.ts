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
