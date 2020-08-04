import { Text, VFlex } from "../../components";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <VFlex w="100vw" h="100vh">
      <Text>Currently Working on:</Text>
      <Link to={"/exams"}>Exams</Link>
      <Link to={"/exams/one"}>A single Exam</Link>
      <Link to={"/exams/one/start_exam"}>Start a single Exam</Link>
    </VFlex>
  );
}
