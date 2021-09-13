import * as React from "react";
import { VFlex, Heading, Text, HFlex } from "../../components";
import { useNavigate } from "react-router-dom";
import Header from "../header";

interface DemoExamProps {
  title: string;
  desc: string;
  onClick: () => void;
}
function DemoExam({ title, desc, onClick }: DemoExamProps) {
  return (
    <VFlex
      m="2"
      w="80%"
      maxW="320px"
      cursor="pointer"
      _hover={{ bg: "purple.100", borderColor: "purple.500" }}
      _active={{ transform: "translateY(2px)" }}
      py="4"
      px="4"
      border="1px solid"
      borderRadius="8px"
      borderColor="gray.200"
      transition="0.1s linear"
      onClick={onClick}
    >
      <VFlex align="start" justify="start" w="100%">
        <Text color="gray.500" fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Text color="gray.500">{desc}</Text>
      </VFlex>
    </VFlex>
  );
}

const exams = [
  {
    title: "Demo Exam 1",
    desc: "Just for testing purposes, not designed for the phones yet :p",
  },
  {
    title: "Demo Exam 2",
    desc: "Just for testing purposes, not designed for the phones yet :p",
  },
  {
    title: "Demo Exam 3",
    desc: "Just for testing purposes, not designed for the phones yet :p",
  },
  {
    title: "Demo Exam 4",
    desc: "Just for testing purposes, not designed for the phones yet :p",
  },
  {
    title: "Demo Exam 5",
    desc: "Just for testing purposes, not designed for the phones yet :p",
  },
];
export default function ExamsList() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <VFlex maxW="1250px" mx="auto" align="flex-start" px="4">
        <Heading mt="20" color="gray.600">
          Exams
        </Heading>
        <HFlex w="100%" flexWrap="wrap" mt="20">
          {exams.map((e) => (
            <DemoExam
              title={e.title}
              desc={e.desc}
              onClick={() => navigate(`/exams/${e.title}`)}
            />
          ))}
        </HFlex>
      </VFlex>
    </>
  );
}
