import * as React from "react";
import { Text, Button, HFlex, VFlex } from "../../../components";
import { StepProps } from "./types";
export default function Instructions({
  onNextStep,
  onPreviousStep,
}: StepProps) {
  return (
    <VFlex h="100vh" justify="space-around">
      <Text>Instructions Here</Text>
      <HFlex mt="auto">
        <Button
          onClick={() => onPreviousStep && onPreviousStep()}
          variant="outline"
          variantColor="cyan"
          m="4"
        >
          &lt; Previous
        </Button>
        <Button onClick={() => onNextStep()} variantColor="cyan" m="4">
          Next &gt;
        </Button>
      </HFlex>
    </VFlex>
  );
}
