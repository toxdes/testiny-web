import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import store from "./store";
import { Provider as StoreProvider } from "react-redux";
import Router from "./router";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/600.css";
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
