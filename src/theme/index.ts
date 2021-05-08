import { DEBUG_MODE } from "./../config/constants";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import colors from "./colors";

export default extendTheme({
  fonts: {
    serif: "'Spectral', 'Georgia', 'Times New Roman', serif",
  },
  styles: {
    global: {
      "*": DEBUG_MODE
        ? {
            border: "1px solid lightgreen",
          }
        : {},
    },
  },
  breakpoints: createBreakpoints({
    sm: "320px",
    md: "860px",
    lg: "1184px",
    xl: "1380px",
  }),
  fontWeights: {
    extrabold: 900,
    black: 900,
  },
  colors,
});
