import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/types";
import BeforeExam from "./before_exam";
import MainExam from "./main_exam";

export default function Test() {
  const done = useSelector((state: State) => state.beforeExamDone);
  if (done) return <MainExam />;
  return <BeforeExam />;
}
