import React from "react";
import Home from "./containers/home";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme";
import store from "./store";
import { Provider as StoreProvider } from "react-redux";

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Home />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
