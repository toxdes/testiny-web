import * as React from "react";
import { Button, HFlex } from "../../../../components";
import { normalFontSize } from "../styles";

export default function SubmitExam() {
  return (
    <HFlex alignSelf="flex-end" h="60px" bg="blue.50" w="100%">
      <Button
        variant="solid"
        variantColor="cyan"
        w="32"
        fontSize={normalFontSize}
      >
        Submit
      </Button>
    </HFlex>
  );
}
