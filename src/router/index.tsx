import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";

import Home from "../containers/home";
import TestList from "../containers/testlist";
import Test from "../containers/test";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tests">
          <Route path="/" element={<TestList />} />
          <Route path=":id" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
