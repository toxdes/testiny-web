import * as React from "react";
import { useTypedSelector } from "../../store/selector";
import BeforeExam from "./before-exam";
import MainExam from "./main-exam";

export default function Exam() {
  const done = useTypedSelector((state) => state.beforeExamState.done);
  if (done) return <MainExam />;
  return <BeforeExam />;
}
