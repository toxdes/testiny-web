import React from "react";
import { QuestionsList as QL } from "./questionslist";
import { Question as Q } from "./question";
import Header from "../header";

export const Question = () => (
  <>
    <Header />
    <Q />
  </>
);

export const QuestionsList = () => (
  <>
    <Header />
    <QL />
  </>
);
