import * as React from "react";
import {
  Text,
  Button,
  VFlex,
  Checkbox,
  Divider,
  HFlex,
} from "../../../components";
import { StepProps } from "./types";
import { useDispatch } from "react-redux";
import { setBeforeExamDone } from "../../../store/actions";

export default function PaperSpecificInstructions({
  onPreviousStep,
}: StepProps) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState<boolean>(false);
  const startExam = (e: any) => {
    e.preventDefault();
    dispatch(setBeforeExamDone());
  };
  return (
    <VFlex h="100vh" justify="space-around">
      <Text>Paper Specific instructions Here</Text>
      <Divider />
      <HFlex mt="auto">
        <Checkbox
          mr="2"
          isChecked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Text>I read all instructions and I agree to all this and shite. </Text>
      </HFlex>
      <Divider />
      <HFlex>
        <Button
          onClick={() => onPreviousStep && onPreviousStep()}
          variant="outline"
          m="4"
          variantColor="cyan"
        >
          &lt; Previous
        </Button>
        <Button
          onClick={startExam}
          variantColor="cyan"
          m="4"
          isDisabled={!checked}
        >
          I am Ready to begin
        </Button>
      </HFlex>
    </VFlex>
  );
}
