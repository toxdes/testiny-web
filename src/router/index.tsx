import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as React from "react";

import Home from "../containers/home";
import NotFound from "../containers/errors/404";
import ExamsList from "../containers/exams-list";
import ExamDetails from "../containers/exam-details";
import StartExam from "../containers/exam";
import { Login, Signup } from "../containers/auth";
import { Profile as UserProfile, UsersList } from "../containers/users";
import { Question, QuestionsList } from "../containers/questions";
import { useTypedSelector } from "../store/selector";

export default function Router() {
  const { userLoggedIn, successRoute } = useTypedSelector(
    (state) => state.globalState
  );

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
        <Route
          path="login"
          element={
            userLoggedIn ? (
              <Navigate to={successRoute ? successRoute : "/"} replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="signup"
          element={
            userLoggedIn ? (
              <Navigate to={successRoute ? successRoute : "/"} replace />
            ) : (
              <Signup />
            )
          }
        />
        <Route path="users">
          <Route path="/" element={<UsersList />} />
          <Route path=":username" element={<UserProfile />} />
        </Route>
        <Route path="questions">
          <Route path="/" element={<QuestionsList />} />
          <Route path=":id" element={<Question />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
