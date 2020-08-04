import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/types";
import BeforeExam from "./before_exam";
import MainExam from "./main_exam";

export default function Exam() {
  const done = useSelector((state: State) => state.beforeExamState.done);
  if (done) return <MainExam />;
  return <BeforeExam />;
}
