import * as React from "react";
import { Button, HFlex } from "../../../../components";
import { normalFontSize } from "../styles";
interface NavigationProps {
  onClearResponse: () => void;
  onMarkForReviewAndNext: () => void;
  onSaveAndNext: () => void;
  containerProps?: any;
}

const specialButtonProps = {
  variantColor: "gray",
  fontWeight: "normal",
  fontSize: normalFontSize,
  size: "sm" as "sm",
  height: "40px",
  mx: "2",
  variant: "outline" as "outline",
};

export default function Navigation({
  onClearResponse,
  onMarkForReviewAndNext,
  onSaveAndNext,
  containerProps,
}: NavigationProps) {
  return (
    <HFlex
      alignSelf="flex-end"
      h="60px"
      bg="gray.100"
      w="100%"
      {...containerProps}
    >
      <Button {...specialButtonProps} onClick={onMarkForReviewAndNext}>
        Mark for Review & Next
      </Button>
      <Button {...specialButtonProps} onClick={onClearResponse}>
        Clear Response
      </Button>
      <Button
        {...specialButtonProps}
        onClick={onSaveAndNext}
        variant="solid"
        variantColor="cyan"
        ml="auto"
      >
        Save & Next
      </Button>
    </HFlex>
  );
}
