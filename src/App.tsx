import React from "react";
import Home from "./containers/home";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
