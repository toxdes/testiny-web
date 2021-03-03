import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import store from "./store";
import { Provider as StoreProvider } from "react-redux";
import Router from "./router";

function App() {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default App;
