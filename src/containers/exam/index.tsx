import * as React from "react";
import { useTypedSelector } from "../../store/selector";
import BeforeExam from "./before_exam";
import MainExam from "./main_exam";

export default function Exam() {
  const done = useTypedSelector((state) => state.beforeExamState);
  if (done) return <MainExam />;
  return <BeforeExam />;
}
