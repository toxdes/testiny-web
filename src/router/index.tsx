import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";

import Home from "../containers/home";
import ExamsList from "../containers/exams_list";
import ExamDetails from "../containers/exam_details";
import StartExam from "../containers/exam";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tests">
          <Route path="/" element={<ExamsList />} />
          <Route path=":id">
            <Route path="/" element={<ExamDetails />} />
            <Route path="start_test" element={<StartExam />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
