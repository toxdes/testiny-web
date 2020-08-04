import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme";
import store from "./store";
import { Provider as StoreProvider } from "react-redux";
import Router from "./router";

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
