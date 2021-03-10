import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";

import Home from "../containers/home";
import NotFound from "../containers/errors/404";
import ExamsList from "../containers/exams-list";
import ExamDetails from "../containers/exam-details";
import StartExam from "../containers/exam";
import { Login, Signup } from "../containers/auth";
import UserProfile from "../containers/profile";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exams">
          <Route path="/" element={<ExamsList />} />
          <Route path=":id">
            <Route path="/" element={<ExamDetails />} />
            <Route path="start-exam" element={<StartExam />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile">
          <Route path="/" element={<NotFound />} />
          <Route path=":username" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
