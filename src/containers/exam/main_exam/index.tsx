import * as React from "react";
import { VFlex, HFlex } from "../../../components";
import {
  Header,
  SubjectTab,
  SectionHeader,
  SectionTab,
  QuestionHeader,
  QuestionArea,
  Navigation,
  Profile,
  QuestionState,
  SubmitExam,
} from "./components";

export default function MainExam() {
  return (
    <VFlex w="100vw" h="100vh" align="center" justify="flex-start" bg="red.300">
      <Header />
      <HFlex bg="blue.300" flexGrow="1" w="100vw">
        <VFlex
          flexBasis="auto"
          flexGrow="1"
          flexShrink="1"
          bg="yellow.300"
          h="100%"
          justify="flex-start"
        >
          <SubjectTab />
          <SectionHeader />
          <SectionTab />
          <QuestionHeader />
          <QuestionArea />
          <Navigation />
        </VFlex>
        <VFlex
          flexGrow="0"
          w="300px"
          bg="orange.300"
          h="100%"
          justify="flex-start"
        >
          <Profile />
          <QuestionState />
          <SubmitExam />
        </VFlex>
      </HFlex>
    </VFlex>
  );
}
