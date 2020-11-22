import * as React from "react";
import { Button, HFlex } from "../../../../components";
import { normalFontSize } from "../styles";

interface SubmitExamProps {
  containerProps?: any;
}
export default function SubmitExam({ containerProps }: SubmitExamProps) {
  return (
    <HFlex mt="auto" h="80px" bg="blue.50" w="100%"  {...containerProps}>
      <Button
        variant="solid"
        variantColor="cyan"
        w="32"
        h="40px"
        fontSize={normalFontSize}
      >
        Submit
      </Button>
    </HFlex>
  );
}
