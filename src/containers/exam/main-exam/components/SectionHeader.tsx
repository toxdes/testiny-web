import * as React from "react";
import { Text, HFlex } from "../../../../components";
import { normalFontSize } from "../styles";

interface SectionHeaderProps {
  containerProps?: any;
}
export default function SectionHeader({ containerProps }: SectionHeaderProps) {
  return (
    <HFlex minHeight="32px" bg="gray.100" w="100%" {...containerProps}>
      <Text ml="2" fontSize={normalFontSize} color="gray.600">
        Section
      </Text>
      <Text
        color="gray.600"
        fontWeight="bold"
        ml="auto"
        mr="2"
        fontSize={normalFontSize}
      >
        Time Left :180:00
      </Text>
    </HFlex>
  );
}
