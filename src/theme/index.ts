import { DEBUG_MODE } from "./../config/constants";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import colors from "./colors";

export default extendTheme({
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
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
    bold: 600,
    extrabold: 800,
    black: 800,
  },
  colors,
});
