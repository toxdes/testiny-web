import * as React from "react";
import Login from "./login";
import Instructions from "./instructions";
import PaperSpecificInstructions from "./instructions2";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../../store/types";
import { setBeforeExamStep } from "../../../store/actions";
const steps = [Login, Instructions, PaperSpecificInstructions];

export default function BeforeExam() {
  const step = useSelector((state: State) => state.beforeExamState.step);
  const dispatch = useDispatch();
  const CurrentStep = steps[step];
  const onNextStep = () => {
    if (step === steps.length - 1) {
      alert("Already on the last page");
      return;
    }
    dispatch(setBeforeExamStep(step + 1));
  };
  const onPreviousStep = () => {
    if (step === 0) {
      alert("Already on the first page.");
      return;
    }
    dispatch(setBeforeExamStep(step - 1));
  };
  return (
    <CurrentStep onNextStep={onNextStep} onPreviousStep={onPreviousStep} />
  );
}
